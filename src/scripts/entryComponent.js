// Move this to own module in DJ 7
// const journalEntryDate = document.getElementById("journalDate").value;
// const journalConceptsCovered = document.getElementById("conceptsCovered")
//   .innerText;
// const journalJournalEntry = document.getElementById("journalEntry").innerText;
// const journalMood = document.getElementById("mood").innerText;

// const singleJournalEntry = {
//   entryDate: journalEntryDate,
//   conceptsCovered: journalConceptsCovered,
//   journalEntry: journalJournalEntry,
//   mood: journalMood,
// };

// const journalEntryCollection = [];

// journalEntryCollection.push(singleJournalEntry);

const createJournalComponent = (journalEntryParam) => {
  return `
      <div class="journalEntryDate">${journalEntryParam.date}</div>
      <div class="journalEntryConcept">${journalEntryParam.concept}</div>
      <div class="journalEntryText">${journalEntryParam.entry}</div>
      <div class="journalEntryMood">${journalEntryParam.mood}</div>
      `;
};

export default createJournalComponent;
