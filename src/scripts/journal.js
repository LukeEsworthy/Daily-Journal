const journalEntryDate = document.getElementById("journalDate").innerText;
const journalConceptsCovered = document.getElementById("conceptsCovered")
  .innerText;
const journalJournalEntry = document.getElementById("journalEntry").innerText;
const journalMood = document.getElementById("mood").innerText;

const singleJournalEntry = {
  entryDate: journalEntryDate,
  conceptsCovered: journalConceptsCovered,
  journalEntry: journalJournalEntry,
  mood: journalMood,
};

const journalEntryCollection = [];

journalEntryCollection.push(singleJournalEntry);

// requesting data from the API we created with journal entries
// after the data is fetched, we take what is received "entriesResults" (which could be called anything) and parse it into json format
// the second .then takes the json-formatted information, now called "entries" (but could be called anything) and puts it into the postToDom() function as its parameter
fetch("http://localhost:3000/entries")
  .then((entriesResults) => entriesResults.json())
  .then((entries) => {
    postToDOM(entries);
  });

// function created to pass each key:value pair of a single journal entry object into html form to be inserted into the DOM
// the function is called in the postToDom function after a loop iterates through the whole json data, single journal entry at a time ("entry")
// each key:value pair is called using string interpolation (template literals)
const createJournalComponent = (journalEntryParam) => {
  return `
    <div class="journalEntryDate">${journalEntryParam.date}</div>
    <div class="journalEntryConcept">${journalEntryParam.concept}</div>
    <div class="journalEntryText">${journalEntryParam.entry}</div>
    <div class="journalEntryMood">${journalEntryParam.mood}</div>
    `;
};

// function with parameter "entriesArray", receiving the data from the second .then in the fetch call
// output is set equal to the blank div we have hardcoded into the HTML set aside
// the for loop is iterating through the array of json data from the API and setting each entry data equal to the variable "entry"
// the final step is setting the HTML div equal to whatever it currently is plus the new data (single journal entry)
// the single journal entry is formatted using createJournalComponent function, passing in CONST entry as a parameter
function postToDOM(entriesArray) {
  let output = document.querySelector("#journalOutputField");
  for (let i = 0; i < entriesArray.length; i++) {
    const entry = entriesArray[i];
    output.innerHTML += createJournalComponent(entry);
  }
}
