const STORAGE_KEY = "guardian-100-novels-tracker-v1";

const books = [
  { rank: 1, title: "Middlemarch", author: "George Eliot" },
  { rank: 2, title: "Beloved", author: "Toni Morrison" },
  { rank: 3, title: "Ulysses", author: "James Joyce" },
  { rank: 4, title: "To the Lighthouse", author: "Virginia Woolf" },
  { rank: 5, title: "In Search of Lost Time", author: "Marcel Proust" },
  { rank: 6, title: "Anna Karenina", author: "Leo Tolstoy" },
  { rank: 7, title: "War and Peace", author: "Leo Tolstoy" },
  { rank: 8, title: "Jane Eyre", author: "Charlotte Brontë" },
  { rank: 9, title: "Pride and Prejudice", author: "Jane Austen" },
  { rank: 10, title: "Madame Bovary", author: "Gustave Flaubert" },
  { rank: 11, title: "The Great Gatsby", author: "F Scott Fitzgerald" },
  { rank: 12, title: "Bleak House", author: "Charles Dickens" },
  { rank: 13, title: "Emma", author: "Jane Austen" },
  { rank: 14, title: "Mrs Dalloway", author: "Virginia Woolf" },
  { rank: 15, title: "Moby-Dick", author: "Herman Melville" },
  { rank: 16, title: "Nineteen Eighty-Four", author: "George Orwell" },
  { rank: 17, title: "One Hundred Years of Solitude", author: "Gabriel García Márquez" },
  { rank: 18, title: "Persuasion", author: "Jane Austen" },
  { rank: 19, title: "The Life and Opinions of Tristram Shandy, Gentleman", author: "Laurence Sterne" },
  { rank: 20, title: "Wuthering Heights", author: "Emily Brontë" },
  { rank: 21, title: "The Portrait of a Lady", author: "Henry James" },
  { rank: 22, title: "Things Fall Apart", author: "Chinua Achebe" },
  { rank: 23, title: "Midnight's Children", author: "Salman Rushdie" },
  { rank: 24, title: "The Remains of the Day", author: "Kazuo Ishiguro" },
  { rank: 25, title: "Lolita", author: "Vladimir Nabokov" },
  { rank: 26, title: "Don Quixote", author: "Miguel de Cervantes" },
  { rank: 27, title: "The Trial", author: "Franz Kafka" },
  { rank: 28, title: "The Brothers Karamazov", author: "Fyodor Dostoyevsky" },
  { rank: 29, title: "Pale Fire", author: "Vladimir Nabokov" },
  { rank: 30, title: "Frankenstein", author: "Mary Shelley" },
  { rank: 31, title: "The Prime of Miss Jean Brodie", author: "Muriel Spark" },
  { rank: 32, title: "The God of Small Things", author: "Arundhati Roy" },
  { rank: 33, title: "David Copperfield", author: "Charles Dickens" },
  { rank: 34, title: "Wolf Hall", author: "Hilary Mantel" },
  { rank: 35, title: "Great Expectations", author: "Charles Dickens" },
  { rank: 36, title: "The Handmaid's Tale", author: "Margaret Atwood" },
  { rank: 37, title: "Invisible Man", author: "Ralph Ellison" },
  { rank: 38, title: "The Age of Innocence", author: "Edith Wharton" },
  { rank: 39, title: "Their Eyes Were Watching God", author: "Zora Neale Hurston" },
  { rank: 40, title: "Song of Solomon", author: "Toni Morrison" },
  { rank: 41, title: "Heart of Darkness", author: "Joseph Conrad" },
  { rank: 42, title: "The Magic Mountain", author: "Thomas Mann" },
  { rank: 43, title: "Housekeeping", author: "Marilynne Robinson" },
  { rank: 44, title: "Giovanni's Room", author: "James Baldwin" },
  { rank: 45, title: "The Golden Notebook", author: "Doris Lessing" },
  { rank: 46, title: "The Leopard", author: "Giuseppe Tomasi di Lampedusa" },
  { rank: 47, title: "Vanity Fair", author: "William Makepeace Thackeray" },
  { rank: 48, title: "The Metamorphosis", author: "Franz Kafka" },
  { rank: 49, title: "A Fine Balance", author: "Rohinton Mistry" },
  { rank: 50, title: "Wide Sargasso Sea", author: "Jean Rhys" },
  { rank: 51, title: "My Brilliant Friend", author: "Elena Ferrante" },
  { rank: 52, title: "The Golden Bowl", author: "Henry James" },
  { rank: 53, title: "The Transit of Venus", author: "Shirley Hazzard" },
  { rank: 54, title: "Orlando", author: "Virginia Woolf" },
  { rank: 55, title: "The Waves", author: "Virginia Woolf" },
  { rank: 56, title: "Mansfield Park", author: "Jane Austen" },
  { rank: 57, title: "The Sound and the Fury", author: "William Faulkner" },
  { rank: 58, title: "Disgrace", author: "JM Coetzee" },
  { rank: 59, title: "Never Let Me Go", author: "Kazuo Ishiguro" },
  { rank: 60, title: "Howards End", author: "EM Forster" },
  { rank: 61, title: "The Rings of Saturn", author: "WG Sebald" },
  { rank: 62, title: "Half of a Yellow Sun", author: "Chimamanda Ngozi Adichie" },
  { rank: 63, title: "White Teeth", author: "Zadie Smith" },
  { rank: 64, title: "The Good Soldier", author: "Ford Madox Ford" },
  { rank: 65, title: "The Color Purple", author: "Alice Walker" },
  { rank: 66, title: "The Master and Margarita", author: "Mikhail Bulgakov" },
  { rank: 67, title: "The Man Without Qualities", author: "Robert Musil" },
  { rank: 68, title: "Blood Meridian", author: "Cormac McCarthy" },
  { rank: 69, title: "Crime and Punishment", author: "Fyodor Dostoevsky" },
  { rank: 70, title: "Jude the Obscure", author: "Thomas Hardy" },
  { rank: 71, title: "Kindred", author: "Octavia E Butler" },
  { rank: 72, title: "Our Mutual Friend", author: "Charles Dickens" },
  { rank: 73, title: "Austerlitz", author: "WG Sebald" },
  { rank: 74, title: "Nervous Conditions", author: "Tsitsi Dangarembga" },
  { rank: 75, title: "The Bluest Eye", author: "Toni Morrison" },
  { rank: 76, title: "Dracula", author: "Bram Stoker" },
  { rank: 77, title: "The Rainbow", author: "DH Lawrence" },
  { rank: 78, title: "A House for Mr Biswas", author: "VS Naipaul" },
  { rank: 79, title: "Go Tell It on the Mountain", author: "James Baldwin" },
  { rank: 80, title: "Rebecca", author: "Daphne du Maurier" },
  { rank: 81, title: "Buddenbrooks", author: "Thomas Mann" },
  { rank: 82, title: "The End of the Affair", author: "Graham Greene" },
  { rank: 83, title: "A Farewell to Arms", author: "Ernest Hemingway" },
  { rank: 84, title: "The Talented Mr Ripley", author: "Patricia Highsmith" },
  { rank: 85, title: "The Vegetarian", author: "Han Kang" },
  { rank: 86, title: "The Turn of the Screw", author: "Henry James" },
  { rank: 87, title: "The Line of Beauty", author: "Alan Hollinghurst" },
  { rank: 88, title: "Ragtime", author: "EL Doctorow" },
  { rank: 89, title: "The Left Hand of Darkness", author: "Ursula K Le Guin" },
  { rank: 90, title: "Jacob's Room", author: "Virginia Woolf" },
  { rank: 91, title: "Life and Fate", author: "Vasily Grossman" },
  { rank: 92, title: "Sentimental Education", author: "Gustave Flaubert" },
  { rank: 93, title: "Invisible Cities", author: "Italo Calvino" },
  { rank: 94, title: "The Known World", author: "Edward P Jones" },
  { rank: 95, title: "The Return of the Native", author: "Thomas Hardy" },
  { rank: 96, title: "Pedro Páramo", author: "Juan Rulfo" },
  { rank: 97, title: "Catch-22", author: "Joseph Heller" },
  { rank: 98, title: "The Road", author: "Cormac McCarthy" },
  { rank: 99, title: "The Go-Between", author: "LP Hartley" },
  { rank: 100, title: "My Ántonia", author: "Willa Cather" }
];

const state = loadState();

const listElement = document.querySelector("#book-list");
const searchInput = document.querySelector("#search");
const summaryElement = document.querySelector("#summary");
const copyButton = document.querySelector("#copy-summary");
const clearButton = document.querySelector("#clear-all");
const saveImageButton = document.querySelector("#save-image");
const shareButton = document.querySelector("#share-summary");
const copyStatus = document.querySelector("#copy-status");
const authorRanking = document.querySelector("#author-ranking");
const readCount = document.querySelector("#read-count");
const wantCount = document.querySelector("#want-count");
const recommendCount = document.querySelector("#recommend-count");

function loadState() {
  try {
    return JSON.parse(localStorage.getItem(STORAGE_KEY)) || {};
  } catch {
    return {};
  }
}

function saveState() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
}

function getBookState(rank) {
  state[rank] ||= { read: false, want: false, recommend: false };
  return state[rank];
}

function renderList() {
  listElement.innerHTML = "";
  const query = searchInput.value.trim().toLowerCase();

  books
    .filter((book) => {
      const haystack = `${book.rank} ${book.title} ${book.author}`.toLowerCase();
      return haystack.includes(query);
    })
    .forEach((book) => {
      const itemState = getBookState(book.rank);
      const row = document.createElement("li");
      row.className = "book-row";
      row.dataset.rank = String(book.rank);

      row.innerHTML = `
        <div class="book-meta">
          <span class="rank">${book.rank}</span>
          <span class="title">${book.title}</span>
        </div>
        <div class="author">${book.author}</div>
        ${renderCheckbox(book, "read", "Read", itemState.read)}
        ${renderCheckbox(book, "want", "Want to read", itemState.want)}
        ${renderCheckbox(book, "recommend", "Highly recommend", itemState.recommend)}
      `;

      listElement.appendChild(row);
    });
}

function renderCheckbox(book, field, label, checked) {
  const id = `${field}-${book.rank}`;
  return `
    <label class="check-cell" for="${id}">
      <span class="mobile-label">${label}</span>
      <input
        id="${id}"
        type="checkbox"
        data-rank="${book.rank}"
        data-field="${field}"
        aria-label="${label}: ${book.title}"
        ${checked ? "checked" : ""}
      >
    </label>
  `;
}

function updateSummary() {
  const sections = getSummarySections();
  const [read, want, recommend] = sections;

  readCount.textContent = String(read.items.length);
  wantCount.textContent = String(want.items.length);
  recommendCount.textContent = String(recommend.items.length);

  summaryElement.value = sections.map(formatLine).join("\n\n");
  renderAuthorRanking();
}

function getSummarySections() {
  return [
    { label: "I have read", items: selectedBooks("read") },
    { label: "I want to read", items: selectedBooks("want") },
    { label: "I highly recommend", items: selectedBooks("recommend") }
  ];
}

function selectedBooks(field) {
  return books
    .filter((book) => Boolean(getBookState(book.rank)[field]))
    .map((book) => book.title);
}

function formatLine(section) {
  const titles = section.items.length ? section.items.join(" • ") : "none yet";
  return `${section.label} ${section.items.length}: ${titles}`;
}

function getTopReadAuthors() {
  const counts = new Map();

  books.forEach((book) => {
    if (!getBookState(book.rank).read) return;
    counts.set(book.author, (counts.get(book.author) || 0) + 1);
  });

  return Array.from(counts, ([author, count]) => ({ author, count }))
    .sort((a, b) => b.count - a.count || a.author.localeCompare(b.author))
    .slice(0, 5);
}

function renderAuthorRanking() {
  const authors = getTopReadAuthors();

  if (!authors.length) {
    authorRanking.innerHTML = `<li>No read books yet</li>`;
    return;
  }

  authorRanking.innerHTML = authors
    .map((entry) => `
      <li>
        <strong>${entry.author}</strong>
        <span class="author-count">${entry.count} read</span>
      </li>
    `)
    .join("");
}

function handleCheckboxChange(event) {
  const checkbox = event.target.closest("input[type='checkbox']");
  if (!checkbox) return;

  const rank = checkbox.dataset.rank;
  const field = checkbox.dataset.field;
  const itemState = getBookState(rank);
  itemState[field] = checkbox.checked;

  if (field === "recommend" && checkbox.checked) {
    itemState.read = true;
    const readCheckbox = document.querySelector(`#read-${rank}`);
    if (readCheckbox) readCheckbox.checked = true;
  }

  if (field === "read" && !checkbox.checked) {
    itemState.recommend = false;
    const recommendCheckbox = document.querySelector(`#recommend-${rank}`);
    if (recommendCheckbox) recommendCheckbox.checked = false;
  }

  saveState();
  updateSummary();
}

async function copySummary() {
  try {
    await navigator.clipboard.writeText(summaryElement.value);
    setStatus("Copied");
  } catch {
    summaryElement.select();
    document.execCommand("copy");
    setStatus("Copied");
  }
}

async function saveSummaryImage() {
  const blob = await createSummaryImageBlob();
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = "guardian-100-summary.png";
  document.body.appendChild(link);
  link.click();
  link.remove();
  URL.revokeObjectURL(url);
  setStatus("Saved");
}

async function shareSummary() {
  const blob = await createSummaryImageBlob();
  const file = new File([blob], "guardian-100-summary.png", { type: "image/png" });
  const shareData = {
    title: "Guardian 100 novels summary",
    text: summaryElement.value,
    files: [file]
  };

  if (navigator.canShare && navigator.canShare({ files: [file] })) {
    await navigator.share(shareData);
    setStatus("Shared");
    return;
  }

  const subject = encodeURIComponent("Guardian 100 novels summary");
  const body = encodeURIComponent(summaryElement.value);
  window.location.href = `mailto:?subject=${subject}&body=${body}`;
  setStatus("Email opened");
}

async function createSummaryImageBlob() {
  const width = 1200;
  const padding = 64;
  const maxTextWidth = width - padding * 2;
  const canvas = document.createElement("canvas");
  const context = canvas.getContext("2d");
  const sections = getSummarySections();
  const layout = buildImageLayout(context, sections, maxTextWidth, padding);

  canvas.width = width;
  canvas.height = layout.height;

  drawSummaryImage(canvas.getContext("2d"), sections, maxTextWidth, padding, layout.height);

  return new Promise((resolve) => {
    canvas.toBlob((blob) => resolve(blob), "image/png");
  });
}

function buildImageLayout(context, sections, maxTextWidth, padding) {
  let height = 210;
  const topAuthors = getTopReadAuthors();
  context.font = "30px Arial";

  sections.forEach((section) => {
    const text = section.items.length ? section.items.join(" • ") : "none yet";
    height += 50;
    height += wrapText(context, text, maxTextWidth).length * 38;
    height += 34;
  });

  height += 66;
  height += Math.max(topAuthors.length, 1) * 38;

  return { height: Math.max(height + padding, 520) };
}

function drawSummaryImage(context, sections, maxTextWidth, padding, height) {
  context.fillStyle = "#f7f8fb";
  context.fillRect(0, 0, 1200, height);

  context.fillStyle = "#ffffff";
  roundRect(context, 36, 36, 1128, height - 72, 24);
  context.fill();

  context.fillStyle = "#123047";
  context.fillRect(36, 36, 1128, 134);
  context.fillStyle = "#f0ca69";
  context.font = "700 24px Arial";
  context.fillText("Guardian 100 novels", padding, 86);
  context.fillStyle = "#ffffff";
  context.font = "700 52px Georgia";
  context.fillText("My tracker", padding, 142);

  let y = 230;
  sections.forEach((section) => {
    context.fillStyle = "#172033";
    context.font = "700 32px Arial";
    context.fillText(`${section.label} ${section.items.length}`, padding, y);
    y += 46;

    context.fillStyle = "#334155";
    context.font = "30px Arial";
    const text = section.items.length ? section.items.join(" • ") : "none yet";
    wrapText(context, text, maxTextWidth).forEach((line) => {
      context.fillText(line, padding, y);
      y += 38;
    });
    y += 34;
  });

  const topAuthors = getTopReadAuthors();
  context.fillStyle = "#172033";
  context.font = "700 32px Arial";
  context.fillText("Most read authors", padding, y);
  y += 46;

  context.fillStyle = "#334155";
  context.font = "30px Arial";
  const authorLines = topAuthors.length
    ? topAuthors.map((entry, index) => `${index + 1}. ${entry.author} - ${entry.count} read`)
    : ["No read books yet"];

  authorLines.forEach((line) => {
    context.fillText(line, padding, y);
    y += 38;
  });
}

function wrapText(context, text, maxWidth) {
  const words = text.split(" ");
  const lines = [];
  let line = "";

  words.forEach((word) => {
    const testLine = line ? `${line} ${word}` : word;
    if (context.measureText(testLine).width > maxWidth && line) {
      lines.push(line);
      line = word;
    } else {
      line = testLine;
    }
  });

  if (line) lines.push(line);
  return lines;
}

function roundRect(context, x, y, width, height, radius) {
  context.beginPath();
  context.moveTo(x + radius, y);
  context.lineTo(x + width - radius, y);
  context.quadraticCurveTo(x + width, y, x + width, y + radius);
  context.lineTo(x + width, y + height - radius);
  context.quadraticCurveTo(x + width, y + height, x + width - radius, y + height);
  context.lineTo(x + radius, y + height);
  context.quadraticCurveTo(x, y + height, x, y + height - radius);
  context.lineTo(x, y + radius);
  context.quadraticCurveTo(x, y, x + radius, y);
  context.closePath();
}

function setStatus(message) {
  copyStatus.textContent = message;
  window.setTimeout(() => {
    if (copyStatus.textContent === message) copyStatus.textContent = "";
  }, 1800);
}

function clearAll() {
  const hasSelections = Object.values(state).some((entry) =>
    entry.read || entry.want || entry.recommend
  );

  if (!hasSelections) return;
  if (!window.confirm("Clear all ticks from this browser?")) return;

  Object.keys(state).forEach((rank) => {
    state[rank] = { read: false, want: false, recommend: false };
  });
  saveState();
  renderList();
  updateSummary();
}

listElement.addEventListener("change", handleCheckboxChange);
searchInput.addEventListener("input", renderList);
copyButton.addEventListener("click", copySummary);
clearButton.addEventListener("click", clearAll);
saveImageButton.addEventListener("click", saveSummaryImage);
shareButton.addEventListener("click", shareSummary);

renderList();
updateSummary();
