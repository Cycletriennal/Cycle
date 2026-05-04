/* =================================================================
   substitutions.js
   Module de gestion des lectures substitutives pour le cycle triennal
   Couvre la fenêtre 1 Nissan 5783 → 29 Adar II 5790 (mars 2023 → mars 2030)

   Conforme à Michna Méguila 3:4-6 :
   - 4 Parshiot remplacent intégralement la lecture (Méguila 3:4)
   - Yom Tov a sa lecture propre (Méguila 3:5)
   - Hanouka : offrandes des princes (Méguila 3:6)

   Lectures Ketouvim (additionnelles) :
   - Pessah  → Chir HaChirim (Pessah I, VII, HM)
   - Chavouot → Ruth
   - Souccot → Kohelet (Souccot I, HM)
   - Roch Hachana → Daniel (intégral)
   - Yom Kippour → Job (intégral)
   - Hanouka → Esdras + Néhémie
   - 4 Parshiot → Chroniques en 4 portions
   ================================================================= */

(function (global) {
  'use strict';

  // -------------------------------------------------------------
  // EPOCH du cycle : 1 Nissan 5783 = jeudi 23 mars 2023
  // -------------------------------------------------------------
  const TRIENNIAL_EPOCH = new Date(2023, 2, 23); // mois 0-indexé : 2 = mars

  // -------------------------------------------------------------
  // Helpers
  // -------------------------------------------------------------
  function ymd(d) {
    const y = d.getFullYear();
    const m = String(d.getMonth() + 1).padStart(2, '0');
    const dd = String(d.getDate()).padStart(2, '0');
    return y + '-' + m + '-' + dd;
  }

  // Trouve le chabat (samedi) contenant ou suivant cette date
  function chabatOf(date) {
    const d = new Date(date); d.setHours(0, 0, 0, 0);
    while (d.getDay() !== 6) d.setDate(d.getDate() + 1);
    return d;
  }

  // -------------------------------------------------------------
  // Découpage des Chroniques en 4 portions thématiques
  // I-II Chroniques = 65 chapitres au total (29 + 36)
  // -------------------------------------------------------------
  const CHRONICLES_PARTS = {
    Shekalim: { fr: 'I Chroniques 1–16',     he: 'דברי הימים א׳ א׳–ט״ז',     ref: 'I_Chronicles.1-16',
                theme: 'Généalogies, début du règne de David' },
    Zakhor:   { fr: 'I Chroniques 17–29',    he: 'דברי הימים א׳ י״ז–כ״ט',    ref: 'I_Chronicles.17-29',
                theme: 'Préparation du Temple, mort de David' },
    Para:     { fr: 'II Chroniques 1–20',    he: 'דברי הימים ב׳ א׳–כ׳',      ref: 'II_Chronicles.1-20',
                theme: 'Salomon, dédicace du Temple, premiers rois' },
    HaHodesh: { fr: 'II Chroniques 21–36',   he: 'דברי הימים ב׳ כ״א–ל״ו',    ref: 'II_Chronicles.21-36',
                theme: 'Rois tardifs, Pessah de Yoshiyahu, exil et retour' }
  };

  // -------------------------------------------------------------
  // Catalogue des lectures substitutives (Torah)
  // Conformes à Michna Méguila 3:5-6
  // -------------------------------------------------------------
  const TORAH_READINGS = {
    Pessah_I:        { fr: 'Lévitique 22,26 – 23,44',  he: 'ויקרא כ״ב, כ״ו – כ״ג, מ״ד', ref: 'Leviticus.22.26-23.44',  label: 'Pessah I — parashat moadot' },
    Pessah_VII:      { fr: 'Nombres 28,16 – 25',       he: 'במדבר כ״ח, ט״ז – כ״ה',      ref: 'Numbers.28.16-25',       label: 'Pessah VII — offrandes de Pessah' },
    HM_Pessah:       { fr: 'Nombres 28,16 – 25',       he: 'במדבר כ״ח, ט״ז – כ״ה',      ref: 'Numbers.28.16-25',       label: 'Hol Hamoed Pessah — offrandes' },
    Chavouot:        { fr: 'Deutéronome 16,9 – 12',    he: 'דברים ט״ז, ט׳ – י״ב',        ref: 'Deuteronomy.16.9-12',    label: 'Chavouot — shiva shavouot' },
    RH_I:            { fr: 'Nombres 29,1 – 6',         he: 'במדבר כ״ט, א׳ – ו׳',         ref: 'Numbers.29.1-6',         label: 'Roch Hachana I — bachodesh hashvii' },
    YK:              { fr: 'Lévitique 16',             he: 'ויקרא ט״ז',                 ref: 'Leviticus.16',           label: 'Yom Kippour — aharei mot' },
    Sukkot_I:        { fr: 'Lévitique 22,26 – 23,44',  he: 'ויקרא כ״ב, כ״ו – כ״ג, מ״ד', ref: 'Leviticus.22.26-23.44',  label: 'Souccot I — parashat moadot' },
    HM_Sukkot_3:     { fr: 'Nombres 29,20 – 22',       he: 'במדבר כ״ט, כ׳ – כ״ב',       ref: 'Numbers.29.20-22',       label: 'Hol Hamoed Souccot — 3ᵉ jour' },
    HM_Sukkot_5:     { fr: 'Nombres 29,26 – 28',       he: 'במדבר כ״ט, כ״ו – כ״ח',      ref: 'Numbers.29.26-28',       label: 'Hol Hamoed Souccot — 5ᵉ jour' },
    HM_Sukkot_6:     { fr: 'Nombres 29,29 – 31',       he: 'במדבר כ״ט, כ״ט – ל״א',      ref: 'Numbers.29.29-31',       label: 'Hol Hamoed Souccot — 6ᵉ jour' },
    Shemini_Atseret: { fr: 'Nombres 29,35 – 39',       he: 'במדבר כ״ט, ל״ה – ל״ט',      ref: 'Numbers.29.35-39',       label: 'Chemini Atseret — offrandes du 8ᵉ jour' },
    Hanouka:         { fr: 'Nombres 7 (offrandes des princes)', he: 'במדבר ז׳',          ref: 'Numbers.7',              label: 'Hanouka — nesi’im' },
    Shekalim:        { fr: 'Exode 30,11 – 16',         he: 'שמות ל׳, י״א – ט״ז',         ref: 'Exodus.30.11-16',        label: 'Chabat Chekalim' },
    Zakhor:          { fr: 'Deutéronome 25,17 – 19',   he: 'דברים כ״ה, י״ז – י״ט',      ref: 'Deuteronomy.25.17-19',   label: 'Chabat Zakhor' },
    Para:            { fr: 'Nombres 19,1 – 22',        he: 'במדבר י״ט, א׳ – כ״ב',       ref: 'Numbers.19.1-22',        label: 'Chabat Para' },
    HaHodesh:        { fr: 'Exode 12,1 – 20',          he: 'שמות י״ב, א׳ – כ׳',          ref: 'Exodus.12.1-20',         label: 'Chabat HaHodesh' },
    Rosh_Chodesh:    { fr: 'Nombres 28,1 – 15',        he: 'במדבר כ״ח, א׳ – ט״ו',       ref: 'Numbers.28.1-15',        label: 'Roch Hodech sur chabat (Yerushalmi Méguila 3:6)' },
    Shoushan_Pourim: { fr: 'Exode 17,8 – 16',          he: 'שמות י״ז, ח׳ – ט״ז',         ref: 'Exodus.17.8-16',         label: 'Shoushan Pourim — Vayavo Amalek (Jérusalem)' }
  };

  // -------------------------------------------------------------
  // Haftarot festives (Prophètes) — pour le module Prophètes
  // -------------------------------------------------------------
  const HAFT_READINGS = {
    Pessah_I:        { fr: 'Josué 5,2 – 6,1',          ref: 'Joshua.5.2-6.1' },
    Pessah_VII:      { fr: 'II Samuel 22,1 – 51',      ref: 'II_Samuel.22.1-51' },
    HM_Pessah:       { fr: 'Ézéchiel 37,1 – 14',       ref: 'Ezekiel.37.1-14' },
    Chavouot:        { fr: 'Habacuc 2,20 – 3,19',      ref: 'Habakkuk.2.20-3.19' },
    RH_I:            { fr: 'I Samuel 1,1 – 2,10',      ref: 'I_Samuel.1.1-2.10' },
    YK:              { fr: 'Isaïe 57,14 – 58,14',      ref: 'Isaiah.57.14-58.14' },
    Sukkot_I:        { fr: 'Zacharie 14,1 – 21',       ref: 'Zechariah.14.1-21' },
    HM_Sukkot_3:     { fr: 'Ézéchiel 38,18 – 39,16',   ref: 'Ezekiel.38.18-39.16' },
    HM_Sukkot_5:     { fr: 'Ézéchiel 38,18 – 39,16',   ref: 'Ezekiel.38.18-39.16' },
    HM_Sukkot_6:     { fr: 'Ézéchiel 38,18 – 39,16',   ref: 'Ezekiel.38.18-39.16' },
    Shemini_Atseret: { fr: 'I Rois 8,54 – 66',         ref: 'I_Kings.8.54-66' },
    Hanouka:         { fr: 'Zacharie 2,14 – 4,7',      ref: 'Zechariah.2.14-4.7' },
    Shekalim:        { fr: 'II Rois 12,1 – 17',        ref: 'II_Kings.12.1-17' },
    Zakhor:          { fr: 'I Samuel 15,2 – 34',       ref: 'I_Samuel.15.2-34' },
    Para:            { fr: 'Ézéchiel 36,16 – 38',      ref: 'Ezekiel.36.16-38' },
    HaHodesh:        { fr: 'Ézéchiel 45,16 – 46,18',   ref: 'Ezekiel.45.16-46.18' },
    Rosh_Chodesh:    { fr: 'Isaïe 66,1 – 24',          ref: 'Isaiah.66.1-24' },
    Shoushan_Pourim: { fr: 'I Samuel 15,2 – 34',       ref: 'I_Samuel.15.2-34' }
  };

  // -------------------------------------------------------------
  // Lectures Ketouvim (additionnelles, en plus de la Torah/Haftara)
  // -------------------------------------------------------------
  const KETUVIM = {
    Shir_HaShirim: { fr: 'Cantique des Cantiques (intégral)', he: 'שיר השירים', ref: 'Song_of_Songs' },
    Ruth:          { fr: 'Ruth (intégral)',                    he: 'רות',         ref: 'Ruth' },
    Kohelet:       { fr: 'Ecclésiaste (intégral)',             he: 'קהלת',        ref: 'Ecclesiastes' },
    Daniel:        { fr: 'Daniel (intégral, 12 chapitres)',    he: 'דניאל',       ref: 'Daniel' },
    Job:           { fr: 'Job (intégral, 42 chapitres)',       he: 'איוב',        ref: 'Job' },
    Ezra:          { fr: 'Esdras (intégral, 10 chapitres)',    he: 'עזרא',        ref: 'Ezra' },
    Nehemiah:      { fr: 'Néhémie (intégral, 13 chapitres)',   he: 'נחמיה',       ref: 'Nehemiah' },
    Ezra_Nehemiah: { fr: 'Esdras + Néhémie (intégraux)',       he: 'עזרא ונחמיה', ref: 'Ezra' /* afficher aussi Nehemiah */ },
    Esther:        { fr: 'Esther (Méguila intégrale)',         he: 'אסתר',        ref: 'Esther' }
  };

  // Pour Chroniques sur les 4 Parshiot
  function ketuvimChronicles(parshiotKind) {
    const p = CHRONICLES_PARTS[parshiotKind];
    if (!p) return null;
    return {
      fr: p.fr + ' — ' + p.theme,
      he: p.he,
      ref: p.ref
    };
  }

  // -------------------------------------------------------------
  // TABLE DES SUBSTITUTIONS — 7 ans (1 Nissan 5783 → 29 Adar II 5790)
  // Clés : date du chabat au format YYYY-MM-DD
  // -------------------------------------------------------------
  const SUBSTITUTIONS = {
    // ===== 5783 (½ année Nissan-Eloul) =====
    '2023-04-08': { type: 'additive', kind: 'HM_Pessah',       hebDate: '17 Nissan 5783', ketuvim: 'Shir_HaShirim' },

    // ===== 5784 (embolismique) =====
    '2023-09-16': { type: 'rosh_chodesh', kind: 'RH_I',            hebDate: '1 Tichri 5784',  ketuvim: 'Daniel' },
    '2023-09-30': { type: 'additive', kind: 'Sukkot_I',        hebDate: '15 Tichri 5784', ketuvim: 'Kohelet' },
    '2023-10-07': { type: 'additive', kind: 'Shemini_Atseret', hebDate: '22 Tichri 5784' },
    '2023-12-09': { type: 'festival', kind: 'Hanouka',         hebDate: '26 Kislev 5784', ketuvim: 'Ezra_Nehemiah' },
    '2024-03-09': { type: 'parshiot', kind: 'Shekalim',        hebDate: '29 Adar I 5784',  ketuvimChronicles: true },
    '2024-03-23': { type: 'parshiot', kind: 'Zakhor',          hebDate: '13 Adar II 5784', ketuvimChronicles: true },
    '2024-03-30': { type: 'parshiot', kind: 'Para',            hebDate: '20 Adar II 5784', ketuvimChronicles: true },
    '2024-04-06': { type: 'parshiot', kind: 'HaHodesh',        hebDate: '27 Adar II 5784', ketuvimChronicles: true },
    '2024-04-27': { type: 'additive', kind: 'HM_Pessah',       hebDate: '19 Nissan 5784',  ketuvim: 'Shir_HaShirim' },

    // ===== 5785 =====
    '2024-10-12': { type: 'festival', kind: 'YK',              hebDate: '10 Tichri 5785', ketuvim: 'Job' },
    '2024-10-19': { type: 'additive', kind: 'HM_Sukkot_3',     hebDate: '17 Tichri 5785', ketuvim: 'Kohelet' },
    '2024-12-28': { type: 'festival', kind: 'Hanouka',         hebDate: '27 Kislev 5785', ketuvim: 'Ezra_Nehemiah' },
    '2025-03-01': { type: 'parshiot', kind: 'Shekalim',        hebDate: '1 Adar 5785',    ketuvimChronicles: true },
    '2025-03-08': { type: 'parshiot', kind: 'Zakhor',          hebDate: '8 Adar 5785',    ketuvimChronicles: true },
    '2025-03-15': { type: 'parshiot', kind: 'Para',            hebDate: '15 Adar 5785',   ketuvimChronicles: true },
    '2025-03-29': { type: 'parshiot', kind: 'HaHodesh',        hebDate: '29 Adar 5785',   ketuvimChronicles: true },
    '2025-04-19': { type: 'additive', kind: 'Pessah_VII',      hebDate: '21 Nissan 5785', ketuvim: 'Shir_HaShirim' },

    // ===== 5786 (année actuelle) =====
    '2025-10-11': { type: 'additive', kind: 'HM_Sukkot_5',     hebDate: '19 Tichri 5786', ketuvim: 'Kohelet' },
    '2025-12-20': { type: 'festival', kind: 'Hanouka',         hebDate: '30 Kislev 5786', ketuvim: 'Ezra_Nehemiah' },
    '2026-02-14': { type: 'parshiot', kind: 'Shekalim',        hebDate: '26 Chevat 5786', ketuvimChronicles: true },
    '2026-02-28': { type: 'parshiot', kind: 'Zakhor',          hebDate: '10 Adar 5786',   ketuvimChronicles: true },
    '2026-03-07': { type: 'parshiot', kind: 'Para',            hebDate: '17 Adar 5786',   ketuvimChronicles: true },
    '2026-03-14': { type: 'parshiot', kind: 'HaHodesh',        hebDate: '24 Adar 5786',   ketuvimChronicles: true },
    '2026-04-04': { type: 'additive', kind: 'HM_Pessah',       hebDate: '17 Nissan 5786', ketuvim: 'Shir_HaShirim' },

    // ===== 5787 (embolismique) — Cycle B démarre 16 Eloul 5786 =====
    '2026-09-12': { type: 'rosh_chodesh', kind: 'RH_I',            hebDate: '1 Tichri 5787',  ketuvim: 'Daniel' },
    '2026-09-26': { type: 'additive', kind: 'Sukkot_I',        hebDate: '15 Tichri 5787', ketuvim: 'Kohelet' },
    '2026-10-03': { type: 'additive', kind: 'Shemini_Atseret', hebDate: '22 Tichri 5787' },
    '2026-12-05': { type: 'festival', kind: 'Hanouka',         hebDate: '25 Kislev 5787', ketuvim: 'Ezra' },     // 1er chabat Hanouka : Esdras
    '2026-12-12': { type: 'festival', kind: 'Hanouka',         hebDate: '2 Tevet 5787',   ketuvim: 'Nehemiah' }, // 2e chabat Hanouka : Néhémie
    '2027-03-06': { type: 'parshiot', kind: 'Shekalim',        hebDate: '27 Adar I 5787',  ketuvimChronicles: true },
    '2027-03-20': { type: 'parshiot', kind: 'Zakhor',          hebDate: '12 Adar II 5787', ketuvimChronicles: true },
    '2027-03-27': { type: 'parshiot', kind: 'Para',            hebDate: '19 Adar II 5787', ketuvimChronicles: true },
    '2027-04-03': { type: 'parshiot', kind: 'HaHodesh',        hebDate: '26 Adar II 5787', ketuvimChronicles: true },
    '2027-04-24': { type: 'additive', kind: 'HM_Pessah',       hebDate: '17 Nissan 5787',  ketuvim: 'Shir_HaShirim' },

    // ===== 5788 =====
    '2027-10-02': { type: 'rosh_chodesh', kind: 'RH_I',            hebDate: '1 Tichri 5788',  ketuvim: 'Daniel' },
    '2027-10-16': { type: 'additive', kind: 'Sukkot_I',        hebDate: '15 Tichri 5788', ketuvim: 'Kohelet' },
    '2027-10-23': { type: 'additive', kind: 'Shemini_Atseret', hebDate: '22 Tichri 5788' },
    '2027-12-25': { type: 'festival', kind: 'Hanouka',         hebDate: '25 Kislev 5788', ketuvim: 'Ezra' },
    '2028-01-01': { type: 'festival', kind: 'Hanouka',         hebDate: '2 Tevet 5788',   ketuvim: 'Nehemiah' },
    '2028-02-26': { type: 'parshiot', kind: 'Shekalim',        hebDate: '30 Chevat 5788', ketuvimChronicles: true },
    '2028-03-11': { type: 'parshiot', kind: 'Zakhor',          hebDate: '13 Adar 5788',   ketuvimChronicles: true },
    '2028-03-18': { type: 'parshiot', kind: 'Para',            hebDate: '20 Adar 5788',   ketuvimChronicles: true },
    '2028-03-25': { type: 'parshiot', kind: 'HaHodesh',        hebDate: '27 Adar 5788',   ketuvimChronicles: true },
    '2028-04-15': { type: 'additive', kind: 'HM_Pessah',       hebDate: '19 Nissan 5788', ketuvim: 'Shir_HaShirim' },

    // ===== 5789 =====
    '2028-09-30': { type: 'festival', kind: 'YK',              hebDate: '10 Tichri 5789', ketuvim: 'Job' },
    '2028-10-07': { type: 'additive', kind: 'HM_Sukkot_3',     hebDate: '17 Tichri 5789', ketuvim: 'Kohelet' },
    '2028-12-16': { type: 'festival', kind: 'Hanouka',         hebDate: '28 Kislev 5789', ketuvim: 'Ezra_Nehemiah' },
    '2029-02-10': { type: 'parshiot', kind: 'Shekalim',        hebDate: '26 Chevat 5789', ketuvimChronicles: true },
    '2029-02-24': { type: 'parshiot', kind: 'Zakhor',          hebDate: '10 Adar 5789',   ketuvimChronicles: true },
    '2029-03-03': { type: 'parshiot', kind: 'Para',            hebDate: '17 Adar 5789',   ketuvimChronicles: true },
    '2029-03-17': { type: 'parshiot', kind: 'HaHodesh',        hebDate: '1 Nissan 5789',  ketuvimChronicles: true },
    '2029-03-31': { type: 'additive', kind: 'Pessah_I',        hebDate: '15 Nissan 5789', ketuvim: 'Shir_HaShirim' },

    // ===== 5790 (½ année Tichri-Adar II, embolismique) =====
    '2029-09-29': { type: 'additive', kind: 'HM_Sukkot_6',     hebDate: '20 Tichri 5790', ketuvim: 'Kohelet' },
    '2029-12-08': { type: 'festival', kind: 'Hanouka',         hebDate: '2 Tevet 5790',   ketuvim: 'Ezra_Nehemiah' },
    '2030-03-02': { type: 'parshiot', kind: 'Shekalim',        hebDate: '27 Adar I 5790',  ketuvimChronicles: true },
    '2030-03-16': { type: 'parshiot', kind: 'Zakhor',          hebDate: '12 Adar II 5790', ketuvimChronicles: true },
    '2030-03-23': { type: 'parshiot', kind: 'Para',            hebDate: '19 Adar II 5790', ketuvimChronicles: true },
    '2030-03-30': { type: 'parshiot', kind: 'HaHodesh',        hebDate: '26 Adar II 5790', ketuvimChronicles: true },

    // ===== Roch Hodech sur chabat (Yerushalmi Méguila 3:6) =====
    // 13 chabats « purs » (excluant les 6 qui coïncident avec Roch Hachana, Shekalim, Hanouka, HaHodesh)
    '2023-04-22': { type: 'rosh_chodesh', kind: 'Rosh_Chodesh', hebDate: '1 Iyar 5783' },
    '2024-02-10': { type: 'rosh_chodesh', kind: 'Rosh_Chodesh', hebDate: '1 Adar I 5784' },
    '2024-07-06': { type: 'rosh_chodesh', kind: 'Rosh_Chodesh', hebDate: '30 Sivan 5784 (RH Tammuz)' },
    '2024-11-02': { type: 'rosh_chodesh', kind: 'Rosh_Chodesh', hebDate: '1 Heshvan 5785' },
    '2025-07-26': { type: 'rosh_chodesh', kind: 'Rosh_Chodesh', hebDate: '1 Av 5785' },
    '2026-04-18': { type: 'rosh_chodesh', kind: 'Rosh_Chodesh', hebDate: '1 Iyar 5786' },
    '2027-01-09': { type: 'rosh_chodesh', kind: 'Rosh_Chodesh', hebDate: '1 Shevat 5787' },
    '2027-05-08': { type: 'rosh_chodesh', kind: 'Rosh_Chodesh', hebDate: '1 Sivan 5787' },
    '2028-01-29': { type: 'rosh_chodesh', kind: 'Rosh_Chodesh', hebDate: '1 Shevat 5788' },
    '2028-06-24': { type: 'rosh_chodesh', kind: 'Rosh_Chodesh', hebDate: '30 Iyar 5788 (RH Sivan)' },
    '2028-10-21': { type: 'rosh_chodesh', kind: 'Rosh_Chodesh', hebDate: '1 Heshvan 5789' },
    '2029-08-11': { type: 'rosh_chodesh', kind: 'Rosh_Chodesh', hebDate: '30 Tammuz 5789 (RH Av)' },
    '2030-01-05': { type: 'rosh_chodesh', kind: 'Rosh_Chodesh', hebDate: '1 Shevat 5790' },

    // ===== Shoushan Pourim sur chabat (Jérusalem) — note : conflit avec Para 2025-03-15
    //       Para garde la priorité (4 Parshiot fixées par Mishna 3:4) =====
    // Cette entrée est commentée pour ne pas écraser Para. À discuter selon halakha :
    // '2025-03-15': { type: 'pourim', kind: 'Shoushan_Pourim', hebDate: '15 Adar 5785', ketuvim: 'Esther' },

    // ===== Extension du cycle (5790 Nissan→Av) pour atteindre 308 lectures =====
    // Le cycle s'étire au-delà du 7 ans strict pour accomoder toutes les substitutions.
    '2030-04-20': { type: 'additive',     kind: 'HM_Pessah',        hebDate: '17 Nissan 5790',  ketuvim: 'Shir_HaShirim' },
    '2030-05-04': { type: 'rosh_chodesh', kind: 'Rosh_Chodesh',     hebDate: '1 Iyar 5790' }
  };

  // -------------------------------------------------------------
  // Chavouot — note spéciale
  // Sur la fenêtre 5783-5790, Chavouot ne tombe JAMAIS sur chabat.
  // Si elle tombait, on ajouterait :
  //   { type: 'festival', kind: 'Chavouot', ketuvim: 'Ruth' }
  // -------------------------------------------------------------

  // =================================================================
  // API publique
  // =================================================================

  /**
   * Retourne les infos de substitution pour le chabat correspondant à `date`,
   * ou null si chabat régulier.
   *
   * Renvoie : {
   *   type:    'festival' | 'parshiot',
   *   kind:    'Pessah_I' | 'Hanouka' | 'Shekalim' | ...
   *   hebDate: '17 Nissan 5783',
   *   torah:   { fr, he, ref, label },
   *   haftara: { fr, ref },
   *   ketuvim: { fr, he, ref } | null
   * }
   */
  function getSubstitution(date) {
    const sat = chabatOf(date);
    const sub = SUBSTITUTIONS[ymd(sat)];
    if (!sub) return null;

    const torah = TORAH_READINGS[sub.kind];
    const haftara = HAFT_READINGS[sub.kind] || null;

    let ketuvim = null;
    if (sub.ketuvim) {
      ketuvim = KETUVIM[sub.ketuvim];
    } else if (sub.ketuvimChronicles) {
      ketuvim = ketuvimChronicles(sub.kind);
    }

    return {
      type: sub.type,
      kind: sub.kind,
      hebDate: sub.hebDate,
      torah: torah,
      haftara: haftara,
      ketuvim: ketuvim
    };
  }

  // Types de substitutions qui PAUSENT le cycle (Mishna Méguila 3:7 « לַכֹּל מַפְסִיקִין »)
  // = 4 Parshiot, Roch Hodech ordinaires, Hanouka, Yom Kippour, Pourim, jeûnes
  // Les regalim (Pessah, Souccot, Shemini Atseret) et Roch Hachana (RH I) ne sont
  // PAS dans la liste de la Mishna 3:7 — ils sont ADDITIFS (lecture régulière + maftir festif).
  const PAUSING_TYPES = { parshiot: true, festival: true, rosh_chodesh: true, pourim: true };

  function isPausing(sub) {
    return !!(sub && PAUSING_TYPES[sub.type]);
  }

  /**
   * Retourne l'index 0-153 du seder à lire sur le chabat correspondant à `date`.
   * Le compteur n'avance PAS sur les substitutions pausantes (4 Parshiot, RH ordinaire,
   * Hanouka, YK, Pourim). Les chabats additifs (regalim, RH I) AVANCENT le cycle —
   * on lit le seder régulier + le maftir festif via 2 rouleaux.
   */
  function getSederIdxForChabat(date) {
    const sat = chabatOf(date);
    const epochSat = chabatOf(TRIENNIAL_EPOCH);
    const weeksSinceEpoch = Math.floor((sat - epochSat) / (7 * 86400000));

    let pauseCount = 0;
    const targetTime = sat.getTime();
    for (const dateStr in SUBSTITUTIONS) {
      const sub = SUBSTITUTIONS[dateStr];
      if (!isPausing(sub)) continue;
      const subDate = new Date(dateStr + 'T00:00:00');
      if (subDate.getTime() < targetTime) pauseCount++;
    }

    const sederNum = weeksSinceEpoch - pauseCount;
    return ((sederNum % 154) + 154) % 154;
  }

  /**
   * Retourne la date du chabat où le seder d'index `targetIdx` (0-153) est lu.
   * Parcourt les chabats depuis EPOCH en comptant uniquement les non-substitutifs.
   */
  function getDateForSederIdx(targetIdx) {
    const epochSat = chabatOf(TRIENNIAL_EPOCH);
    let cur = new Date(epochSat);
    let regularCount = 0;
    let safety = 0;
    while (safety++ < 600) { // 600 chabats ≈ 11.5 ans : couvre largement le cycle
      const sub = SUBSTITUTIONS[ymd(cur)];
      // Le cycle continue sur les chabats sans substitution OU avec substitution additive
      if (!isPausing(sub)) {
        if (regularCount === targetIdx) return cur;
        regularCount++;
      }
      cur = new Date(cur.getTime() + 7 * 86400000);
    }
    return cur;
  }

  /**
   * Retourne le numéro de semaine (1-154) du cycle au chabat de `date`,
   * en comptant uniquement les chabats réguliers (substitutifs sautés).
   */
  function getCycleWeekForChabat(date) {
    return getSederIdxForChabat(date) + 1;
  }

  // =================================================================
  // Exposition globale
  // =================================================================
  global.TriennialSubs = {
    EPOCH: TRIENNIAL_EPOCH,
    getSubstitution: getSubstitution,
    getSederIdxForChabat: getSederIdxForChabat,
    getDateForSederIdx: getDateForSederIdx,
    getCycleWeekForChabat: getCycleWeekForChabat,
    chabatOf: chabatOf,
    isPausing: isPausing,
    ymd: ymd,
    // Exposition pour debug / extension
    TORAH_READINGS: TORAH_READINGS,
    HAFT_READINGS: HAFT_READINGS,
    KETUVIM: KETUVIM,
    SUBSTITUTIONS: SUBSTITUTIONS,
    CHRONICLES_PARTS: CHRONICLES_PARTS
  };

})(typeof window !== 'undefined' ? window : this);
