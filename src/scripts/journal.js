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

const extraJournalEntry1 = {
  date: "April 27, 2020",
  concept: "APIs",
  entry:
    "Today we covered using external APIs, Postman, and the importance of .gitignore.",
  mood: "Ok, could be better",
};

const extraJournalEntry2 = {
  date: "April 27, 2020",
  concept: "John Wark talk",
  entry:
    "Today we had a talk by NSS CEO John Wark. He went over the types of businesses that hire NSS grads and average/expected salaries upon graduation from NSS bootcamp.",
  mood: "Encouraged",
};

journalEntryCollection.push(extraJournalEntry1, extraJournalEntry2);

console.log(journalEntryCollection);
