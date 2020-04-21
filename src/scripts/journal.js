const journalEntryDate = document.getElementById("journalDate").innerText;
const journalConceptsCovered = document.getElementById("conceptsCovered").innerText;
const journalJournalEntry = document.getElementById("journalEntry").innerText;
const journalMood = document.getElementById("mood").innerText;

const singleJournalEntry = {
    entryDate: journalEntryDate,
    conceptsCovered: journalConceptsCovered,
    journalEntry: journalJournalEntry,
    mood: journalMood,
}

const journalEntryCollection = [];

journalEntryCollection.push(singleJournalEntry);

console.log(journalEntryCollection);