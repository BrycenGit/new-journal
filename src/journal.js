export default function Journal(entryTitle, entryBody) {
  this.title = entryTitle;
  this.body = entryBody;
}



Journal.prototype.createTeaser = function() {
  let teaser =  this.body.split(" ").slice(0,8);
  return teaser;
};

// Journal.prototype.createTeaser = function(fullSentence) {

  
// }