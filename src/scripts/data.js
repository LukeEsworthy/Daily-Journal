const API = {
  getJournalEntries() {
    return fetch("http://localhost:3000/entries").then((entriesResults) =>
      entriesResults.json()
    );
  },
};

export default API;
