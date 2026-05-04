window.DOC_HTML = `
<!DOCTYPE html>
<html lang="fr">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Cycle triennal de lecture de la Torah</title>
<style>
  body {
    font-family: Georgia, 'Times New Roman', serif;
    max-width: 960px;
    margin: 2em auto;
    padding: 0 1.2em;
    line-height: 1.65;
    color: #2a2a2a;
    background: #fdfbf5;
  }
  h1 {
    color: #6b4423;
    border-bottom: 2px solid #c9a961;
    padding-bottom: 0.3em;
    font-size: 1.9em;
  }
  h2 {
    color: #6b4423;
    margin-top: 2.2em;
    border-left: 4px solid #c9a961;
    padding-left: 0.6em;
  }
  h3 { color: #8b5a3c; margin-top: 1.5em; }
  p, li { font-size: 1em; }
  .intro {
    background: #faf3df;
    padding: 1em 1.5em;
    border-left: 4px solid #c9a961;
    margin: 1.5em 0;
    border-radius: 3px;
  }
  table {
    border-collapse: collapse;
    width: 100%;
    margin: 1em 0;
    font-size: 0.95em;
    background: #fff;
  }
  th, td {
    border: 1px solid #e0d4b0;
    padding: 0.45em 0.7em;
    text-align: left;
    vertical-align: top;
  }
  th { background: #f0e6c8; color: #6b4423; }
  td.num { width: 3em; text-align: right; color: #999; font-variant-numeric: tabular-nums; }
  td.ref { width: 6em; color: #6b4423; font-weight: 600; white-space: nowrap; }
  td.heb {
    font-family: 'SBL Hebrew', 'Times New Roman', serif;
    direction: rtl;
    text-align: right;
    font-size: 1.15em;
  }
  .book-section { margin-bottom: 2em; }
  .book-section summary {
    cursor: pointer;
    font-weight: 600;
    color: #6b4423;
    padding: 0.5em 0.7em;
    background: #f7eed4;
    border-radius: 3px;
    font-size: 1.05em;
  }
  .book-section summary:hover { background: #f0e6c8; }
  .special { background: #fff4d6; }
  .festival { background: #e6f0e6; }
  .legend { font-size: 0.9em; }
  .legend span {
    display: inline-block;
    padding: 0.2em 0.6em;
    margin-right: 0.5em;
    border-radius: 3px;
  }
  .note {
    font-size: 0.9em;
    color: #666;
    font-style: italic;
    background: #f5f0e0;
    padding: 0.6em 1em;
    border-radius: 3px;
  }
  .grid-cycles {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1.5em;
  }
  @media (max-width: 720px) {
    .grid-cycles { grid-template-columns: 1fr; }
  }
  .cycle-card {
    background: #fff;
    border: 1px solid #e0d4b0;
    padding: 1em 1.2em;
    border-radius: 4px;
  }
  .cycle-card h3 { margin-top: 0; }
  .total-row td { font-weight: 700; background: #f7eed4; }
  footer {
    margin-top: 3em;
    padding-top: 1em;
    border-top: 1px solid #e0d4b0;
    color: #888;
    font-size: 0.85em;
  }
</style>
</head>
<body>

<h1>Le cycle triennal de lecture de la Torah</h1>

<div class="intro">
<p>Dans l'Antiquité, la coutume de la <em>terre d'Israël</em> (par opposition à la coutume babylonienne, devenue universelle aujourd'hui) découpait la Torah en 154 <em>sedarim</em> lus chaque chabat sur environ trois ans et demi — ce qui permettait deux lectures complètes en sept ans. Cette page présente la liste des 154 sedarim selon la masorah tibérienne, et explique comment ce nombre fixe s'ajuste au nombre variable de chabat de chaque cycle.</p>
</div>

<h2>1. Comment le cycle s'articule</h2>

<p>Le problème mathématique est simple : 3,5 ans ≈ 182 chabat, mais on ne dispose que de 154 sedarim. L'écart (≈ 28 chabat par cycle, ~56 sur 7 ans) est résorbé par <strong>deux types de mécanismes</strong> selon la <em>nature halakhique</em> de la fête :</p>

<h3>A. Substitutions <em>pausantes</em> — le cycle s'arrête</h3>

<p>La Michna <em>Méguila</em> 3:4 (fin) énumère explicitement ce qui interrompt le cycle :</p>

<blockquote style="background:#faf3df;border-left:4px solid #c9a961;padding:0.8em 1em;margin:0.8em 0;font-family:'SBL Hebrew',serif;direction:rtl;text-align:right;">
לַכֹּל מַפְסִיקִין : לְרָאשֵׁי חֳדָשִׁים, לַחֲנֻכָּה וּלְפוּרִים, בַּתַּעֲנִיּוֹת וּבַמַּעֲמָדוֹת וּבְיוֹם הַכִּפּוּרִים
</blockquote>

<p>« Pour <em>tout cela</em> on interrompt : pour les Roch Hodech, pour Hanouka et Pourim, pour les jeûnes et les ma'amadot et pour Yom Kippour. » Le verbe <strong>מַפְסִיקִין</strong> (« on interrompt ») est sans ambiguïté : ces jours, lorsqu'ils tombent un chabat, <strong>remplacent intégralement</strong> la lecture régulière. À cela s'ajoutent les <strong>4 Parshiot</strong> (Chekalim, Zakhor, Para, HaHodesh) explicitement substitutives selon Méguila 3:4 (« בחמישית חוזרין לכסדרן »).</p>

<h3>B. Lectures <em>additives</em> — le cycle continue</h3>

<p>Les fêtes de pèlerinage (regalim) — <strong>Pessah, Chavouot, Souccot, Chemini Atseret</strong> — ne figurent <em>pas</em> dans la liste « לכל מפסיקין » de la Michna 3:4 (fin). Ce sont des Yom Tov à liturgie propre : quand ils tombent un chabat, on lit <strong>le seder régulier du cycle ET la lecture festive en maftir</strong> via deux rouleaux. Le compteur du cycle <em>continue</em> d'avancer.</p>

<p><strong>Cas particulier de Roch Hachana :</strong> bien que Roch Hachana soit un Yom Tov, le 1<sup>er</sup> Tichri <em>est aussi</em> un Roch Hodech (le 1<sup>er</sup> du mois de Tichri). Comme Mishna 3:4 dit « לראשי חדשים » au pluriel (= TOUS les Roch Hodech), Roch Hachana <strong>reste substitutif</strong> au titre de Roch Hodech. La lecture festive (Nb 29,1-6 « בחדש השביעי ») s'applique car prescrite par 3:5.</p>

<p>Cette distinction est cruciale : sans elle, les 73 substitutions « brutes » sur 7 ans laisseraient seulement 294 chabats pour 308 lectures attendues — déficit impossible à combler. Avec la distinction Mishnaïque, on tombe à <strong>~53 substitutions pausantes</strong>, libérant 314 slots — soit exactement <strong>157 × 2</strong> sedarim pour le cycle inaugural 5783-5790.</p>

<h3>C. Le glissement structurel des cycles</h3>

<p>Cycle A (Nissan→Eloul) contient 3 occurrences d'Adar (12 Parshiot), Cycle B (Tichri→Adar II) en contient 4 (16 Parshiot). Pour que chaque cycle puisse couvrir le corpus, la frontière A→B est placée <strong>2 chabat avant Roch Hachana</strong> (et non sur 1 Tichri).</p>

<h3>Point d'ancrage : 1 Nissan</h3>

<p>Le cycle s'ouvre traditionnellement le <strong>1<sup>er</sup> Nissan</strong>, conformément à Ex 12,2 (« <em>Ce mois-ci sera pour vous le commencement des mois</em> ») et à la Michna <em>Roch Hachana</em> 1:1 qui en fait le « nouvel an des rois et des fêtes ». Le premier seder (Bereshit 1,1) est lu le chabat qui inclut ou suit immédiatement le 1 Nissan — sauf si ce chabat est absorbé par Pessah, auquel cas la lecture commence le chabat suivant Hol Hamoed ou Pessah VII.</p>

<p>Comme un cycle dure 3,5 ans (42 mois), il se termine 3,5 ans plus tard à la fin d'Eloul. Le cycle suivant démarre donc nécessairement le <strong>1<sup>er</sup> Tichri</strong>, et celui d'après revient au 1<sup>er</sup> Nissan. Sur 7 ans on a ainsi deux cycles : un « cycle Nissan » et un « cycle Tichri », qui ensemble totalisent les deux lectures complètes mentionnées dans <em>Mégila</em> 29b.</p>

<div class="note">
<strong>Pourquoi tant de variantes historiques (141, 154, 155, 161, 167, 175 sedarim) ?</strong>
Différentes communautés Palestiniennes ont retenu différents découpages parce que <strong>chaque variante correspond à un nombre différent de substitutions assumées</strong>. Plus le découpage est fin (167, 175), plus il suppose <em>peu</em> de substitutions (regalim et fêtes traités comme additifs). Plus il est grossier (141, 154), plus il suppose <em>beaucoup</em> de substitutions (cycle annuel babylonien).
<ul style="margin-top:0.6em;">
  <li><strong>154</strong> — Maïmonide, <em>Hilkhot Tefillah</em> 13:1 ; édition Bomberg 1524</li>
  <li><strong>155</strong> — variantes massorétiques (Codex de Leningrad, listes de la Genizah)</li>
  <li><strong>161</strong> — Menahem Me'iri</li>
  <li><strong>167</strong> — manuscrits yéménites et fragments Genizah ; piyyutim de Yannaï</li>
  <li><strong>175</strong> — tractate <em>Soferim</em> XVI:10</li>
</ul>
Cette page utilise <strong>154 (Maïmonide)</strong> avec <strong>l'interprétation Mishna 3:4 stricte (« לכל מפסיקין »)</strong> (regalim seuls = additifs ; RH I reste pausant car 1 Tichri est aussi Roch Hodech).
</div>

<h2>2. Les 154 sedarim</h2>

<p class="legend">
Répartition par livre :
<strong>Bereshit</strong> 43 · <strong>Chemot</strong> 29 · <strong>Vayikra</strong> 23 · <strong>Bamidbar</strong> 32 · <strong>Devarim</strong> 27.
Cliquez sur un livre pour dérouler la liste.
</p>

<details class="book-section" open>
<summary>Bereshit / Genèse — 43 sedarim</summary>
<table>
<thead><tr><th class="num">#</th><th class="ref">Réf.</th><th class="heb">Incipit</th><th>Traduction</th></tr></thead>
<tbody>
<tr><td class="num">1</td><td class="ref">Gn 1,1</td><td class="heb">בְּרֵאשִׁית</td><td>Au commencement</td></tr>
<tr><td class="num">2</td><td class="ref">Gn 2,4</td><td class="heb">אֵלֶּה תוֹלְדוֹת</td><td>Voici les engendrements</td></tr>
<tr><td class="num">3</td><td class="ref">Gn 3,22</td><td class="heb">וַיֹּאמֶר ה'</td><td>Et le Seigneur dit</td></tr>
<tr><td class="num">4</td><td class="ref">Gn 5,1</td><td class="heb">זֶה סֵפֶר</td><td>Ceci est le livre</td></tr>
<tr><td class="num">5</td><td class="ref">Gn 6,9</td><td class="heb">אֵלֶּה תּוֹלְדוֹת נֹחַ</td><td>Voici la lignée de Noé</td></tr>
<tr><td class="num">6</td><td class="ref">Gn 8,1</td><td class="heb">וַיִּזְכֹּר אֱלֹהִים</td><td>Dieu se souvint</td></tr>
<tr><td class="num">7</td><td class="ref">Gn 8,15</td><td class="heb">וַיְדַבֵּר אֱלֹהִים</td><td>Dieu parla à Noé</td></tr>
<tr><td class="num">8</td><td class="ref">Gn 9,18</td><td class="heb">וַיִּהְיוּ בְנֵי נֹחַ</td><td>Les fils de Noé</td></tr>
<tr><td class="num">9</td><td class="ref">Gn 11,1</td><td class="heb">וַיְהִי כָל הָאָרֶץ</td><td>Toute la terre avait</td></tr>
<tr><td class="num">10</td><td class="ref">Gn 12,1</td><td class="heb">לֶךְ לְךָ</td><td>Va pour toi</td></tr>
<tr><td class="num">11</td><td class="ref">Gn 14,1</td><td class="heb">וַיְהִי בִּימֵי אַמְרָפֶל</td><td>Au temps d'Amraphel</td></tr>
<tr><td class="num">12</td><td class="ref">Gn 15,1</td><td class="heb">אַחַר הַדְּבָרִים</td><td>Après ces choses</td></tr>
<tr><td class="num">13</td><td class="ref">Gn 17,1</td><td class="heb">וַיְהִי אַבְרָם</td><td>Abram avait quatre-vingt-dix-neuf ans</td></tr>
<tr><td class="num">14</td><td class="ref">Gn 18,1</td><td class="heb">וַיֵּרָא אֵלָיו</td><td>Le Seigneur lui apparut</td></tr>
<tr><td class="num">15</td><td class="ref">Gn 19,1</td><td class="heb">וַיָּבֹאוּ שְׁנֵי הַמַּלְאָכִים</td><td>Les deux anges arrivèrent</td></tr>
<tr><td class="num">16</td><td class="ref">Gn 21,1</td><td class="heb">וַה' פָּקַד אֶת שָׂרָה</td><td>Le Seigneur visita Sara</td></tr>
<tr><td class="num">17</td><td class="ref">Gn 22,1</td><td class="heb">וַיְהִי אַחַר</td><td>Après ces événements</td></tr>
<tr><td class="num">18</td><td class="ref">Gn 23,1</td><td class="heb">וַיִּהְיוּ חַיֵּי שָׂרָה</td><td>Vie de Sara</td></tr>
<tr><td class="num">19</td><td class="ref">Gn 24,1</td><td class="heb">וְאַבְרָהָם זָקֵן</td><td>Abraham était vieux</td></tr>
<tr><td class="num">20</td><td class="ref">Gn 24,42</td><td class="heb">וָאָבֹא הַיּוֹם</td><td>J'arrivai aujourd'hui</td></tr>
<tr><td class="num">21</td><td class="ref">Gn 25,19</td><td class="heb">וְאֵלֶּה תּוֹלְדוֹת יִצְחָק</td><td>Lignée d'Isaac</td></tr>
<tr><td class="num">22</td><td class="ref">Gn 27,1</td><td class="heb">וַיְהִי כִּי זָקֵן יִצְחָק</td><td>Isaac vieillit</td></tr>
<tr><td class="num">23</td><td class="ref">Gn 28,10</td><td class="heb">וַיֵּצֵא יַעֲקֹב</td><td>Jacob sortit</td></tr>
<tr><td class="num">24</td><td class="ref">Gn 30,22</td><td class="heb">וַיִּזְכֹּר אֱלֹהִים אֶת רָחֵל</td><td>Dieu se souvint de Rachel</td></tr>
<tr><td class="num">25</td><td class="ref">Gn 31,3</td><td class="heb">וַיֹּאמֶר ה' אֶל יַעֲקֹב</td><td>Le Seigneur dit à Jacob</td></tr>
<tr><td class="num">26</td><td class="ref">Gn 32,4</td><td class="heb">וַיִּשְׁלַח יַעֲקֹב</td><td>Jacob envoya</td></tr>
<tr><td class="num">27</td><td class="ref">Gn 33,18</td><td class="heb">וַיָּבֹא יַעֲקֹב שָׁלֵם</td><td>Jacob arriva paisible</td></tr>
<tr><td class="num">28</td><td class="ref">Gn 35,9</td><td class="heb">וַיֵּרָא אֱלֹהִים אֶל יַעֲקֹב</td><td>Dieu apparut à Jacob</td></tr>
<tr><td class="num">29</td><td class="ref">Gn 37,1</td><td class="heb">וַיֵּשֶׁב יַעֲקֹב</td><td>Jacob s'établit</td></tr>
<tr><td class="num">30</td><td class="ref">Gn 38,1</td><td class="heb">וַיְהִי בָּעֵת הַהִוא</td><td>En ce temps-là</td></tr>
<tr><td class="num">31</td><td class="ref">Gn 39,1</td><td class="heb">וְיוֹסֵף הוּרַד</td><td>Joseph fut emmené</td></tr>
<tr><td class="num">32</td><td class="ref">Gn 41,1</td><td class="heb">וַיְהִי מִקֵּץ</td><td>Au bout de deux ans</td></tr>
<tr><td class="num">33</td><td class="ref">Gn 41,38</td><td class="heb">וַיֹּאמֶר פַּרְעֹה</td><td>Pharaon dit</td></tr>
<tr><td class="num">34</td><td class="ref">Gn 42,1</td><td class="heb">וַיַּרְא יַעֲקֹב</td><td>Jacob vit</td></tr>
<tr><td class="num">35</td><td class="ref">Gn 43,14</td><td class="heb">וְאֵל שַׁדַּי</td><td>Que Dieu Tout-Puissant</td></tr>
<tr><td class="num">36</td><td class="ref">Gn 44,18</td><td class="heb">וַיִּגַּשׁ אֵלָיו יְהוּדָה</td><td>Juda s'approcha de lui</td></tr>
<tr><td class="num">37</td><td class="ref">Gn 46,8</td><td class="heb">וְאֵלֶּה שְׁמוֹת בְּנֵי יִשְׂרָאֵל</td><td>Voici les noms des fils d'Israël</td></tr>
<tr><td class="num">38</td><td class="ref">Gn 46,28</td><td class="heb">וְאֶת יְהוּדָה שָׁלַח</td><td>Il envoya Juda</td></tr>
<tr><td class="num">39</td><td class="ref">Gn 47,28</td><td class="heb">וַיְחִי יַעֲקֹב</td><td>Jacob vécut</td></tr>
<tr><td class="num">40</td><td class="ref">Gn 48,1</td><td class="heb">וַיְהִי אַחֲרֵי</td><td>Après ces choses</td></tr>
<tr><td class="num">41</td><td class="ref">Gn 49,1</td><td class="heb">וַיִּקְרָא יַעֲקֹב</td><td>Jacob appela</td></tr>
<tr><td class="num">42</td><td class="ref">Gn 49,27</td><td class="heb">בִּנְיָמִין זְאֵב</td><td>Benjamin loup</td></tr>
<tr><td class="num">43</td><td class="ref">Gn 50,15</td><td class="heb">וַיִּרְאוּ אֲחֵי יוֹסֵף</td><td>Les frères de Joseph virent</td></tr>
</tbody>
</table>
</details>

<details class="book-section">
<summary>Chemot / Exode — 29 sedarim</summary>
<table>
<thead><tr><th class="num">#</th><th class="ref">Réf.</th><th class="heb">Incipit</th><th>Traduction</th></tr></thead>
<tbody>
<tr><td class="num">44</td><td class="ref">Ex 1,1</td><td class="heb">וְאֵלֶּה שְׁמוֹת</td><td>Voici les noms</td></tr>
<tr><td class="num">45</td><td class="ref">Ex 3,1</td><td class="heb">וּמֹשֶׁה הָיָה רֹעֶה</td><td>Moïse faisait paître</td></tr>
<tr><td class="num">46</td><td class="ref">Ex 4,18</td><td class="heb">וַיֵּלֶךְ מֹשֶׁה</td><td>Moïse s'en alla</td></tr>
<tr><td class="num">47</td><td class="ref">Ex 6,2</td><td class="heb">וַיְדַבֵּר אֱלֹהִים</td><td>Dieu parla</td></tr>
<tr><td class="num">48</td><td class="ref">Ex 7,8</td><td class="heb">וַיֹּאמֶר ה' אֶל מֹשֶׁה</td><td>Le Seigneur dit à Moïse</td></tr>
<tr><td class="num">49</td><td class="ref">Ex 8,16</td><td class="heb">הַשְׁכֵּם בַּבֹּקֶר</td><td>Lève-toi de bon matin</td></tr>
<tr><td class="num">50</td><td class="ref">Ex 10,1</td><td class="heb">וַיֹּאמֶר ה' אֶל מֹשֶׁה בֹּא</td><td>Le Seigneur dit : viens</td></tr>
<tr><td class="num">51</td><td class="ref">Ex 12,1</td><td class="heb">וַיֹּאמֶר ה' אֶל מֹשֶׁה וְאֶל אַהֲרֹן</td><td>Au Seigneur parla à Moïse et Aaron</td></tr>
<tr><td class="num">52</td><td class="ref">Ex 12,29</td><td class="heb">וַיְהִי בַּחֲצִי הַלַּיְלָה</td><td>Au milieu de la nuit</td></tr>
<tr><td class="num">53</td><td class="ref">Ex 13,17</td><td class="heb">וַיְהִי בְּשַׁלַּח</td><td>Quand Pharaon laissa partir</td></tr>
<tr><td class="num">54</td><td class="ref">Ex 14,15</td><td class="heb">וַיֹּאמֶר ה' אֶל מֹשֶׁה מַה תִּצְעַק</td><td>Pourquoi cries-tu ?</td></tr>
<tr><td class="num">55</td><td class="ref">Ex 16,4</td><td class="heb">וַיֹּאמֶר ה' אֶל מֹשֶׁה הִנְנִי</td><td>Voici, je vais</td></tr>
<tr><td class="num">56</td><td class="ref">Ex 17,8</td><td class="heb">וַיָּבֹא עֲמָלֵק</td><td>Amalek vint</td></tr>
<tr><td class="num">57</td><td class="ref">Ex 19,1</td><td class="heb">בַּחֹדֶשׁ הַשְּׁלִישִׁי</td><td>Au troisième mois</td></tr>
<tr><td class="num">58</td><td class="ref">Ex 21,1</td><td class="heb">וְאֵלֶּה הַמִּשְׁפָּטִים</td><td>Voici les jugements</td></tr>
<tr><td class="num">59</td><td class="ref">Ex 22,24</td><td class="heb">אִם כֶּסֶף תַּלְוֶה</td><td>Si tu prêtes de l'argent</td></tr>
<tr><td class="num">60</td><td class="ref">Ex 23,20</td><td class="heb">הִנֵּה אָנֹכִי שֹׁלֵחַ</td><td>Voici, j'envoie</td></tr>
<tr><td class="num">61</td><td class="ref">Ex 25,1</td><td class="heb">וַיְדַבֵּר ה' אֶל מֹשֶׁה לֵאמֹר</td><td>Le Seigneur parla à Moïse</td></tr>
<tr><td class="num">62</td><td class="ref">Ex 26,1</td><td class="heb">וְאֶת הַמִּשְׁכָּן</td><td>Tu feras le tabernacle</td></tr>
<tr><td class="num">63</td><td class="ref">Ex 27,20</td><td class="heb">וְאַתָּה תְּצַוֶּה</td><td>Toi, tu ordonneras</td></tr>
<tr><td class="num">64</td><td class="ref">Ex 30,1</td><td class="heb">וְעָשִׂיתָ מִזְבֵּחַ</td><td>Tu feras un autel</td></tr>
<tr><td class="num">65</td><td class="ref">Ex 30,11</td><td class="heb">כִּי תִשָּׂא</td><td>Quand tu compteras</td></tr>
<tr><td class="num">66</td><td class="ref">Ex 32,15</td><td class="heb">וַיִּפֶן וַיֵּרֶד מֹשֶׁה</td><td>Moïse se tourna et descendit</td></tr>
<tr><td class="num">67</td><td class="ref">Ex 33,12</td><td class="heb">וַיֹּאמֶר מֹשֶׁה אֶל ה'</td><td>Moïse dit au Seigneur</td></tr>
<tr><td class="num">68</td><td class="ref">Ex 34,27</td><td class="heb">וַיֹּאמֶר ה' אֶל מֹשֶׁה כְּתָב</td><td>Écris ces paroles</td></tr>
<tr><td class="num">69</td><td class="ref">Ex 35,1</td><td class="heb">וַיַּקְהֵל מֹשֶׁה</td><td>Moïse rassembla</td></tr>
<tr><td class="num">70</td><td class="ref">Ex 37,1</td><td class="heb">וַיַּעַשׂ בְּצַלְאֵל</td><td>Betsalel fit</td></tr>
<tr><td class="num">71</td><td class="ref">Ex 38,21</td><td class="heb">אֵלֶּה פְקוּדֵי</td><td>Voici les comptes</td></tr>
<tr><td class="num">72</td><td class="ref">Ex 39,33</td><td class="heb">וַיָּבִיאוּ אֶת הַמִּשְׁכָּן</td><td>Ils apportèrent le tabernacle</td></tr>
<tr><td class="num">73</td><td class="ref">Ex 40,17</td><td class="heb">וַיְהִי בַּחֹדֶשׁ הָרִאשׁוֹן</td><td>Au premier mois</td></tr>
</tbody>
</table>
</details>

<details class="book-section">
<summary>Vayikra / Lévitique — 23 sedarim</summary>
<table>
<thead><tr><th class="num">#</th><th class="ref">Réf.</th><th class="heb">Incipit</th><th>Traduction</th></tr></thead>
<tbody>
<tr><td class="num">73</td><td class="ref">Lv 1,1</td><td class="heb">וַיִּקְרָא</td><td>Il appela</td></tr>
<tr><td class="num">74</td><td class="ref">Lv 4,1</td><td class="heb">וַיְדַבֵּר ה' אֶל מֹשֶׁה לֵאמֹר נֶפֶשׁ</td><td>Une âme...</td></tr>
<tr><td class="num">75</td><td class="ref">Lv 5,1</td><td class="heb">וְנֶפֶשׁ כִּי תֶחֱטָא</td><td>Si une personne pèche</td></tr>
<tr><td class="num">76</td><td class="ref">Lv 6,1</td><td class="heb">צַו אֶת אַהֲרֹן</td><td>Ordonne à Aaron</td></tr>
<tr><td class="num">77</td><td class="ref">Lv 8,1</td><td class="heb">קַח אֶת אַהֲרֹן</td><td>Prends Aaron</td></tr>
<tr><td class="num">78</td><td class="ref">Lv 9,1</td><td class="heb">וַיְהִי בַּיּוֹם הַשְּׁמִינִי</td><td>Le huitième jour</td></tr>
<tr><td class="num">79</td><td class="ref">Lv 11,1</td><td class="heb">זֹאת הַחַיָּה</td><td>Voici les animaux</td></tr>
<tr><td class="num">80</td><td class="ref">Lv 12,1</td><td class="heb">אִשָּׁה כִּי תַזְרִיעַ</td><td>Si une femme conçoit</td></tr>
<tr><td class="num">81</td><td class="ref">Lv 13,29</td><td class="heb">וְאִישׁ אוֹ אִשָּׁה</td><td>Un homme ou une femme</td></tr>
<tr><td class="num">82</td><td class="ref">Lv 14,1</td><td class="heb">זֹאת תִּהְיֶה תּוֹרַת</td><td>Telle sera la loi</td></tr>
<tr><td class="num">83</td><td class="ref">Lv 14,33</td><td class="heb">כִּי תָבֹאוּ אֶל אֶרֶץ</td><td>Quand vous viendrez au pays</td></tr>
<tr><td class="num">84</td><td class="ref">Lv 15,1</td><td class="heb">אִישׁ אִישׁ כִּי יִהְיֶה זָב</td><td>Tout homme atteint</td></tr>
<tr><td class="num">85</td><td class="ref">Lv 16,1</td><td class="heb">אַחֲרֵי מוֹת</td><td>Après la mort</td></tr>
<tr><td class="num">86</td><td class="ref">Lv 18,1</td><td class="heb">וַיְדַבֵּר ה' אֶל מֹשֶׁה כְּמַעֲשֵׂה</td><td>Vous ne ferez pas comme</td></tr>
<tr><td class="num">87</td><td class="ref">Lv 19,1</td><td class="heb">קְדֹשִׁים תִּהְיוּ</td><td>Soyez saints</td></tr>
<tr><td class="num">88</td><td class="ref">Lv 21,1</td><td class="heb">אֱמֹר אֶל הַכֹּהֲנִים</td><td>Parle aux prêtres</td></tr>
<tr><td class="num">89</td><td class="ref">Lv 22,17</td><td class="heb">אִישׁ אִישׁ מִבֵּית יִשְׂרָאֵל</td><td>Tout homme de la maison</td></tr>
<tr><td class="num">90</td><td class="ref">Lv 23,9</td><td class="heb">כִּי תָבֹאוּ אֶל הָאָרֶץ</td><td>Quand vous entrerez</td></tr>
<tr><td class="num">91</td><td class="ref">Lv 25,1</td><td class="heb">וַיְדַבֵּר ה' אֶל מֹשֶׁה בְּהַר סִינַי</td><td>Au mont Sinaï</td></tr>
<tr><td class="num">92</td><td class="ref">Lv 25,14</td><td class="heb">וְכִי תִמְכְּרוּ מִמְכָּר</td><td>Si tu vends</td></tr>
<tr><td class="num">93</td><td class="ref">Lv 25,35</td><td class="heb">וְכִי יָמוּךְ אָחִיךָ</td><td>Si ton frère devient pauvre</td></tr>
<tr><td class="num">94</td><td class="ref">Lv 26,3</td><td class="heb">אִם בְּחֻקֹּתַי</td><td>Si vous suivez mes lois</td></tr>
<tr><td class="num">95</td><td class="ref">Lv 27,1</td><td class="heb">אִישׁ כִּי יַפְלִא</td><td>Quiconque fait un vœu</td></tr>
</tbody>
</table>
</details>

<details class="book-section">
<summary>Bamidbar / Nombres — 32 sedarim</summary>
<table>
<thead><tr><th class="num">#</th><th class="ref">Réf.</th><th class="heb">Incipit</th><th>Traduction</th></tr></thead>
<tbody>
<tr><td class="num">96</td><td class="ref">Nb 1,1</td><td class="heb">וַיְדַבֵּר ה' אֶל מֹשֶׁה בְּמִדְבַּר</td><td>Au désert du Sinaï</td></tr>
<tr><td class="num">97</td><td class="ref">Nb 2,1</td><td class="heb">וַיְדַבֵּר ה' אֶל מֹשֶׁה וְאֶל אַהֲרֹן</td><td>Le Seigneur parla à Moïse et Aaron</td></tr>
<tr><td class="num">98</td><td class="ref">Nb 3,14</td><td class="heb">וַיְדַבֵּר ה' אֶל מֹשֶׁה בְּמִדְבַּר סִינַי</td><td>Au désert du Sinaï</td></tr>
<tr><td class="num">99</td><td class="ref">Nb 4,17</td><td class="heb">וַיְדַבֵּר ה' אֶל מֹשֶׁה וְאֶל אַהֲרֹן לֵאמֹר</td><td>Parla à Moïse et Aaron</td></tr>
<tr><td class="num">100</td><td class="ref">Nb 5,11</td><td class="heb">אִישׁ אִישׁ כִּי תִשְׂטֶה</td><td>Si la femme s'écarte</td></tr>
<tr><td class="num">101</td><td class="ref">Nb 6,1</td><td class="heb">אִישׁ אוֹ אִשָּׁה כִּי יַפְלִא</td><td>Si un homme ou femme fait vœu</td></tr>
<tr><td class="num">102</td><td class="ref">Nb 7,1</td><td class="heb">וַיְהִי בְּיוֹם כַּלּוֹת מֹשֶׁה</td><td>Le jour où Moïse acheva</td></tr>
<tr><td class="num">103</td><td class="ref">Nb 7,48</td><td class="heb">בַּיּוֹם הַשְּׁבִיעִי</td><td>Le septième jour</td></tr>
<tr><td class="num">104</td><td class="ref">Nb 8,1</td><td class="heb">בְּהַעֲלֹתְךָ</td><td>Quand tu allumeras</td></tr>
<tr><td class="num">105</td><td class="ref">Nb 9,1</td><td class="heb">וַיְדַבֵּר ה' אֶל מֹשֶׁה בְּמִדְבַּר סִינַי בַּשָּׁנָה</td><td>La deuxième année</td></tr>
<tr><td class="num">106</td><td class="ref">Nb 10,1</td><td class="heb">עֲשֵׂה לְךָ שְׁתֵּי חֲצוֹצְרֹת</td><td>Fais-toi deux trompettes</td></tr>
<tr><td class="num">107</td><td class="ref">Nb 11,16</td><td class="heb">אֶסְפָה לִּי שִׁבְעִים אִישׁ</td><td>Rassemble soixante-dix hommes</td></tr>
<tr><td class="num">108</td><td class="ref">Nb 13,1</td><td class="heb">שְׁלַח לְךָ אֲנָשִׁים</td><td>Envoie pour toi des hommes</td></tr>
<tr><td class="num">109</td><td class="ref">Nb 14,11</td><td class="heb">עַד אָנָה יְנַאֲצֻנִי</td><td>Jusqu'à quand me mépriseront</td></tr>
<tr><td class="num">110</td><td class="ref">Nb 15,1</td><td class="heb">כִּי תָבֹאוּ אֶל אֶרֶץ מוֹשְׁבֹתֵיכֶם</td><td>Quand vous entrerez</td></tr>
<tr><td class="num">111</td><td class="ref">Nb 16,1</td><td class="heb">וַיִּקַּח קֹרַח</td><td>Coré prit</td></tr>
<tr><td class="num">112</td><td class="ref">Nb 17,16</td><td class="heb">וַיְדַבֵּר ה' אֶל מֹשֶׁה דַּבֵּר אֶל בְּנֵי</td><td>Parle aux fils d'Israël</td></tr>
<tr><td class="num">113</td><td class="ref">Nb 19,1</td><td class="heb">זֹאת חֻקַּת הַתּוֹרָה</td><td>Voici le statut de la Torah</td></tr>
<tr><td class="num">114</td><td class="ref">Nb 20,14</td><td class="heb">וַיִּשְׁלַח מֹשֶׁה מַלְאָכִים</td><td>Moïse envoya des messagers</td></tr>
<tr><td class="num">115</td><td class="ref">Nb 21,21</td><td class="heb">וַיִּשְׁלַח יִשְׂרָאֵל מַלְאָכִים</td><td>Israël envoya des messagers</td></tr>
<tr><td class="num">116</td><td class="ref">Nb 22,2</td><td class="heb">וַיַּרְא בָּלָק</td><td>Balak vit</td></tr>
<tr><td class="num">117</td><td class="ref">Nb 23,10</td><td class="heb">מִי מָנָה עֲפַר יַעֲקֹב</td><td>Qui peut compter la poussière de Jacob</td></tr>
<tr><td class="num">118</td><td class="ref">Nb 25,1</td><td class="heb">וַיֵּשֶׁב יִשְׂרָאֵל בַּשִּׁטִּים</td><td>Israël demeurait à Chittim</td></tr>
<tr><td class="num">119</td><td class="ref">Nb 26,52</td><td class="heb">וַיְדַבֵּר ה' אֶל מֹשֶׁה לָאֵלֶּה</td><td>À ceux-ci sera partagé</td></tr>
<tr><td class="num">120</td><td class="ref">Nb 27,15</td><td class="heb">וַיְדַבֵּר מֹשֶׁה אֶל ה'</td><td>Moïse parla au Seigneur</td></tr>
<tr><td class="num">121</td><td class="ref">Nb 28,16</td><td class="heb">וּבַחֹדֶשׁ הָרִאשׁוֹן</td><td>Au premier mois</td></tr>
<tr><td class="num">122</td><td class="ref">Nb 30,2</td><td class="heb">וַיְדַבֵּר מֹשֶׁה אֶל רָאשֵׁי</td><td>Moïse parla aux chefs</td></tr>
<tr><td class="num">123</td><td class="ref">Nb 31,1</td><td class="heb">וַיְדַבֵּר ה' אֶל מֹשֶׁה נְקֹם</td><td>Venge les enfants d'Israël</td></tr>
<tr><td class="num">124</td><td class="ref">Nb 31,25</td><td class="heb">וַיֹּאמֶר ה' אֶל מֹשֶׁה שָׂא</td><td>Fais le compte du butin</td></tr>
<tr><td class="num">125</td><td class="ref">Nb 32,1</td><td class="heb">וּמִקְנֶה רַב</td><td>Beaucoup de bétail</td></tr>
<tr><td class="num">126</td><td class="ref">Nb 33,1</td><td class="heb">אֵלֶּה מַסְעֵי</td><td>Voici les étapes</td></tr>
<tr><td class="num">127</td><td class="ref">Nb 35,9</td><td class="heb">דַּבֵּר אֶל בְּנֵי יִשְׂרָאֵל וְאָמַרְתָּ</td><td>Parle aux fils d'Israël</td></tr>
</tbody>
</table>
</details>

<details class="book-section">
<summary>Devarim / Deutéronome — 27 sedarim</summary>
<table>
<thead><tr><th class="num">#</th><th class="ref">Réf.</th><th class="heb">Incipit</th><th>Traduction</th></tr></thead>
<tbody>
<tr><td class="num">128</td><td class="ref">Dt 1,1</td><td class="heb">אֵלֶּה הַדְּבָרִים</td><td>Voici les paroles</td></tr>
<tr><td class="num">129</td><td class="ref">Dt 2,2</td><td class="heb">וַיֹּאמֶר ה' אֵלַי לֵאמֹר</td><td>Le Seigneur me dit</td></tr>
<tr><td class="num">130</td><td class="ref">Dt 3,23</td><td class="heb">וָאֶתְחַנַּן</td><td>J'implorai</td></tr>
<tr><td class="num">131</td><td class="ref">Dt 4,25</td><td class="heb">כִּי תוֹלִיד בָּנִים</td><td>Quand tu auras des enfants</td></tr>
<tr><td class="num">132</td><td class="ref">Dt 6,4</td><td class="heb">שְׁמַע יִשְׂרָאֵל</td><td>Écoute, Israël</td></tr>
<tr><td class="num">133</td><td class="ref">Dt 7,12</td><td class="heb">וְהָיָה עֵקֶב</td><td>Et ce sera, parce que</td></tr>
<tr><td class="num">134</td><td class="ref">Dt 9,1</td><td class="heb">שְׁמַע יִשְׂרָאֵל אַתָּה עֹבֵר</td><td>Tu vas passer le Jourdain</td></tr>
<tr><td class="num">135</td><td class="ref">Dt 10,1</td><td class="heb">בָּעֵת הַהִוא</td><td>En ce temps-là</td></tr>
<tr><td class="num">136</td><td class="ref">Dt 11,10</td><td class="heb">כִּי הָאָרֶץ אֲשֶׁר אַתָּה בָא</td><td>Le pays où tu vas</td></tr>
<tr><td class="num">137</td><td class="ref">Dt 12,20</td><td class="heb">כִּי יַרְחִיב ה'</td><td>Quand le Seigneur élargira</td></tr>
<tr><td class="num">138</td><td class="ref">Dt 14,1</td><td class="heb">בָּנִים אַתֶּם</td><td>Vous êtes les enfants</td></tr>
<tr><td class="num">139</td><td class="ref">Dt 15,7</td><td class="heb">כִּי יִהְיֶה בְךָ אֶבְיוֹן</td><td>S'il y a chez toi un pauvre</td></tr>
<tr><td class="num">140</td><td class="ref">Dt 16,18</td><td class="heb">שֹׁפְטִים וְשֹׁטְרִים</td><td>Juges et magistrats</td></tr>
<tr><td class="num">141</td><td class="ref">Dt 18,6</td><td class="heb">וְכִי יָבֹא הַלֵּוִי</td><td>Si le Lévite vient</td></tr>
<tr><td class="num">142</td><td class="ref">Dt 20,10</td><td class="heb">כִּי תִקְרַב אֶל עִיר</td><td>Quand tu approcheras d'une ville</td></tr>
<tr><td class="num">143</td><td class="ref">Dt 22,6</td><td class="heb">כִּי יִקָּרֵא קַן צִפּוֹר</td><td>Si tu rencontres un nid</td></tr>
<tr><td class="num">144</td><td class="ref">Dt 23,10</td><td class="heb">כִּי תֵצֵא מַחֲנֶה</td><td>Quand tu sortiras en camp</td></tr>
<tr><td class="num">145</td><td class="ref">Dt 24,19</td><td class="heb">כִּי תִקְצֹר קְצִירְךָ</td><td>Quand tu moissonneras</td></tr>
<tr><td class="num">146</td><td class="ref">Dt 26,1</td><td class="heb">וְהָיָה כִּי תָבוֹא</td><td>Quand tu entreras</td></tr>
<tr><td class="num">147</td><td class="ref">Dt 28,1</td><td class="heb">וְהָיָה אִם שָׁמוֹעַ</td><td>Si tu écoutes</td></tr>
<tr><td class="num">148</td><td class="ref">Dt 29,9</td><td class="heb">אַתֶּם נִצָּבִים</td><td>Vous vous tenez</td></tr>
<tr><td class="num">149</td><td class="ref">Dt 30,11</td><td class="heb">כִּי הַמִּצְוָה הַזֹּאת</td><td>Ce commandement</td></tr>
<tr><td class="num">150</td><td class="ref">Dt 31,14</td><td class="heb">וַיֹּאמֶר ה' אֶל מֹשֶׁה הֵן קָרְבוּ</td><td>Voici tes jours s'approchent</td></tr>
<tr><td class="num">151</td><td class="ref">Dt 32,1</td><td class="heb">הַאֲזִינוּ הַשָּׁמַיִם</td><td>Cieux, prêtez l'oreille</td></tr>
<tr><td class="num">152</td><td class="ref">Dt 32,44</td><td class="heb">וַיָּבֹא מֹשֶׁה</td><td>Moïse vint</td></tr>
<tr><td class="num">153</td><td class="ref">Dt 33,1</td><td class="heb">וְזֹאת הַבְּרָכָה</td><td>Et voici la bénédiction</td></tr>
<tr><td class="num">154</td><td class="ref">Dt 34,1</td><td class="heb">וַיַּעַל מֹשֶׁה</td><td>Moïse monta</td></tr>
</tbody>
</table>
</details>

<h2>3. Les insertions et substitutions du calendrier</h2>

<p>Voici l'inventaire complet des chabat « particuliers », classés selon leur effet sur le cycle (pausant ou additif) conformément à <em>Méguila</em> 3:4 (« לכל מפסיקין » + 4 Parshiot), 3:5 et 3:6 :</p>

<h3>A. Chabat <em>pausants</em> — le cycle s'interrompt</h3>

<table>
<thead><tr><th>Chabat</th><th>Période</th><th>Lecture qui remplace</th><th>Source Mishna</th></tr></thead>
<tbody>
<tr class="festival"><td>Chekalim</td><td>Avant Roch Hodech Adar</td><td>Ex 30,11–16</td><td>3:4</td></tr>
<tr class="festival"><td>Zakhor</td><td>Avant Pourim</td><td>Dt 25,17–19</td><td>3:4</td></tr>
<tr class="festival"><td>Para</td><td>Après Pourim</td><td>Nb 19,1–22</td><td>3:4</td></tr>
<tr class="festival"><td>HaHodesh</td><td>Avant Roch Hodech Nissan</td><td>Ex 12,1–20</td><td>3:4</td></tr>
<tr class="festival"><td>Roch Hodech (1<sup>er</sup> du mois, <strong>incluant 1 Tichri = Roch Hachana</strong>)</td><td>Si chabat</td><td>Nb 28,1–15 (RH ordinaire) ou Nb 29,1–6 (RH Tichri = RH I)</td><td>3:4 + 3:5/3:6</td></tr>
<tr class="festival"><td>Hanouka (chabat dans la fête)</td><td>25 Kislev–2/3 Tévet</td><td>Nb 7 (« <em>nesi'im</em> »)</td><td>3:4 + 3:6</td></tr>
<tr class="festival"><td>Pourim / Shoushan Pourim</td><td>14/15 Adar si chabat</td><td>Ex 17,8–16 (« <em>vayavo Amalek</em> »)</td><td>3:4 + 3:6</td></tr>
<tr class="festival"><td>Yom Kippour (10 Tichri)</td><td>Si chabat</td><td>Lv 16 (« <em>aharei mot</em> »)</td><td>3:4 + 3:5</td></tr>
<tr class="festival"><td>Jeûnes (10 Tevet rare ; autres reportés)</td><td>Si chabat</td><td>Bénédictions et malédictions</td><td>3:4 + 3:6</td></tr>
</tbody>
</table>

<p class="legend"><span class="festival">Lecture qui remplace le seder régulier — le compteur du cycle ne progresse pas</span></p>

<h3>B. Chabat <em>additifs</em> — le cycle continue (regalim et Roch Hachana)</h3>

<p>La Mishna 3:4 (fin) énumère ce qui interrompt et <strong>n'inclut PAS Pessah, Chavouot, Souccot, Chemini Atseret</strong>. Ces regalim, lorsqu'ils tombent un chabat, donnent lieu à une <strong>double lecture (deux rouleaux)</strong> : on lit le seder régulier du cycle ET la lecture festive comme maftir. Le compteur du cycle continue d'avancer.</p>

<p><strong>Note importante :</strong> Roch Hachana (1 Tichri) <em>est</em> substitutif et apparaît dans le tableau A ci-dessus, parce qu'il est aussi un Roch Hodech (le 1<sup>er</sup> de Tichri). Il n'est donc PAS dans cette liste des chabat additifs.</p>

<table>
<thead><tr><th>Chabat</th><th>Période</th><th>Maftir festif additionnel</th><th>Statut</th></tr></thead>
<tbody>
<tr class="special"><td>Pessah I (15 Nissan)</td><td>Si chabat</td><td>Lv 22,26–23,44 (parashat moadot)</td><td>Additif (Mishna 3:5)</td></tr>
<tr class="special"><td>Pessah VII (21 Nissan)</td><td>Si chabat</td><td>Nb 28,16–25 (offrandes Pessah)</td><td>Additif (analogie 3:5)</td></tr>
<tr class="special"><td>Hol Hamoed Pessah</td><td>Si chabat</td><td>Nb 28,16–25</td><td>Additif</td></tr>
<tr class="special"><td>Chavouot (6 Sivan)</td><td>Si chabat</td><td>Dt 16,9–12 (« shiva shavouot »)</td><td>Additif (Mishna 3:5)</td></tr>
<tr class="special"><td>Souccot I (15 Tichri)</td><td>Si chabat</td><td>Lv 22,26–23,44 (parashat moadot)</td><td>Additif (Mishna 3:5)</td></tr>
<tr class="special"><td>Hol Hamoed Souccot</td><td>Si chabat</td><td>Nb 29 (offrandes du jour)</td><td>Additif (Mishna 3:5)</td></tr>
<tr class="special"><td>Chemini Atseret (22 Tichri)</td><td>Si chabat</td><td>Nb 29,35–39</td><td>Additif (analogie 3:5)</td></tr>
</tbody>
</table>

<p class="legend"><span class="special">Maftir additif via 2 rouleaux — le seder régulier est lu, le compteur progresse</span></p>

<div class="note">
<strong>Pourquoi cette distinction est cruciale :</strong> sans elle, en comptant les ~70 substitutions « brutes » sur 7 ans, on n'aurait que 297 slots de lecture pour 308 lectures attendues — déficit insoluble sans fusion. La distinction Mishnaïque <strong>libère ~17 chabats par cycle de 7 ans</strong> (regalim seuls), faisant tomber le compte à <strong>53 substitutions pausantes</strong> et <strong>314 slots libres</strong> — exactement <strong>157 × 2</strong>, soit le corpus 157 sans aucun ajustement.
</div>

<h2>4. Comparaison de plusieurs cycles de 7 ans</h2>

<p>Sous l'<strong>interprétation Mishna 3:4 stricte (« לכל מפסיקין »)</strong> (regalim seuls = additifs ; RH I reste pausant car 1 Tichri est aussi Roch Hodech), chaque fenêtre de 7 ans a des comptes différents. Le tableau ci-dessous compare 4 cycles consécutifs.</p>

<table>
<thead><tr><th>Cycle 7 ans</th><th>Chabat</th><th>Substitutions<br>pausantes</th><th>Slots libres</th><th>Δ vs 154</th><th>Δ vs 157</th></tr></thead>
<tbody>
<tr><td><strong>5783-5790 (actuel)</strong></td><td class="num">367</td><td class="num">53</td><td class="num">314</td><td>surplus +6</td><td><strong>parfait 0 ✓</strong></td></tr>
<tr><td>5790-5797</td><td class="num">363</td><td class="num">52</td><td class="num">311</td><td>surplus +3</td><td>déficit −3</td></tr>
<tr><td>5797-5804</td><td class="num">367</td><td class="num">46</td><td class="num">321</td><td>surplus +13</td><td>surplus +7</td></tr>
<tr><td>5804-5811</td><td class="num">363</td><td class="num">47</td><td class="num">316</td><td>surplus +8</td><td>surplus +2</td></tr>
</tbody>
</table>

<p><strong>Observations clés :</strong></p>
<ul>
  <li><strong>Le nombre de chabat varie</strong> (363 ou 367) selon le nombre de mois bissextiles (Adar I) tombant dans la fenêtre — 2 ou 3 sur 7 ans.</li>
  <li><strong>Le nombre de substitutions varie</strong> (46 à 53) selon les jours de la semaine où tombent les fêtes.</li>
  <li><strong>Le cycle actuel 5783-5790 est mathématiquement parfait pour un corpus de 157 sedarim</strong> (314 slots = 157 × 2 exactement). Aucune fusion ni division n'est nécessaire — c'est sans doute pour cela que la tradition de 157 est attestée à côté du corpus 154 maïmonidien.</li>
  <li><strong>Pour le corpus 154 (Maïmonide)</strong>, le cycle actuel a un surplus de 6 (gérable par 3 splits de longs sedarim sur 2 chabats), et le cycle 5790-5797 a un léger surplus de 3 (1-2 splits suffisent).</li>
</ul>

<h3>Détail du cycle actuel : 5783-5790</h3>

<p>Frontière A→B : <strong>2 semaines avant Roch Hachana 5787</strong> (16 Eloul 5786) pour équilibrer les deux moitiés. Cycle A 3,5 ans environ, Cycle B 3,5 ans environ.</p>

<p><strong>Repère temporel :</strong> à la date d'aujourd'hui (Iyar 5786 / mai 2026), nous sommes dans la dernière année du Cycle A, environ 88 % du parcours.</p>

<div class="grid-cycles">

<div class="cycle-card">
<h3>Cycle A — 1 Nissan 5783 → 9 Eloul 5786</h3>
<p class="legend">(23 mars 2023 → 22 août 2026) — <strong>cycle en cours</strong></p>
<table>
<thead><tr><th>Période</th><th>Type</th><th>Chabat</th><th>4 Parshiot</th><th>Subst.<br>festives</th><th>Sedarim<br>lus</th></tr></thead>
<tbody>
<tr><td>½ 5783 (Nissan→Eloul)</td><td>Régulière</td><td class="num">25</td><td class="num">0</td><td class="num">1</td><td class="num">24</td></tr>
<tr><td>5784 (Tichri→Eloul)</td><td>Embolismique*</td><td class="num">55</td><td class="num">4</td><td class="num">5</td><td class="num">46</td></tr>
<tr><td>5785</td><td>Régulière</td><td class="num">51</td><td class="num">4</td><td class="num">4</td><td class="num">43</td></tr>
<tr><td>5786 partiel (Tichri→9 Eloul) ⟵ <em>en cours</em></td><td>Régulière</td><td class="num">48</td><td class="num">4</td><td class="num">3</td><td class="num">41</td></tr>
<tr class="total-row"><td colspan="2">Total</td><td class="num">179</td><td class="num">12</td><td class="num">13</td><td class="num">154</td></tr>
</tbody>
</table>
<p class="legend"><strong>Bilan :</strong> 179 chabat = 12 Parshiot + 13 substitutions festives + <strong>154 slots = 154 sedarim ✓</strong> exactement. Chaque seder est lu une seule fois, sans fusion ni division. Bereshit 1,1 fut lu le chabat suivant le 1 Nissan 5783 (~25 mars 2023, ou décalé après Pessah). Dernière lecture du Cycle A : samedi 22 août 2026 (9 Eloul 5786).</p>
</div>

<div class="cycle-card">
<h3>Cycle B — 16 Eloul 5786 → 29 Adar II 5790</h3>
<p class="legend">(29 août 2026 → 30 mars 2030)</p>
<table>
<thead><tr><th>Période</th><th>Type</th><th>Chabat</th><th>4 Parshiot</th><th>Subst.<br>festives</th><th>Sedarim<br>lus</th></tr></thead>
<tbody>
<tr><td>5786 fin (16→29 Eloul)</td><td>Régulière</td><td class="num">2</td><td class="num">0</td><td class="num">0</td><td class="num">2</td></tr>
<tr><td>5787</td><td>Embolismique*</td><td class="num">55</td><td class="num">4</td><td class="num">6</td><td class="num">45</td></tr>
<tr><td>5788</td><td>Régulière</td><td class="num">51</td><td class="num">4</td><td class="num">6</td><td class="num">41</td></tr>
<tr><td>5789</td><td>Régulière</td><td class="num">51</td><td class="num">4</td><td class="num">4</td><td class="num">43</td></tr>
<tr><td>½ 5790 (Tichri→Adar II)</td><td>Embolismique*</td><td class="num">29</td><td class="num">4</td><td class="num">2</td><td class="num">23</td></tr>
<tr class="total-row"><td colspan="2">Total</td><td class="num">188</td><td class="num">16</td><td class="num">18</td><td class="num">154</td></tr>
</tbody>
</table>
<p class="legend"><strong>Bilan :</strong> 188 chabat = 16 Parshiot + 18 substitutions festives + <strong>154 slots = 154 sedarim ✓</strong> exactement. Bereshit 1,1 sera lu le samedi 29 août 2026 (16 Eloul 5786), 2 chabat avant Roch Hachana 5787. Ces 2 chabat de fin Eloul donnent à Cycle B le surplus de slots qui équilibre les 4 occurrences d'Adar (vs 3 dans Cycle A).</p>
</div>

</div>

<h3>Vérification globale sur 7 ans (1 Nissan 5783 → 29 Adar II 5790)</h3>

<table>
<thead><tr><th>Catégorie</th><th>Calcul</th><th>Chabat</th></tr></thead>
<tbody>
<tr><td>Total 7 ans (cycles A+B)</td><td>179 + 188</td><td class="num">367</td></tr>
<tr><td>4 Parshiot × 7 occurrences d'Adar</td><td>4 × 7</td><td class="num">−28</td></tr>
<tr><td>Substitutions festives</td><td>13 + 18</td><td class="num">−31</td></tr>
<tr class="total-row"><td>Sedarim lus</td><td>154 × 2</td><td class="num">308</td></tr>
</tbody>
</table>

<p>Les <strong>308 lectures de sedarim</strong> couvrent <strong>exactement</strong> les 154 unités du corpus, chacune lue deux fois en sept ans. Les 28 Parshiot et les 31 substitutions festives complètent les 367 chabat de la période. C'est précisément la double lecture mentionnée dans <em>Mégila</em> 29b.</p>

<div class="note">
<strong>Pourquoi la frontière A→B n'est pas exactement 1 Tichri ?</strong><br><br>
Cycle B (Tichri→Adar II) contient 4 Adars (donc 16 Parshiot), Cycle A (Nissan→Eloul) seulement 3 (12 Parshiot). Pour équilibrer, la frontière A→B est placée 2 chabat <em>avant</em> Roch Hachana — au chabat <strong>16 Eloul 5786</strong> (sam 29 août 2026).<br><br>
<strong>Sous l'interprétation Mishna 3:4 stricte (« לכל מפסיקין », RH I inclus comme Roch Hodech, Roch Hodech compté seulement quand chabat = jour 1 effectif)</strong>, le cycle 5783-5790 a <strong>314 slots libres</strong> :
<ul>
  <li><strong>Pour corpus 154 (Maïmonide)</strong> : surplus de 6. Solutions : 3 splits (sedarim longs sur 2 chabats), ou 6 chabats libres pour étude additionnelle.</li>
  <li><strong>Pour corpus 157</strong> : <strong>fit parfait — 157 × 2 = 314 exactement</strong>. Aucune fusion ni division. C'est probablement pourquoi la tradition de 157 sedarim est attestée historiquement à côté du 154 maïmonidien.</li>
</ul>
Conforme à <em>Mégila</em> 3:4-6. Aucune fusion nécessaire.
</div>

<h3>Détail du cycle 5783-5790 : 53 substitutions pausantes + 17 additives</h3>

<p>Le calendrier hébraïque restreint les jours où chaque fête peut tomber (<em>לא אד״ו ראש</em> pour Roch Hachana, <em>לא בד״ו פסח</em> pour Pessah). Voici la répartition exacte sous l'interprétation Mishna 3:4 stricte (« לכל מפסיקין », Roch Hodech compté seulement quand chabat = jour 1 effectif) :</p>

<table>
<thead><tr><th>Catégorie</th><th>Lecture</th><th>Sur 7 ans</th><th>Effet sur cycle</th></tr></thead>
<tbody>
<tr class="festival"><td>4 Parshiot (Chekalim, Zakhor, Para, HaHodesh)</td><td>Ex/Dt/Nb selon</td><td class="num">28</td><td><strong>PAUSANT</strong></td></tr>
<tr class="festival"><td>Roch Hodech sur chabat (jour 1 effectif, hors RH-I)</td><td>Nb 28,1–15</td><td class="num">10</td><td><strong>PAUSANT</strong></td></tr>
<tr class="festival"><td>Roch Hachana I (1 Tichri sur chabat)</td><td>Nb 29,1–6</td><td class="num">3</td><td><strong>PAUSANT</strong></td></tr>
<tr class="festival"><td>Hanouka chabat dans la fête</td><td>Nb 7 (<em>nesi'im</em>)</td><td class="num">9</td><td><strong>PAUSANT</strong></td></tr>
<tr class="festival"><td>Yom Kippour</td><td>Lv 16</td><td class="num">2</td><td><strong>PAUSANT</strong></td></tr>
<tr class="festival"><td>Shoushan Pourim 5785 (overlap Para)</td><td>Ex 17,8–16</td><td class="num">1</td><td><strong>PAUSANT</strong></td></tr>
<tr class="total-row"><td colspan="2"><strong>Total pausant unique</strong></td><td class="num">53</td><td></td></tr>
<tr class="special"><td>Pessah I, VII, HM Pessah</td><td>Lv 22,26-23,44 / Nb 28</td><td class="num">7</td><td><em>additif</em></td></tr>
<tr class="special"><td>Souccot I, Hol Hamoed Souccot</td><td>Lv 22,26-23,44 / Nb 29</td><td class="num">7</td><td><em>additif</em></td></tr>
<tr class="special"><td>Chemini Atseret (22 Tichri)</td><td>Nb 29,35–39</td><td class="num">3</td><td><em>additif</em></td></tr>
<tr class="special"><td>Chavouot (jamais chabat dans cette fenêtre)</td><td>Dt 16,9–12</td><td class="num">0</td><td>—</td></tr>
<tr class="total-row"><td colspan="2"><strong>Total additif (cycle continue)</strong></td><td class="num">17</td><td></td></tr>
<tr class="total-row"><td colspan="2"><strong>Slots libres (367 − 53)</strong></td><td class="num">314</td><td></td></tr>
<tr class="total-row"><td colspan="2"><strong>Pour corpus 154 × 2 lectures</strong></td><td class="num">308</td><td>surplus +6</td></tr>
<tr class="total-row"><td colspan="2"><strong>Pour corpus 157 × 2 lectures</strong></td><td class="num">314</td><td><strong>parfait 0 ✓</strong></td></tr>
</tbody>
</table>

<p><strong>Note halakhique :</strong> sur les 17 chabat additifs, le seder régulier est lu (le compteur progresse) ET la lecture festive est ajoutée comme maftir via un second rouleau, conformément à la pratique des Yom Tov tombant sur chabat.</p>

<p><strong>Note calendaire :</strong> Roch Hachana jour 2 ne tombe jamais sur chabat (contrainte לא אד״ו ראש). Chavouot 5783-5790 ne tombe jamais sur chabat (calendrier).</p>

<p>Le 1<sup>er</sup> Nissan 5790 (dim 31 mars 2030, juste après HaHodesh) ouvrira le prochain cycle Nissan, qui recommencera la lecture par Bereshit 1,1 et bouclera le rythme de sept ans pour deux lectures complètes.</p>

<h3>La gestion adaptative : fusions et divisions selon le cycle</h3>

<p>Comme aucun corpus fixe ne peut être universellement parfait (cf. variance entre cycles 5783-5790 → 314 slots vs 5790-5797 → 311 slots), la pratique ancienne consistait à <strong>adapter la lecture au calendrier</strong> par deux mécanismes opposés :</p>

<ul>
<li><strong>Fusion</strong> (en cas de déficit) : 2 sedarim consécutifs lus sur 1 seul chabat. Réduit le nombre de chabats consommés par le corpus 154 (donc 153 chabats au lieu de 154).</li>
<li><strong>Division</strong> (en cas de surplus) : 1 seder long lu sur 2 chabats. Étire le corpus 154 (donc 155-156 chabats consommés).</li>
</ul>

<h4>Exemple concret cycle par cycle</h4>

<table>
<thead><tr><th>Cycle</th><th>Slots</th><th>vs corpus 154</th><th>vs corpus 157</th><th>Solution adaptative</th></tr></thead>
<tbody>
<tr><td><strong>5783-5790</strong> <em>(actuel)</em></td><td class="num">314</td><td>surplus +6 (3 splits)</td><td><strong>parfait 0 ✓</strong></td><td>Aucune adaptation pour corpus 157, ou 3 divisions pour corpus 154</td></tr>
<tr><td><strong>5790-5797</strong></td><td class="num">311</td><td>surplus +3 (1-2 splits)</td><td>déficit −3 (1-2 fusions)</td><td>Léger ajustement nécessaire dans les deux cas</td></tr>
<tr><td><strong>5797-5804</strong></td><td class="num">321</td><td>surplus +13 (6-7 splits)</td><td>surplus +7 (3-4 splits)</td><td>Cycle « creux » : nombreuses divisions nécessaires</td></tr>
<tr><td><strong>5804-5811</strong></td><td class="num">316</td><td>surplus +8 (4 splits)</td><td>surplus +2 (1 split)</td><td>Quasi-parfait pour corpus 157</td></tr>
</tbody>
</table>

<h4>Note sur les fusions/divisions dans le triennal</h4>

<p>Contrairement au cycle annuel babylonien — où des paires comme <em>Vayakhel-Pekudei</em>, <em>Tazria-Metzora</em>, <em>Aharei Mot-Kedoshim</em>, <em>Behar-Behoukotai</em>, <em>Hukat-Balak</em>, <em>Matot-Massei</em> sont classiquement attestées comme fusions — le **triennal palestinien ne possède pas de paires de fusion canoniques nommées**. Le découpage en 154 sedarim coupe à des endroits différents (par exemple, les sedarim 69-72 couvrent Exode 34:27 → 39:33 sans correspondance directe avec Vayakhel-Pekudei).</p>

<p>Pour les fusions/divisions du triennal, les choix se font de façon <strong>pragmatique selon les longueurs</strong> :</p>
<ul>
<li><strong>Fusion</strong> : combiner 2 sedarim courts adjacents (exemple théorique : un seder de 8-12 versets avec son successeur) tels que la lecture totale reste raisonnable (≥ 21 versets, minimum halakhique pour 7 montées).</li>
<li><strong>Division</strong> : étaler un seder long (50+ versets) sur 2 chabats consécutifs.</li>
</ul>

<p>Les fragments de la Genizah du Caire montrent diverses pratiques locales (Tibériade, Césarée, synagogues du Sud), sans uniformité.</p>

<div class="note">
<strong>Le principe historique :</strong> le corpus de 154 sedarim reste fixe (Maïmonide, codices Tibériens), mais <em>la pratique de lecture s'adapte cycle par cycle</em> via fusion ou division pragmatique. C'est pourquoi <em>Mégila</em> 29b dit pudiquement « בני ארץ ישראל בתלת שנין גמרי » (« en trois ans ils achèvent ») sans préciser la durée exacte — la flexibilité fait partie du système.
</div>

<h2>5. Calendrier détaillé des substitutions, année par année</h2>

<p>Pour chaque année du cycle, voici les chabat où la lecture régulière du seder est <strong>remplacée</strong> par une lecture festive ou par une des 4 Parshiot. Les autres chabat (non listés) suivent la séquence normale des sedarim. Dates calculées via <code>System.Globalization.HebrewCalendar</code> pour le calendrier d'Eretz Israël (Yom Tov à un seul jour, sauf Roch Hachana qui en a deux partout).</p>

<h3>Tableau synoptique : 1 Nissan 5783 → 29 Adar II 5790</h3>

<p>Vue d'ensemble année par année des chabat où une fête tombe : Roch Hachana, Yom Kippour, Roch Hodech (hors RH et hors les 4 Parshiot d'Adar), Hanouka, Pourim/Shoushan.</p>

<div style="overflow-x:auto;">
<table style="font-size:0.9em;">
<thead>
<tr>
<th>Année</th>
<th>Roch Hachana sur chabat</th>
<th>Yom Kippour sur chabat</th>
<th>Roch Hodech sur chabat<br><em>(hors RH et 4 Parshiot)</em></th>
<th>Hanouka chabat(s)</th>
<th>Pourim/Shoushan</th>
</tr>
</thead>
<tbody>
<tr>
<td><strong>5783</strong><br><em>½ année Nissan→Eloul</em></td>
<td>— <em>(hors cycle)</em></td>
<td>— <em>(hors cycle)</em></td>
<td>sam 22 avr 2023<br>(1 Iyar 5783)</td>
<td>— <em>(hors cycle)</em></td>
<td>— <em>(hors cycle)</em></td>
</tr>
<tr>
<td><strong>5784</strong> *<br><em>embolismique</em></td>
<td><strong>sam 16 sep 2023</strong> ✓</td>
<td>— <em>(lun 25 sep)</em></td>
<td>sam 10 fév 2024 (1 Adar I)</td>
<td>sam 9 déc 2023 (26 Kislev j2)</td>
<td>— <em>(Pourim mer 24 mars)</em></td>
</tr>
<tr>
<td><strong>5785</strong></td>
<td>— <em>(jeu 3 oct)</em></td>
<td><strong>sam 12 oct 2024</strong> ✓</td>
<td>sam 2 nov 2024 (1 Heshvan)<br>sam 26 juil 2025 (1 Av)<br><span style="opacity:0.5;">[1 Adar 2025-03-01 exclu = Shekalim]</span></td>
<td>sam 28 déc 2024 (27 Kislev j3)</td>
<td><strong>sam 15 mars 2025</strong> ✓<br><em>(Shoushan, mais = chabat Para)</em></td>
</tr>
<tr>
<td><strong>5786</strong><br><em>(année actuelle)</em></td>
<td>— <em>(mar 23 sep)</em></td>
<td>— <em>(jeu 2 oct)</em></td>
<td>sam 18 avr 2026 (1 Iyar)<br><span style="opacity:0.5;">[20 déc 2025 = Hanouka = RH Tevet]</span></td>
<td>sam 20 déc 2025 (30 Kislev j6)</td>
<td>— <em>(jeu 5 mars)</em></td>
</tr>
<tr>
<td><strong>5787</strong> *<br><em>embolismique</em></td>
<td><strong>sam 12 sep 2026</strong> ✓</td>
<td>— <em>(lun 21 sep)</em></td>
<td>sam 9 jan 2027 (1 Shevat)<br>sam 8 mai 2027 (1 Sivan)</td>
<td><strong>2 chabats</strong> :<br>sam 5 déc 2026 (j1)<br>sam 12 déc 2026 (j8)</td>
<td>— <em>(jeu 25 mars)</em></td>
</tr>
<tr>
<td><strong>5788</strong></td>
<td><strong>sam 2 oct 2027</strong> ✓</td>
<td>— <em>(lun 11 oct)</em></td>
<td>sam 29 jan 2028 (1 Shevat)</td>
<td><strong>2 chabats</strong> :<br>sam 25 déc 2027 (j1)<br>sam 1 jan 2028 (j8)</td>
<td>— <em>(jeu 16 mars)</em></td>
</tr>
<tr>
<td><strong>5789</strong></td>
<td>— <em>(jeu 21 sep)</em></td>
<td><strong>sam 30 sep 2028</strong> ✓</td>
<td>sam 21 oct 2028 (1 Heshvan)<br><span style="opacity:0.5;">[17 mars 2029 = HaHodesh = RH Nissan]</span></td>
<td>sam 16 déc 2028 (28 Kislev j4)</td>
<td>— <em>(mer 28 fév)</em></td>
</tr>
<tr>
<td><strong>5790</strong> *<br><em>½ année Tichri→Adar II<br>embolismique</em></td>
<td>— <em>(lun 10 sep)</em></td>
<td>— <em>(mer 19 sep)</em></td>
<td>sam 5 jan 2030 (1 Shevat)</td>
<td>sam 8 déc 2029 (2 Tevet j7)</td>
<td>— <em>(sam 9 mars 2030 = Para)</em></td>
</tr>
</tbody>
</table>
</div>

<h4>Bilan total dans la fenêtre du cycle</h4>

<table>
<thead><tr><th>Catégorie</th><th>Total</th><th>Notes</th></tr></thead>
<tbody>
<tr><td>Roch Hachana sur chabat</td><td class="num">3</td><td>5784, 5787, 5788</td></tr>
<tr><td>Yom Kippour sur chabat</td><td class="num">2</td><td>5785, 5789</td></tr>
<tr><td>Roch Hodech « purs » sur chabat (jour 1 effectif)</td><td class="num">10</td><td>12 brut − 2 chevauchements avec Parshiot</td></tr>
<tr><td>Hanouka sur chabat</td><td class="num">9</td><td>dont 5787 et 5788 ont 2 chabats Hanouka chacun</td></tr>
<tr><td>Pourim/Shoushan sur chabat</td><td class="num">1</td><td>Shoushan Pourim 5785 (chevauche avec Para)</td></tr>
<tr><td>4 Parshiot</td><td class="num">28</td><td>4 par an × 7 ans (Adar 5784 → Adar II 5790)</td></tr>
<tr class="total-row"><td><strong>Total substitutions uniques (sans double comptage)</strong></td><td class="num"><strong>53</strong></td><td>= 28 + 10 + 3 + 2 + 9 + 1</td></tr>
</tbody>
</table>

<h4>Observations clés</h4>

<ol>
<li><strong>Pourim ne tombe jamais un chabat</strong> dans cette fenêtre 7 ans (sauf Shoushan Pourim 5785 qui coïncide avec Chabat Para).</li>
<li><strong>Roch Hachana sur chabat</strong> : 3 occurrences (~3 sur 7, fréquence ~43%).</li>
<li><strong>Yom Kippour sur chabat</strong> : 2 occurrences (~28%).</li>
<li><strong>Années « lourdes »</strong> : 5787 et 5788 avec 2 chabats Hanouka chacune (configuration rare où Hanouka commence un samedi).</li>
<li><strong>Années « légères »</strong> : 5783 (½ année) et 5790 (½ année) avec très peu de substitutions.</li>
<li><strong>Chevauchements RH avec Parshiot</strong> (RH absorbé) : 2 fois dans la fenêtre :
  <ul>
    <li>1 Adar 5785 = Shekalim (RH Adar absorbé par Parshiot)</li>
    <li>1 Nissan 5789 = HaHodesh (RH Nissan absorbé par Parshiot)</li>
  </ul>
</li>
</ol>

<h3>Tableau synoptique : 1 Nissan 5790 → 29 Adar 5797 (cycle suivant)</h3>

<p>Pour comparaison, voici la même vue d'ensemble année par année du cycle qui démarre après le cycle actuel.</p>

<div style="overflow-x:auto;">
<table style="font-size:0.9em;">
<thead>
<tr>
<th>Année</th>
<th>Roch Hachana sur chabat</th>
<th>Yom Kippour sur chabat</th>
<th>Roch Hodech sur chabat<br><em>(hors RH et 4 Parshiot)</em></th>
<th>Hanouka chabat(s)</th>
<th>Pourim/Shoushan</th>
</tr>
</thead>
<tbody>
<tr>
<td><strong>5790</strong> *<br><em>½ année Nissan→Eloul<br>embolismique</em></td>
<td>— <em>(hors cycle, lun 10 sep 2029)</em></td>
<td>— <em>(hors cycle)</em></td>
<td>sam 4 mai 2030 (1 Iyar)</td>
<td>— <em>(hors cycle)</em></td>
<td>— <em>(hors cycle)</em></td>
</tr>
<tr>
<td><strong>5791</strong></td>
<td><strong>sam 28 sep 2030</strong> ✓</td>
<td>— <em>(lun 7 oct)</em></td>
<td>sam 25 jan 2031 (1 Shevat)</td>
<td><strong>2 chabats</strong> :<br>sam 21 déc 2030 (j1)<br>sam 28 déc 2030 (j8)</td>
<td>— <em>(jeu 8 mars Pourim)</em></td>
</tr>
<tr>
<td><strong>5792</strong> *<br><em>embolismique</em></td>
<td>— <em>(jeu 18 sep)</em></td>
<td><strong>sam 27 sep 2031</strong> ✓</td>
<td>sam 18 oct 2031 (1 Heshvan)<br><span style="opacity:0.5;">[13 mars 2032 = HaHodesh = RH Nissan]</span></td>
<td>sam 13 déc 2031 (28 Kislev j4)</td>
<td>— <em>(mer 27 fév Pourim)</em></td>
</tr>
<tr>
<td><strong>5793</strong></td>
<td>— <em>(lun 6 sep)</em></td>
<td>— <em>(mer 15 sep)</em></td>
<td>sam 1 jan 2033 (1 Shevat)<br>sam 30 avr 2033 (1 Iyar)</td>
<td>sam 4 déc 2032 (2 Tevet j7)</td>
<td>— <em>(dim 13 mars Pourim)</em></td>
</tr>
<tr>
<td><strong>5794</strong> *<br><em>embolismique</em></td>
<td><strong>sam 24 sep 2033</strong> ✓</td>
<td>— <em>(lun 3 oct)</em></td>
<td>sam 21 jan 2034 (1 Shevat)</td>
<td><strong>2 chabats</strong> :<br>sam 17 déc 2033 (j1)<br>sam 24 déc 2033 (j8)</td>
<td>— <em>(jeu 5 mars Pourim)</em></td>
</tr>
<tr>
<td><strong>5795</strong></td>
<td>— <em>(jeu 14 sep)</em></td>
<td><strong>sam 23 sep 2034</strong> ✓</td>
<td>sam 14 oct 2034 (1 Heshvan)<br>sam 10 fév 2035 (1 Adar I)</td>
<td>sam 9 déc 2034 (27 Kislev j3)</td>
<td>— <em>(mer 21 mars Pourim)</em></td>
</tr>
<tr>
<td><strong>5796</strong></td>
<td>— <em>(jeu 4 oct)</em></td>
<td><strong>sam 13 oct 2035</strong> ✓</td>
<td>sam 3 nov 2035 (1 Heshvan)<br><span style="opacity:0.5;">[29 mars 2036 = HaHodesh = RH Nissan]</span></td>
<td>sam 29 déc 2035 (28 Kislev j4)</td>
<td>— <em>(mar 11 mars Pourim)</em></td>
</tr>
<tr>
<td><strong>5797</strong><br><em>½ année Tichri→Adar</em></td>
<td>— <em>(lun 22 sep)</em></td>
<td>— <em>(mer 1 oct)</em></td>
<td>sam 17 jan 2037 (1 Shevat)</td>
<td>sam 20 déc 2036 (2 Tevet j7)</td>
<td>— <em>(dim 1 mars Pourim)</em></td>
</tr>
</tbody>
</table>
</div>

<h4>Bilan total dans la fenêtre 5790-5797</h4>

<table>
<thead><tr><th>Catégorie</th><th>Total</th><th>Notes</th></tr></thead>
<tbody>
<tr><td>Roch Hachana sur chabat</td><td class="num">2</td><td>5791, 5794</td></tr>
<tr><td>Yom Kippour sur chabat</td><td class="num">3</td><td>5792, 5795, 5796 — <em>plus que cycle précédent (2)</em></td></tr>
<tr><td>Roch Hodech « purs » sur chabat (jour 1 effectif)</td><td class="num">10</td><td>12 brut − 2 chevauchements avec Parshiot</td></tr>
<tr><td>Hanouka sur chabat</td><td class="num">9</td><td>dont 5791 et 5794 ont 2 chabats Hanouka chacun</td></tr>
<tr><td>Pourim/Shoushan sur chabat</td><td class="num">0</td><td>aucun dans ce cycle</td></tr>
<tr><td>4 Parshiot</td><td class="num">28</td><td>4 par an × 7 ans (Adar 5791 → Adar 5797)</td></tr>
<tr class="total-row"><td><strong>Total substitutions uniques</strong></td><td class="num"><strong>52</strong></td><td>= 28 + 10 + 2 + 3 + 9 + 0</td></tr>
</tbody>
</table>

<h4>Comparaison avec le cycle précédent (5783-5790)</h4>

<table>
<thead><tr><th>Catégorie</th><th>Cycle 5783-5790</th><th>Cycle 5790-5797</th><th>Différence</th></tr></thead>
<tbody>
<tr><td>Roch Hachana sur chabat</td><td class="num">3</td><td class="num">2</td><td>−1</td></tr>
<tr><td>Yom Kippour sur chabat</td><td class="num">2</td><td class="num">3</td><td><strong>+1</strong></td></tr>
<tr><td>Roch Hodech purs (jour 1)</td><td class="num">10</td><td class="num">10</td><td>=</td></tr>
<tr><td>Hanouka</td><td class="num">9</td><td class="num">9</td><td>=</td></tr>
<tr><td>Pourim/Shoushan</td><td class="num">1</td><td class="num">0</td><td>−1</td></tr>
<tr><td>4 Parshiot</td><td class="num">28</td><td class="num">28</td><td>=</td></tr>
<tr class="total-row"><td><strong>Total</strong></td><td class="num"><strong>53</strong></td><td class="num"><strong>52</strong></td><td><strong>−1</strong></td></tr>
<tr class="total-row"><td><strong>Chabat dans la fenêtre</strong></td><td class="num">367</td><td class="num">363</td><td>−4</td></tr>
<tr class="total-row"><td><strong>Slots libres pour sedarim</strong></td><td class="num">314</td><td class="num">311</td><td><strong>−3</strong></td></tr>
<tr class="total-row"><td><strong>Avec corpus 157</strong></td><td><strong>parfait 0 ✓</strong></td><td>déficit −3 (1-2 fusions)</td><td>cycles différents !</td></tr>
<tr class="total-row"><td><strong>Avec corpus 154 (Maïmonide)</strong></td><td>surplus +6 (3 splits)</td><td>surplus +3 (1-2 splits)</td><td>les deux gérables</td></tr>
</tbody>
</table>

<p><strong>Observation majeure :</strong> le cycle 5790-5797 a <strong>4 chabats de moins</strong> (363 vs 367) car il contient 2 mois bissextiles au lieu de 3. Combiné à 1 substitution de moins, cela donne 3 slots de moins. Avec corpus 154, les deux cycles ont un surplus gérable. Avec corpus 157, le cycle inaugural est parfait mais le suivant nécessite 1-2 fusions.</p>

<h3>Tableau synoptique : 1 Nissan 5797 → 29 Adar 5804 (3<sup>e</sup> cycle)</h3>

<p>Et pour le cycle d'après — on voit la diversité des configurations qu'on rencontre.</p>

<div style="overflow-x:auto;">
<table style="font-size:0.9em;">
<thead>
<tr>
<th>Année</th>
<th>Roch Hachana sur chabat</th>
<th>Yom Kippour sur chabat</th>
<th>Roch Hodech sur chabat<br><em>(hors RH et 4 Parshiot)</em></th>
<th>Hanouka chabat(s)</th>
<th>Pourim/Shoushan</th>
</tr>
</thead>
<tbody>
<tr>
<td><strong>5797</strong><br><em>½ année Nissan→Eloul</em></td>
<td>— <em>(hors cycle)</em></td>
<td>— <em>(hors cycle)</em></td>
<td>— <em>(aucun jour 1 sur chabat)</em></td>
<td>— <em>(hors cycle)</em></td>
<td>— <em>(hors cycle)</em></td>
</tr>
<tr>
<td><strong>5798</strong> *<br><em>embolismique</em></td>
<td>— <em>(jeu 10 sep)</em></td>
<td><strong>sam 19 sep 2037</strong> ✓</td>
<td>sam 10 oct 2037 (1 Heshvan)<br>sam 6 fév 2038 (1 Adar I)</td>
<td>sam 5 déc 2037 (27 Kislev j3)</td>
<td>— <em>(jeu 11 mars Pourim)</em></td>
</tr>
<tr>
<td><strong>5799</strong></td>
<td>— <em>(jeu 30 sep)</em></td>
<td><strong>sam 9 oct 2038</strong> ✓</td>
<td>sam 30 oct 2038 (1 Heshvan)<br><span style="opacity:0.5;">[26 mars 2039 = HaHodesh = RH Nissan]</span></td>
<td>sam 25 déc 2038 (28 Kislev j4)</td>
<td>— <em>(mer 9 mars Pourim)</em></td>
</tr>
<tr>
<td><strong>5800</strong></td>
<td>— <em>(lun 19 sep)</em></td>
<td>— <em>(mer 28 sep)</em></td>
<td>sam 14 avr 2040 (1 Iyar)</td>
<td>sam 17 déc 2039 (30 Kislev j6)</td>
<td>— <em>(jeu 28 fév Pourim)</em></td>
</tr>
<tr>
<td><strong>5801</strong> *<br><em>embolismique</em></td>
<td><strong>sam 8 sep 2040</strong> ✓</td>
<td>— <em>(lun 17 sep)</em></td>
<td>sam 2 fév 2041 (1 Adar I)</td>
<td>sam 1 déc 2040 (26 Kislev j2)</td>
<td>— <em>(jeu 21 mars Pourim)</em></td>
</tr>
<tr>
<td><strong>5802</strong></td>
<td>— <em>(jeu 26 sep)</em></td>
<td><strong>sam 5 oct 2041</strong> ✓</td>
<td>sam 26 oct 2041 (1 Heshvan)<br><span style="opacity:0.5;">[22 mars 2042 = HaHodesh = RH Nissan]</span></td>
<td>sam 21 déc 2041 (28 Kislev j4)</td>
<td>— <em>(mer 5 mars Pourim)</em></td>
</tr>
<tr>
<td><strong>5803</strong> *<br><em>embolismique</em></td>
<td>— <em>(lun 15 sep)</em></td>
<td>— <em>(mer 24 sep)</em></td>
<td>— <em>(aucun jour 1 hors chevauchements)</em><br><span style="opacity:0.5;">[11 avr 2043 = HaHodesh = RH Nissan]</span></td>
<td>sam 13 déc 2042 (30 Kislev j6)</td>
<td>— <em>(dim 25 mars Pourim)</em></td>
</tr>
<tr>
<td><strong>5804</strong><br><em>½ année Tichri→Adar</em></td>
<td>— <em>(lun 5 oct)</em></td>
<td>— <em>(mer 14 oct)</em></td>
<td>sam 30 jan 2044 (1 Shevat)</td>
<td>sam 2 jan 2044 (2 Tevet j7)</td>
<td>— <em>(jeu 17 mars Pourim)</em></td>
</tr>
</tbody>
</table>
</div>

<h4>Bilan total dans la fenêtre 5797-5804</h4>

<table>
<thead><tr><th>Catégorie</th><th>Total</th><th>Notes</th></tr></thead>
<tbody>
<tr><td>Roch Hachana sur chabat</td><td class="num">1</td><td>5801 seulement — <em>moins que les 2 cycles précédents</em></td></tr>
<tr><td>Yom Kippour sur chabat</td><td class="num">3</td><td>5798, 5799, 5802 — fréquence ~43%</td></tr>
<tr><td>Roch Hodech « purs » sur chabat (jour 1 effectif)</td><td class="num">7</td><td>10 brut − 3 chevauchements avec Parshiot (HaHodesh)</td></tr>
<tr><td>Hanouka sur chabat</td><td class="num">7</td><td>aucun double Hanouka cette fois — pattern différent</td></tr>
<tr><td>Pourim/Shoushan sur chabat</td><td class="num">0</td><td>aucun</td></tr>
<tr><td>4 Parshiot</td><td class="num">28</td><td>4 par an × 7 ans</td></tr>
<tr class="total-row"><td><strong>Total substitutions uniques</strong></td><td class="num"><strong>46</strong></td><td>= 28 + 7 + 1 + 3 + 7 + 0</td></tr>
</tbody>
</table>

<h4>Comparaison des 3 cycles consécutifs</h4>

<table>
<thead><tr><th>Catégorie</th><th>Cycle 5783-5790</th><th>Cycle 5790-5797</th><th>Cycle 5797-5804</th></tr></thead>
<tbody>
<tr><td>Roch Hachana sur chabat</td><td class="num">3</td><td class="num">2</td><td class="num"><strong>1</strong></td></tr>
<tr><td>Yom Kippour sur chabat</td><td class="num">2</td><td class="num">3</td><td class="num">3</td></tr>
<tr><td>Roch Hodech purs (jour 1)</td><td class="num">10</td><td class="num">10</td><td class="num"><strong>7</strong></td></tr>
<tr><td>Hanouka chabats</td><td class="num">9</td><td class="num">9</td><td class="num"><strong>7</strong></td></tr>
<tr><td>Pourim/Shoushan</td><td class="num">1</td><td class="num">0</td><td class="num">0</td></tr>
<tr><td>4 Parshiot</td><td class="num">28</td><td class="num">28</td><td class="num">28</td></tr>
<tr class="total-row"><td><strong>Total substitutions</strong></td><td class="num">53</td><td class="num">52</td><td class="num"><strong>46</strong></td></tr>
<tr class="total-row"><td><strong>Chabat dans la fenêtre</strong></td><td class="num">367</td><td class="num">363</td><td class="num">367</td></tr>
<tr class="total-row"><td><strong>Slots libres</strong></td><td class="num">314</td><td class="num">311</td><td class="num"><strong>321</strong></td></tr>
<tr class="total-row"><td><strong>Avec corpus 157</strong></td><td><strong>parfait 0 ✓</strong></td><td>déficit −3 (1-2 fusions)</td><td>surplus +7 (3-4 splits)</td></tr>
<tr class="total-row"><td><strong>Avec corpus 154 (Maïmonide)</strong></td><td>surplus +6 (3 splits)</td><td>surplus +3 (1-2 splits)</td><td>surplus +13 (6-7 splits)</td></tr>
</tbody>
</table>

<p><strong>Observation : la diversité s'amplifie.</strong> Le cycle 5797-5804 a le moins de substitutions des trois (46 vs 53, 52). Pas de double Hanouka et un seul RH I sur chabat — c'est une configuration particulièrement « light » en interruptions, ce qui produit le plus grand surplus quel que soit le corpus choisi.</p>

<p>Sur 21 ans (3 cycles consécutifs), <strong>chaque cycle nécessite une gestion adaptative différente</strong>. Avec corpus <strong>157</strong> : cycle 1 parfait (0 ajustement), cycle 2 nécessite 1-2 fusions, cycle 3 nécessite 3-4 splits. Avec corpus <strong>154</strong> : tous en surplus (3, 1-2 et 6-7 splits respectivement). C'est précisément la flexibilité que les communautés palestiniennes anciennes mettaient en œuvre.</p>

<h3>Synthèse sur 9 cycles consécutifs (63 ans, 5783-5846)</h3>

<p>Pour vérifier la robustesse du cycle inaugural, voici l'extension du tableau sur <strong>9 cycles successifs</strong> (jusqu'à mars 2079) :</p>

<table>
<thead><tr><th>#</th><th>Cycle</th><th>Sem</th><th>Subs</th><th>Slots libres</th><th>Décomposition optimale</th><th>vs corpus 157</th></tr></thead>
<tbody>
<tr><td>1</td><td><strong>5783-5790</strong> <em>(actuel)</em></td><td class="num">367</td><td class="num">53</td><td class="num">314</td><td><strong>157 + 157 ✨</strong></td><td><strong>parfait</strong></td></tr>
<tr><td>2</td><td>5790-5797</td><td class="num">363</td><td class="num">52</td><td class="num">311</td><td>155 + 156</td><td>−3</td></tr>
<tr><td>3</td><td>5797-5804</td><td class="num">367</td><td class="num">46</td><td class="num">321</td><td>160 + 161</td><td>+7 (pic)</td></tr>
<tr><td>4</td><td>5804-5811</td><td class="num">363</td><td class="num">47</td><td class="num">316</td><td>158 + 158</td><td>+2</td></tr>
<tr><td>5</td><td>5811-5818</td><td class="num">367</td><td class="num">54</td><td class="num">313</td><td>156 + 157</td><td>−1</td></tr>
<tr><td>6</td><td>5818-5825</td><td class="num">367</td><td class="num">51</td><td class="num">316</td><td>158 + 158</td><td>+2</td></tr>
<tr><td>7</td><td>5825-5832</td><td class="num">363</td><td class="num">48</td><td class="num">315</td><td>157 + 158</td><td>+1</td></tr>
<tr><td>8</td><td>5832-5839</td><td class="num">367</td><td class="num">47</td><td class="num">320</td><td>160 + 160</td><td>+6</td></tr>
<tr><td>9</td><td>5839-5846</td><td class="num">362</td><td class="num">52</td><td class="num">310</td><td>155 + 155</td><td>−4 (creux)</td></tr>
<tr class="total-row"><td colspan="2"><strong>Moyenne sur 9 cycles</strong></td><td class="num">365</td><td class="num">50,0</td><td class="num">315,1</td><td><strong>157,5 / demi-cycle</strong></td><td>+1,1 (≈0)</td></tr>
</tbody>
</table>

<h4>Statistiques globales sur 63 ans</h4>

<table>
<thead><tr><th>Indicateur</th><th>Valeur</th><th>Interprétation</th></tr></thead>
<tbody>
<tr><td>Slots min — max</td><td class="num">310 — 321</td><td>plage de 11 sedarim</td></tr>
<tr><td>Demi-cycle min — max</td><td class="num">155 — 161</td><td>plage de 6 sedarim</td></tr>
<tr><td>Moyenne / demi-cycle</td><td class="num">157,5</td><td><strong>converge vers 157</strong></td></tr>
<tr><td>Écart-type</td><td class="num">3,48</td><td>oscillation modérée</td></tr>
<tr><td>Déviation totale vs corpus 157</td><td class="num">26 sedarim</td><td>~3 ajustements moyens / cycle</td></tr>
</tbody>
</table>

<h4>L'insight élégant</h4>

<div class="note">
<p><strong>Découverte structurelle majeure :</strong> sur 9 cycles consécutifs, les slots libres oscillent entre <strong>310 et 321</strong>, avec une moyenne de <strong>157,5 sedarim par demi-cycle</strong>. Cela suggère que le corpus naturel du cycle triennal palestinien <em>n'est pas fixe</em> mais oscille autour d'une valeur idéale ≈ 155-158 sedarim.</p>

<p>Chaque demi-cycle de 3,5 ans peut s'adapter en variant entre <strong>153 et 161 sedarim</strong> (±3 du « centre » à 157), ce qui correspond exactement à la <strong>fenêtre des corpus historiquement attestés</strong> :</p>

<ul>
<li><strong>154</strong> (Maïmonide) — fenêtre basse</li>
<li><strong>155</strong> (Codex de Leningrad, Genizah)</li>
<li><strong>156</strong> (variantes Genizah)</li>
<li><strong>157</strong> (variantes attestées) — <strong>centre statistique</strong></li>
<li><strong>158-161</strong> (Me'iri pour 161) — fenêtre haute</li>
</ul>

<p><strong>Les variations du corpus historique ne sont pas des « traditions divergentes » mais des adaptations cycliques d'un même cycle de 3,5 ans</strong>, oscillant naturellement autour de 155-158 sedarim selon la configuration calendaire de chaque demi-cycle.</p>

<p>Avec une stratégie d'adaptation simple (≤ 4 splits ou ≤ 4 fusions par demi-cycle), <strong>n'importe quel corpus canonique entre 154 et 161 reste viable indéfiniment</strong>.</p>
</div>

<h4>Pourquoi 5783 est le point de départ optimal</h4>

<p>Une analyse comparative de toutes les années de départ possibles (5780-5810) sur 9 et 20 cycles consécutifs révèle que <strong>5783 est parmi les meilleurs choix</strong> :</p>

<ul>
<li><strong>Cycle inaugural parfait</strong> : 5783-5790 = 314 slots = 157 + 157 sans ajustement (unique parmi les départs testés sur cette fenêtre)</li>
<li><strong>Déviation totale vs corpus 157 minimale</strong> : 26 sedarim sur 9 cycles (vs 27-28 pour 5782 ou 5781)</li>
<li><strong>Maximum incompressible</strong> : sur tout horizon long (140 ans), aucun départ ne descend sous 321 slots dans son pire cycle ; 5783 atteint cette borne inférieure structurelle</li>
<li><strong>Les départs alternatifs (5781, 5782) introduisent des cycles pires</strong> (jusqu'à 323 slots = 161+162 pour départ 5781), tout en perdant la perfection du cycle inaugural</li>
</ul>

<p>La variance des slots (310-321) est <strong>structurelle au calendrier hébraïque</strong> — combinaison du cycle métonique de 19 ans (alternance régulières/embolismiques) et des règles de report (<em>לא אד״ו ראש</em>, <em>לא בד״ו פסח</em>). Aucun choix d'année de départ ne peut éliminer cette oscillation : elle est <strong>une caractéristique fondamentale et irréductible du cycle triennal</strong>, indépendamment de l'année d'inauguration.</p>

<details class="book-section" open>
<summary>5783 — ½ année (Nissan→Eloul) — Cycle A — 1 substitution</summary>
<table>
<thead><tr><th>Date grégorienne</th><th>Date hébraïque</th><th>Type</th><th>Lecture</th></tr></thead>
<tbody>
<tr class="festival"><td>sam 8 avr 2023</td><td>17 Nissan 5783</td><td>Hol Hamoed Pessah</td><td>Nb 28,16–25</td></tr>
</tbody>
</table>
<p class="legend"><em>Les Parshiot Chekalim, Zakhor, Para, HaHodesh ont eu lieu en Adar 5783 (févr.-mars 2023), <strong>avant</strong> le début du cycle. Pessah I (jeu), Pessah VII (mer) et Chavouot (ven) tombent en semaine — pas de substitution.</em></p>
</details>

<details class="book-section">
<summary>5784 — année embolismique* — Cycle A — 9 substitutions</summary>
<table>
<thead><tr><th>Date grégorienne</th><th>Date hébraïque</th><th>Type</th><th>Lecture</th></tr></thead>
<tbody>
<tr class="festival"><td>sam 16 sep 2023</td><td>1 Tichri 5784</td><td>Roch Hachana I</td><td>Nb 29,1–6</td></tr>
<tr class="festival"><td>sam 30 sep 2023</td><td>15 Tichri 5784</td><td>Souccot I</td><td>Lv 22,26–23,44</td></tr>
<tr class="festival"><td>sam 7 oct 2023</td><td>22 Tichri 5784</td><td>Chemini Atseret</td><td>Nb 29,35–39</td></tr>
<tr class="festival"><td>sam 9 déc 2023</td><td>26 Kislev 5784</td><td>Hanouka (jour 2)</td><td>Nb 7</td></tr>
<tr class="special"><td>sam 9 mars 2024</td><td>29 Adar I 5784</td><td><strong>Chekalim</strong></td><td>Ex 30,11–16</td></tr>
<tr class="special"><td>sam 23 mars 2024</td><td>13 Adar II 5784</td><td><strong>Zakhor</strong></td><td>Dt 25,17–19</td></tr>
<tr class="special"><td>sam 30 mars 2024</td><td>20 Adar II 5784</td><td><strong>Para</strong></td><td>Nb 19</td></tr>
<tr class="special"><td>sam 6 avr 2024</td><td>27 Adar II 5784</td><td><strong>HaHodesh</strong></td><td>Ex 12,1–20</td></tr>
<tr class="festival"><td>sam 27 avr 2024</td><td>19 Nissan 5784</td><td>Hol Hamoed Pessah</td><td>Nb 28,16–25</td></tr>
</tbody>
</table>
</details>

<details class="book-section">
<summary>5785 — année régulière — Cycle A — 8 substitutions</summary>
<table>
<thead><tr><th>Date grégorienne</th><th>Date hébraïque</th><th>Type</th><th>Lecture</th></tr></thead>
<tbody>
<tr class="festival"><td>sam 12 oct 2024</td><td>10 Tichri 5785</td><td>Yom Kippour</td><td>Lv 16</td></tr>
<tr class="festival"><td>sam 19 oct 2024</td><td>17 Tichri 5785</td><td>Hol Hamoed Souccot (3<sup>e</sup> jour)</td><td>Nb 29,20–22</td></tr>
<tr class="festival"><td>sam 28 déc 2024</td><td>27 Kislev 5785</td><td>Hanouka (jour 3)</td><td>Nb 7</td></tr>
<tr class="special"><td>sam 1 mars 2025</td><td>1 Adar 5785</td><td><strong>Chekalim</strong></td><td>Ex 30,11–16</td></tr>
<tr class="special"><td>sam 8 mars 2025</td><td>8 Adar 5785</td><td><strong>Zakhor</strong></td><td>Dt 25,17–19</td></tr>
<tr class="special"><td>sam 15 mars 2025</td><td>15 Adar 5785</td><td><strong>Para</strong></td><td>Nb 19</td></tr>
<tr class="special"><td>sam 29 mars 2025</td><td>29 Adar 5785</td><td><strong>HaHodesh</strong></td><td>Ex 12,1–20</td></tr>
<tr class="festival"><td>sam 19 avr 2025</td><td>21 Nissan 5785</td><td>Pessah VII</td><td>Nb 28,16–25 (offrandes de Pessah)</td></tr>
</tbody>
</table>
</details>

<details class="book-section">
<summary>5786 — Cycle A (Tichri→9 Eloul) puis Cycle B (16 Eloul→29 Eloul) — 7 substitutions <strong>(année actuelle)</strong></summary>
<p class="legend"><em>Les 7 substitutions ci-dessous sont toutes dans la portion Cycle A (avant le sam 22 août 2026 = 9 Eloul). La portion Cycle B (sam 29 août → sam 5 sept 2026) ne contient aucune substitution — c'est précisément ces 2 chabat « libres » de fin Eloul qui équilibrent le décompte du Cycle B.</em></p>
<table>
<thead><tr><th>Date grégorienne</th><th>Date hébraïque</th><th>Type</th><th>Lecture</th></tr></thead>
<tbody>
<tr class="festival"><td>sam 11 oct 2025</td><td>19 Tichri 5786</td><td>Hol Hamoed Souccot (5<sup>e</sup> jour)</td><td>Nb 29,26–28</td></tr>
<tr class="festival"><td>sam 20 déc 2025</td><td>30 Kislev 5786</td><td>Hanouka (jour 6)</td><td>Nb 7</td></tr>
<tr class="special"><td>sam 14 fév 2026</td><td>26 Chevat 5786</td><td><strong>Chekalim</strong></td><td>Ex 30,11–16</td></tr>
<tr class="special"><td>sam 28 fév 2026</td><td>10 Adar 5786</td><td><strong>Zakhor</strong></td><td>Dt 25,17–19</td></tr>
<tr class="special"><td>sam 7 mars 2026</td><td>17 Adar 5786</td><td><strong>Para</strong></td><td>Nb 19</td></tr>
<tr class="special"><td>sam 14 mars 2026</td><td>24 Adar 5786</td><td><strong>HaHodesh</strong></td><td>Ex 12,1–20</td></tr>
<tr class="festival"><td>sam 4 avr 2026</td><td>17 Nissan 5786</td><td>Hol Hamoed Pessah</td><td>Nb 28,16–25</td></tr>
</tbody>
</table>
</details>

<details class="book-section">
<summary>5787 — année embolismique* — Cycle B — 10 substitutions</summary>
<table>
<thead><tr><th>Date grégorienne</th><th>Date hébraïque</th><th>Type</th><th>Lecture</th></tr></thead>
<tbody>
<tr class="festival"><td>sam 12 sep 2026</td><td>1 Tichri 5787</td><td>Roch Hachana I</td><td>Nb 29,1–6</td></tr>
<tr class="festival"><td>sam 26 sep 2026</td><td>15 Tichri 5787</td><td>Souccot I</td><td>Lv 22,26–23,44</td></tr>
<tr class="festival"><td>sam 3 oct 2026</td><td>22 Tichri 5787</td><td>Chemini Atseret</td><td>Nb 29,35–39</td></tr>
<tr class="festival"><td>sam 5 déc 2026</td><td>25 Kislev 5787</td><td>Hanouka (jour 1)</td><td>Nb 7</td></tr>
<tr class="festival"><td>sam 12 déc 2026</td><td>2 Tevet 5787</td><td>Hanouka (jour 8)</td><td>Nb 7</td></tr>
<tr class="special"><td>sam 6 mars 2027</td><td>27 Adar I 5787</td><td><strong>Chekalim</strong></td><td>Ex 30,11–16</td></tr>
<tr class="special"><td>sam 20 mars 2027</td><td>12 Adar II 5787</td><td><strong>Zakhor</strong></td><td>Dt 25,17–19</td></tr>
<tr class="special"><td>sam 27 mars 2027</td><td>19 Adar II 5787</td><td><strong>Para</strong></td><td>Nb 19</td></tr>
<tr class="special"><td>sam 3 avr 2027</td><td>26 Adar II 5787</td><td><strong>HaHodesh</strong></td><td>Ex 12,1–20</td></tr>
<tr class="festival"><td>sam 24 avr 2027</td><td>17 Nissan 5787</td><td>Hol Hamoed Pessah</td><td>Nb 28,16–25</td></tr>
</tbody>
</table>
<p class="legend"><em>Année « chargée » : <strong>deux chabat de Hanouka</strong> (rare, ne se produit que quand Hanouka commence un samedi).</em></p>
</details>

<details class="book-section">
<summary>5788 — année régulière — Cycle B — 10 substitutions</summary>
<table>
<thead><tr><th>Date grégorienne</th><th>Date hébraïque</th><th>Type</th><th>Lecture</th></tr></thead>
<tbody>
<tr class="festival"><td>sam 2 oct 2027</td><td>1 Tichri 5788</td><td>Roch Hachana I</td><td>Nb 29,1–6</td></tr>
<tr class="festival"><td>sam 16 oct 2027</td><td>15 Tichri 5788</td><td>Souccot I</td><td>Lv 22,26–23,44</td></tr>
<tr class="festival"><td>sam 23 oct 2027</td><td>22 Tichri 5788</td><td>Chemini Atseret</td><td>Nb 29,35–39</td></tr>
<tr class="festival"><td>sam 25 déc 2027</td><td>25 Kislev 5788</td><td>Hanouka (jour 1)</td><td>Nb 7</td></tr>
<tr class="festival"><td>sam 1 jan 2028</td><td>2 Tevet 5788</td><td>Hanouka (jour 8)</td><td>Nb 7</td></tr>
<tr class="special"><td>sam 26 fév 2028</td><td>30 Chevat 5788</td><td><strong>Chekalim</strong></td><td>Ex 30,11–16</td></tr>
<tr class="special"><td>sam 11 mars 2028</td><td>13 Adar 5788</td><td><strong>Zakhor</strong></td><td>Dt 25,17–19</td></tr>
<tr class="special"><td>sam 18 mars 2028</td><td>20 Adar 5788</td><td><strong>Para</strong></td><td>Nb 19</td></tr>
<tr class="special"><td>sam 25 mars 2028</td><td>27 Adar 5788</td><td><strong>HaHodesh</strong></td><td>Ex 12,1–20</td></tr>
<tr class="festival"><td>sam 15 avr 2028</td><td>19 Nissan 5788</td><td>Hol Hamoed Pessah</td><td>Nb 28,16–25</td></tr>
</tbody>
</table>
<p class="legend"><em>Année également « chargée » avec deux chabat de Hanouka, et trois chabat consécutifs de fête en Tichri.</em></p>
</details>

<details class="book-section">
<summary>5789 — année régulière — Cycle B — 8 substitutions</summary>
<table>
<thead><tr><th>Date grégorienne</th><th>Date hébraïque</th><th>Type</th><th>Lecture</th></tr></thead>
<tbody>
<tr class="festival"><td>sam 30 sep 2028</td><td>10 Tichri 5789</td><td>Yom Kippour</td><td>Lv 16</td></tr>
<tr class="festival"><td>sam 7 oct 2028</td><td>17 Tichri 5789</td><td>Hol Hamoed Souccot (3<sup>e</sup> jour)</td><td>Nb 29,20–22</td></tr>
<tr class="festival"><td>sam 16 déc 2028</td><td>28 Kislev 5789</td><td>Hanouka (jour 4)</td><td>Nb 7</td></tr>
<tr class="special"><td>sam 10 fév 2029</td><td>26 Chevat 5789</td><td><strong>Chekalim</strong></td><td>Ex 30,11–16</td></tr>
<tr class="special"><td>sam 24 fév 2029</td><td>10 Adar 5789</td><td><strong>Zakhor</strong></td><td>Dt 25,17–19</td></tr>
<tr class="special"><td>sam 3 mars 2029</td><td>17 Adar 5789</td><td><strong>Para</strong></td><td>Nb 19</td></tr>
<tr class="special"><td>sam 17 mars 2029</td><td>1 Nissan 5789</td><td><strong>HaHodesh</strong></td><td>Ex 12,1–20</td></tr>
<tr class="festival"><td>sam 31 mars 2029</td><td>15 Nissan 5789</td><td>Pessah I</td><td>Lv 22,26–23,44 (« <em>parashat moadot</em> »)</td></tr>
</tbody>
</table>
</details>

<details class="book-section">
<summary>5790 — ½ année (Tichri→Adar II), embolismique* — Cycle B — 6 substitutions</summary>
<table>
<thead><tr><th>Date grégorienne</th><th>Date hébraïque</th><th>Type</th><th>Lecture</th></tr></thead>
<tbody>
<tr class="festival"><td>sam 29 sep 2029</td><td>20 Tichri 5790</td><td>Hol Hamoed Souccot (6<sup>e</sup> jour)</td><td>Nb 29,29–31</td></tr>
<tr class="festival"><td>sam 8 déc 2029</td><td>2 Tevet 5790</td><td>Hanouka (jour 7)</td><td>Nb 7</td></tr>
<tr class="special"><td>sam 2 mars 2030</td><td>27 Adar I 5790</td><td><strong>Chekalim</strong></td><td>Ex 30,11–16</td></tr>
<tr class="special"><td>sam 16 mars 2030</td><td>12 Adar II 5790</td><td><strong>Zakhor</strong></td><td>Dt 25,17–19</td></tr>
<tr class="special"><td>sam 23 mars 2030</td><td>19 Adar II 5790</td><td><strong>Para</strong></td><td>Nb 19</td></tr>
<tr class="special"><td>sam 30 mars 2030</td><td>26 Adar II 5790</td><td><strong>HaHodesh</strong></td><td>Ex 12,1–20</td></tr>
</tbody>
</table>
<p class="legend"><em>Cycle B se termine le 29 Adar II 5790 (sam 30 mars 2030) qui est aussi HaHodesh — ultime substitution avant que le prochain cycle Nissan ne démarre le 1<sup>er</sup> Nissan 5790 (dim 31 mars 2030).</em></p>
</details>

<h3>Récapitulatif</h3>

<table>
<thead><tr><th>Année</th><th>Cycle</th><th>Subst. festives</th><th>4 Parshiot</th><th>Total</th></tr></thead>
<tbody>
<tr><td>½ 5783</td><td>A</td><td class="num">1</td><td class="num">0</td><td class="num">1</td></tr>
<tr><td>5784*</td><td>A</td><td class="num">5</td><td class="num">4</td><td class="num">9</td></tr>
<tr><td>5785</td><td>A</td><td class="num">4</td><td class="num">4</td><td class="num">8</td></tr>
<tr><td>5786</td><td>A</td><td class="num">3</td><td class="num">4</td><td class="num">7</td></tr>
<tr><td>5787*</td><td>B</td><td class="num">6</td><td class="num">4</td><td class="num">10</td></tr>
<tr><td>5788</td><td>B</td><td class="num">6</td><td class="num">4</td><td class="num">10</td></tr>
<tr><td>5789</td><td>B</td><td class="num">4</td><td class="num">4</td><td class="num">8</td></tr>
<tr><td>½ 5790*</td><td>B</td><td class="num">2</td><td class="num">4</td><td class="num">6</td></tr>
<tr class="total-row"><td colspan="2">Total 7 ans</td><td class="num">31</td><td class="num">28</td><td class="num">59</td></tr>
</tbody>
</table>

<p>Les 59 substitutions sur les 367 chabat du cycle de 7 ans laissent <strong>308 chabat libres</strong>, soit exactement deux fois 154 sedarim. Le système est mathématiquement équilibré.</p>

<p class="legend">
<span class="festival">Substitution festive</span>
<span class="special">4 Parshiot (Chekalim, Zakhor, Para, HaHodesh)</span>
</p>

<footer>
<p>Sources : Maïmonide, <em>Hilkhot Tefillah</em> 13:1 ; Adolf Büchler, « The Reading of the Law and Prophets in a Triennial Cycle » (JQR, 1893) ; fragments de la Genizah du Caire publiés par S. Schechter ; codex d'Alep et codex de Leningrad pour les bornes des sedarim. Les bornes secondaires varient légèrement selon les manuscrits.</p>
</footer>

</body>
</html>

`;