#!/bin/bash
# Vuelve a levantar la wiki y el túnel de ngrok si se cayeron.
# Uso:  bash reiniciar-wiki.sh
cd "$(dirname "$0")/wiki" || exit 1
pkill -f "http.server 8390" 2>/dev/null
pkill -f "ngrok http 8390" 2>/dev/null
sleep 1
nohup python3 -m http.server 8390 --bind 127.0.0.1 >/dev/null 2>&1 &
sleep 1
nohup ngrok http 8390 --log=stdout >/tmp/ngrok-tkd.log 2>&1 &
sleep 6
echo "Link público:"
curl -s http://127.0.0.1:4040/api/tunnels | python3 -c "import sys,json;[print(t['public_url']) for t in json.load(sys.stdin).get('tunnels',[])]"
