API.getJournalEntries().then((entries) => {
  postToDOM(entries);
});

let recordButton = document.getElementsByName("Record Journal Entry");
