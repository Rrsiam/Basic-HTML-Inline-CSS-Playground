/* =====================================================
   HTML & Inline CSS Playground — script.js
   ===================================================== */

const $  = (sel, root = document) => root.querySelector(sel);
const $$ = (sel, root = document) => [...root.querySelectorAll(sel)];

const esc = (s) => String(s)
  .replace(/&/g, '&amp;')
  .replace(/</g, '&lt;')
  .replace(/>/g, '&gt;');

/* ---------------- animated school picture (pic.png) ---------------- */
function pic(w = 120, h = 90) {
  return `<svg class="pic" viewBox="0 0 120 90" width="${w}" height="${h}" role="img" aria-label="Animated school boy and girl">
  <rect x="0" y="0" width="120" height="90" rx="12" fill="lightyellow"/>
  <circle class="pic-sun" cx="101" cy="17" r="8" fill="gold"/>
  <rect x="0" y="70" width="120" height="20" fill="lightgreen"/>
  <g class="pic-boy">
    <circle cx="36" cy="36" r="9" fill="navajowhite"/>
    <path d="M27 34 a9 9 0 0 1 18 0 z" fill="saddlebrown"/>
    <rect x="28" y="45" width="16" height="18" rx="3" fill="white"/>
    <rect x="34" y="45" width="4" height="11" fill="steelblue"/>
    <rect x="29" y="63" width="6" height="10" fill="dimgray"/>
    <rect x="37" y="63" width="6" height="10" fill="dimgray"/>
    <line class="pic-arm" x1="44" y1="49" x2="55" y2="40" stroke="navajowhite" stroke-width="4" stroke-linecap="round"/>
    <circle cx="33" cy="35" r="1.4" fill="black"/>
    <circle cx="39" cy="35" r="1.4" fill="black"/>
  </g>
  <g class="pic-girl">
    <circle cx="82" cy="36" r="9" fill="navajowhite"/>
    <path d="M73 34 a9 9 0 0 1 18 0 z" fill="black"/>
    <circle cx="72" cy="37" r="3.5" fill="black"/>
    <circle cx="92" cy="37" r="3.5" fill="black"/>
    <rect x="74" y="45" width="16" height="18" rx="3" fill="white"/>
    <path d="M74 53 h16" stroke="tomato" stroke-width="3"/>
    <rect x="75" y="63" width="6" height="10" fill="dimgray"/>
    <rect x="83" y="63" width="6" height="10" fill="dimgray"/>
    <rect x="61" y="50" width="11" height="8" rx="1.5" fill="orange"/>
    <circle cx="79" cy="35" r="1.4" fill="black"/>
    <circle cx="85" cy="35" r="1.4" fill="black"/>
  </g>
</svg>`;
}

const PIC_DATA = 'data:image/svg+xml;charset=utf-8,' + encodeURIComponent(pic(120, 90));

/* ---------------- card factory ---------------- */
function T(cat, kind, name, en, bn, code, out) {
  return { cat, kind, name, en, bn, code, out };
}

/* =====================================================
   THE NOTES
   ===================================================== */
const ITEMS = [

/* ---------------- BASIC TAGS ---------------- */
T('basic','tag','<h1> – <h6>',
  'Heading tags. h1 is the biggest and most important, h6 is the smallest.',
  'শিরোনাম বা হেডিং বানায়। h1 সবচেয়ে বড় ও গুরুত্বপূর্ণ, h6 সবচেয়ে ছোট।',
  `<h1>Heading 1</h1>
<h2>Heading 2</h2>
<h3>Heading 3</h3>
<h4>Heading 4</h4>
<h5>Heading 5</h5>
<h6>Heading 6</h6>`,
  `<h1>Heading 1</h1><h2>Heading 2</h2><h3>Heading 3</h3><h4>Heading 4</h4><h5>Heading 5</h5><h6>Heading 6</h6>`),

T('basic','tag','<p>',
  'Makes a paragraph. Every paragraph gets a little space above and below by itself.',
  'একটি অনুচ্ছেদ (প্যারাগ্রাফ) তৈরি করে। প্রতিটি p এর আগে-পরে নিজে থেকেই একটু ফাঁকা জায়গা থাকে।',
  `<p>This is paragraph one.</p>
<p>This is paragraph two.</p>`,
  `<p>This is paragraph one.</p><p>This is paragraph two.</p>`),

T('basic','tag','<br>',
  'Forces a new line. It is an empty tag, so it has no closing tag.',
  'লেখার মাঝখানে জোর করে নতুন লাইনে যায়। এটি একটি খালি ট্যাগ, তাই শেষের ট্যাগ লাগে না।',
  `First line<br>Second line`,
  `First line<br>Second line`),

T('basic','tag','<hr>',
  'Draws a horizontal line that separates two parts of the page.',
  'পেজে একটি আড়াআড়ি দাগ টানে, যা দুটি অংশকে আলাদা করে।',
  `Above the line<hr>Below the line`,
  `Above the line<hr>Below the line`),

T('basic','tag','<a>',
  'Makes a link. The address goes in the href attribute, and the text inside becomes clickable.',
  'অন্য পেজ বা ওয়েবসাইটে যাওয়ার লিংক বানায়। ঠিকানা href অ্যাট্রিবিউটে লিখতে হয়।',
  `<a href="https://example.com">Click this link</a>`,
  `<a href="https://example.com" target="_blank" rel="noopener">Click this link</a>`),

T('basic','tag','<img>',
  'Shows a picture. The address of the picture goes in the src attribute.',
  'পেজে ছবি দেখায়। ছবির ঠিকানা src অ্যাট্রিবিউটে দিতে হয়।',
  `<img src="pic.png" alt="School boy and girl" width="120">`,
  `<div style="text-align:center">${pic(120,90)}<div style="font-size:11px;color:gray">pic.png</div></div>`),

T('basic','tag','<big>',
  'Makes the text a little bigger without any CSS. It is an old tag, but browsers still show it.',
  'কোনো CSS ছাড়াই লেখা একটু বড় করে দেখায়। এটি পুরনো ট্যাগ, তবু ব্রাউজার এখনও দেখায়।',
  `<big>This text is bigger</big>`,
  `<big>This text is bigger</big>`),

T('basic','tag','<strong>',
  'Says that the text is important and shows it bold.',
  'গুরুত্বপূর্ণ লেখা বোঝায় এবং লেখা মোটা করে দেখায়।',
  `This is <strong>important</strong> text`,
  `This is <strong>important</strong> text`),

T('basic','tag','<b>',
  'Only makes the text bold, without meaning anything is important.',
  'শুধু লেখা মোটা করে দেখায়, কিন্তু আলাদা কোনো গুরুত্বের অর্থ বোঝায় না।',
  `This is <b>bold</b> text`,
  `This is <b>bold</b> text`),

T('basic','tag','<em>',
  'Puts stress on a word and shows it in italic.',
  'কোনো শব্দের ওপর জোর দিতে ব্যবহার হয়, আর লেখা বাঁকা (italic) দেখায়।',
  `This is <em>emphasized</em> text`,
  `This is <em>emphasized</em> text`),

T('basic','tag','<i>',
  'Only shows the text in italic, like a book name or a foreign word.',
  'শুধু লেখা বাঁকা (italic) করে দেখায়, যেমন বইয়ের নাম বা বিদেশি শব্দ।',
  `This is <i>italic</i> text`,
  `This is <i>italic</i> text`),

T('basic','tag','<u>',
  'Draws a line under the text. Links also look underlined, so people may be confused.',
  'লেখার নিচে দাগ টেনে দেয়। লিংকও সাধারণত দাগ সহ দেখায়, তাই ভুল হতে পারে।',
  `This is <u>underlined</u> text`,
  `This is <u>underlined</u> text`),

T('basic','tag','<small>',
  'Shows the text in a smaller size.',
  'লেখা ছোট আকারে দেখায়।',
  `<small>Small text</small>`,
  `<small>Small text</small>`),

T('basic','tag','<del>',
  'Draws a line through the text to show it is cancelled or deleted.',
  'লেখার মাঝখান দিয়ে দাগ টেনে বোঝায় যে এটি বাতিল বা মুছে ফেলা হয়েছে।',
  `Price <del>500</del> 400 Taka`,
  `Price <del>500</del> 400 Taka`),

T('basic','tag','<sub>',
  'Drops the text down and makes it small (subscript).',
  'লেখা নিচের দিকে নামিয়ে ছোট করে দেখায় (subscript)।',
  `H<sub>2</sub>O`,
  `H<sub>2</sub>O`),

T('basic','tag','<sup>',
  'Lifts the text up and makes it small (superscript).',
  'লেখা উপরের দিকে তুলে ছোট করে দেখায় (superscript)।',
  `x<sup>2</sup> + y<sup>2</sup>`,
  `x<sup>2</sup> + y<sup>2</sup>`),

T('basic','tag','Image paths',
  'The src attribute can point to three places: the same folder, a folder inside your project, or a website online.',
  'src অ্যাট্রিবিউট তিন জায়গায় দেখাতে পারে: একই ফোল্ডার, প্রজেক্টের ভেতরের ফোল্ডার, বা ইন্টারনেট।',
  `<!-- same folder -->
<img src="pic.png">

<!-- folder inside your project -->
<img src="images/pic.png">

<!-- from the internet -->
<img src="https://example.com/pic.png">`,
  `<div class="path-demo">
     <div class="path-row">${pic(64,48)}<div><b>Same folder</b><code>src="pic.png"</code></div></div>
     <div class="path-row">${pic(64,48)}<div><b>Different folder</b><code>src="images/pic.png"</code></div></div>
     <div class="path-row">${pic(64,48)}<div><b>Online</b><code>src="https://example.com/pic.png"</code></div></div>
   </div>`),

/* ---------------- LIST ---------------- */
T('list','tag','<ul>',
  'Makes a bullet list (unordered list), where the order of the items does not matter.',
  'বুলেট বা ভুটযুক্ত তালিকা (unordered list) বানায়, যেখানে আইটেমের ক্রম গুরুত্বপূর্ণ নয়।',
  `<ul>
  <li>Mango</li>
  <li>Apple</li>
</ul>`,
  `<ul><li>Mango</li><li>Apple</li></ul>`),

T('list','tag','<ol>',
  'Makes a numbered list (ordered list), where the order matters.',
  'নম্বরযুক্ত তালিকা (ordered list) বানায়, যেখানে ক্রম গুরুত্বপূর্ণ।',
  `<ol>
  <li>First</li>
  <li>Second</li>
</ol>`,
  `<ol><li>First</li><li>Second</li></ol>`),

T('list','tag','<li>',
  'One item of a list (list item). It must always be inside ul or ol.',
  'তালিকার একটি আইটেম। এটি সবসময় ul বা ol এর ভেতরে লিখতে হয়।',
  `<ul>
  <li>One item</li>
</ul>`,
  `<ul><li>One item</li></ul>`),

T('list','tag','Nested ul inside ul',
  'A bullet list placed inside an item of another bullet list. The inner ul must go inside the outer li.',
  'একটি বুলেট তালিকার একটি আইটেমের ভেতরে আরেকটি বুলেট তালিকা। ভেতরের ul অবশ্যই বাইরের li এর ভেতরে লিখতে হয়।',
  `<ul>
  <li>Fruits
    <ul>
      <li>Mango</li>
      <li>Apple</li>
    </ul>
  </li>
  <li>Vegetables
    <ul>
      <li>Potato</li>
      <li>Carrot</li>
    </ul>
  </li>
</ul>`,
  `<ul><li>Fruits<ul><li>Mango</li><li>Apple</li></ul></li><li>Vegetables<ul><li>Potato</li><li>Carrot</li></ul></li></ul>`),

T('list','tag','Nested ol inside ol',
  'A small numbered list placed inside a step of another numbered list. The inner list starts again from 1.',
  'নম্বরযুক্ত তালিকার একটি ধাপের ভেতরে আরও ছোট নম্বরযুক্ত ধাপ। ভেতরের তালিকা আবার ১ থেকে শুরু হয়।',
  `<ol>
  <li>Install software
    <ol>
      <li>Download the file</li>
      <li>Run the installer</li>
    </ol>
  </li>
  <li>Open the program</li>
</ol>`,
  `<ol><li>Install software<ol><li>Download the file</li><li>Run the installer</li></ol></li><li>Open the program</li></ol>`),

T('list','tag','Nested ol inside ul',
  'A numbered list inside an item of a bullet list. Use it when the outer items do not need order but inner steps do.',
  'বুলেট তালিকার একটি আইটেমের ভেতরে নম্বরযুক্ত তালিকা। বাইরের ক্রম জরুরি নয় কিন্তু ভেতরের ধাপের ক্রম জরুরি।',
  `<ul>
  <li>Make tea
    <ol>
      <li>Boil water</li>
      <li>Add tea leaves</li>
      <li>Pour into a cup</li>
    </ol>
  </li>
  <li>Make coffee</li>
</ul>`,
  `<ul><li>Make tea<ol><li>Boil water</li><li>Add tea leaves</li><li>Pour into a cup</li></ol></li><li>Make coffee</li></ul>`),

T('list','tag','Nested ul inside ol',
  'A bullet list inside a step of a numbered list. The steps matter, but the things inside a step do not.',
  'নম্বরযুক্ত তালিকার একটি ধাপের ভেতরে বুলেট তালিকা। ধাপের ক্রম জরুরি, কিন্তু ভেতরের জিনিসের ক্রম নয়।',
  `<ol>
  <li>Buy groceries
    <ul>
      <li>Rice</li>
      <li>Milk</li>
    </ul>
  </li>
  <li>Go home</li>
</ol>`,
  `<ol><li>Buy groceries<ul><li>Rice</li><li>Milk</li></ul></li><li>Go home</li></ol>`),

T('list','tag','Three levels deep',
  'A list inside a list inside a list. Too many levels get hard to read, so 2–3 levels are best.',
  'তালিকার ভেতরে তালিকা, তার ভেতরে আরও তালিকা। বেশি স্তর পড়তে কঠিন হয়, তাই ২-৩ স্তর ভালো।',
  `<ul>
  <li>Level 1
    <ul>
      <li>Level 2
        <ul>
          <li>Level 3</li>
        </ul>
      </li>
    </ul>
  </li>
</ul>`,
  `<ul><li>Level 1<ul><li>Level 2<ul><li>Level 3</li></ul></li></ul></li></ul>`),

T('list','tag','Mixed lists',
  'A real example — a course outline. Main topics are numbered, subtopics are bullets, and the Spacing topic has a numbered list inside it.',
  'ul ও ol মিলিয়ে একটি বাস্তব উদাহরণ, কোর্সের বিষয়সূচি।',
  `<ol>
  <li>HTML
    <ul>
      <li>Tags</li>
      <li>Attributes</li>
    </ul>
  </li>
  <li>CSS
    <ul>
      <li>Colors</li>
      <li>Spacing
        <ol>
          <li>Margin</li>
          <li>Padding</li>
        </ol>
      </li>
    </ul>
  </li>
</ol>`,
  `<ol><li>HTML<ul><li>Tags</li><li>Attributes</li></ul></li><li>CSS<ul><li>Colors</li><li>Spacing<ol><li>Margin</li><li>Padding</li></ol></li></ul></li></ol>`),

/* ---------------- TABLE ---------------- */
T('table','tag','<table>',
  'The main tag for a table. Rows (tr) and cells (td / th) inside it hold the data.',
  'টেবিল বা ছক বানানোর মূল ট্যাগ। ভেতরে সারি (tr) ও ঘর (td/th) দিয়ে ডেটা সাজানো হয়।',
  `<table>
  <tr>
    <td>A</td>
    <td>B</td>
  </tr>
</table>`,
  `<table><tr><td>A</td><td>B</td></tr></table>`),

T('table','tag','<tr>',
  'One horizontal row of the table (table row).',
  'টেবিলের একটি আড়াআড়ি সারি (table row)।',
  `<table>
  <tr><td>Row 1</td></tr>
  <tr><td>Row 2</td></tr>
</table>`,
  `<table><tr><td>Row 1</td></tr><tr><td>Row 2</td></tr></table>`),

T('table','tag','<th>',
  'A header cell. Its text is bold and centred by itself.',
  'টেবিলের হেডার ঘর। এর লেখা নিজে থেকেই মোটা ও মাঝখানে দেখায়।',
  `<table>
  <tr>
    <th>Name</th>
    <th>Age</th>
  </tr>
</table>`,
  `<table><tr><th>Name</th><th>Age</th></tr></table>`),

T('table','tag','<td>',
  'A normal data cell. Real information is written inside these cells.',
  'টেবিলের সাধারণ ডেটা ঘর। আসল তথ্য এই ঘরগুলোতে লেখা হয়।',
  `<table>
  <tr>
    <td>Rahim</td>
    <td>20</td>
  </tr>
</table>`,
  `<table><tr><td>Rahim</td><td>20</td></tr></table>`),

T('table','tag','<thead>',
  'The head part of the table. Column names (th) are grouped here.',
  'টেবিলের মাথার অংশ। কলামের নামগুলো (th) এখানে গুছিয়ে রাখা হয়।',
  `<table>
  <thead>
    <tr><th>Item</th><th>Price</th></tr>
  </thead>
  <tbody>
    <tr><td>Pen</td><td>10</td></tr>
  </tbody>
  <tfoot>
    <tr><td>Total</td><td>10</td></tr>
  </tfoot>
</table>`,
  `<table><thead><tr><th>Item</th><th>Price</th></tr></thead><tbody><tr><td>Pen</td><td>10</td></tr></tbody><tfoot><tr><td>Total</td><td>10</td></tr></tfoot></table>`),

T('table','tag','<tbody>',
  'The main data part of the table. All rows except header and footer live here.',
  'টেবিলের মূল ডেটার অংশ। হেডার ও ফুটার বাদে সব সারি এখানে থাকে।',
  `<table>
  <tbody>
    <tr><td>Pen</td><td>10</td></tr>
    <tr><td>Book</td><td>50</td></tr>
  </tbody>
</table>`,
  `<table><tbody><tr><td>Pen</td><td>10</td></tr><tr><td>Book</td><td>50</td></tr></tbody></table>`),

T('table','tag','<tfoot>',
  'The footer part of the table, like a total or summary row.',
  'টেবিলের ফুটারের অংশ, যেমন মোট বা সারসংক্ষেপের সারি।',
  `<table>
  <tbody>
    <tr><td>Pen</td><td>10</td></tr>
  </tbody>
  <tfoot>
    <tr><td>Total</td><td>10</td></tr>
  </tfoot>
</table>`,
  `<table><tbody><tr><td>Pen</td><td>10</td></tr></tbody><tfoot><tr><td>Total</td><td>10</td></tr></tfoot></table>`),

T('table','tag','colspan attribute',
  'Makes one cell stretch across several columns. colspan="2" means the cell takes the place of two columns.',
  'একটি ঘরকে পাশাপাশি কয়েকটি কলাম জুড়ে বসায়। colspan="2" মানে ঘরটি দুটি কলামের জায়গা নেবে।',
  `<table>
  <tr><td colspan="2">Spans two cells</td></tr>
  <tr><td>A</td><td>B</td></tr>
</table>`,
  `<table><tr><td colspan="2">Spans two cells</td></tr><tr><td>A</td><td>B</td></tr></table>`),

T('table','tag','rowspan attribute',
  'Makes one cell stretch down across several rows. rowspan="2" means the cell takes the place of two rows.',
  'একটি ঘরকে ওপর-নিচ কয়েকটি সারি জুড়ে বসায়। rowspan="2" মানে ঘরটি দুটি সারির জায়গা নেবে।',
  `<table>
  <tr><td rowspan="2">Two rows</td><td>A</td></tr>
  <tr><td>B</td></tr>
</table>`,
  `<table><tr><td rowspan="2">Two rows</td><td>A</td></tr><tr><td>B</td></tr></table>`),

/* ---------------- FORM ---------------- */
T('form','tag','<form>',
  'The wrapper for a form. It gathers inputs so all the information can be sent together.',
  'ফর্ম বানানোর মোড়ক। ইনপুটগুলো এক জায়গায় জড়ো করে, যাতে একসাথে তথ্য পাঠানো যায়।',
  `<form>
  <input type="text" placeholder="Enter name">
</form>`,
  `<form><input type="text" placeholder="Enter name"></form>`),

T('form','tag','<input>',
  'A box for taking information from the user. Changing the type attribute turns it into different inputs.',
  'ব্যবহারকারীর কাছ থেকে তথ্য নেওয়ার ঘর। type অ্যাট্রিবিউট বদলালে এটি ভিন্ন ভিন্ন ইনপুট হয়।',
  `<input type="text" placeholder="Enter name">`,
  `<input type="text" placeholder="Enter name">`),

T('form','input','<input type="text">',
  'The most common input, for one line of text like a name or address.',
  'সবচেয়ে সাধারণ ইনপুট, এক লাইনের লেখা নেওয়ার জন্য।',
  `<input type="text" placeholder="Enter name">`,
  `<input type="text" placeholder="Enter name">`),

T('form','input','<input type="password">',
  'For taking a password. What is typed turns into dots or stars.',
  'পাসওয়ার্ড নেওয়ার জন্য। যা লেখা হয় তা ডট বা তারকা হয়ে লুকিয়ে যায়।',
  `<input type="password" value="12345">`,
  `<input type="password" value="12345">`),

T('form','input','<input type="email">',
  'For an email address. The browser checks that an @ sign is there.',
  'ইমেইল ঠিকানা নেওয়ার জন্য। ব্রাউজার @ চিহ্ন আছে কিনা যাচাই করে।',
  `<input type="email" placeholder="name@mail.com">`,
  `<input type="email" placeholder="name@mail.com">`),

T('form','input','<input type="number">',
  'For numbers only. Letters cannot be typed.',
  'শুধু সংখ্যা নেওয়ার জন্য। অক্ষর লেখা যায় না।',
  `<input type="number" value="5">`,
  `<input type="number" value="5">`),

T('form','input','<input type="tel">',
  'For a phone number. Phones open the number keyboard.',
  'ফোন নম্বর নেওয়ার জন্য। মোবাইলে নম্বর কিবোর্ড খুলে যায়।',
  `<input type="tel" placeholder="01XXXXXXXXX">`,
  `<input type="tel" placeholder="01XXXXXXXXX">`),

T('form','input','<input type="url">',
  'For a website address. On submit the browser checks that it looks like a proper link.',
  'ওয়েবসাইটের ঠিকানা নেওয়ার জন্য। জমা দেওয়ার সময় ব্রাউজার যাচাই করে।',
  `<input type="url" placeholder="https://example.com">`,
  `<input type="url" placeholder="https://example.com">`),

T('form','input','<input type="search">',
  'Makes a search box. Some browsers add a small (x) to clear what you typed.',
  'সার্চ বক্স বানায়। কিছু ব্রাউজারে লেখা মুছে ফেলার ছোট (x) চিহ্ন আসে।',
  `<input type="search" placeholder="Search...">`,
  `<input type="search" placeholder="Search...">`),

T('form','input','<input type="date">',
  'For picking a date from a calendar.',
  'ক্যালেন্ডার থেকে তারিখ বাছাই করার জন্য।',
  `<input type="date">`,
  `<input type="date">`),

T('form','input','<input type="time">',
  'For picking a time (hours and minutes).',
  'সময় (ঘণ্টা ও মিনিট) বাছাই করার জন্য।',
  `<input type="time">`,
  `<input type="time">`),

T('form','input','<input type="datetime-local">',
  'For picking both a date and a time in one input.',
  'একই ইনপুটে তারিখ ও সময় দুটোই বাছাই করার জন্য।',
  `<input type="datetime-local">`,
  `<input type="datetime-local">`),

T('form','input','<input type="month">',
  'For picking only a month and a year.',
  'শুধু মাস ও বছর বাছাই করার জন্য।',
  `<input type="month">`,
  `<input type="month">`),

T('form','input','<input type="week">',
  'For picking one particular week of the year.',
  'বছরের একটি নির্দিষ্ট সপ্তাহ বাছাই করার জন্য।',
  `<input type="week">`,
  `<input type="week">`),

T('form','input','<input type="color">',
  'Shows a colour box. Clicking it opens the colour palette.',
  'রং বাছাই করার একটি রঙের বাক্স দেখায়। ক্লিক করলে প্যালেট খোলে।',
  `<input type="color" value="red">`,
  `<input type="color" value="red">`),

T('form','input','<input type="range">',
  'Makes a slider that you drag to pick a number (0 to 100 by default).',
  'স্লাইডার বানায়, যা টেনে একটি সংখ্যা বাছাই করা যায় (ডিফল্ট ০ থেকে ১০০)।',
  `<input type="range" value="40">`,
  `<input type="range" value="40">`),

T('form','input','<input type="file">',
  'For choosing a file from the phone or computer.',
  'ফোন বা কম্পিউটার থেকে ফাইল বাছাই করার জন্য।',
  `<input type="file">`,
  `<input type="file">`),

T('form','input','<input type="checkbox">',
  'A small tick box. You can tick more than one option with the same name.',
  'টিক দেওয়ার ছোট বাক্স। একই name দিয়ে একাধিক বিকল্প বাছাই করা যায়।',
  `<input type="checkbox" name="hobby" value="Music"> Music
<input type="checkbox" name="hobby" value="Sports"> Sports`,
  `<label><input type="checkbox" name="hobby" value="Music"> Music</label>
<label><input type="checkbox" name="hobby" value="Sports"> Sports</label>`),

T('form','input','<input type="radio">',
  'A round button where only one option in a group of the same name can be picked.',
  'গোল বাটন, যেখানে একই name এর দলের মধ্যে একসাথে মাত্র একটি বাছাই করা যায়।',
  `<input type="radio" name="g" value="Male"> Male
<input type="radio" name="g" value="Female"> Female`,
  `<label><input type="radio" name="g" value="Male"> Male</label>
<label><input type="radio" name="g" value="Female"> Female</label>`),

T('form','input','<input type="submit">',
  'The button that sends all the form information.',
  'ফর্মের সব তথ্য জমা (পাঠানো) দেওয়ার বোতাম।',
  `<input type="submit" value="Submit">`,
  `<input type="submit" value="Submit">`),

T('form','input','<input type="reset">',
  'The button that puts every field back to its starting value.',
  'ফর্মের সব ঘর আগের ডিফল্ট অবস্থায় ফিরিয়ে আনার বোতাম।',
  `<input type="reset" value="Reset">`,
  `<input type="reset" value="Reset">`),

T('form','input','<input type="button">',
  'A simple button that does nothing by itself. Add behaviour with JavaScript.',
  'একটি সাধারণ বোতাম, যা নিজে থেকে কিছুই করে না।',
  `<input type="button" value="Click me">`,
  `<input type="button" value="Click me">`),

T('form','input','<input type="image">',
  'A submit button made from a picture. It needs src, alt, width and height.',
  'ছবি দিয়ে বানানো জমা দেওয়ার (submit) বোতাম।',
  `<input type="image" src="pic.png" alt="Submit" width="80" height="60">`,
  `<div style="text-align:center">${pic(80,60)}<div style="font-size:11px;color:gray">pic.png — image button</div></div>`),

T('form','tag','<label>',
  'Writes a name next to an input. With the for attribute, clicking the label activates the input.',
  'ইনপুটের পাশে নাম লেখে। for অ্যাট্রিবিউট দিয়ে জুড়লে লেবেলে চাপ দিলেই ইনপুট সক্রিয় হয়।',
  `<label for="n">Name:</label>
<input type="text" id="n">`,
  `<label for="n">Name:</label> <input type="text" id="n">`),

T('form','tag','<textarea>',
  'Makes a big box for many lines of writing, like a comment or a message.',
  'অনেক লাইনের বড় লেখার বক্স তৈরি করে।',
  `<textarea>Write here</textarea>`,
  `<textarea>Write here</textarea>`),

T('form','tag','<select>',
  'Makes a drop-down list where one option can be picked from many.',
  'ড্রপডাউন তালিকা বানায়, যেখানে অনেক বিকল্পের মধ্যে থেকে একটি বাছাই করা যায়।',
  `<select>
  <option>Dhaka</option>
  <option>Khulna</option>
</select>`,
  `<select><option>Dhaka</option><option>Khulna</option></select>`),

T('form','tag','<option>',
  'One choice inside a drop-down list. It must always be inside select.',
  'ড্রপডাউনের একটি বিকল্প। এটি সবসময় select এর ভেতরে লিখতে হয়।',
  `<select>
  <option>One option</option>
</select>`,
  `<select><option>One option</option></select>`),

T('form','tag','<button>',
  'Makes a clickable button. The text inside becomes the button name.',
  'ক্লিক করার মতো একটি বোতাম বানায়।',
  `<button>Save</button>`,
  `<button>Save</button>`),

/* ---------------- ATTRIBUTES ---------------- */
T('attr','attr','id',
  'Gives one element a unique name on the whole page. The same id should not be used twice.',
  'একটি এলিমেন্টকে পুরো পেজে ইউনিক নাম দেয়। একই id পেজে দুইবার ব্যবহার করা উচিত নয়।',
  `<p id="intro">This paragraph's id is intro</p>`,
  `<p id="intro">This paragraph's id is intro</p>`),

T('attr','attr','class',
  'Gives the same group name to several elements so they can be styled together.',
  'একাধিক এলিমেন্টকে একই দলের নাম দেয়, যাতে একসাথে স্টাইল করা যায়।',
  `<p class="note">This belongs to the note group</p>`,
  `<p class="note">This belongs to the note group</p>`),

T('attr','attr','style',
  'Writes CSS straight inside the tag to change how it looks.',
  'ট্যাগের ভেতরেই সরাসরি CSS লিখে চেহারা বদলায়।',
  `<p style="color:green">Green text</p>`,
  `<p style="color:green">Green text</p>`),

T('attr','attr','title',
  'Shows a small tooltip when the mouse rests on the tag.',
  'ট্যাগে মাউস রাখলে ছোট একটি টুলটিপ দেখায়।',
  `<p title="This is a tooltip">Hover here</p>`,
  `<p title="This is a tooltip">Hover here</p>`),

T('attr','attr','href',
  'Tells a link where to go when it is clicked. Used with the a tag.',
  'লিংকে ক্লিক করলে কোথায় যাবে সেই ঠিকানা বলে দেয়। a ট্যাগের সাথে ব্যবহার হয়।',
  `<a href="https://example.com">Link</a>`,
  `<a href="https://example.com" target="_blank" rel="noopener">Link</a>`),

T('attr','attr','src',
  'Tells the address or name of an image file. Used on the img tag.',
  'ছবির ফাইলের ঠিকানা বা নাম বলে দেয়। img ট্যাগে লাগে।',
  `<img src="pic.png" alt="School picture">`,
  `${pic(90,68)}`),

T('attr','attr','alt',
  'The alternative text for an image — shown when the picture cannot load.',
  'ছবি লোড না হলে ছবির বিকল্প বর্ণনা দেখায়।',
  `<img src="wrong.png" alt="Image not found">`,
  `<span style="display:inline-block;padding:10px;border:1px dashed gray;font-size:12px;color:gray">Image not found</span>`),

T('attr','attr','width',
  'Sets the width of an image or element in pixels.',
  'ছবি বা এলিমেন্টের প্রস্থ (চওড়া) পিক্সেলে ঠিক করে।',
  `<img src="pic.png" width="40" alt="Small picture">`,
  `${pic(40,30)}`),

T('attr','attr','height',
  'Sets the height of an image or element in pixels.',
  'ছবি বা এলিমেন্টের উচ্চতা পিক্সেলে ঠিক করে।',
  `<img src="pic.png" height="30" alt="Short picture">`,
  `${pic(60,30)}`),

T('attr','attr','type',
  'Tells an input which kind it is, like text, password or checkbox.',
  'input কোন ধরনের হবে তা বলে দেয়।',
  `<input type="password" value="12345">`,
  `<input type="password" value="12345">`),

T('attr','attr','name',
  'Gives an input a name. When the form is sent, the data goes with this name.',
  'ইনপুটের একটি নাম দেয়। ফর্ম জমা দেওয়ার সময় এই নাম ধরেই ডেটা যায়।',
  `<input type="text" name="username" value="Rahim">`,
  `<input type="text" name="username" value="Rahim">`),

T('attr','attr','value',
  'Puts a starting value inside an input. On a button, it becomes the button name.',
  'ইনপুটে আগে থেকে একটি মান বসিয়ে রাখে। বোতামে value এর লেখাই বোতামের নাম।',
  `<input type="text" value="Default value">`,
  `<input type="text" value="Default value">`),

T('attr','attr','placeholder',
  'Shows a light hint inside an empty input. It disappears when you start typing.',
  'খালি ইনপুট বক্সে হালকা ইঙ্গিত দেখায়। লেখা শুরু করলে এটি মিলিয়ে যায়।',
  `<input type="text" placeholder="Enter email">`,
  `<input type="text" placeholder="Enter email">`),

T('attr','attr','for',
  'Joins a label to an input. The label for value and the input id must be the same.',
  'label কে একটি ইনপুটের সাথে জোড়ে। label এর for আর ইনপুটের id এক হতে হয়।',
  `<label for="n">Name:</label>
<input type="text" id="n">`,
  `<label for="n">Name:</label> <input type="text" id="n">`),

/* ---------------- INLINE CSS ---------------- */
T('css','css','color',
  'Sets the colour of the text. You can use a colour name, a code, or rgb.',
  'লেখার রং ঠিক করে। রঙের নাম, কোড বা rgb দিয়ে রং দেওয়া যায়।',
  `<p style="color:red">Red text</p>`,
  `<p style="color:red">Red text</p>`),

T('css','css','background',
  'A short way to write everything about the background (colour, image) on one line.',
  'ব্যাকগ্রাউন্ড সম্পর্কিত সব কিছু এক লাইনে লেখার সংক্ষিপ্ত উপায়।',
  `<p style="background:yellow;color:black">Yellow background</p>`,
  `<p style="background:yellow;color:black">Yellow background</p>`),

T('css','css','background-color',
  'Sets the colour behind the element. The colour spreads over the whole box.',
  'এলিমেন্টের পেছনের রং ঠিক করে। রং পুরো বক্সের পেছনে ছড়িয়ে যায়।',
  `<p style="background-color:lightblue;color:black">Light blue</p>`,
  `<p style="background-color:lightblue;color:black">Light blue</p>`),

T('css','css','background-image',
  'Puts a picture behind the element. The address goes inside url(...).',
  'এলিমেন্টের পেছনে ছবি বসায়। ছবির ঠিকানা url(...) এর ভেতরে লিখতে হয়।',
  `<p style="background-image:url(pic.png);
           background-size:cover;
           height:60px;
           color:white;
           text-shadow:1px 1px 3px black">
  Text over image
</p>`,
  `<p style="background-image:url('${PIC_DATA}');background-size:cover;height:60px;color:white;text-shadow:1px 1px 3px black;display:flex;align-items:center;justify-content:center;border-radius:8px">Text over image</p>`),

T('css','css','font-size',
  'Sets the size of the text, usually in px. A bigger number makes bigger text.',
  'লেখার আকার ঠিক করে, সাধারণত px এককে।',
  `<p style="font-size:24px">Big text</p>`,
  `<p style="font-size:24px">Big text</p>`),

T('css','css','font-family',
  'Sets the font (letter design), like monospace or serif.',
  'লেখার ফন্ট বা অক্ষরের নকশা ঠিক করে।',
  `<p style="font-family:monospace">Monospace font</p>`,
  `<p style="font-family:monospace">Monospace font</p>`),

T('css','css','font-weight',
  'Makes the text thick or thin. bold makes it thick, normal keeps it plain.',
  'লেখা মোটা বা পাতলা করে। bold দিলে মোটা হয়।',
  `<p style="font-weight:bold">Bold text</p>`,
  `<p style="font-weight:bold">Bold text</p>`),

T('css','css','font-style',
  'Makes the text italic (slanted). Use normal to make it straight again.',
  'লেখা বাঁকা (italic) করে। স্বাভাবিক করতে normal ব্যবহার করুন।',
  `<p style="font-style:italic">Italic text</p>`,
  `<p style="font-style:italic">Italic text</p>`),

T('css','css','text-align',
  'Chooses which side the text lines up on: left, center, right, or justify.',
  'লেখা কোন দিকে সাজানো হবে তা ঠিক করে।',
  `<p style="text-align:center">Centered text</p>`,
  `<p style="text-align:center">Centered text</p>`),

T('css','css','text-decoration',
  'Adds or removes lines on text: underline, line-through, or none.',
  'লেখায় দাগ যোগ বা বাদ দেয়: underline, line-through, none।',
  `<p style="text-decoration:underline">Underlined text</p>`,
  `<p style="text-decoration:underline">Underlined text</p>`),

T('css','css','text-transform',
  'Changes the letter case of English text: uppercase, lowercase, or capitalize.',
  'ইংরেজি অক্ষরের ধরন বদলায়: uppercase, lowercase, capitalize।',
  `<p style="text-transform:uppercase">hello world</p>`,
  `<p style="text-transform:uppercase">hello world</p>`),

T('css','css','text-indent',
  'Pushes the first line of a paragraph in from the left, like in a book.',
  'অনুচ্ছেদের প্রথম লাইনটি বাম দিক থেকে ভেতরে ঢুকিয়ে শুরু করে।',
  `<p style="text-indent:30px">
  This paragraph is a little long so it wraps onto two lines. The second line is here.
</p>`,
  `<p style="text-indent:30px">This paragraph is a little long so it wraps onto two lines. The second line is here.</p>`),

T('css','css','letter-spacing',
  'Increases or decreases the gap between each letter.',
  'প্রতিটি অক্ষরের মাঝের ফাঁক বাড়ায় বা কমায়।',
  `<p style="letter-spacing:5px">HELLO</p>`,
  `<p style="letter-spacing:5px">HELLO</p>`),

T('css','css','word-spacing',
  'Increases or decreases the gap between words.',
  'শব্দগুলোর মাঝের ফাঁক বাড়ায় বা কমায়।',
  `<p style="word-spacing:15px">I eat rice</p>`,
  `<p style="word-spacing:15px">I eat rice</p>`),

T('css','css','line-height',
  'Sets the distance between lines. A bigger number spreads the lines out.',
  'লাইনগুলোর মাঝের দূরত্ব ঠিক করে।',
  `<p style="line-height:2.2">
  This paragraph is a little long so it wraps onto two lines. The second line is here.
</p>`,
  `<p style="line-height:2.2">This paragraph is a little long so it wraps onto two lines. The second line is here.</p>`),

T('css','css','width',
  'Sets how wide the element box is. Without it, a block element fills the whole line.',
  'এলিমেন্টের বক্সের চওড়া ঠিক করে।',
  `<p style="width:150px;background:lightgray;color:black">150px wide</p>`,
  `<p style="width:150px;background:lightgray;color:black">150px wide</p>`),

T('css','css','height',
  'Sets how tall the element box is.',
  'এলিমেন্টের বক্সের উচ্চতা ঠিক করে।',
  `<p style="height:60px;background:lightgray;color:black">60px tall</p>`,
  `<p style="height:60px;background:lightgray;color:black">60px tall</p>`),

T('css','css','margin',
  'The space outside the box, which pushes the box away from other elements.',
  'বক্সের বাইরের ফাঁকা জায়গা, যা বক্সকে অন্য এলিমেন্ট থেকে দূরে সরায়।',
  `<p style="margin:20px;background:lightgray;color:black">Margin all sides</p>`,
  `<p style="margin:20px;background:lightgray;color:black">Margin all sides</p>`),

T('css','css','margin-top',
  'Sets only the space above the box, so the box moves down.',
  'বক্সের শুধু উপরের বাইরের ফাঁকা ঠিক করে।',
  `<p style="margin-top:30px;background:lightgray;color:black">Margin top</p>`,
  `<p style="margin-top:30px;background:lightgray;color:black">Margin top</p>`),

T('css','css','margin-right',
  'Sets only the space on the right of the box.',
  'বক্সের শুধু ডানের বাইরের ফাঁকা ঠিক করে।',
  `<p style="margin-right:60px;background:lightgray;color:black">Margin right</p>`,
  `<p style="margin-right:60px;background:lightgray;color:black">Margin right</p>`),

T('css','css','margin-bottom',
  'Sets only the space below the box, so the next element moves further down.',
  'বক্সের শুধু নিচের বাইরের ফাঁকা ঠিক করে।',
  `<p style="margin-bottom:30px;background:lightgray;color:black">Margin bottom</p>`,
  `<p style="margin-bottom:30px;background:lightgray;color:black">Margin bottom</p>`),

T('css','css','margin-left',
  'Sets only the space on the left of the box, so the box moves to the right.',
  'বক্সের শুধু বামের বাইরের ফাঁকা ঠিক করে।',
  `<p style="margin-left:40px;background:lightgray;color:black">Margin left</p>`,
  `<p style="margin-left:40px;background:lightgray;color:black">Margin left</p>`),

T('css','css','padding',
  'The space inside the box, between the text and the edge.',
  'বক্সের ভেতরে লেখা ও কিনারার মাঝের ফাঁকা জায়গা।',
  `<p style="padding:20px;background:lightgray;color:black">Padding all sides</p>`,
  `<p style="padding:20px;background:lightgray;color:black">Padding all sides</p>`),

T('css','css','padding-top',
  'Sets the space inside the box between the top edge and the text.',
  'বক্সের ভেতরে উপরের কিনারা ও লেখার মাঝের ফাঁকা ঠিক করে।',
  `<p style="padding-top:25px;background:lightgray;color:black">Padding top</p>`,
  `<p style="padding-top:25px;background:lightgray;color:black">Padding top</p>`),

T('css','css','padding-right',
  'Sets the space inside the box between the right edge and the text.',
  'বক্সের ভেতরে ডান কিনারা ও লেখার মাঝের ফাঁকা ঠিক করে।',
  `<p style="padding-right:50px;background:lightgray;color:black">Padding right</p>`,
  `<p style="padding-right:50px;background:lightgray;color:black">Padding right</p>`),

T('css','css','padding-bottom',
  'Sets the space inside the box between the bottom edge and the text.',
  'বক্সের ভেতরে নিচের কিনারা ও লেখার মাঝের ফাঁকা ঠিক করে।',
  `<p style="padding-bottom:25px;background:lightgray;color:black">Padding bottom</p>`,
  `<p style="padding-bottom:25px;background:lightgray;color:black">Padding bottom</p>`),

T('css','css','padding-left',
  'Sets the space inside the box between the left edge and the text, so the text moves to the right.',
  'বক্সের ভেতরে বাম কিনারা ও লেখার মাঝের ফাঁকা ঠিক করে।',
  `<p style="padding-left:40px;background:lightgray;color:black">Padding left</p>`,
  `<p style="padding-left:40px;background:lightgray;color:black">Padding left</p>`),

T('css','css','border',
  'Draws a line around the box. Three things: thickness (2px), style (solid), colour (red).',
  'বক্সের চারপাশে দাগ টানে। তিনটি জিনিস: মোটা, ধরন, রং।',
  `<p style="border:2px solid red">Red border</p>`,
  `<p style="border:2px solid red">Red border</p>`),

T('css','css','border-width',
  'Sets how thick the border line is. It needs border-style too.',
  'বর্ডারের দাগ কত মোটা হবে তা ঠিক করে।',
  `<p style="border-width:4px;border-style:solid">Thick border</p>`,
  `<p style="border-width:4px;border-style:solid">Thick border</p>`),

T('css','css','border-style',
  'Sets the kind of border: solid, dashed or dotted.',
  'বর্ডারের ধরন ঠিক করে: solid, dashed, dotted।',
  `<p style="border-style:dashed">Dashed border</p>`,
  `<p style="border-style:dashed">Dashed border</p>`),

T('css','css','border-color',
  'Sets the colour of the border. border-style is also needed for the border to show.',
  'বর্ডারের রং ঠিক করে। border-style ও দিতে হবে।',
  `<p style="border-color:blue;border-style:solid">Blue border</p>`,
  `<p style="border-color:blue;border-style:solid">Blue border</p>`),

T('css','css','border-radius',
  'Rounds the corners of the box. A bigger number makes rounder corners.',
  'বক্সের কোণা গোল করে। সংখ্যা যত বড়, কোণা তত গোল।',
  `<p style="border-radius:15px;border:2px solid green">Rounded corners</p>`,
  `<p style="border-radius:15px;border:2px solid green">Rounded corners</p>`)
];

ITEMS.forEach((it, i) => { it._id = i; });

/* =====================================================
   STATE
   ===================================================== */
const state = {
  lang: 'bn',
  theme: 'light',
  filter: 'basic',
  search: ''
};

const edits = new Map();

/* =====================================================
   CARD RENDERING
   ===================================================== */
const cardsEl = $('#cards');
const countEl = $('#countText');          // may be null in an older HTML — always guard it

function badgeText(kind) {
  const map = {
    en: { tag: 'Tag', attr: 'Attribute', css: 'CSS', input: 'Input type' },
    bn: { tag: 'ট্যাগ', attr: 'অ্যাট্রিবিউট', css: 'CSS', input: 'ইনপুট টাইপ' }
  };
  return map[state.lang][kind] || 'Tag';
}

const CAT_NAMES = {
  en: { basic: 'Basic', list: 'List', table: 'Table', form: 'Form', css: 'Inline CSS', attr: 'Attributes' },
  bn: { basic: 'বেসিক', list: 'লিস্ট', table: 'টেবিল', form: 'ফর্ম', css: 'Inline CSS', attr: 'অ্যাট্রিবিউট' }
};

function cardHTML(it, showTab = false) {
  const desc = state.lang === 'bn' ? it.bn : it.en;
  const saved = edits.get(it._id);
  const code = saved ? saved.code : it.code;
  const out  = saved ? saved.out  : it.out;

  return `
    <article class="card" data-cat="${it.cat}" data-id="${it._id}">
      <div class="card-head">
        <span class="chip">${esc(it.name)}</span>
        <div class="head-right">
          <span class="badge">${badgeText(it.kind)}${showTab ? ' · ' + CAT_NAMES[state.lang][it.cat] : ''}</span>
          <button type="button" class="reset-btn" title="Reset example" aria-label="Reset">↺</button>
        </div>
      </div>
      <p class="desc">${desc}</p>
      <div class="demo">
        <div class="code-pane">
          <div class="pane-title">${state.lang === 'bn' ? 'কোড (এডিট করুন)' : 'Code (edit me)'}</div>
          <textarea class="code-input" spellcheck="false" wrap="soft" rows="1">${esc(code)}</textarea>
        </div>
        <div class="out-pane">
          <div class="pane-title">${state.lang === 'bn' ? 'লাইভ আউটপুট' : 'Live output'}</div>
          <div class="out-box">${out}</div>
        </div>
      </div>
    </article>`;
}

/* =====================================================
   CODE BOX AUTO-SIZING  (works the same on every tab)
   ===================================================== */

// measure ONE box: shrink it to 0 so scrollHeight is exactly the height the text needs
function autoGrow(ta) {
  if (!ta || !ta.isConnected) return;

  const cs = getComputedStyle(ta);
  const border = (parseFloat(cs.borderTopWidth) || 0) + (parseFloat(cs.borderBottomWidth) || 0);

  ta.style.height = '0px';
  const need = ta.scrollHeight + border;
  ta.style.height = need + 'px';

  ta.scrollTop = 0;
  ta.scrollLeft = 0;
}

// watch every single code box: if its width changes, its height must be measured again
let codeObserver = null;
if ('ResizeObserver' in window) {
  codeObserver = new ResizeObserver((entries) => {
    for (const entry of entries) {
      const ta = entry.target;
      const w = Math.round(ta.clientWidth);
      if (ta._lastWidth !== w) {
        ta._lastWidth = w;
        autoGrow(ta);
      }
    }
  });
}

// measure ALL boxes at once — write, then read, then write, so the browser
// only has to lay the page out twice instead of once per card
function fitAll() {
  const boxes = $$('.code-input');
  if (!boxes.length) return;

  boxes.forEach(ta => {
    if (codeObserver && !ta._observed) {
      ta._observed = true;
      codeObserver.observe(ta);
    }
    ta.style.height = '0px';
  });

  const heights = boxes.map(ta => {
    const cs = getComputedStyle(ta);
    const border = (parseFloat(cs.borderTopWidth) || 0) + (parseFloat(cs.borderBottomWidth) || 0);
    return ta.scrollHeight + border;
  });

  boxes.forEach((ta, i) => {
    ta.style.height = heights[i] + 'px';
    ta.scrollTop = 0;
    ta.scrollLeft = 0;
  });
}

// fonts, scrollbars, phone rotation and tab switches all move things around,
// so measure a few times: right now, next frame, and shortly afterwards
let fitTimers = [];
function scheduleFit() {
  fitAll();
  requestAnimationFrame(fitAll);
  fitTimers.forEach(t => clearTimeout(t));
  fitTimers = [
    setTimeout(fitAll, 60),
    setTimeout(fitAll, 250),
    setTimeout(fitAll, 600)
  ];
}

if ('ResizeObserver' in window) {
  let lastCardsWidth = 0;
  new ResizeObserver(() => {
    const w = cardsEl.clientWidth;
    if (w !== lastCardsWidth) {
      lastCardsWidth = w;
      scheduleFit();
    }
  }).observe(cardsEl);
}

window.addEventListener('resize', scheduleFit);
window.addEventListener('orientationchange', () => setTimeout(scheduleFit, 250));
window.addEventListener('load', scheduleFit);
if (document.fonts && document.fonts.ready) document.fonts.ready.then(scheduleFit);

/* ---------------- search helpers ---------------- */
// lowercase, drop < > / quotes, tidy spaces around "="
const normQ = (str) => String(str)
  .toLowerCase()
  .replace(/[<>\/"'`]/g, '')
  .replace(/\s*=\s*/g, '=')
  .replace(/\s+/g, ' ')
  .trim();

// every name a card can be found by (used for EXACT matching)
function keysFor(it) {
  const keys = new Set();
  const full = normQ(it.name);
  keys.add(full);

  const typeMatch = it.name.match(/type\s*=\s*"([^"]+)"/i);
  if (typeMatch) {
    // <input type="text">  ->  "text", "type=text", "input type=text"
    const v = typeMatch[1].toLowerCase();
    keys.add(v);
    keys.add('type=' + v);
    keys.add('input type=' + v);
    keys.add('input type ' + v);
  } else {
    // <h1> – <h6>  ->  "h1", "h6", "h1-h6"
    const tags = [...it.name.matchAll(/<\s*([a-z0-9]+)/gi)].map(m => m[1].toLowerCase());
    tags.forEach(t => keys.add(t));
    if (tags.length > 1) keys.add(tags[0] + '-' + tags[tags.length - 1]);
    // the heading card covers h1 to h6, so h2, h3, h4, h5 must find it too
    if (tags.includes('h1') && tags.includes('h6')) ['h2', 'h3', 'h4', 'h5'].forEach(h => keys.add(h));
  }
  // "colspan attribute" -> "colspan"
  keys.add(full.replace(/ attribute$/, ''));
  return [...keys];
}
ITEMS.forEach(it => { it._keys = keysFor(it); });

// Tier 1: exact name  ->  Tier 2: name starts with  ->  Tier 3: name contains
// -> Tier 4: description / code contains. The first tier that has results wins,
// so typing "p" shows only <p>, "border" shows only border, "width" shows the
// attribute AND the css property.
function searchItems(raw) {
  const q = normQ(raw);
  if (!q) return null;

  const tiers = [
    it => it._keys.some(k => k === q),
    it => it._keys.some(k => k.startsWith(q)),
    it => q.length >= 2 && it._keys.some(k => k.includes(q)),
    it => q.length >= 3 && (it.en + ' ' + it.bn + ' ' + it.code).toLowerCase().includes(raw.trim().toLowerCase())
  ];

  for (const test of tiers) {
    const found = ITEMS.filter(test);
    if (found.length) {
      // cards from the tab you are on come first
      return found.sort((a, b) => (b.cat === state.filter) - (a.cat === state.filter) || a._id - b._id);
    }
  }
  return [];
}

function renderCards() {
  const searched = searchItems(state.search);
  const searching = searched !== null;
  const list = searching ? searched : ITEMS.filter(it => it.cat === state.filter);

  cardsEl.innerHTML = list.length
    ? list.map(it => cardHTML(it, searching)).join('')
    : `<p class="empty">${state.lang === 'bn'
        ? '😕 কিছু পাওয়া যায়নি — অন্য শব্দ দিয়ে খুঁজুন।'
        : '😕 Nothing found — try another word.'}</p>`;

  // the count is a search aid only — hidden completely when nothing is being searched
  if (countEl) {
    if (searching) {
      countEl.textContent = `${list.length} / ${ITEMS.length}`;
      countEl.hidden = false;
    } else {
      countEl.textContent = '';
      countEl.hidden = true;
    }
  }

  scheduleFit();
}

cardsEl.addEventListener('input', (e) => {
  const ta = e.target.closest('.code-input');
  if (!ta) return;
  const card = ta.closest('.card');
  const id = Number(card.dataset.id);
  const out = card.querySelector('.out-box');
  out.innerHTML = ta.value;
  edits.set(id, { code: ta.value, out: ta.value });
  autoGrow(ta);
});

// if the browser tries to scroll a code box while typing, put it straight back
cardsEl.addEventListener('scroll', (e) => {
  if (e.target.classList && e.target.classList.contains('code-input')) {
    e.target.scrollTop = 0;
    e.target.scrollLeft = 0;
  }
}, true);

cardsEl.addEventListener('click', (e) => {
  const btn = e.target.closest('.reset-btn');
  if (!btn) return;
  const card = btn.closest('.card');
  const id = Number(card.dataset.id);
  edits.delete(id);
  renderCards();
});

cardsEl.addEventListener('keydown', (e) => {
  if (e.key === 'Tab' && e.target.classList.contains('code-input')) {
    e.preventDefault();
    const ta = e.target;
    const s = ta.selectionStart;
    const en = ta.selectionEnd;
    ta.value = ta.value.slice(0, s) + '  ' + ta.value.slice(en);
    ta.selectionStart = ta.selectionEnd = s + 2;
    ta.dispatchEvent(new Event('input', { bubbles: true }));
  }
});

cardsEl.addEventListener('submit', (e) => e.preventDefault(), true);

/* =====================================================
   QUESTION BANK — MCQ only, one set per tab
   ===================================================== */
const QUESTION_BANK = {

  basic: {
    mcq: [
      { q: { en: 'Which tag gives the biggest heading?', bn: 'কোন ট্যাগ সবচেয়ে বড় শিরোনাম বানায়?' },
        opts: ['p', 'h1', 'h6', 'big'], a: 1,
        exp: { en: 'h1 is the biggest and most important heading.', bn: 'h1 সবচেয়ে বড় ও গুরুত্বপূর্ণ হেডিং।' } },
      { q: { en: 'Which tag creates a paragraph?', bn: 'কোন ট্যাগ অনুচ্ছেদ তৈরি করে?' },
        opts: ['<para>', '<p>', '<pg>', '<text>'], a: 1,
        exp: { en: 'p is the paragraph tag.', bn: 'p হলো প্যারাগ্রাফ ট্যাগ।' } },
      { q: { en: 'Which tag jumps to a new line and has no closing tag?', bn: 'কোন ট্যাগ নতুন লাইনে যায় এবং এর শেষ ট্যাগ নেই?' },
        opts: ['<p>', '<hr>', '<br>', '<big>'], a: 2,
        exp: { en: 'br is an empty tag — written only as <br>.', bn: 'br খালি ট্যাগ — শুধু <br> লেখা হয়।' } },
      { q: { en: 'Which tag draws a horizontal line?', bn: 'কোন ট্যাগ আড়াআড়ি দাগ টানে?' },
        opts: ['<hr>', '<br>', '<line>', '<u>'], a: 0,
        exp: { en: 'hr draws a horizontal rule.', bn: 'hr একটি আড়াআড়ি দাগ টানে।' } },
      { q: { en: 'Which tag creates a clickable link?', bn: 'কোন ট্যাগ ক্লিকযোগ্য লিংক বানায়?' },
        opts: ['<link>', '<a>', '<href>', '<url>'], a: 1,
        exp: { en: 'a is the anchor tag; the address goes in href.', bn: 'a হলো লিংক ট্যাগ; ঠিকানা href এ থাকে।' } },
      { q: { en: 'Which tag displays an image?', bn: 'কোন ট্যাগ ছবি দেখায়?' },
        opts: ['<picture>', '<img>', '<image>', '<src>'], a: 1,
        exp: { en: 'img shows a picture; src points to the file.', bn: 'img ছবি দেখায়; src ফাইলের ঠিকানা দেয়।' } },
      { q: { en: 'Which tag makes text a little bigger without any CSS?', bn: 'কোন ট্যাগ কোনো CSS ছাড়াই লেখা একটু বড় করে?' },
        opts: ['<small>', '<b>', '<big>', '<em>'], a: 2,
        exp: { en: 'big makes text bigger; small makes it smaller.', bn: 'big লেখা বড় করে; small ছোট করে।' } },
      { q: { en: 'Which tag shows bold text AND marks it important?', bn: 'কোন ট্যাগ লেখা মোটা করে এবং গুরুত্বপূর্ণ বোঝায়?' },
        opts: ['<b>', '<em>', '<strong>', '<big>'], a: 2,
        exp: { en: 'strong = bold + importance; b = bold only.', bn: 'strong = মোটা + গুরুত্বপূর্ণ; b = শুধু মোটা।' } },
      { q: { en: 'Which tag shows italic text AND adds emphasis?', bn: 'কোন ট্যাগ লেখা বাঁকা করে এবং জোর বোঝায়?' },
        opts: ['<i>', '<em>', '<u>', '<del>'], a: 1,
        exp: { en: 'em = italic + emphasis; i = italic only.', bn: 'em = বাঁকা + জোর; i = শুধু বাঁকা।' } },
      { q: { en: 'Which tag shows text as subscript (like the 2 in H₂O)?', bn: 'কোন ট্যাগ subscript দেখায় (যেমন H₂O এর 2)?' },
        opts: ['<sup>', '<sub>', '<small>', '<down>'], a: 1,
        exp: { en: 'sub drops text down; sup lifts it up.', bn: 'sub লেখা নিচে নামায়; sup উপরে তোলে।' } }
    ]
  },

  list: {
    mcq: [
      { q: { en: 'Which tag starts a bullet list?', bn: 'কোন ট্যাগ বুলেট তালিকা শুরু করে?' },
        opts: ['<ol>', '<ul>', '<li>', '<dl>'], a: 1,
        exp: { en: 'ul = unordered (bullet) list.', bn: 'ul = unordered (বুলেট) তালিকা।' } },
      { q: { en: 'Which tag starts a numbered list?', bn: 'কোন ট্যাগ নম্বরযুক্ত তালিকা শুরু করে?' },
        opts: ['<ul>', '<ol>', '<li>', '<nl>'], a: 1,
        exp: { en: 'ol = ordered (numbered) list.', bn: 'ol = ordered (নম্বরযুক্ত) তালিকা।' } },
      { q: { en: 'Which tag is used for one list item?', bn: 'একটি তালিকা আইটেমের জন্য কোন ট্যাগ?' },
        opts: ['<item>', '<li>', '<list>', '<point>'], a: 1,
        exp: { en: 'li = list item.', bn: 'li = list item।' } },
      { q: { en: 'Where must <li> be placed?', bn: '<li> কোথায় রাখতে হয়?' },
        opts: ['Inside <body>', 'Inside <ul> or <ol>', 'Inside <head>', 'Anywhere'], a: 1,
        exp: { en: 'li belongs inside ul or ol only.', bn: 'li শুধু ul বা ol এর ভেতরে থাকে।' } },
      { q: { en: 'In a nested ul inside ul, where does the inner ul go?', bn: 'ul এর ভেতরে ul রাখলে ভেতরের ul কোথায় যায়?' },
        opts: ['Inside the outer ul', 'Inside the outer li', 'After the outer ul', 'Before the outer ul'], a: 1,
        exp: { en: 'The inner list goes inside the outer li, not directly inside the outer ul.', bn: 'ভেতরের তালিকা বাইরের li এর ভেতরে যায়, সরাসরি বাইরের ul এ নয়।' } },
      { q: { en: 'When you nest an ol inside another ol, what number does the inner list start from?', bn: 'ol এর ভেতরে ol রাখলে ভেতরের তালিকা কোন নম্বর থেকে শুরু হয়?' },
        opts: ['Continues from outer', 'Starts again from 1', 'Starts from 0', 'No number'], a: 1,
        exp: { en: 'The inner ordered list starts again from 1.', bn: 'ভেতরের ordered list আবার ১ থেকে শুরু হয়।' } },
      { q: { en: 'Which list is used when the order does NOT matter?', bn: 'ক্রম গুরুত্বপূর্ণ না হলে কোন তালিকা ব্যবহার হয়?' },
        opts: ['ul', 'ol', 'table', 'dl'], a: 0,
        exp: { en: 'ul = unordered — no order.', bn: 'ul = unordered — ক্রম নেই।' } },
      { q: { en: 'Which list is used when the order matters?', bn: 'ক্রম গুরুত্বপূর্ণ হলে কোন তালিকা ব্যবহার হয়?' },
        opts: ['ul', 'ol', 'dl', 'nl'], a: 1,
        exp: { en: 'ol = ordered — order matters.', bn: 'ol = ordered — ক্রম গুরুত্বপূর্ণ।' } },
      { q: { en: 'What does a nested list do visually?', bn: 'একটি nested list দেখতে কী করে?' },
        opts: ['Moves to the right', 'Moves to the left', 'Same level', 'Goes to a new page'], a: 0,
        exp: { en: 'Nested lists are indented to the right.', bn: 'Nested list ডান দিকে সরে যায়।' } },
      { q: { en: 'How many nested levels are recommended?', bn: 'কত স্তর nested list রাখা ভালো?' },
        opts: ['1', '2–3', '5–6', 'Any number'], a: 1,
        exp: { en: 'Too many levels get hard to read; 2–3 is best.', bn: 'বেশি স্তর পড়তে কঠিন হয়; ২-৩ ভালো।' } }
    ]
  },

  table: {
    mcq: [
      { q: { en: 'Which tag starts a table?', bn: 'কোন ট্যাগ টেবিল শুরু করে?' },
        opts: ['<grid>', '<table>', '<tab>', '<tr>'], a: 1,
        exp: { en: 'table is the main table tag.', bn: 'table হলো মূল টেবিল ট্যাগ।' } },
      { q: { en: 'Which tag creates a row?', bn: 'কোন ট্যাগ সারি তৈরি করে?' },
        opts: ['<row>', '<tr>', '<td>', '<th>'], a: 1,
        exp: { en: 'tr = table row.', bn: 'tr = table row।' } },
      { q: { en: 'Which tag creates a header cell?', bn: 'কোন ট্যাগ হেডার ঘর তৈরি করে?' },
        opts: ['<td>', '<th>', '<thead>', '<head>'], a: 1,
        exp: { en: 'th = table header cell (bold, centred).', bn: 'th = টেবিল হেডার ঘর (মোটা, মাঝে)।' } },
      { q: { en: 'Which tag creates a normal data cell?', bn: 'কোন ট্যাগ সাধারণ ডেটা ঘর তৈরি করে?' },
        opts: ['<td>', '<th>', '<cell>', '<data>'], a: 0,
        exp: { en: 'td = table data cell.', bn: 'td = টেবিল ডেটা ঘর।' } },
      { q: { en: 'Which tag groups the header row?', bn: 'কোন ট্যাগ হেডার সারি গুছিয়ে রাখে?' },
        opts: ['<thead>', '<tbody>', '<tfoot>', '<head>'], a: 0,
        exp: { en: 'thead = table head.', bn: 'thead = টেবিলের মাথা।' } },
      { q: { en: 'Which tag groups the main data rows?', bn: 'কোন ট্যাগ মূল ডেটা সারি গুছিয়ে রাখে?' },
        opts: ['<thead>', '<tbody>', '<tfoot>', '<main>'], a: 1,
        exp: { en: 'tbody = table body.', bn: 'tbody = টেবিলের মূল অংশ।' } },
      { q: { en: 'Which tag groups the footer row (like a total)?', bn: 'কোন ট্যাগ ফুটার সারি (যেমন মোট) গুছিয়ে রাখে?' },
        opts: ['<thead>', '<tbody>', '<tfoot>', '<footer>'], a: 2,
        exp: { en: 'tfoot = table foot.', bn: 'tfoot = টেবিলের পাদদেশ।' } },
      { q: { en: 'Which attribute joins two columns into one cell?', bn: 'কোন অ্যাট্রিবিউট দুটি কলামকে এক ঘরে জোড়ে?' },
        opts: ['rowspan', 'colspan', 'width', 'merge'], a: 1,
        exp: { en: 'colspan joins columns sideways.', bn: 'colspan পাশাপাশি কলাম জোড়ে।' } },
      { q: { en: 'Which attribute joins two rows into one cell?', bn: 'কোন অ্যাট্রিবিউট দুটি সারিকে এক ঘরে জোড়ে?' },
        opts: ['rowspan', 'colspan', 'height', 'merge'], a: 0,
        exp: { en: 'rowspan joins rows up and down.', bn: 'rowspan উপর-নিচ সারি জোড়ে।' } },
      { q: { en: 'What does colspan="2" mean?', bn: 'colspan="2" মানে কী?' },
        opts: ['Cell spans 2 rows', 'Cell spans 2 columns', 'Cell is 2px wide', 'Cell has 2 borders'], a: 1,
        exp: { en: 'The cell takes the place of two columns.', bn: 'ঘরটি দুটি কলামের জায়গা নেয়।' } }
    ]
  },

  form: {
    mcq: [
      { q: { en: 'Which tag wraps a form?', bn: 'কোন ট্যাগ ফর্ম মোড়ক হিসেবে কাজ করে?' },
        opts: ['<input>', '<form>', '<fieldset>', '<label>'], a: 1,
        exp: { en: 'form is the wrapper for all inputs.', bn: 'form সব ইনপুটের মোড়ক।' } },
      { q: { en: 'Which input type hides the typed characters as dots?', bn: 'কোন input type লেখা ডট করে লুকায়?' },
        opts: ['text', 'email', 'password', 'search'], a: 2,
        exp: { en: 'password shows dots or stars.', bn: 'password ডট বা তারকা দেখায়।' } },
      { q: { en: 'Which input type checks for an @ sign?', bn: 'কোন input type @ চিহ্ন যাচাই করে?' },
        opts: ['text', 'email', 'url', 'tel'], a: 1,
        exp: { en: 'email validates the @ sign on submit.', bn: 'email জমা দেওয়ার সময় @ যাচাই করে।' } },
      { q: { en: 'Which input type lets you pick more than one option?', bn: 'কোন input type একাধিক বিকল্প বাছাই করতে দেয়?' },
        opts: ['radio', 'checkbox', 'range', 'submit'], a: 1,
        exp: { en: 'checkbox allows many ticks.', bn: 'checkbox এ অনেক টিক দেওয়া যায়।' } },
      { q: { en: 'Which input type lets you pick only one option in a group?', bn: 'কোন input type দলে শুধু একটি বাছাই করতে দেয়?' },
        opts: ['radio', 'checkbox', 'file', 'button'], a: 0,
        exp: { en: 'radio allows only one in a group of the same name.', bn: 'radio একই name এর দলে শুধু একটি বাছাই করতে দেয়।' } },
      { q: { en: 'Which input type shows a slider?', bn: 'কোন input type স্লাইডার দেখায়?' },
        opts: ['range', 'number', 'slider', 'scroll'], a: 0,
        exp: { en: 'range makes a slider (0–100 by default).', bn: 'range স্লাইডার বানায় (ডিফল্ট 0–100)।' } },
      { q: { en: 'Which input type lets you pick a date from a calendar?', bn: 'কোন input type ক্যালেন্ডার থেকে তারিখ বাছাই করতে দেয়?' },
        opts: ['text', 'date', 'month', 'time'], a: 1,
        exp: { en: 'date opens a calendar picker.', bn: 'date ক্যালেন্ডার খোলে।' } },
      { q: { en: 'Which tag makes a drop-down list?', bn: 'কোন ট্যাগ ড্রপডাউন তালিকা বানায়?' },
        opts: ['<dropdown>', '<select>', '<list>', '<menu>'], a: 1,
        exp: { en: 'select makes a drop-down; option is each choice.', bn: 'select ড্রপডাউন বানায়; option প্রতিটি বিকল্প।' } },
      { q: { en: 'Which tag is one choice inside a select?', bn: 'select এর ভেতরে একটি বিকল্পের ট্যাগ কোনটি?' },
        opts: ['<choice>', '<option>', '<item>', '<li>'], a: 1,
        exp: { en: 'option goes inside select.', bn: 'option select এর ভেতরে যায়।' } },
      { q: { en: 'Which input type sends the form?', bn: 'কোন input type ফর্ম পাঠায়?' },
        opts: ['send', 'submit', 'button', 'reset'], a: 1,
        exp: { en: 'submit sends the form; reset clears it.', bn: 'submit ফর্ম পাঠায়; reset মুছে দেয়।' } }
    ]
  },

  css: {
    mcq: [
      { q: { en: 'Which property changes the text colour?', bn: 'কোন প্রপার্টি লেখার রং বদলায়?' },
        opts: ['colour', 'color', 'text-color', 'fg'], a: 1,
        exp: { en: 'The CSS property is color (American spelling).', bn: 'CSS প্রপার্টি হলো color (আমেরিকান বানান)।' } },
      { q: { en: 'Which property changes the text size?', bn: 'কোন প্রপার্টি লেখার আকার বদলায়?' },
        opts: ['text-size', 'font-size', 'size', 'letter-size'], a: 1,
        exp: { en: 'font-size sets the text size, usually in px.', bn: 'font-size লেখার আকার ঠিক করে, সাধারণত px এ।' } },
      { q: { en: 'Which property adds space INSIDE the box?', bn: 'কোন প্রপার্টি বক্সের ভেতরে ফাঁকা যোগ করে?' },
        opts: ['margin', 'border', 'padding', 'width'], a: 2,
        exp: { en: 'padding is inside; margin is outside.', bn: 'padding ভেতরে; margin বাইরে।' } },
      { q: { en: 'Which property adds space OUTSIDE the box?', bn: 'কোন প্রপার্টি বক্সের বাইরে ফাঁকা যোগ করে?' },
        opts: ['margin', 'padding', 'border', 'height'], a: 0,
        exp: { en: 'margin is outside the box.', bn: 'margin বক্সের বাইরে।' } },
      { q: { en: 'Which property makes text bold?', bn: 'কোন প্রপার্টি লেখা মোটা করে?' },
        opts: ['font-style', 'font-weight', 'bold', 'text-bold'], a: 1,
        exp: { en: 'font-weight: bold makes text thick.', bn: 'font-weight: bold লেখা মোটা করে।' } },
      { q: { en: 'Which property makes text italic?', bn: 'কোন প্রপার্টি লেখা বাঁকা করে?' },
        opts: ['font-weight', 'font-style', 'text-style', 'italic'], a: 1,
        exp: { en: 'font-style: italic makes text slanted.', bn: 'font-style: italic লেখা বাঁকা করে।' } },
      { q: { en: 'Which property draws a line around the box?', bn: 'কোন প্রপার্টি বক্সের চারপাশে দাগ টানে?' },
        opts: ['outline', 'border', 'edge', 'frame'], a: 1,
        exp: { en: 'border draws a line; it needs style, width and colour.', bn: 'border দাগ টানে; style, width ও colour লাগে।' } },
      { q: { en: 'Which property rounds the corners of the box?', bn: 'কোন প্রপার্টি বক্সের কোণা গোল করে?' },
        opts: ['corner-radius', 'border-radius', 'round', 'radius'], a: 1,
        exp: { en: 'border-radius rounds corners.', bn: 'border-radius কোণা গোল করে।' } },
      { q: { en: 'Which property sets the width of the box?', bn: 'কোন প্রপার্টি বক্সের চওড়া ঠিক করে?' },
        opts: ['size', 'width', 'wide', 'w'], a: 1,
        exp: { en: 'width sets the horizontal size.', bn: 'width অনুভূমিক আকার ঠিক করে।' } },
      { q: { en: 'Which property sets how tall the box is?', bn: 'কোন প্রপার্টি বক্সের উচ্চতা ঠিক করে?' },
        opts: ['length', 'height', 'tall', 'h'], a: 1,
        exp: { en: 'height sets the vertical size.', bn: 'height উল্লম্ব আকার ঠিক করে।' } }
    ]
  },

  attr: {
    mcq: [
      { q: { en: 'Which attribute gives an element a unique name on the page?', bn: 'কোন অ্যাট্রিবিউট এলিমেন্টকে পেজে ইউনিক নাম দেয়?' },
        opts: ['class', 'id', 'name', 'key'], a: 1,
        exp: { en: 'id must be unique on the page.', bn: 'id পেজে ইউনিক হতে হয়।' } },
      { q: { en: 'Which attribute groups several elements for styling?', bn: 'কোন অ্যাট্রিবিউট একাধিক এলিমেন্টকে একসাথে স্টাইল করতে দলবদ্ধ করে?' },
        opts: ['id', 'class', 'group', 'set'], a: 1,
        exp: { en: 'class can be reused on many elements.', bn: 'class অনেক এলিমেন্টে ব্যবহার করা যায়।' } },
      { q: { en: 'Which attribute holds the address a link goes to?', bn: 'কোন অ্যাট্রিবিউট লিংকের ঠিকানা ধরে রাখে?' },
        opts: ['src', 'href', 'url', 'link'], a: 1,
        exp: { en: 'href is used on the a tag.', bn: 'href a ট্যাগে ব্যবহার হয়।' } },
      { q: { en: 'Which attribute holds the address of an image file?', bn: 'কোন অ্যাট্রিবিউট ছবির ঠিকানা ধরে রাখে?' },
        opts: ['href', 'src', 'path', 'file'], a: 1,
        exp: { en: 'src is used on the img tag.', bn: 'src img ট্যাগে ব্যবহার হয়।' } },
      { q: { en: 'Which attribute shows text when the image cannot load?', bn: 'ছবি লোড না হলে কোন অ্যাট্রিবিউট লেখা দেখায়?' },
        opts: ['title', 'alt', 'src', 'fallback'], a: 1,
        exp: { en: 'alt is the alternative text.', bn: 'alt হলো বিকল্প বর্ণনা।' } },
      { q: { en: 'Which attribute sets the width of an image?', bn: 'কোন অ্যাট্রিবিউট ছবির প্রস্থ ঠিক করে?' },
        opts: ['width', 'size', 'wide', 'w'], a: 0,
        exp: { en: 'width sets the horizontal size in pixels.', bn: 'width পিক্সেলে অনুভূমিক আকার ঠিক করে।' } },
      { q: { en: 'Which attribute sets the height?', bn: 'কোন অ্যাট্রিবিউট উচ্চতা ঠিক করে?' },
        opts: ['length', 'height', 'tall', 'h'], a: 1,
        exp: { en: 'height sets the vertical size.', bn: 'height উল্লম্ব আকার ঠিক করে।' } },
      { q: { en: 'Which attribute shows a light hint inside an empty input?', bn: 'খালি ইনপুটে হালকা ইঙ্গিত কোন অ্যাট্রিবিউট দেখায়?' },
        opts: ['value', 'placeholder', 'title', 'hint'], a: 1,
        exp: { en: 'placeholder shows a hint; it is not a real value.', bn: 'placeholder ইঙ্গিত দেখায়; এটি আসল মান নয়।' } },
      { q: { en: 'Which attribute puts a starting value in an input?', bn: 'কোন অ্যাট্রিবিউট ইনপুটে শুরুর মান বসায়?' },
        opts: ['placeholder', 'value', 'default', 'start'], a: 1,
        exp: { en: 'value sets the initial value.', bn: 'value শুরুর মান ঠিক করে।' } },
      { q: { en: 'Which attribute joins a label to an input?', bn: 'কোন অ্যাট্রিবিউট label কে ইনপুটের সাথে জোড়ে?' },
        opts: ['for', 'to', 'link', 'target'], a: 0,
        exp: { en: 'label for value must match the input id.', bn: 'label এর for আর ইনপুটের id এক হতে হয়।' } }
    ]
  }
};

/* =====================================================
   QUIZ RENDERING — MCQ only
   ===================================================== */
const mcqListEl = $('#mcqList');
const quizStartEl = $('#quizStart');
const quizBodyEl = $('#quizBody');
const scoreEl = $('#scoreText');

// every tab keeps its own answers, so switching tabs never wipes another tab's quiz
const answersByTab = {};
let answers = [];

function currentBank() {
  return QUESTION_BANK[state.filter] || { mcq: [] };
}

// load (or create) the answer sheet of the current tab
function resetAnswers() {
  if (!answersByTab[state.filter]) {
    answersByTab[state.filter] = new Array(currentBank().mcq.length).fill(null);
  }
  answers = answersByTab[state.filter];
}

// clear only the current tab's quiz
function clearCurrentTabAnswers() {
  delete answersByTab[state.filter];
  resetAnswers();
}

// which tabs have had their quiz started
const startedByTab = {};

function renderQuiz() {
  const bank = currentBank();
  const started = !!startedByTab[state.filter];

  // Start button before starting, questions after. Another tab's questions are never kept on screen.
  quizStartEl.classList.toggle('hidden', started);
  quizBodyEl.classList.toggle('hidden', !started);
  if (!started) {
    mcqListEl.innerHTML = '';
    return;
  }

  mcqListEl.innerHTML = bank.mcq.length
    ? bank.mcq.map((m, i) => {
        const chosen = answers[i];
        const opts = m.opts.map((o, j) => {
          let cls = 'opt';
          if (chosen !== null) {
            if (j === m.a) cls += ' correct';
            else if (j === chosen) cls += ' wrong';
          }
          return `<button type="button" class="${cls}" data-q="${i}" data-o="${j}" ${chosen !== null ? 'disabled' : ''}>${esc(o)}</button>`;
        }).join('');

        return `<div class="q-item">
          <p class="q-text">${i + 1}. ${state.lang === 'bn' ? m.q.bn : m.q.en}</p>
          <div class="opts">${opts}</div>
          <p class="expl ${chosen !== null ? '' : 'hidden'}">✅ ${state.lang === 'bn' ? m.exp.bn : m.exp.en}</p>
        </div>`;
      }).join('')
    : `<p class="empty">${state.lang === 'bn' ? 'এই ট্যাবে কোনো প্রশ্ন নেই।' : 'No questions in this tab.'}</p>`;

  updateScore();
}

function updateScore() {
  const bank = currentBank();
  const correct = answers.filter((a, i) => a === bank.mcq[i]?.a).length;
  const total = bank.mcq.length;
  scoreEl.textContent = state.lang === 'bn'
    ? `স্কোর: ${correct} / ${total}`
    : `Score: ${correct} / ${total}`;
}

mcqListEl.addEventListener('click', (e) => {
  const btn = e.target.closest('.opt');
  if (!btn || btn.disabled) return;
  const qi = Number(btn.dataset.q);
  if (answers[qi] !== null) return;
  answers[qi] = Number(btn.dataset.o);
  renderQuiz();
});

$('#startQuiz').addEventListener('click', () => {
  startedByTab[state.filter] = true;
  clearCurrentTabAnswers();
  renderQuiz();
  quizBodyEl.scrollIntoView({ behavior: 'smooth', block: 'start' });
});

$('#resetQuiz').addEventListener('click', () => {
  clearCurrentTabAnswers();
  renderQuiz();
});

/* =====================================================
   LANGUAGE / THEME
   ===================================================== */
function applyLanguage() {
  document.documentElement.lang = state.lang;

  $$('[data-en]').forEach(el => {
    el.innerHTML = state.lang === 'bn' ? el.dataset.bn : el.dataset.en;
  });

  $$('[data-en-ph]').forEach(el => {
    el.placeholder = state.lang === 'bn' ? el.dataset.bnPh : el.dataset.enPh;
  });

  $('#langBtn').textContent = state.lang === 'bn' ? 'English' : 'বাংলা';
  renderCards();
  renderQuiz();
}

function applyTheme() {
  document.documentElement.dataset.theme = state.theme;
  $('#themeBtn').textContent = state.theme === 'dark' ? '☀️ Light' : '🌙 Dark';
}

$('#langBtn').addEventListener('click', () => {
  state.lang = state.lang === 'en' ? 'bn' : 'en';
  applyLanguage();
});

$('#themeBtn').addEventListener('click', () => {
  state.theme = state.theme === 'dark' ? 'light' : 'dark';
  applyTheme();
  scheduleFit();          // colours changed → re-measure just in case
});

/* =====================================================
   FILTERS + SEARCH
   ===================================================== */
$('#filters').addEventListener('click', (e) => {
  const btn = e.target.closest('.filter-btn');
  if (!btn) return;
  $$('.filter-btn').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  state.filter = btn.dataset.cat;
  state.search = '';
  $('#searchBox').value = '';
  resetAnswers();
  renderCards();
  renderQuiz();
});

let searchTimer;
$('#searchBox').addEventListener('input', (e) => {
  clearTimeout(searchTimer);
  const val = e.target.value;
  searchTimer = setTimeout(() => {
    state.search = val;
    renderCards();
  }, 150);
});

/* =====================================================
   START
   ===================================================== */
applyTheme();
resetAnswers();
applyLanguage();
scheduleFit();