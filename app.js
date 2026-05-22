const STORAGE_KEY = "guardian-100-novels-tracker-v1";

const books = [
  { rank: 1, title: "Middlemarch" },
  { rank: 2, title: "Beloved" },
  { rank: 3, title: "Ulysses" },
  { rank: 4, title: "To the Lighthouse" },
  { rank: 5, title: "In Search of Lost Time" },
  { rank: 6, title: "Anna Karenina" },
  { rank: 7, title: "War and Peace" },
  { rank: 8, title: "Jane Eyre" },
  { rank: 9, title: "Pride and Prejudice" },
  { rank: 10, title: "Madame Bovary" },
  { rank: 11, title: "The Great Gatsby" },
  { rank: 12, title: "Bleak House" },
  { rank: 13, title: "Emma" },
  { rank: 14, title: "Mrs Dalloway" },
  { rank: 15, title: "Moby-Dick" },
  { rank: 16, title: "Nineteen Eighty-Four" },
  { rank: 17, title: "One Hundred Years of Solitude" },
  { rank: 18, title: "Persuasion" },
  { rank: 19, title: "The Life and Opinions of Tristram Shandy, Gentleman" },
  { rank: 20, title: "Wuthering Heights" },
  { rank: 21, title: "The Portrait of a Lady" },
  { rank: 22, title: "Things Fall Apart" },
  { rank: 23, title: "Midnight's Children" },
  { rank: 24, title: "The Remains of the Day" },
  { rank: 25, title: "Lolita" },
  { rank: 26, title: "Don Quixote" },
  { rank: 27, title: "The Trial" },
  { rank: 28, title: "The Brothers Karamazov" },
  { rank: 29, title: "Pale Fire" },
  { rank: 30, title: "Frankenstein" },
  { rank: 31, title: "The Prime of Miss Jean Brodie" },
  { rank: 32, title: "The God of Small Things" },
  { rank: 33, title: "David Copperfield" },
  { rank: 34, title: "Wolf Hall" },
  { rank: 35, title: "Great Expectations" },
  { rank: 36, title: "The Handmaid's Tale" },
  { rank: 37, title: "Invisible Man" },
  { rank: 38, title: "The Age of Innocence" },
  { rank: 39, title: "Their Eyes Were Watching God" },
  { rank: 40, title: "Song of Solomon" },
  { rank: 41, title: "Heart of Darkness" },
  { rank: 42, title: "The Magic Mountain" },
  { rank: 43, title: "Housekeeping" },
  { rank: 44, title: "Giovanni's Room" },
  { rank: 45, title: "The Golden Notebook" },
  { rank: 46, title: "The Leopard" },
  { rank: 47, title: "Vanity Fair" },
  { rank: 48, title: "The Metamorphosis" },
  { rank: 49, title: "A Fine Balance" },
  { rank: 50, title: "Wide Sargasso Sea" },
  { rank: 51, title: "My Brilliant Friend" },
  { rank: 52, title: "The Golden Bowl" },
  { rank: 53, title: "The Transit of Venus" },
  { rank: 54, title: "Orlando" },
  { rank: 55, title: "The Waves" },
  { rank: 56, title: "Mansfield Park" },
  { rank: 57, title: "The Sound and the Fury" },
  { rank: 58, title: "Disgrace" },
  { rank: 59, title: "Never Let Me Go" },
  { rank: 60, title: "Howards End" },
  { rank: 61, title: "The Rings of Saturn" },
  { rank: 62, title: "Half of a Yellow Sun" },
  { rank: 63, title: "White Teeth" },
  { rank: 64, title: "The Good Soldier" },
  { rank: 65, title: "The Color Purple" },
  { rank: 66, title: "The Master and Margarita" },
  { rank: 67, title: "The Man Without Qualities" },
  { rank: 68, title: "Blood Meridian" },
  { rank: 69, title: "Crime and Punishment" },
  { rank: 70, title: "Jude the Obscure" },
  { rank: 71, title: "Kindred" },
  { rank: 72, title: "Our Mutual Friend" },
  { rank: 73, title: "Austerlitz" },
  { rank: 74, title: "Nervous Conditions" },
  { rank: 75, title: "The Bluest Eye" },
  { rank: 76, title: "Dracula" },
  { rank: 77, title: "The Rainbow" },
  { rank: 78, title: "A House for Mr Biswas" },
  { rank: 79, title: "Go Tell It on the Mountain" },
  { rank: 80, title: "Rebecca" },
  { rank: 81, title: "Buddenbrooks" },
  { rank: 82, title: "The End of the Affair" },
  { rank: 83, title: "A Farewell to Arms" },
  { rank: 84, title: "The Talented Mr Ripley" },
  { rank: 85, title: "The Vegetarian" },
  { rank: 86, title: "The Turn of the Screw" },
  { rank: 87, title: "The Line of Beauty" },
  { rank: 88, title: "Ragtime" },
  { rank: 89, title: "The Left Hand of Darkness" },
  { rank: 90, title: "Jacob's Room" },
  { rank: 91, title: "Life and Fate" },
  { rank: 92, title: "Sentimental Education" },
  { rank: 93, title: "Invisible Cities" },
  { rank: 94, title: "The Known World" },
  { rank: 95, title: "The Return of the Native" },
  { rank: 96, title: "Pedro Páramo" },
  { rank: 97, title: "Catch-22" },
  { rank: 98, title: "The Road" },
  { rank: 99, title: "The Go-Between" },
  { rank: 100, title: "My Ántonia" }
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
      const haystack = `${book.rank} ${book.title}`.toLowerCase();
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
  context.font = "30px Arial";

  sections.forEach((section) => {
    const text = section.items.length ? section.items.join(" • ") : "none yet";
    height += 50;
    height += wrapText(context, text, maxTextWidth).length * 38;
    height += 34;
  });

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
  context.fillText("My book list", padding, 142);

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
