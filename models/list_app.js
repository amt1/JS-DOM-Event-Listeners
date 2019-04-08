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
let eventDate = new Date();
let eventAllDay = true;
let eventStartTime= new Date();
let eventEndTime= new Date();
let eventTime= new Date();
let eventLocation = '';
let eventDescription = '';
let eventContact = '';
let eventEmail = '';
let counter=2;

const handleTitleInput = function(event){
    titleText = event.target.value;
    console.log(titleText);
};

const titleInput = document.querySelector('#title');
titleInput.addEventListener('input', handleTitleInput);

const handleDateInput = function(event){
    eventDate = event.target.value;
    // console.log(eventDate.prototype.toDateString());
};

const eventInput = document.querySelector('#date');
eventInput.addEventListener('input', handleDateInput);

const handleAllDayInput = function(event){
    // eventAllDay = event.target.value;
    const setTimes = document.querySelector('#settimes');

    if (event.target.checked){
      eventAllDay=true;
      setTimes.className="hidesettimes";
    } else {
      eventAllDay = false;
      setTimes.className="showsettimes";

    }
    console.log(eventAllDay);

};

const allDayInput = document.querySelector('#allday');
allDayInput.addEventListener('change', handleAllDayInput);

// ok I thought this would be better but it didn't work: times were undefined
// const handleTimeInput = function(event){
//     eventTime = event.target.value;
//     console.log(eventTime);
//     return eventTime;
// };

const handleStartTimeInput = function(event){
    eventStartTime = event.target.value;
    console.log(eventStartTime);
};
const handleEndTimeInput = function(event){
    eventEndTime = event.target.value;
    console.log(eventEndTime);
};

const startTimeInput = document.querySelector('#start-time');
startTimeInput.addEventListener('input', handleStartTimeInput);
const endTimeInput = document.querySelector('#end-time');
endTimeInput.addEventListener('input', handleEndTimeInput);
console.log('got start',eventStartTime);
console.log('got end',eventEndTime);
const handleLocationInput = function(event){
    eventLocation = event.target.value;
    console.log(eventLocation);
};

const locationInput = document.querySelector('#location');
locationInput.addEventListener('change', handleLocationInput);

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
    eventEmail = String(event.target.value);
};

const emailInput = document.querySelector('#email');
emailInput.addEventListener('input', handleEmailInput);


const addEvent = function(){
  const newListItem = document.createElement('li');
  const eventsList = document.querySelector('#events');
  const dateString=new Date(eventDate).toDateString();
  // const startTimeString = new Date(eventStartTime).toTimeString();
  // const endTimeString = new Date(eventEndTime).toTimeString();
  const startTimeString = String(eventStartTime);
  const endTimeString = String(eventEndTime);

  let HTMLString3 = dateString;
  let HTMLString4 ='';
  if (eventAllDay === true) {
    HTMLString4 = `, All Day`;
  } else {
    HTMLString4 = `, ${startTimeString} - ${endTimeString}`;
  };
  const HTMLString1=`<table><tr><th><h4>${titleText}</h4></th></tr>`;
  const HTMLString2=`<tr><td>` + HTMLString3 + HTMLString4 + ` </td></tr>`;
  const HTMLString5 = `<tr><td>${eventLocation} </td></tr>`;
  const HTMLString6 = `<tr><td>${eventDescription}</td></tr>`;
  const HTMLString7 = `<tr><td>For more information, contact ${eventContact}<br />`;
  const HTMLString8 = `${eventEmail}</td></tr></table>`;

  newListItem.innerHTML = HTMLString1 + HTMLString2 + HTMLString5 + HTMLString6 + HTMLString7 + HTMLString8;
  newListItem.className = "event-details";
  let colourString=` colour-` + String(counter++ % 7);
  newListItem.className += colourString;
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
