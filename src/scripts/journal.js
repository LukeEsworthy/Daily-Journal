import API from "./data.js";
import postToDOM from "./entriesDOM.js";

API.getJournalEntries().then((entries) => {
  postToDOM(entries);
});
