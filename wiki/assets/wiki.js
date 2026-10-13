/* ===========================================================
   Wiki de Teoría Taekwon-Do ITF — comportamiento compartido
   =========================================================== */
(function () {
  'use strict';

  /* ---------- 1. Tema claro / oscuro (claro por defecto) ---------- */
  var raiz = document.documentElement;

  function aplicarTema(t) {
    raiz.dataset.theme = t;
    var b = document.getElementById('tema-btn');
    if (b) {
      b.textContent = t === 'dark' ? '☀️ Claro' : '🌙 Oscuro';
      b.setAttribute('aria-pressed', t === 'dark' ? 'true' : 'false');
      b.setAttribute('aria-label', t === 'dark' ? 'Cambiar a modo claro' : 'Cambiar a modo oscuro');
    }
  }

  var guardado = null;
  try { guardado = localStorage.getItem('wiki-tkd-tema'); } catch (e) {}
  aplicarTema(guardado === 'dark' ? 'dark' : 'light');

  document.addEventListener('click', function (ev) {
    var b = ev.target.closest('#tema-btn');
    if (!b) return;
    var nuevo = raiz.dataset.theme === 'dark' ? 'light' : 'dark';
    aplicarTema(nuevo);
    try { localStorage.setItem('wiki-tkd-tema', nuevo); } catch (e) {}
  });

  /* ---------- 2. Menú lateral en móvil ---------- */
  document.addEventListener('click', function (ev) {
    var b = ev.target.closest('#menu-btn');
    if (!b) return;
    var lat = document.getElementById('lateral');
    if (!lat) return;
    var abierto = lat.classList.toggle('abierto');
    b.setAttribute('aria-expanded', abierto ? 'true' : 'false');
  });

  /* ---------- 3. Índice de búsqueda (todas las páginas) ---------- */
  var INDICE = [
    { p: 'escuela.html',       t: 'La escuela Chul Hak San', d: 'Significado del nombre, fundación, 3 pilares, visión y misión',
      k: 'chul hak san filosofia de vida omar severino 1983 pilares vision mision medallas escuela' },
    { p: 'escuela.html#escudo', t: 'El escudo de la escuela', d: 'Las dos figuras y el significado de los colores',
      k: 'escudo logo colores naranja sabiduria amarillo iluminacion rojo pasion triangulos parche' },
    { p: 'historia.html',      t: 'Historia del Taekwon-Do', d: 'El Gral. Choi, la fundación del arte y la llegada a Argentina',
      k: 'historia choi hong hi general 1918 1955 taekwondo nombre itf 1966 1972 canada toronto 2002 argentina 1967 fetra taek kyon karate' },
    { p: 'historia.html#nombre', t: '¿Qué significa «Taekwon-Do»?', d: 'Tae, Kwon y Do: el camino del pie y la mano',
      k: 'significado nombre tae kwon do camino pie mano' },
    { p: 'filosofia.html',     t: 'Filosofía y principios', d: 'Los 5 principios, el juramento y los símbolos',
      k: 'filosofia principios tenets cortesia integridad perseverancia autocontrol espiritu indomito juramento dobok logo itf simbolos' },
    { p: 'filosofia.html#juramento', t: 'El juramento del Taekwon-Do', d: 'Los 5 puntos que se recitan',
      k: 'juramento observare respetare instructor mal uso campeon libertad justicia mundo pacifico' },
    { p: 'filosofia.html#cinturones', t: 'Significado de los cinturones', d: 'Blanco, amarillo, verde, azul, rojo y negro: el progreso del estudiante',
      k: 'cinturones cinturon colores significado blanco inocencia amarillo tierra verde crecimiento azul cielo rojo peligro negro madurez' },
    { p: 'secretos.html',      t: 'Secretos de entrenamiento', d: 'Los 9 secretos, la posición correcta y el movimiento ondulante',
      k: 'secretos entrenamiento nueve postura posicion correcta movimiento ondulante 2 4 2 respiracion exhalacion angulo distancia' },
    { p: 'mociones.html',      t: 'Mociones', d: 'Las 6 mociones de mano, las de patada y ejemplos por forma',
      k: 'mociones normal natural lenta rapida continua conectada patadas consecutivas dobles triples respiracion do-san dan-gun yul-gok toi-gye' },
    { p: 'tules.html',         t: 'Los tules', d: 'Significado, historia y cantidad de movimientos de Chon-Ji a Choong-Moo',
      k: 'tules tul formas chon-ji dan-gun do-san won-hyo yul-gok joong-gun toi-gye hwa-rang choong-moo significado movimientos diagrama' },
    { p: 'patadas.html',       t: 'Las patadas', d: 'Nombre en español y en coreano, con video de cada una',
      k: 'patadas patada chagi ap yop dollyo furyo twio dwit bandae jirugi busigi coreano nombre video lateral circular frontal hacha inversa atras descendente doble' },
    { p: 'cuestionarios.html', t: 'Cuestionarios', d: '36 preguntas de práctica y simulacro',
      k: 'cuestionario preguntas examen practica simulacro test quiz repaso' }
  ];

  var input = document.getElementById('buscar');
  var lista = document.getElementById('resultados');

  function norm(s) {
    return s.toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g, '');
  }

  if (input && lista) {
    input.addEventListener('input', function () {
      var q = norm(input.value.trim());
      lista.innerHTML = '';
      if (q.length < 2) return;

      var hits = INDICE.filter(function (e) {
        return norm(e.t + ' ' + e.d + ' ' + e.k).indexOf(q) !== -1;
      }).slice(0, 7);

      if (!hits.length) {
        var vacio = document.createElement('li');
        vacio.className = 'sin-resultados';
        vacio.textContent = 'Sin resultados para «' + input.value.trim() + '».';
        lista.appendChild(vacio);
        return;
      }

      hits.forEach(function (e) {
        var li = document.createElement('li');
        var a = document.createElement('a');
        a.href = e.p;
        a.innerHTML = '<span class="rt">' + e.t + '</span><br><span class="rd">' + e.d + '</span>';
        li.appendChild(a);
        lista.appendChild(li);
      });
    });

    // Enter abre el primer resultado
    input.addEventListener('keydown', function (ev) {
      if (ev.key !== 'Enter') return;
      var primero = lista.querySelector('a');
      if (primero) { ev.preventDefault(); window.location.href = primero.getAttribute('href'); }
    });

    // Escape limpia
    input.addEventListener('keydown', function (ev) {
      if (ev.key === 'Escape') { input.value = ''; lista.innerHTML = ''; }
    });
  }

  /* ---------- 4. Aparición suave al hacer scroll ---------- */
  var animables = document.querySelectorAll('.aparece');
  var reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  if (reduce || !('IntersectionObserver' in window)) {
    animables.forEach(function (el) { el.classList.add('visible'); });
  } else {
    var obs = new IntersectionObserver(function (entradas) {
      entradas.forEach(function (en) {
        if (en.isIntersecting) {
          en.target.classList.add('visible');
          obs.unobserve(en.target);
        }
      });
    }, { rootMargin: '0px 0px -40px 0px', threshold: .05 });

    animables.forEach(function (el, i) {
      el.style.transitionDelay = Math.min(i * 60, 300) + 'ms';
      obs.observe(el);
    });
  }

  /* ---------- 5. Marcar la página actual en el menú ---------- */
  var actual = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('aside.lateral a').forEach(function (a) {
    var destino = a.getAttribute('href').split('#')[0];
    if (destino === actual) a.setAttribute('aria-current', 'page');
  });
})();
