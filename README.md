
# 🎨 Basic HTML & Inline CSS Playground

> **Basic HTML ও Inline CSS খেলাঘর** — a bilingual (বাংলা / English), interactive learning playground that teaches HTML tags, inline CSS properties, and attributes through **110 live code cards** and **60 built-in quiz questions**.

<p align="center">

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![No dependencies](https://img.shields.io/badge/dependencies-0-brightgreen?style=for-the-badge)
![Bilingual](https://img.shields.io/badge/language-বাংলা%20%7C%20English-blueviolet?style=for-the-badge)

</p>

---

## 🚀 Live Demo

👉 **[Open the Playground →](https://rrsiam.github.io/Basic-HTML-Inline-CSS-Playground/)**

---

## ✨ What Is This?

A single-page, zero-dependency web application that works as a **hands-on reference book** for absolute beginners learning HTML and inline CSS.

Each concept is presented in its own interactive card containing:

| Part | Description |
|------|-------------|
| **Tag / Property Name** | Displayed as a colour-coded chip at the top. |
| **Description** | A simple explanation in **বাংলা or English**. |
| **Code Pane (Left)** | An editable `<textarea>` where changes update the output instantly. |
| **Live Output Pane (Right)** | Displays the rendered HTML/CSS and updates as you type. |
| **↺ Reset Button** | Restores the original example. |

At the bottom of each category tab, there is a **10-question multiple-choice quiz** featuring instant scoring, colour-coded correct and incorrect answers, and short explanations.

---

## 🧩 Topics Covered

| Tab | Contents | Cards |
|-----|----------|:-----:|
| 🧱 **Basic** | `h1`–`h6`, `p`, `br`, `hr`, `a`, `img`, `big`, `strong`, `b`, `em`, `i`, `u`, `small`, `del`, `sub`, `sup`, image paths | 18 |
| 📋 **List** | `ul`, `ol`, `li`, and nesting combinations (ul→ul, ol→ol, ol→ul, ul→ol, three-level, and mixed nesting) | 9 |
| 📊 **Table** | `table`, `tr`, `th`, `td`, `thead`, `tbody`, `tfoot`, `colspan`, `rowspan` | 9 |
| 📝 **Form** | `form`, `input` (23 types), `label`, `textarea`, `select`, `option`, `button` | 28 |
| 🎨 **Inline CSS** | `color`, `background*`, `font-*`, `text-*`, `margin*`, `padding*`, `border*`, `width`, `height`, `border-radius` | 32 |
| 🔧 **Attributes** | `id`, `class`, `style`, `title`, `href`, `src`, `alt`, `width`, `height`, `type`, `name`, `value`, `placeholder`, `for` | 14 |

**Total: 110 interactive cards · 60 quiz questions**

---

## 🎯 Features

- 🌐 **Full Bilingual Interface** — Switch between বাংলা and English with one click. All labels, descriptions, quiz questions, and explanations change accordingly.
- 🌙 **Dark / Light Theme** — Switch between themes using CSS custom properties defined in `style.css`.
- ✏️ **Live Code Editing** — Every code editor is an actual `<textarea>`. The output pane updates automatically as you type.
- ↺ **Individual Card Reset** — Restore the original example without affecting other cards or edits.
- 🔍 **Smart Search** — Four-level priority search: exact name → starts with → contains → description/code. Typing `p` finds only `<p>`, while typing `width` finds both the HTML attribute and CSS property.
- 🔢 **Search Result Counter** — Displays the number of matching results while searching, such as `7 / 110`.
- 🧠 **60 Multiple-Choice Questions** — Each category includes 10 questions with explanations displayed after answering. Individual answer sheets and scores are maintained for each tab, so switching categories does not erase progress.
- 📐 **Auto-Growing Code Editors** — Uses `ResizeObserver` and batched layout updates to automatically adjust textareas to their content without unnecessary scrollbars or clipping.
- ⌨️ **Tab Key Support** — Pressing `Tab` inside a code editor inserts two spaces instead of moving focus away.
- 🛡️ **Form Submission Prevention** — A capture-phase `submit` event listener prevents example forms from submitting and reloading the page.
- 📱 **Responsive Design** — Cards switch to a single-column layout on screens narrower than 560 px, with an adjusted header and responsive padding.
- 🎨 **Animated SVG School Illustration** — Includes a hand-written inline SVG featuring a sun, waving arm, and animated boy and girl, replacing `pic.png` without requiring external image files.

---

## 📁 Project Structure

```text
.
├── index.html   # HTML structure, header, filter bar, cards container, and quiz layout
├── style.css    # Theme variables, layout, card and quiz styling, and animations
├── script.js    # 110-card data array, rendering, search, quiz, and bilingual functionality
└── README.md    # Project documentation
```

---

## 🕹️ How to Use

1. Open the **Live Demo** or open `index.html` in any modern web browser.
2. Select a category tab: 🧱 Basic, 📋 List, 📊 Table, 📝 Form, 🎨 Inline CSS, or 🔧 Attributes.
3. Read the card to understand the HTML tag or CSS property and its purpose.
4. **Edit the code** in the left-hand editor. The rendered output on the right updates automatically.
5. Click the **↺ Reset** button on any card to restore its original example.
6. Use the **🔍 Search** box to find a specific HTML tag, attribute, or CSS property.
7. Scroll to the **🎯 Quiz** section, click **▶ Start Quiz**, and answer all 10 questions to see your score.
8. Use the buttons in the top-right corner to switch between **English ⇄ বাংলা** and **🌙 Dark ⇄ ☀️ Light** themes.

---

## 🛠️ Tech Stack

| Layer | Technologies and Details |
|-------|---------------------------|
| **HTML** | Semantic HTML5, language-aware content, and `aria-live` regions |
| **CSS** | CSS custom properties, CSS Grid, Flexbox, `@keyframes` animations, and `clamp()` typography |
| **JavaScript** | Vanilla JavaScript (ES6+), template literals, `Map`, `Set`, `ResizeObserver`, `requestAnimationFrame`, and event delegation |
| **Assets** | Inline SVG only; no external images, fonts, or libraries |

---

## 🚀 Deployment

This project can be hosted for free using **GitHub Pages**.

1. Push the project files (`index.html`, `style.css`, and `script.js`) to a GitHub repository.
2. Open your repository on GitHub.
3. Navigate to **Settings → Pages**.
4. Under **Build and deployment**, select **Deploy from a branch**.
5. Select the `main` branch and `/ (root)` folder.
6. Click **Save**.
7. Wait for GitHub Pages to publish your website.
