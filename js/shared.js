/* ============================================================================
   ADMS — utilitários compartilhados (ícones, fotos com fallback, rádio Fly 99)
   Não depende do Three.js. Usado por index.html e igrejas.html.
============================================================================ */
window.ADMSUI = (function () {
  'use strict';

  /* ---------------------------------------------------------------------
     ÍCONES SVG (traço) — usados nos cards e no rádio
  --------------------------------------------------------------------- */
  var ICONS = {
    flame: '<path d="M12 2s4 4 4 8a4 4 0 1 1-8 0c0-1.5.8-2.7 1.5-3.5C10.5 8 12 8 12 2z"/><path d="M12 22a6 6 0 0 0 6-6c0-3-3-5-6-10-3 5-6 7-6 10a6 6 0 0 0 6 6z"/>',
    star: '<path d="M12 3l2.6 5.6 6.1.8-4.5 4.2 1.2 6-5.4-3-5.4 3 1.2-6L3.3 9.4l6.1-.8z"/>',
    heart: '<path d="M12 21C12 21 4 15 4 9.5A4.5 4.5 0 0 1 12 7a4.5 4.5 0 0 1 8 2.5C20 15 12 21 12 21z"/>',
    book: '<path d="M4 4.5A2.5 2.5 0 0 1 6.5 2H20v18H6.5A2.5 2.5 0 0 0 4 22z"/><path d="M4 17.5A2.5 2.5 0 0 1 6.5 15H20"/>',
    users: '<circle cx="9" cy="8" r="3.2"/><path d="M2.5 20a6.5 6.5 0 0 1 13 0"/><path d="M16 5.5a3.2 3.2 0 0 1 0 6"/><path d="M17.5 14.2A6.5 6.5 0 0 1 21.5 20"/>',
    music: '<path d="M9 18V5l11-2v13"/><circle cx="6" cy="18" r="3"/><circle cx="17" cy="16" r="3"/>',
    radio: '<circle cx="12" cy="14" r="6"/><path d="M4 8h16M8 3l9-1.5"/><circle cx="12" cy="14" r="1.6"/>',
    globe: '<circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3c3 3.5 3 14.5 0 18M12 3c-3 3.5-3 14.5 0 18"/>',
    handshake: '<path d="M8 12l3 3 2-2 3 3"/><path d="M3 10l4-4 4 2 2-1 2 1 4-2 4 4"/><path d="M3 10v4l6 5M21 10v4l-5 4"/>',
    shield: '<path d="M12 3l8 3v5c0 5-3.5 8.5-8 10-4.5-1.5-8-5-8-10V6z"/>',
    smile: '<circle cx="12" cy="12" r="9"/><path d="M8.5 14a4.5 4.5 0 0 0 7 0"/><path d="M9 9.5h.01M15 9.5h.01"/>',
    flag: '<path d="M5 21V4M5 4h13l-2.5 4L18 12H5"/>',
    moon: '<path d="M20 14A8 8 0 1 1 10 4a6.5 6.5 0 0 0 10 10z"/>',
    gift: '<rect x="3" y="9" width="18" height="12" rx="1.5"/><path d="M3 13h18M12 9v12"/><path d="M12 9S9 3 6.5 5 9 9 12 9zm0 0s3-6 5.5-4S15 9 12 9z"/>',
    phone: '<path d="M5 3h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 12l5 2v4a2 2 0 0 1-2 2A15 15 0 0 1 3 5a2 2 0 0 1 2-2z"/>',
    mail: '<rect x="3" y="5" width="18" height="14" rx="2"/><path d="M3 7l9 6 9-6"/>',
    pin: '<path d="M12 21s7-6.5 7-11a7 7 0 1 0-14 0c0 4.5 7 11 7 11z"/><circle cx="12" cy="10" r="2.5"/>',
    clock: '<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3.5 2"/>',
    play: '<path d="M7 4.5v15l12-7.5z"/>',
    pause: '<path d="M8 4.5v15M16 4.5v15"/>',
    volume: '<path d="M4 9v6h4l5 4V5L8 9z"/><path d="M16.5 8.5a5 5 0 0 1 0 7"/>',
    external: '<path d="M14 4h6v6"/><path d="M20 4l-8 8"/><path d="M18 14v5a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h5"/>',
    cross: '<path d="M12 3v18M6 8h12"/>',
    sparkle: '<path d="M12 3l1.8 5.2L19 10l-5.2 1.8L12 17l-1.8-5.2L5 10l5.2-1.8z"/>'
  };

  function icon(name, size) {
    var p = ICONS[name] || ICONS.sparkle;
    size = size || 24;
    return '<svg viewBox="0 0 24 24" width="' + size + '" height="' + size + '" fill="none" stroke="currentColor" ' +
      'stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">' + p + '</svg>';
  }

  /* ---------------------------------------------------------------------
     ARTE SVG DE FALLBACK — "foto" estilizada quando a imagem não carrega
  --------------------------------------------------------------------- */
  function arteSVG(titulo, subtitulo, cor) {
    cor = cor || '#e9b54a';
    var safe = String(titulo || '').replace(/[<>&"]/g, '');
    var safeSub = String(subtitulo || '').replace(/[<>&"]/g, '');
    var svg =
      '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 500">' +
      '<defs>' +
      '<linearGradient id="g" x1="0" y1="0" x2="0" y2="1">' +
      '<stop offset="0" stop-color="#141d3d"/><stop offset="0.55" stop-color="#0b1026"/><stop offset="1" stop-color="#05070f"/>' +
      '</linearGradient>' +
      '<linearGradient id="c" x1="0" y1="0" x2="0" y2="1">' +
      '<stop offset="0" stop-color="' + cor + '"/><stop offset="1" stop-color="#ffffff" stop-opacity="0.35"/>' +
      '</linearGradient>' +
      '</defs>' +
      '<rect width="800" height="500" fill="url(#g)"/>' +
      // estrelas
      '<g fill="#ffffff" opacity="0.5">' +
      '<circle cx="90" cy="70" r="1.6"/><circle cx="220" cy="40" r="1.2"/><circle cx="360" cy="90" r="1.4"/>' +
      '<circle cx="520" cy="55" r="1.1"/><circle cx="660" cy="95" r="1.6"/><circle cx="730" cy="45" r="1.2"/>' +
      '<circle cx="150" cy="140" r="1"/><circle cx="600" cy="150" r="1"/>' +
      '</g>' +
      // silhueta do templo
      '<g transform="translate(400 400)">' +
      '<rect x="-190" y="-120" width="380" height="120" fill="#0a0f22"/>' +
      '<rect x="-190" y="-120" width="380" height="120" fill="none" stroke="' + cor + '" stroke-opacity="0.35" stroke-width="2"/>' +
      // torre
      '<rect x="-45" y="-250" width="90" height="130" fill="#0a0f22"/>' +
      '<rect x="-45" y="-250" width="90" height="130" fill="none" stroke="' + cor + '" stroke-opacity="0.4" stroke-width="2"/>' +
      '<path d="M-52 -250 L0 -315 L52 -250 Z" fill="#0a0f22" stroke="' + cor + '" stroke-opacity="0.5" stroke-width="2"/>' +
      // cruz
      '<path d="M0 -315 L0 -375 M-18 -352 L18 -352" stroke="url(#c)" stroke-width="6" stroke-linecap="round"/>' +
      // vitrais
      '<path d="M-150 -120 L-150 -40 A30 30 0 0 1 -90 -40 L-90 -120 Z" fill="' + cor + '" opacity="0.25"/>' +
      '<path d="M-45 -120 L-45 -60 A22 22 0 0 1 -1 -60 L-1 -120 Z" fill="' + cor + '" opacity="0.3"/>' +
      '<path d="M1 -120 L1 -60 A22 22 0 0 1 45 -60 L45 -120 Z" fill="' + cor + '" opacity="0.3"/>' +
      '<path d="M90 -120 L90 -40 A30 30 0 0 1 150 -40 L150 -120 Z" fill="' + cor + '" opacity="0.25"/>' +
      // porta em arco
      '<path d="M-30 0 L-30 -38 A30 30 0 0 1 30 -38 L30 0 Z" fill="' + cor + '" opacity="0.5"/>' +
      // degraus
      '<rect x="-210" y="-4" width="420" height="6" fill="#0a0f22" stroke="' + cor + '" stroke-opacity="0.25"/>' +
      '</g>' +
      '<text x="400" y="440" text-anchor="middle" font-family="Georgia,serif" font-size="26" fill="#f2ede1" opacity="0.95">' + safe + '</text>' +
      '<text x="400" y="470" text-anchor="middle" font-family="Georgia,serif" font-size="15" fill="' + cor + '" opacity="0.9">' + safeSub + '</text>' +
      '</svg>';
    return 'data:image/svg+xml;charset=utf-8,' + encodeURIComponent(svg);
  }

  /* Cria uma <img> com fallback automático (onerror → arte SVG). */
  function img(src, titulo, subtitulo, cor) {
    var el = document.createElement('img');
    el.loading = 'lazy';
    el.decoding = 'async';
    el.alt = titulo || '';
    var fb = arteSVG(titulo, subtitulo, cor);
    el.dataset.fallback = fb;
    if (src) {
      el.src = src;
    } else {
      el.src = fb;
    }
    el.addEventListener('error', function handler() {
      el.removeEventListener('error', handler);
      if (el.src !== fb) el.src = fb;
    });
    return el;
  }

  /* ---------------------------------------------------------------------
     TOAST (mensagens discretas)
  --------------------------------------------------------------------- */
  var toastEl = null, toastTimer = null;
  function toast(msg, ms) {
    if (!document.body) return;
    if (!toastEl) {
      toastEl = document.createElement('div');
      toastEl.className = 'adms-toast';
      toastEl.setAttribute('role', 'status');
      document.body.appendChild(toastEl);
    }
    toastEl.textContent = msg;
    toastEl.classList.add('is-on');
    clearTimeout(toastTimer);
    toastTimer = setTimeout(function () { toastEl.classList.remove('is-on'); }, ms || 3200);
  }

  /* ---------------------------------------------------------------------
     CONFETE (só na ação de dízimo/PIX)
  --------------------------------------------------------------------- */
  function confete() {
    var cores = ['#e9b54a', '#d8434b', '#5cc8ff', '#6fd08c', '#b58cff', '#ff8f6b'];
    var n = 0;
    for (var i = 0; i < 90; i++) {
      (function () {
        var d = document.createElement('div');
        d.className = 'adms-conf';
        var c = cores[(Math.random() * cores.length) | 0];
        d.style.background = c;
        var dur = 1.4 + Math.random() * 1.8;
        d.style.setProperty('--x', ((Math.random() * 100) | 0) + 'vw');
        d.style.setProperty('--s', (7 + Math.random() * 11) | 0 + 'px');
        d.style.setProperty('--r', ((Math.random() * 720) | 0) + 'deg');
        d.style.animationDuration = dur.toFixed(2) + 's';
        d.style.animationDelay = (Math.random() * 0.5).toFixed(2) + 's';
        document.body.appendChild(d);
        n++;
        setTimeout(function () { d.remove(); }, (dur + 0.8) * 1000);
      })();
    }
  }

  /* ---------------------------------------------------------------------
     RÁDIO FLY 99 FM — player flutuante
  --------------------------------------------------------------------- */
  var radioAudio = null, radioEstado = { tocando: false, vol: 0.85, erros: 0 };

  function initRadio() {
    var conf = window.ADMS && window.ADMS.CONFIG && window.ADMS.CONFIG.radio;
    if (!conf) return null;

    var wrap = document.createElement('div');
    wrap.className = 'adms-radio';
    wrap.setAttribute('role', 'region');
    wrap.setAttribute('aria-label', 'Rádio Fly 99 FM ao vivo');
    wrap.innerHTML =
      '<button class="adms-radio__play" aria-label="Ouvir Fly 99 FM ao vivo" title="Ouvir Fly 99 FM">' +
      icon('play', 20) +
      '</button>' +
      '<div class="adms-radio__wave" aria-hidden="true"><i></i><i></i><i></i><i></i></div>' +
      '<div class="adms-radio__info">' +
      '<span class="adms-radio__live"><b></b>AO VIVO</span>' +
      '<span class="adms-radio__nome">' + conf.nome + ' · ' + conf.faixa + '</span>' +
      '<span class="adms-radio__tag">' + conf.slogan + '</span>' +
      '</div>' +
      '<div class="adms-radio__vol">' +
      '<span class="adms-radio__ico">' + icon('volume', 16) + '</span>' +
      '<input type="range" min="0" max="100" value="85" aria-label="Volume da rádio">' +
      '</div>' +
      '<a class="adms-radio__link" href="' + conf.site + '" target="_blank" rel="noopener" title="Site da Fly 99 FM" aria-label="Abrir site da Fly 99 FM">' + icon('external', 16) + '</a>';

    document.body.appendChild(wrap);

    radioAudio = new Audio();
    radioAudio.preload = 'none';
    radioAudio.crossOrigin = 'anonymous';
    radioAudio.volume = radioEstado.vol;

    var btn = wrap.querySelector('.adms-radio__play');
    var slider = wrap.querySelector('.adms-radio__vol input');
    var wave = wrap.querySelector('.adms-radio__wave');

    function pintar() {
      btn.innerHTML = radioEstado.tocando ? icon('pause', 20) : icon('play', 20);
      btn.classList.toggle('is-on', radioEstado.tocando);
      wrap.classList.toggle('is-on', radioEstado.tocando);
      wave.classList.toggle('is-on', radioEstado.tocando);
      btn.setAttribute('aria-label', radioEstado.tocando ? 'Pausar Fly 99 FM' : 'Ouvir Fly 99 FM ao vivo');
    }

    function tocar() {
      radioEstado.erros = 0;
      // cache-buster evita stream travado em alguns servidores
      radioAudio.src = conf.stream + (conf.stream.indexOf('?') > -1 ? '&' : '?') + 't=' + Date.now();
      radioAudio.load();
      var p = radioAudio.play();
      if (p && p.catch) {
        p.then(function () { radioEstado.tocando = true; pintar(); window.ADMSUI.toast('📻 Fly 99 FM — ' + conf.slogan); })
         .catch(function () { radioEstado.tocando = false; pintar(); window.ADMSUI.toast('Toque para liberar o áudio no seu navegador.'); });
      } else { radioEstado.tocando = true; pintar(); }
    }

    function parar() {
      try { radioAudio.pause(); radioAudio.removeAttribute('src'); radioAudio.load(); } catch (e) {}
      radioEstado.tocando = false;
      pintar();
    }

    btn.addEventListener('click', function () { radioEstado.tocando ? parar() : tocar(); });

    slider.addEventListener('input', function () {
      radioEstado.vol = (+slider.value) / 100;
      if (radioAudio) radioAudio.volume = radioEstado.vol;
    });

    radioAudio.addEventListener('playing', function () { radioEstado.tocando = true; pintar(); });
    radioAudio.addEventListener('pause', function () { radioEstado.tocando = false; pintar(); });
    radioAudio.addEventListener('error', function () {
      radioEstado.erros++;
      radioEstado.tocando = false; pintar();
      if (radioEstado.erros < 3) setTimeout(function () { if (!radioEstado.tocando) tocar(); }, 1500);
      else window.ADMSUI.toast('Não foi possível carregar a Fly 99 FM agora. Tente de novo em instantes.');
    });

    pintar();
    return wrap;
  }

  /* ---------------------------------------------------------------------
     CONTA ATRÁS (contador de números)
  --------------------------------------------------------------------- */
  function contarPara(el, alvo, dur) {
    var ini = performance.now();
    dur = dur || 1400;
    function passo(t) {
      var p = Math.min(1, (t - ini) / dur);
      var e = 1 - Math.pow(1 - p, 3);
      el.textContent = Math.round(alvo * e).toLocaleString('pt-BR');
      if (p < 1) requestAnimationFrame(passo);
    }
    requestAnimationFrame(passo);
  }

  /* ---------------------------------------------------------------------
     LEAFLET — mapa com marcadores clicáveis
     Retorna { map, setAtivo } — o callback onSel(id) recebe o id do marcador.
  --------------------------------------------------------------------- */
  function criarMapa(container, opts) {
    opts = opts || {};
    if (typeof L === 'undefined') {
      container.classList.add('adms-mapa--sem-tiles');
      container.innerHTML = '<div class="adms-mapa-fallback"><span>Mapa indisponível offline</span></div>';
      return { map: null, setAtivo: function () {} };
    }
    var ctr = opts.center || [-23.9576, -46.3187];
    var zoom = opts.zoom || 10;
    var map = L.map(container, {
      zoomControl: false, scrollWheelZoom: false, attributionControl: true
    }).setView(ctr, zoom);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 18,
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    }).addTo(map);

    L.control.zoom({ position: 'topright' }).addTo(map);

    var marks = {};
    (opts.pontos || []).forEach(function (p) {
      var ic = L.divIcon({
        className: 'adms-mk adms-mk--' + (p.tipo || 'igreja'),
        html: '<span class="adms-mk__pulse"></span><span class="adms-mk__dot"></span><span class="adms-mk__lbl">' + p.nome + '</span>',
        iconSize: [0, 0]
      });
      var m = L.marker([p.lat, p.lng], { icon: ic, keyboard: true, title: p.nome }).addTo(map);
      m.on('click', function () { setAtivo(p.id); if (opts.onSel) opts.onSel(p.id); });
      marks[p.id] = m;
    });

    function setAtivo(id) {
      Object.keys(marks).forEach(function (k) {
        var el = marks[k].getElement && marks[k].getElement();
        if (el) el.classList.toggle('is-on', k === id);
      });
    }

    // ajusta vista aos pontos
    if (opts.pontos && opts.pontos.length > 1 && opts.fit !== false) {
      try {
        var b = L.latLngBounds(opts.pontos.map(function (p) { return [p.lat, p.lng]; }));
        map.fitBounds(b.pad(0.12));
      } catch (e) {}
    }

    setTimeout(function () { try { map.invalidateSize(); } catch (e) {} }, 250);

    return { map: map, setAtivo: setAtivo, marks: marks };
  }

  /* ---------------------------------------------------------------------
     FORMATAÇÃO
  --------------------------------------------------------------------- */
  function telHref(t) { return 'tel:' + String(t || '').replace(/\D/g, ''); }
  function zapHref(num, msg) {
    var d = String(num || '').replace(/\D/g, '');
    if (d && d[0] !== '55') d = '55' + d;
    return 'https://wa.me/' + d + (msg ? '?text=' + encodeURIComponent(msg) : '');
  }
  function mapsHref(q) { return 'https://www.google.com/maps/search/?api=1&query=' + encodeURIComponent(q || ''); }
  function esc(s) {
    return String(s == null ? '' : s).replace(/[&<>"']/g, function (c) {
      return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c];
    });
  }
  function dataBR(d, m) {
    var meses = ['jan', 'fev', 'mar', 'abr', 'mai', 'jun', 'jul', 'ago', 'set', 'out', 'nov', 'dez'];
    return d + ' de ' + (meses[m] || '');
  }

  return {
    ICONS: ICONS, icon: icon, arteSVG: arteSVG, img: img,
    toast: toast, confete: confete, initRadio: initRadio, contarPara: contarPara,
    criarMapa: criarMapa,
    telHref: telHref, zapHref: zapHref, mapsHref: mapsHref, esc: esc, dataBR: dataBR
  };
})();
