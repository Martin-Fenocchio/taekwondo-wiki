# Wiki de Teoría Taekwon-Do ITF

Sitio estático de estudio para el examen de cinturón negro (escuela Chul Hak San).
No usa frameworks ni dependencias: es HTML, CSS y JavaScript puro.

## Estructura

```
wiki/
├── index.html            Portada con los resúmenes de cada bloque
├── escuela.html          La escuela Chul Hak San y su escudo
├── historia.html         El Gral. Choi, la ITF y la llegada a la Argentina
├── filosofia.html        Los 5 principios, el juramento y los símbolos
├── secretos.html         Los 9 secretos, la postura y el movimiento ondulante
├── mociones.html         Las 6 mociones de mano, las de patada y ejemplos
├── tules.html            Los 9 tules, de Chon-Ji a Choong-Moo
├── patadas.html          Las patadas más comunes, con video de cada una
├── cuestionarios.html    36 preguntas + simulacro de 10 al azar
└── assets/
    ├── estilo.css        Estilos compartidos (temas claro y oscuro)
    ├── wiki.js           Tema, menú móvil, buscador y animaciones
    ├── quiz.js           Motor y contenido de los cuestionarios
    └── img/              Escudo de la escuela y logo de la ITF
```

## Cómo verlo en local

Abrir `index.html` con doble clic ya funciona. Para que se comporte igual que
en producción conviene levantar un servidor:

```bash
cd wiki
python3 -m http.server 8000
# abrir http://localhost:8000
```

## Cómo publicarlo

**Vercel** — desde la carpeta `wiki/`:

```bash
npx vercel --prod
```

No hace falta configurar nada: Vercel detecta un sitio estático y sirve
`index.html` como raíz.

**GitHub Pages** — subir el contenido de `wiki/` a un repositorio y activar
Pages en Settings → Pages, eligiendo la rama y la carpeta raíz.

**Netlify** — arrastrar la carpeta `wiki/` a la interfaz de Netlify Drop.

## Cómo editar el contenido

- **Texto de un tema:** editar directamente el `.html` de esa página.
- **Preguntas de los cuestionarios:** están todas en `assets/quiz.js`, en el
  array `BLOQUES`. Cada pregunta tiene `q` (enunciado), `opts` (las 4 opciones),
  `a` (índice de la correcta, empezando en 0) y `hash` (el ancla de la sección
  donde repasar el tema).
- **Colores y tipografía:** las variables están al principio de `assets/estilo.css`,
  en `:root` (tema claro) y `:root[data-theme="dark"]` (tema oscuro).
- **Buscador:** el índice de temas está en `assets/wiki.js`, en el array `INDICE`.
  Si agregás una página nueva, sumale una entrada ahí y un ítem en el menú lateral
  de cada HTML.

## Fuentes del contenido

Transcripción de los apuntes de clase (carpeta `../transcripciones/`),
verificada contra la teoría estándar ITF y el material publicado por la escuela
Chul Hak San.
