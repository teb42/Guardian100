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
  const read = selectedBooks("read");
  const want = selectedBooks("want");
  const recommend = selectedBooks("recommend");

  readCount.textContent = String(read.length);
  wantCount.textContent = String(want.length);
  recommendCount.textContent = String(recommend.length);

  summaryElement.value = [
    formatLine("I have read", read),
    formatLine("I want to read", want),
    formatLine("I highly recommend", recommend)
  ].join("\n\n");
}

function selectedBooks(field) {
  return books
    .filter((book) => Boolean(getBookState(book.rank)[field]))
    .map((book) => `${book.rank}. ${book.title}`);
}

function formatLine(label, selected) {
  const titles = selected.length ? selected.join(" * ") : "none yet";
  return `${label} ${selected.length}: ${titles}`;
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
    copyStatus.textContent = "Copied";
  } catch {
    summaryElement.select();
    document.execCommand("copy");
    copyStatus.textContent = "Copied";
  }

  window.setTimeout(() => {
    copyStatus.textContent = "";
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

renderList();
updateSummary();
