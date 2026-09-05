/* MAGMA MOTORS v5 — the diary, rendered in Nowy Teatr's grammar. No GSAP, no Lenis: the
   reference has neither. Motion is CSS transitions plus three class flips (loading,
   scrolling-down, menu-open), exactly what was measured on the reference. */
(function () {
  'use strict';

  /* ---------------- strings ---------------- */
  var I18N = {
    is: {
      skip: 'Fara beint í tímana', menu: 'Valmynd',
      nav_times: 'Tímar', nav_prices: 'Verð', nav_shop: 'Verkstæðið', nav_way: 'Leiðin',
      agenda_all: 'Sjá alla dagana', hero_days: 'Mán–fös',
      h1: 'Bifreiðaverkstæðið á gulu götunni.', hero_cat: 'Dekk, smur, greining, ástandsskoðun',
      cta: 'Bóka tíma', call: 'Hringja', directions: 'Leiðarlýsing',
      cal_note: 'Bókaðir tímar sjást líka. Þú sérð daginn eins og hann liggur hjá okkur.',
      cal_next: 'Næsti mánuður', demo: 'Frumgerð. Engin bókun er send.',
      cal_empty: 'Engir lausir dagar eftir í þessum mánuði.',
      svc5_cat: 'Viðgerðir', svc5_price: 'Verð eftir mati', svc5_title: 'Viðgerðir eftir skoðun', svc5_sub: 'Hringt með verðmat áður en byrjað er',
      slot_wide: 'Mynd vantar: húsið í dagsbirtu, breið', slot_img: 'Mynd vantar', slot_portrait: 'Mynd vantar: portrett í miðju verki',
      slot_name: 'Nafn vantar', slot_day: 'Mynd vantar: í dagsbirtu, úr átt ókunnugs', slot_map: 'Kort vantar',
      h_prices: 'Verð', rule_cat: 'Verðreglan',
      r1_label: 'Föst verð', r1_title: 'Verðin koma úr bókunarkerfinu.',
      r1_body: 'Dekkjaskipti 12.000, smurþjónusta 8.000, tölvugreining 5.000, ástandsskoðun 10.000. Sömu tölur hér og í bókunarkerfinu okkar, og þær standa þegar þú kemur.',
      r2_label: 'Frá-verð', r2_title: 'Hvað hreyfir „frá“.',
      r2_body: 'Þegar stendur „frá“ ræðst endanlega verðið af bílnum: dekkjastærð, olíutegund og lítrar, dísel eða bensín. Þú færð það uppgefið áður en við byrjum.',
      r3_label: 'Skoðunargjaldið', r3_title: 'Fellur niður ef við gerum við.',
      r3_body: 'Ef við gerum við bílinn eftir ástandsskoðun fellur skoðunargjaldið niður. Þú borgar fyrir skoðunina eða viðgerðina, ekki bæði.',
      r4_label: 'Þakið', r4_title: 'Hringt áður en farið er yfir.',
      r4_body: 'Finnist eitthvað sem ekki var bókað er hringt með verðmat áður en farið er yfir umsamið verð. Ekkert er gert án þess að þú segir já.',
      h_all: 'Allt sem við gerum',
      a1_cat: 'Vél', a1_title: 'Vélarviðgerðir', a1_sub: 'Túrbínur, spíssar, eldsneytiskerfi',
      a2_cat: 'Púst', a2_title: 'DPF og pústkerfi', a2_sub: 'Greining, forritun, skipti',
      a3_cat: 'Rafmagn', a3_title: 'Rafmagnsgreining', a3_sub: 'Bilanaleit, startarar, alternatorar, rafgeymar',
      a4_cat: 'Bremsur', a4_title: 'Bremsur, olíur og kúplingar', a4_sub: 'Skoðun, mæling, skipti',
      h_shop: 'Verkstæðið',
      shop_lede: 'Verkstæðið er opið mánudaga til föstudaga, frá átta til fimm. Dagatalið hér að ofan sýnir daginn eins og hann liggur, með bókuðu tímunum líka, svo þú sérð strax hvort það er pláss fyrir bílinn þinn í vikunni eða hvort það borgar sig að hringja.',
      rig_cap: 'Hjólastillingartækið mælir hverja hjólastöðu og prentar niðurstöðuna út. Beint stýri, og dekkin endast lengur af því að þau slitna jafnt.',
      h_people: 'Fólkið', h_way: 'Leiðin',
      w1_title: 'Gula húsið með rauða skiltinu', w1_sub: 'Innkeyrslan er beint af Smiðjuvegi',
      w2_title: 'Innkeyrslan', w2_sub: 'Beint af Smiðjuvegi', w3_title: 'Bílastæðin', w3_sub: 'Fyrir framan hurðina',
      w4_title: 'Taktu skráningarskírteinið með',
      hours: 'Mán–fös 08:00–17:00', proto: 'Frumgerð. Myndir merktar „vantar“ koma frá viðskiptavini.', credit: 'Hönnun og smíði',
      free: 'Laust', booked: 'Bókað', until: 'til', room: 'Rúm fyrir', tooShort: 'Of stutt fyrir', min: 'mín', from: 'frá',
      today: 'Í dag', tomorrow: 'Á morgun', closed: 'Lokað lau–sun',
      f_start: 'Byrjun', f_service: 'Þjónusta', f_name: 'Nafn', f_phone: 'Símanúmer', f_plate: 'Bílnúmer', f_email: 'Netfang',
      f_submit: 'Staðfesta tíma', done: 'Móttekið', done_p: 'Smiðjuvegi 30, 200 Kópavogur. Taktu skráningarskírteinið með.',
      prev: 'Fyrri mánuður', next: 'Næsti mánuður',
      days: ['sunnudagur', 'mánudagur', 'þriðjudagur', 'miðvikudagur', 'fimmtudagur', 'föstudagur', 'laugardagur'],
      dshort: ['SUN', 'MÁN', 'ÞRI', 'MIÐ', 'FIM', 'FÖS', 'LAU']
    },
    en: {
      skip: 'Skip to the diary', menu: 'Menu',
      nav_times: 'Diary', nav_prices: 'Prices', nav_shop: 'The shop', nav_way: 'Getting here',
      agenda_all: 'See every day', hero_days: 'Mon–Fri',
      h1: 'The workshop on the yellow street.', hero_cat: 'Tyres, oil, diagnostics, condition check',
      cta: 'Book a slot', call: 'Call', directions: 'Directions',
      cal_note: 'Booked slots are shown too. You see the day as it stands with us.',
      cal_next: 'Next month', demo: 'Prototype. No booking is sent.',
      cal_empty: 'No open days left this month.',
      svc5_cat: 'Repairs', svc5_price: 'Priced on inspection', svc5_title: 'Repairs after a check', svc5_sub: 'We call with a quote before we start',
      slot_wide: 'Photo needed: the building in daylight, wide', slot_img: 'Photo needed', slot_portrait: 'Photo needed: portrait mid-job',
      slot_name: 'Name needed', slot_day: 'Photo needed: in daylight, as a stranger arrives', slot_map: 'Map needed',
      h_prices: 'Prices', rule_cat: 'The price rule',
      r1_label: 'Fixed prices', r1_title: 'The prices come from our booking system.',
      r1_body: 'Tyre change 12,000, oil service 8,000, diagnostics 5,000, condition check 10,000. The same numbers here as in our booking system, and they hold when you arrive.',
      r2_label: 'From-prices', r2_title: 'What moves a “from”.',
      r2_body: 'Where it says “from”, the final price depends on the car: tyre size, oil grade and litres, diesel or petrol. You get it before we start.',
      r3_label: 'The check fee', r3_title: 'Waived if we do the repair.',
      r3_body: 'If we repair the car after a condition check, the check fee is waived. You pay for the check or the repair, not both.',
      r4_label: 'The ceiling', r4_title: 'We call before going over.',
      r4_body: 'If we find something that was not booked, we call with a quote before going past the agreed price. Nothing is done until you say yes.',
      h_all: 'Everything we do',
      a1_cat: 'Engine', a1_title: 'Engine repairs', a1_sub: 'Turbos, injectors, fuel systems',
      a2_cat: 'Exhaust', a2_title: 'DPF and exhaust', a2_sub: 'Diagnosis, programming, replacement',
      a3_cat: 'Electrical', a3_title: 'Electrical diagnostics', a3_sub: 'Fault finding, starters, alternators, batteries',
      a4_cat: 'Brakes', a4_title: 'Brakes, oils and clutches', a4_sub: 'Inspection, measurement, replacement',
      h_shop: 'The shop',
      shop_lede: 'The workshop is open Monday to Friday, eight to five. The diary above shows the day as it lies, booked slots included, so you can see straight away whether there is room for your car this week or whether it is worth ringing.',
      rig_cap: 'The alignment rig measures every wheel angle and prints the result. A straight wheel, and tyres that last longer because they wear evenly.',
      h_people: 'The people', h_way: 'Getting here',
      w1_title: 'The yellow building with the red sign', w1_sub: 'The drive is straight off Smiðjuvegur',
      w2_title: 'The entrance', w2_sub: 'Straight off Smiðjuvegur', w3_title: 'Parking', w3_sub: 'In front of the door',
      w4_title: 'Bring the registration certificate',
      hours: 'Mon–Fri 08:00–17:00', proto: 'Prototype. Images marked “needed” come from the client.', credit: 'Design and build',
      free: 'Open', booked: 'Booked', until: 'until', room: 'Room for', tooShort: 'Too short for', min: 'min', from: 'from',
      today: 'Today', tomorrow: 'Tomorrow', closed: 'Closed Sat–Sun',
      f_start: 'Start', f_service: 'Service', f_name: 'Name', f_phone: 'Phone', f_plate: 'Plate', f_email: 'Email',
      f_submit: 'Confirm slot', done: 'Received', done_p: 'Smiðjuvegur 30, 200 Kópavogur. Bring the registration certificate.',
      prev: 'Previous month', next: 'Next month',
      days: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
      dshort: ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT']
    }
  };
  var lang = localStorage.getItem('mm-lang') || 'is';
  function t(k) { return I18N[lang][k]; }
  var NB = ' ';

  /* ---------------- services: their real Wix Bookings data ----------------
     SKOÐUN is renamed ÁSTANDSSKOÐUN here. In Iceland "skoðun" means the state
     inspection, so the old label promised a sticker we do not issue. The wording
     must be confirmed with the client before this page is sent. */
  var SERVICES = {
    dekk:     { is: 'Dekkjaskipti',  en: 'Tyre change',     cat: { is: 'Dekk', en: 'Tyres' },       sub: { is: 'Umfelgun og jafnvægisstilling', en: 'Fitting and balancing' }, dur: 45, from: true,  price: '12.000', img: 'assets/img/wheel.jpg', short: { is: 'dekk', en: 'tyres' } },
    smur:     { is: 'Smurþjónusta',  en: 'Oil service',     cat: { is: 'Smur', en: 'Oil' },         sub: { is: 'Olía, sía og yfirferð', en: 'Oil, filter and a look-over' },     dur: 30, from: true,  price: '8.000',  img: 'assets/img/oil.jpg',   short: { is: 'smur', en: 'oil' } },
    greining: { is: 'Tölvugreining', en: 'Diagnostics',     cat: { is: 'Greining', en: 'Diagnostics' }, sub: { is: 'Lesið úr bílnum og hjólastilling mæld', en: 'Read from the car, alignment measured' }, dur: 15, from: false, price: '5.000', img: 'assets/img/real-alignment.jpg', short: { is: 'greiningu', en: 'diagnostics' } },
    skodun:   { is: 'Ástandsskoðun', en: 'Condition check', cat: { is: 'Ástandsskoðun', en: 'Condition check' }, sub: { is: 'Gjaldið fellur niður ef við gerum við', en: 'Fee waived if we do the repair' }, dur: 45, from: true, price: '10.000', img: 'assets/img/check.jpg', short: { is: 'skoðun', en: 'a check' } }
  };
  var SVC_KEYS = Object.keys(SERVICES);
  var OPEN_M = 8 * 60, CLOSE_M = 17 * 60;

  /* ---------------- demo diary: deterministic, tuned as content ---------------- */
  function prng(seed) {
    return function () { seed = (seed * 1103515245 + 12345) % 2147483648; return seed / 2147483648; };
  }
  var CACHE = {};
  var TODAY = new Date(); TODAY.setHours(0, 0, 0, 0);
  function dayRec(d) {
    var key = d.toDateString();
    if (CACHE[key]) return CACHE[key];
    var r = prng(d.getFullYear() * 1000 + d.getMonth() * 50 + d.getDate());
    var daysOut = Math.round((d.getTime() - TODAY.getTime()) / 86400000);
    var full = daysOut > 7 && r() < 0.10;
    var slots = {}, m = OPEN_M, mustBook = false;
    while (m < CLOSE_M) {
      var morning = m < 12 * 60;
      var booked = full || mustBook || r() < (morning ? 0.70 : 0.52);
      var len = booked ? 2 + Math.floor(r() * 5) : 3 + Math.floor(r() * 5);
      for (var c = 0; c < len && m < CLOSE_M; c++, m += 15) slots[m] = !booked;
      mustBook = !booked;
    }
    return (CACHE[key] = { full: full, slots: slots });
  }
  function isOpenDay(d) { var wd = d.getDay(); return wd >= 1 && wd <= 5; }
  /* the day's blocks: consecutive same-state slots merged, the shape the calendar shows */
  function blocks(d) {
    var rec = dayRec(d), out = [], cur = null;
    for (var m = OPEN_M; m < CLOSE_M; m += 15) {
      var free = !!rec.slots[m];
      if (cur && cur.free === free) { cur.end = m + 15; continue; }
      cur = { start: m, end: m + 15, free: free }; out.push(cur);
    }
    return out;
  }
  function starts(b, dur) {
    var out = [];
    for (var m = b.start; m + dur <= b.end; m += 15) out.push(m);
    return out;
  }
  function nextBookableDay() {
    var d = new Date(TODAY); d.setDate(d.getDate() + 1);
    for (var g = 0; g < 21; g++) {
      if (isOpenDay(d) && !dayRec(d).full) return d;
      d.setDate(d.getDate() + 1);
    }
    return d;
  }
  function bookableDays(n) {
    var out = [], d = new Date(TODAY);
    while (out.length < n) { d.setDate(d.getDate() + 1); if (isOpenDay(d)) out.push(new Date(d)); }
    return out;
  }
  function monthDays(offset) {
    var first = new Date(TODAY.getFullYear(), TODAY.getMonth() + offset, 1);
    var out = [], d = new Date(first);
    while (d.getMonth() === first.getMonth()) {
      if (d.getTime() > TODAY.getTime() && isOpenDay(d)) out.push(new Date(d));
      d.setDate(d.getDate() + 1);
    }
    return { first: first, days: out };
  }

  /* ---------------- helpers ---------------- */
  function el(tag, cls, txt) { var n = document.createElement(tag); if (cls) n.className = cls; if (txt != null) n.textContent = txt; return n; }
  function fmtTime(m) { var h = Math.floor(m / 60), mm = m % 60; return (h < 10 ? '0' : '') + h + ':' + (mm < 10 ? '0' : '') + mm; }
  function pad2(n) { return (n < 10 ? '0' : '') + n; }
  function fmtDM(d) { return pad2(d.getDate()) + '.' + pad2(d.getMonth() + 1); }
  function dayName(d) { var n = t('days')[d.getDay()]; return lang === 'is' ? n : n; }
  function tabLabel(d) {
    var diff = Math.round((d.getTime() - TODAY.getTime()) / 86400000);
    if (diff === 0) return t('today');
    if (diff === 1) return t('tomorrow');
    return dayName(d);
  }
  function tabShort(d) {
    var diff = Math.round((d.getTime() - TODAY.getTime()) / 86400000);
    if (diff === 0) return lang === 'is' ? 'Í dag' : 'Today';
    return t('dshort')[d.getDay()];
  }
  function fitsList(len) {
    var names = SVC_KEYS.filter(function (k) { return SERVICES[k].dur <= len; }).map(function (k) { return SERVICES[k].short[lang]; });
    return names;
  }
  function svcPrice(s) { return (s.from ? t('from') + NB : '') + s.price + NB + 'kr.'; }
  function durText(len) {
    var h = Math.floor(len / 60), m = len % 60;
    if (lang === 'is') return (h ? h + NB + 'klst' + (m ? ' ' : '') : '') + (m ? m + NB + 'mín' : '');
    return (h ? h + NB + 'h' + (m ? ' ' : '') : '') + (m ? m + NB + 'min' : '');
  }

  /* ---------------- state ---------------- */
  var FIRST = nextBookableDay();
  var state = {
    service: 'dekk',
    cal: (FIRST.getFullYear() - TODAY.getFullYear()) * 12 + (FIRST.getMonth() - TODAY.getMonth()),
    agendaDay: 0,
    sel: null   /* { day: Date, start, end, time } */
  };
  var MAX_CAL = 2;

  var $ = function (s) { return document.querySelector(s); };
  var agendaDays = $('#agendaDays'), agendaList = $('#agendaList'), agendaDate = $('#agendaDate');
  var calTitle = $('#calTitle'), calRows = $('#calRows'), calPrev = $('#calPrev'), calNext = $('#calNext'), calMore = $('#calMore'), svcFilter = $('#svcFilter');
  var svcTiles = $('#svcTiles');

  /* ---------------- 02 agenda panel ---------------- */
  var AGENDA = bookableDays(3);
  function renderAgendaDays() {
    agendaDays.innerHTML = '';
    AGENDA.forEach(function (d, i) {
      /* short day forms at every width: three Icelandic weekday names cannot share the
         panel's tab row until 1440, and the row values already read "MÁN 13:45". */
      var b = el('button', 'agenda__day' + (i === state.agendaDay ? ' is-active' : ''), tabShort(d));
      b.title = tabLabel(d);
      b.type = 'button'; b.setAttribute('role', 'tab'); b.setAttribute('aria-selected', i === state.agendaDay ? 'true' : 'false');
      b.addEventListener('click', function () {
        if (state.agendaDay === i) return;
        state.agendaDay = i;
        agendaList.classList.add('is-fading');
        setTimeout(function () { renderAgendaDays(); renderAgendaList(); agendaList.classList.remove('is-fading'); }, 250);
      });
      agendaDays.appendChild(b);
    });
    agendaDate.textContent = fmtDM(AGENDA[state.agendaDay]);
  }
  function renderAgendaList() {
    agendaList.innerHTML = '';
    var d = AGENDA[state.agendaDay], bl = blocks(d);
    /* the panel holds four rows: the reference shows two to four */
    var show = bl.slice(0, 4);
    show.forEach(function (b) {
      var li = el('li', 'agenda__item' + (b.free ? '' : ' agenda__item--booked'));
      var title = el('div', 'agenda__item-title');
      var len = b.end - b.start;
      if (b.free) {
        var a = el('a', null); a.href = '#timar';
        a.appendChild(el('span', null, t('free')));
        a.addEventListener('click', function (e) { e.preventDefault(); selectBlock(d, b, true); });
        title.appendChild(a);
        title.appendChild(el('small', null, t('until') + ' ' + fmtTime(b.end) + ' · ' + durText(len)));
      } else {
        title.appendChild(el('span', null, t('booked')));
        title.appendChild(el('small', null, t('until') + ' ' + fmtTime(b.end)));
      }
      li.appendChild(title);
      li.appendChild(el('div', 'agenda__item-info', t('dshort')[d.getDay()] + ' ' + fmtTime(b.start)));
      agendaList.appendChild(li);
    });
  }

  /* ---------------- calendar ---------------- */
  function renderFilter() {
    svcFilter.innerHTML = '';
    SVC_KEYS.forEach(function (k) {
      var s = SERVICES[k], b = el('button', null, s[lang]);
      b.type = 'button'; b.setAttribute('role', 'radio'); b.setAttribute('aria-checked', k === state.service ? 'true' : 'false');
      b.addEventListener('click', function () { state.service = k; renderFilter(); renderCal(); });
      svcFilter.appendChild(b);
    });
  }
  function renderCal() {
    var md = monthDays(state.cal), dur = SERVICES[state.service].dur;
    calTitle.textContent = pad2(md.first.getMonth() + 1) + '.' + md.first.getFullYear();
    calPrev.disabled = state.cal <= 0; calNext.disabled = state.cal >= MAX_CAL;
    calPrev.setAttribute('aria-label', t('prev')); calNext.setAttribute('aria-label', t('next'));
    calMore.parentElement.hidden = state.cal >= MAX_CAL;
    calRows.innerHTML = '';
    if (!md.days.length) { calRows.appendChild(el('p', 'calendar__empty', t('cal_empty'))); return; }
    md.days.forEach(function (d) {
      var row = el('div', 'calendar__row'); row.dataset.date = d.toDateString();
      var day = el('div', 'calendar__day');
      day.appendChild(el('strong', null, pad2(d.getDate())));
      var wd = el('small');
      wd.appendChild(el('span', 'd-full', dayName(d)));
      wd.appendChild(el('span', 'd-short', t('dshort')[d.getDay()]));
      day.appendChild(wd);
      row.appendChild(day);
      blocks(d).forEach(function (b) {
        var len = b.end - b.start, fits = b.free && len >= dur;
        var selected = state.sel && state.sel.day.getTime() === d.getTime() && state.sel.start === b.start;
        var cell = el('div', 'calendar__cell ' + (b.free ? 'calendar__cell--free' : 'calendar__cell--booked') + (b.free && !fits ? ' calendar__cell--short' : '') + (selected ? ' is-selected' : ''));
        var ev = el('div', 'calendar__event');
        ev.appendChild(el('span', 'spacer'));
        var time = el('time', null); time.dateTime = fmtTime(b.start);
        time.appendChild(document.createTextNode(fmtTime(b.start)));
        if (b.free) time.appendChild(el('i', 'sq' + (fits ? '' : ' sq--no')));
        ev.appendChild(time);
        ev.appendChild(el('h4', null, b.free ? t('free') : t('booked')));
        var h5 = el('h5', null, t('until') + ' ' + fmtTime(b.end));
        ev.appendChild(h5);
        if (b.free && !fits) cell.title = t('tooShort') + ' ' + SERVICES[state.service].short[lang] + ' (' + dur + NB + t('min') + ')';
        cell.appendChild(ev);
        if (fits) {
          var a = el('a', 'calendar__link'); a.href = '#timar';
          a.setAttribute('aria-label', t('free') + ' ' + dayName(d) + ' ' + fmtTime(b.start));
          a.addEventListener('click', function (e) { e.preventDefault(); selectBlock(d, b, false); });
          cell.appendChild(a);
        }
        row.appendChild(cell);
      });
      /* Phones get one line per FREE block and a single muted line for the booked spans.
         The booked times are still stated, which is the page's whole thesis, but three
         stacked lines per block turned one month into 5,000px of scroll. Both forms are
         in the DOM and CSS picks one, so a rotation cannot strand the wrong one. */
      var bk = blocks(d).filter(function (b) { return !b.free; });
      if (bk.length) {
        var sum = el('div', 'calendar__booked');
        sum.appendChild(el('span', 'calendar__booked-lbl', t('booked')));
        sum.appendChild(el('span', null, bk.map(function (b) { return fmtTime(b.start) + '\u2013' + fmtTime(b.end); }).join(' \u00b7 ')));
        row.appendChild(sum);
      }
      calRows.appendChild(row);
      if (state.sel && state.sel.day.getTime() === d.getTime()) calRows.appendChild(renderForm());
    });
  }
  calPrev.addEventListener('click', function () { if (state.cal > 0) { state.cal--; renderCal(); } });
  calNext.addEventListener('click', function () { if (state.cal < MAX_CAL) { state.cal++; renderCal(); } });
  calMore.addEventListener('click', function (e) { e.preventDefault(); if (state.cal < MAX_CAL) { state.cal++; renderCal(); scrollToNode($('#timar'), 0); } });

  function selectBlock(d, b, fromAgenda) {
    var dur = SERVICES[state.service].dur;
    if (b.end - b.start < dur) {
      /* the agenda row promised room; pick the longest service that fits */
      var k = SVC_KEYS.filter(function (k) { return SERVICES[k].dur <= b.end - b.start; }).sort(function (a, c) { return SERVICES[c].dur - SERVICES[a].dur; })[0];
      if (!k) return; state.service = k; renderFilter();
    }
    state.sel = { day: d, start: b.start, end: b.end, time: b.start, done: false };
    var off = (d.getFullYear() - TODAY.getFullYear()) * 12 + (d.getMonth() - TODAY.getMonth());
    if (off !== state.cal) state.cal = off;
    renderCal();
    var row = calRows.querySelector('.calendar__row[data-date="' + d.toDateString() + '"]');
    scrollToNode(row, fromAgenda ? 20 : 0);
    var first = calRows.querySelector('.form input');
    if (first && !fromAgenda && window.matchMedia('(min-width:1024px)').matches) setTimeout(function () { first.focus({ preventScroll: true }); }, 500);
  }

  /* ---------------- the Verkbeiðni panel ---------------- */
  var formVals = {};
  function renderForm() {
    var s = state.sel, svc = SERVICES[state.service];
    var wrap = el('div', 'calendar__form'); wrap.id = 'bookForm';
    var date = el('div', 'form__date');
    date.appendChild(el('strong', null, pad2(s.day.getDate())));
    date.appendChild(el('small', null, dayName(s.day)));
    date.appendChild(el('em', null, fmtTime(s.time) + '–' + fmtTime(s.time + svc.dur)));
    wrap.appendChild(date);

    if (s.done) {
      var done = el('div', 'form__done');
      done.appendChild(el('h3', null, t('done') + ' · ' + (formVals.plate || '').toUpperCase()));
      var ul = el('ul');
      [svc[lang], dayName(s.day) + ' ' + fmtDM(s.day) + ' ' + fmtTime(s.time), svc.dur + NB + t('min') + ' · ' + svcPrice(svc)]
        .forEach(function (line) { ul.appendChild(el('li', null, line)); });
      done.appendChild(ul);
      done.appendChild(el('p', null, t('done_p')));
      done.appendChild(el('p', 'form__demo', t('demo')));
      wrap.appendChild(done);
      return wrap;
    }

    var form = el('form', 'form'); form.noValidate = false; form.setAttribute('autocomplete', 'on');
    /* start times inside the block, every 15 minutes that still fits */
    var g1 = el('div', 'form__group'); g1.appendChild(el('span', 'form__label', t('f_start')));
    var st = el('div', 'form__starts'); st.setAttribute('role', 'radiogroup');
    var opts = starts(s, svc.dur); if (opts.indexOf(s.time) < 0) s.time = opts[0];
    opts.slice(0, 8).forEach(function (m) {
      var b = el('button', null, fmtTime(m)); b.type = 'button'; b.setAttribute('role', 'radio'); b.setAttribute('aria-checked', m === s.time ? 'true' : 'false');
      b.addEventListener('click', function () { s.time = m; keep(form); renderCal(); });
      st.appendChild(b);
    });
    g1.appendChild(st); form.appendChild(g1);
    /* service, as ● radios; changing it re-checks the fit */
    var g2 = el('div', 'form__group'); g2.appendChild(el('span', 'form__label', t('f_service')));
    var sv = el('div', 'form__svcs'); sv.setAttribute('role', 'radiogroup');
    SVC_KEYS.forEach(function (k) {
      var x = SERVICES[k], fits = x.dur <= s.end - s.start;
      var b = el('button', null); b.type = 'button'; b.setAttribute('role', 'radio'); b.setAttribute('aria-checked', k === state.service ? 'true' : 'false'); b.disabled = !fits;
      b.appendChild(el('i', 'gl gl-circle')); b.appendChild(el('span', null, x[lang] + ' · ' + x.dur + NB + t('min') + ' · ' + svcPrice(x)));
      if (!fits) b.style.opacity = '.35';
      b.addEventListener('click', function () { state.service = k; keep(form); renderFilter(); renderCal(); });
      sv.appendChild(b);
    });
    g2.appendChild(sv); form.appendChild(g2);
    [['name', 'f_name', 'text', 'name'], ['tel', 'f_phone', 'tel', 'tel'], ['plate', 'f_plate', 'text', 'off'], ['email', 'f_email', 'email', 'email']].forEach(function (f) {
      var lab = el('label', 'form__item'); lab.appendChild(el('span', null, t(f[1])));
      var inp = el('input'); inp.name = f[0]; inp.type = f[2]; inp.required = f[0] !== 'email'; inp.autocomplete = f[3]; inp.value = formVals[f[0]] || '';
      if (f[0] === 'plate') { inp.style.textTransform = 'uppercase'; inp.maxLength = 8; }
      lab.appendChild(inp); form.appendChild(lab);
    });
    var sub = el('button', 'form__submit'); sub.type = 'submit';
    sub.appendChild(el('i', 'banner__arrow')); sub.appendChild(el('span', null, t('f_submit'))); sub.appendChild(el('i', 'gl gl-square banner__sq'));
    form.appendChild(sub);
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      if (!form.checkValidity()) { var bad = form.querySelector(':invalid'); if (bad) bad.focus(); form.reportValidity(); return; }
      keep(form); s.done = true; renderCal();
      scrollToNode(calRows.querySelector('#bookForm'), 20);
    });
    wrap.appendChild(form);
    return wrap;
  }
  function keep(form) { ['name', 'tel', 'plate', 'email'].forEach(function (k) { if (form[k]) formVals[k] = form[k].value; }); }

  /* ---------------- 04 service tiles ---------------- */
  function renderTiles() {
    svcTiles.innerHTML = '';
    SVC_KEYS.forEach(function (k) {
      var s = SERVICES[k], art = el('article', 'tile');
      var a = el('a', 'tile__link'); a.href = '#timar'; a.setAttribute('aria-label', s[lang]);
      a.addEventListener('click', function (e) { e.preventDefault(); state.service = k; renderFilter(); renderCal(); scrollToNode($('#timar'), 0); });
      art.appendChild(a);
      var c = el('div', 'tile__content');
      c.appendChild(el('p', 'tile__category', s.cat[lang]));
      var im = el('div', 'tile__image'); var img = el('img', 'preload'); img.src = s.img; img.alt = ''; img.loading = 'lazy'; img.width = 1600; img.height = 1067;
      if (k === 'greining') img.style.objectPosition = '50% 40%';
      im.appendChild(img); c.appendChild(im); watchImg(img);
      var tx = el('div', 'tile__text');
      var date = el('p', 'tile__date'); date.appendChild(el('i', 'gl gl-tri'));
      var pr = el('strong', 'roll', svcPrice(s)); pr.dataset.hover = svcPrice(s); date.appendChild(pr); tx.appendChild(date);
      var h3 = el('h3', 'tile__title'); var ti = el('i', 'roll', s[lang]); ti.dataset.hover = s[lang]; h3.appendChild(ti); tx.appendChild(h3);
      tx.appendChild(el('p', 'tile__author', s.dur + NB + t('min') + ' · ' + s.sub[lang]));
      c.appendChild(tx); art.appendChild(c); svcTiles.appendChild(art);
    });
  }

  /* ---------------- language ---------------- */
  function applyLang() {
    document.documentElement.lang = lang;
    document.body.dataset.lang = lang;
    document.querySelectorAll('[data-i18n]').forEach(function (n) {
      var k = n.dataset.i18n, v = I18N[lang][k];
      if (v == null) return;
      n.textContent = v;
      if (n.classList.contains('roll')) n.dataset.hover = v;
    });
    var btn = $('#langBtn');
    btn.textContent = lang === 'is' ? 'EN' : 'IS';
    btn.setAttribute('aria-label', lang === 'is' ? 'Switch to English' : 'Skipta yfir á íslensku');
    document.title = lang === 'is' ? 'Bílaverkstæði í Kópavogi | Magma Motors' : 'Car workshop in Kópavogur | Magma Motors';
    renderAgendaDays(); renderAgendaList(); renderFilter(); renderCal(); renderTiles();
  }
  $('#langBtn').addEventListener('click', function () { lang = lang === 'is' ? 'en' : 'is'; localStorage.setItem('mm-lang', lang); applyLang(); });

  /* ---------------- scrolling: header hides on the way down (measured −97px) ---------------- */
  var lastY = window.scrollY, HEADER = 100;
  function scrollToNode(node, extra) {
    if (!node) return;
    var y = window.scrollY + node.getBoundingClientRect().top - HEADER - (extra || 0);
    window.scrollTo({ top: Math.max(0, y), behavior: STATIC ? 'auto' : 'smooth' });
  }
  window.addEventListener('scroll', function () {
    var y = window.scrollY;
    if (y > 120 && y > lastY + 2) document.body.classList.add('is-scrolling-down');
    else if (y < lastY - 2 || y <= 120) document.body.classList.remove('is-scrolling-down');
    lastY = y;
  }, { passive: true });
  /* anchor clicks: offset for the fixed header (Lenis is gone, so this is all it takes) */
  document.addEventListener('click', function (e) {
    var a = e.target.closest('a[href^="#"]'); if (!a || a.classList.contains('tile__link') || a.classList.contains('calendar__link')) return;
    var id = a.getAttribute('href').slice(1), node = id && document.getElementById(id);
    if (!node) return;
    e.preventDefault(); closeMenu(); scrollToNode(node, id === 'top' ? 200 : 0);
  });

  /* ---------------- mobile menu ---------------- */
  var menuBtn = $('#menuBtn'), menu = $('#menu');
  function closeMenu() { menu.hidden = true; document.body.classList.remove('is-menu-open'); menuBtn.setAttribute('aria-expanded', 'false'); }
  menuBtn.addEventListener('click', function () {
    var open = menu.hidden; menu.hidden = !open; document.body.classList.toggle('is-menu-open', open); menuBtn.setAttribute('aria-expanded', open ? 'true' : 'false');
  });
  document.addEventListener('keydown', function (e) { if (e.key === 'Escape') closeMenu(); });

  /* ---------------- images: fade in as they load (.2 → 1) ---------------- */
  function watchImg(img) {
    if (img.complete && img.naturalWidth) { img.classList.add('is-loaded'); return; }
    img.addEventListener('load', function () { img.classList.add('is-loaded'); }, { once: true });
    img.addEventListener('error', function () { img.classList.add('is-loaded'); }, { once: true });
  }
  document.querySelectorAll('img.preload').forEach(watchImg);

  /* ---------------- boot ---------------- */
  var STATIC = /[?&]static=1/.test(location.search);
  if (STATIC) document.body.classList.add('static');
  applyLang();
  var ready = (document.fonts && document.fonts.ready) ? document.fonts.ready : Promise.resolve();
  ready.then(function () { requestAnimationFrame(function () { document.body.classList.remove('is-loading'); }); });
  setTimeout(function () { document.body.classList.remove('is-loading'); }, 1200);
})();
