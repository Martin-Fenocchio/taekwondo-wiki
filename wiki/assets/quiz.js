/* ===========================================================
   Cuestionarios — Wiki de Teoría Taekwon-Do ITF
   =========================================================== */
(function () {
  'use strict';

  var BLOQUES = [
    {
      id: 'escuela', titulo: 'La escuela Chul Hak San', icono: '🛡️',
      link: 'escuela.html', linktxt: 'La escuela',
      preguntas: [
        { q: '¿Qué significa «Chul Hak San»?',
          opts: ['Camino del guerrero', 'Una filosofía de vida', 'Montaña del conocimiento', 'Espíritu indómito'], a: 1 },
        { q: '¿Quién fundó la escuela y en qué año?',
          opts: ['Gral. Choi, 1966', 'Enrique Eiriz, 1972', 'Omar Severino, 1983', 'Pablo Trajtenberg, 1988'], a: 2 },
        { q: 'En el escudo, el color naranja representa…',
          opts: ['La fuerza', 'La iluminación', 'La sabiduría', 'La perseverancia'], a: 2, hash: '#escudo' },
        { q: '¿Qué color del escudo representa la fuerza, «la energía que emana del centro de nuestro ser»?',
          opts: ['Rojo', 'Amarillo', 'Naranja', 'Azul'], a: 0, hash: '#escudo' },
        { q: '¿Cuáles son los 3 pilares de la escuela?',
          opts: ['Fuerza, velocidad y técnica', 'Ser la más grande, ser la mejor y ayudar a todos los que podamos', 'Cortesía, integridad y perseverancia', 'Enseñar, competir y trascender'], a: 1 }
      ]
    },
    {
      id: 'historia', titulo: 'Historia del Taekwon-Do', icono: '📜',
      link: 'historia.html', linktxt: 'Historia',
      preguntas: [
        { q: '¿Quién creó el Taekwon-Do?',
          opts: ['El almirante Yi Soon-Sin', 'El general Choi Hong Hi', 'El maestro Omar Severino', 'El monje Won-Hyo'], a: 1, hash: '#fundador' },
        { q: '¿Qué significa «Taekwon-Do»?',
          opts: ['El arte de la patada voladora', 'El camino del guerrero', 'El camino del pie y la mano', 'La filosofía del combate'], a: 2, hash: '#nombre' },
        { q: '¿Cuándo se adoptó oficialmente el nombre «Taekwon-Do»?',
          opts: ['9 de noviembre de 1918', '11 de abril de 1955', '22 de marzo de 1966', '15 de junio de 2002'], a: 1, hash: '#fundador' },
        { q: 'En 1972 la sede de la ITF se trasladó a…',
          opts: ['Seúl, Corea', 'Viena, Austria', 'Toronto, Canadá', 'Buenos Aires, Argentina'], a: 2, hash: '#itf' },
        { q: '¿En qué año llegó el Taekwon-Do a la Argentina?',
          opts: ['1955', '1967', '1972', '1983'], a: 1, hash: '#argentina' }
      ]
    },
    {
      id: 'filosofia', titulo: 'Filosofía y principios', icono: '☯️',
      link: 'filosofia.html', linktxt: 'Filosofía',
      preguntas: [
        { q: '¿Cuál de estos NO es uno de los 5 principios del Taekwon-Do?',
          opts: ['Cortesía', 'Integridad', 'Humildad', 'Autocontrol'], a: 2, hash: '#principios' },
        { q: '«Es un acto de cobardía no hablar en contra de la injusticia» se relaciona con…',
          opts: ['La perseverancia', 'El espíritu indómito', 'La cortesía', 'El autocontrol'], a: 1, hash: '#principios' },
        { q: 'Completá el juramento: «Nunca haré ___ del Taekwon-Do».',
          opts: ['abuso', 'mal uso', 'demostración', 'negocio'], a: 1, hash: '#juramento' },
        { q: '¿Cuántos puntos tiene el juramento del Taekwon-Do?',
          opts: ['3', '4', '5', '9'], a: 2, hash: '#juramento' },
        { q: 'En el dobok, el árbol de la espalda y los ribetes representan…',
          opts: ['Los cinturones', 'La familia real coreana', 'El monte Baekdu', 'La paz mundial'], a: 1, hash: '#simbolos' }
      ]
    },
    {
      id: 'secretos', titulo: 'Secretos de entrenamiento', icono: '🔑',
      link: 'secretos.html', linktxt: 'Secretos',
      preguntas: [
        { q: '¿Cuántos son los secretos de entrenamiento del Taekwon-Do?',
          opts: ['5', '7', '9', '12'], a: 2, hash: '#lista' },
        { q: 'El movimiento ondulante consiste en…',
          opts: ['Subir 4 cm y bajar 4 cm', 'Bajar 2 cm, subir 4 cm y bajar 2 cm', 'Bajar 4 cm, subir 2 cm y bajar 4 cm', 'Mantener la altura constante'], a: 1, hash: '#ondulante' },
        { q: '¿Para qué sirve el movimiento ondulante?',
          opts: ['Para descansar entre técnicas', 'Para generar velocidad sumando energía potencial y cinética', 'Para mejorar la respiración', 'Para marcar el ritmo del tul'], a: 1, hash: '#ondulante' },
        { q: 'La exhalación en el momento del impacto debe ser…',
          opts: ['Larga y profunda', 'Breve y brusca (salvo en el movimiento conectado)', 'Silenciosa y continua', 'Justo antes del impacto'], a: 1, hash: '#lista' },
        { q: 'En la posición correcta, el abdomen debe estar…',
          opts: ['Relajado', 'Tenso', 'Contraído solo al patear', 'Inclinado hacia adelante'], a: 1, hash: '#postura' }
      ]
    },
    {
      id: 'mociones', titulo: 'Mociones', icono: '🌊',
      link: 'mociones.html', linktxt: 'Mociones',
      preguntas: [
        { q: '¿Cuántas variables definen una moción?',
          opts: ['2', '3', '4', '6'], a: 2, hash: '#variables' },
        { q: 'La moción conectada se caracteriza por…',
          opts: ['Dos movimientos con dos respiraciones', 'Dos movimientos unidos en una sola onda y una sola respiración', 'Un movimiento lento con exhalación larga', 'Varios movimientos con pausas entre sí'], a: 1, hash: '#definiciones' },
        { q: 'La moción continua puede abarcar…',
          opts: ['Solo 2 movimientos', '2, 4 o 7 movimientos', '3, 5 o 9 movimientos', 'Cualquier cantidad par'], a: 1, hash: '#definiciones' },
        { q: '¿Qué distingue a las patadas consecutivas?',
          opts: ['Se hacen con pies distintos', 'Son 2 patadas distintas con el mismo pie', 'Siempre son saltando', 'Se hacen junto con un golpe de puño'], a: 1, hash: '#patadas' },
        { q: 'Los movimientos 16-17 de Yul-Gok son el ejemplo clásico de la moción…',
          opts: ['Rápida', 'Continua', 'Conectada', 'Lenta'], a: 2, hash: '#ejemplos' }
      ]
    },
    {
      id: 'tules', titulo: 'Los tules', icono: '🥋',
      link: 'tules.html', linktxt: 'Los tules',
      preguntas: [
        { q: '¿Qué significa «Chon-Ji»?',
          opts: ['Fundador de Corea', 'Cielo y tierra', 'Filosofía de vida', 'El primer paso'], a: 1, hash: '#chon-ji' },
        { q: '¿Qué tul homenajea al fundador legendario de Corea (2333 AC)?',
          opts: ['Chon-Ji', 'Do-San', 'Dan-Gun', 'Won-Hyo'], a: 2, hash: '#dan-gun' },
        { q: 'Choong-Moo termina con una técnica de mano izquierda porque…',
          opts: ['El almirante era zurdo', 'Simboliza su muerte sin poder demostrar todo su potencial', 'Representa la derrota de Japón', 'Es la única técnica que faltaba'], a: 1, hash: '#choong-moo' },
        { q: '¿Qué hizo el patriota que da nombre al tul Joong-Gun?',
          opts: ['Creó el alfabeto coreano', 'Asesinó a un gobernador japonés', 'Unificó Corea', 'Introdujo el budismo'], a: 1, hash: '#joong-gun' },
        { q: '¿Qué tul homenajea al monje que introdujo el budismo en Corea?',
          opts: ['Do-San', 'Toi-Gye', 'Won-Hyo', 'Hwa-Rang'], a: 2, hash: '#won-hyo' }
      ]
    },
    {
      id: 'patadas', titulo: 'Las patadas', icono: '🦵',
      link: 'patadas.html', linktxt: 'Las patadas',
      preguntas: [
        { q: '¿Cómo se dice «patada» en coreano?',
          opts: ['Jirugi', 'Chagi', 'Makgi', 'Sogi'], a: 1 },
        { q: '¿Cómo se llama la patada lateral?',
          opts: ['Yop Chagi', 'Ap Cha Busigi', 'Dollyo Chagi', 'Furyo'], a: 0, hash: '#yop-chagi' },
        { q: '«Dollyo Chagi» es la patada…',
          opts: ['Frontal', 'Descendente', 'Circular', 'Hacia atrás'], a: 2, hash: '#dollyo-chagi' },
        { q: '¿Cuál es la patada descendente, también llamada «de hacha»?',
          opts: ['Bandae Dollyo Chagi', 'Furyo', 'Dwit Cha Jirugi', 'Ap Cha Busigi'], a: 1, hash: '#furyo' },
        { q: '¿Qué patada se lanza hacia atrás, golpeando con el talón?',
          opts: ['Dollyo Chagi', 'Yop Chagi', 'Dwit Cha Jirugi', 'Furyo'], a: 2, hash: '#dwit-cha-jirugi' },
        { q: '¿Cuál es la patada doble en la que se golpea con el empeine y, sin apoyar, se vuelve con el talón?',
          opts: ['Twio Dollyo', 'Bandae Dollyo Chagi', 'Ap Cha Busigi', 'Yop Chagi'], a: 0, hash: '#twio-dollyo' }
      ]
    }
  ];

  /* ---------- Construcción de una pregunta ---------- */
  function crearPregunta(p, ctx, idx, alResponder) {
    var cont = document.createElement('div');
    cont.className = 'pregunta';

    var qt = document.createElement('p');
    qt.className = 'qtxt';
    qt.textContent = (idx + 1) + '. ' + p.q;
    cont.appendChild(qt);

    var ops = document.createElement('div');
    ops.className = 'opciones';
    ops.setAttribute('role', 'group');
    ops.setAttribute('aria-label', 'Opciones de la pregunta ' + (idx + 1));

    var fb = document.createElement('div');
    fb.className = 'feedback';
    fb.setAttribute('aria-live', 'polite');

    var respondida = false;

    p.opts.forEach(function (texto, i) {
      var b = document.createElement('button');
      b.type = 'button';
      b.textContent = String.fromCharCode(65 + i) + ') ' + texto;

      b.addEventListener('click', function () {
        if (respondida) return;
        respondida = true;

        var acerto = (i === p.a);
        ops.querySelectorAll('button').forEach(function (x, j) {
          x.disabled = true;
          if (j === p.a) x.classList.add('correcta');
        });

        if (acerto) {
          fb.className = 'feedback ok';
          fb.textContent = '✓ ¡Correcto!';
        } else {
          b.classList.add('incorrecta');
          var destino = ctx.link + (p.hash || '');
          fb.className = 'feedback mal';
          fb.innerHTML = '✗ Incorrecta. La respuesta es: <b>' + p.opts[p.a] + '</b>.<br>' +
            'Repasalo acá → <a href="' + destino + '">' + ctx.linktxt + '</a>';
        }
        alResponder(acerto);
      });

      ops.appendChild(b);
    });

    cont.appendChild(ops);
    cont.appendChild(fb);
    return cont;
  }

  /* ---------- Construcción de un bloque ---------- */
  function crearBloque(bloque, preguntas, tituloVisible) {
    var caja = document.createElement('section');
    caja.className = 'quiz-bloque aparece visible';
    if (bloque.id) caja.id = 'quiz-' + bloque.id;

    var h = document.createElement('h2');
    h.className = 'quiz-titulo';
    h.textContent = (bloque.icono ? bloque.icono + ' ' : '') + (tituloVisible || bloque.titulo);
    caja.appendChild(h);

    var total = preguntas.length;
    var correctas = 0, contestadas = 0;

    var barra = document.createElement('div');
    barra.className = 'barra';
    var relleno = document.createElement('span');
    barra.appendChild(relleno);

    var marcador = document.createElement('p');
    marcador.className = 'marcador';
    marcador.setAttribute('aria-live', 'polite');

    function actualizar() {
      relleno.style.width = Math.round((contestadas / total) * 100) + '%';
      var txt = 'Resultado: ' + correctas + ' / ' + total;
      if (contestadas < total) {
        txt += '  ·  respondidas: ' + contestadas;
      } else if (correctas === total) {
        txt += '  ·  ¡Perfecto! 🥇';
      } else if (correctas / total >= 0.8) {
        txt += '  ·  ¡Muy bien! 💪';
      } else {
        txt += '  ·  Repasá la sección y volvé a intentar.';
      }
      marcador.textContent = txt;
    }

    preguntas.forEach(function (p, i) {
      var ctx = p._ctx || bloque;
      caja.appendChild(crearPregunta(p, ctx, i, function (ok) {
        contestadas++;
        if (ok) correctas++;
        actualizar();
      }));
    });

    actualizar();
    caja.appendChild(barra);
    caja.appendChild(marcador);

    var acciones = document.createElement('div');
    acciones.className = 'quiz-acciones';
    var re = document.createElement('button');
    re.type = 'button';
    re.className = 'btn ghost';
    re.textContent = '↻ Reintentar';
    re.addEventListener('click', function () {
      var nueva = crearBloque(bloque, preguntas, tituloVisible);
      caja.replaceWith(nueva);
      nueva.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
    acciones.appendChild(re);

    var ver = document.createElement('a');
    ver.className = 'btn ghost';
    ver.style.textDecoration = 'none';
    ver.href = bloque.link || 'index.html';
    ver.textContent = '📖 Ver el tema';
    acciones.appendChild(ver);

    caja.appendChild(acciones);
    return caja;
  }

  /* ---------- Render inicial ---------- */
  var zona = document.getElementById('bloques');
  if (zona) {
    BLOQUES.forEach(function (b) { zona.appendChild(crearBloque(b, b.preguntas)); });
  }

  /* ---------- Simulacro ---------- */
  var btnSim = document.getElementById('simulacro-btn');
  if (btnSim) {
    btnSim.addEventListener('click', function () {
      var pool = [];
      BLOQUES.forEach(function (b) {
        b.preguntas.forEach(function (p) {
          var copia = Object.assign({}, p);
          copia._ctx = { link: b.link, linktxt: b.linktxt };
          pool.push(copia);
        });
      });

      for (var i = pool.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var t = pool[i]; pool[i] = pool[j]; pool[j] = t;
      }

      var zonaSim = document.getElementById('zona-simulacro');
      zonaSim.innerHTML = '';
      var falso = { id: null, icono: '🎲', titulo: 'Simulacro — 10 preguntas mezcladas', link: 'index.html', linktxt: 'la wiki' };
      zonaSim.appendChild(crearBloque(falso, pool.slice(0, 10)));
      zonaSim.scrollIntoView({ behavior: 'smooth', block: 'start' });
      btnSim.textContent = '🎲 Otro simulacro';
    });
  }
})();
