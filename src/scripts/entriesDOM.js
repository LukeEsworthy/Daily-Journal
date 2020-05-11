function postToDOM(entriesArray) {
  let output = document.querySelector("#journalOutputField");
  for (let i = 0; i < entriesArray.length; i++) {
    const entry = entriesArray[i];
    output.innerHTML += createJournalComponent(entry);
  }
}
