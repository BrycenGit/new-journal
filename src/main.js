import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import Journal from './journal.js';

$('#journal-form').submit(function(event) {
  event.preventDefault();
  const entryTitle = $('#title').val();
  const entryBody = $('#body').val();
  const journal = new Journal(entryTitle, entryBody);
  
 
  
  const teaser = journal.createTeaser();
  
  $('#teaser').append("<li>" + entryTitle + "</li>");
  $('#teaser').append("<li>" + entryBody + "</li>");
  $('#teaser').append("<li>" + teaser + "</li>");
});
