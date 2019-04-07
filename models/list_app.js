document.addEventListener('DOMContentLoaded', () => {
  console.log('JavaScript loaded');
// well that's a start

// let's put the global variables at the top

// later!
// let titleText = '';


// bring back the previous delete that worked
// Works again. Going on this way then.
const handleDeleteButtonClick = function() {
  const eventList = document.querySelector('#events');
  eventList.innerHTML='';
};
const clickDeleteButton = document.querySelector('#delete');
clickDeleteButton.addEventListener('click',handleDeleteButtonClick);

// get the new elements from the form:

let titleText='';
let eventDate='';
let eventTime='';
let eventLocation = '';
let eventDescription = '';
let eventContact = '';
let eventEmail = '';

const handleTitleInput = function(event){
    titleText = event.target.value;
    console.log(titleText);
};

const titleInput = document.querySelector('#title');
titleInput.addEventListener('input', handleTitleInput);

const handleDateInput = function(event){
    eventDate = event.target.value;
    console.log(eventDate);
};

const eventInput = document.querySelector('#date');
eventInput.addEventListener('input', handleDateInput);

const handleTimeInput = function(event){
    eventTime = event.target.value;
    console.log(eventTime);
};

const timeInput = document.querySelector('#time');
timeInput.addEventListener('input', handleTimeInput);

const handleLocationInput = function(event){
    eventLocation = event.target.value;
    console.log(eventLocation);
};

const locationInput = document.querySelector('#location');
locationInput.addEventListener('change', handleTimeInput);

const handleDescriptionInput = function(event){
    descriptionText = event.target.value;
    console.log(descriptionText);
};

const descriptionInput = document.querySelector('#description');
descriptionInput.addEventListener('input', handleDescriptionInput);

const handleContactInput = function(event){
    eventContact = event.target.value;
    console.log(eventContact);
};

const contactInput = document.querySelector('#contact');
contactInput.addEventListener('change', handleContactInput);

const handleEmailInput = function(event){
    emailText = event.target.value;
    console.log(emailText);
};

const emailInput = document.querySelector('#email');
emailInput.addEventListener('input', handleEmailInput);


const addEvent = function(){
  const newListItem = document.createElement('li');
  const eventsList = document.querySelector('#events');
  newListItem.innerHTML = `<p>${titleText}</p><p>${authorText}</p><p>${categorySelected}</p>`;
  eventsList.appendChild(newListItem);

};

const handleFormSubmit = function(event){
  event.preventDefault();
  // I may have confused things by my list items being events,
  // as this is obviously a reserved word!
  // so nothing can be called 'event' but I have variations on that
  addEvent();
  form.reset();
};

const form = document.querySelector('#add-events-form');
form.addEventListener('submit', handleFormSubmit);




// Ok. It works, but looking at the cinema lab,
// am I meant to make this object oriented somehow?
// tried this but I am hopelessly going round in circles here
// const EventsList = function(eventslist){
//   this.eventslist = eventslist;
// };
// const eventsList = new EventsList(document.querySelector('#events'));
//
// const clickDeleteButton = document.querySelector('#delete');
//
// EventsList.prototype.deleteAll = function(){
//   this.innerHTML='';
//   return this.eventslist;
// };
// clickDeleteButton.addEventListener('click', eventsList.deleteAll);

}); // end document.addEventListener
