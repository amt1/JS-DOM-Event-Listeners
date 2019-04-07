document.addEventListener('DOMContentLoaded', () => {
  console.log('JavaScript loaded');
// well that's a start

const handleDeleteButtonClick = function() {
  const eventList = document.querySelector('#events');
  eventList.innerHTML='';
};

const clickDeleteButton = document.querySelector('#delete');
clickDeleteButton.addEventListener('click',handleDeleteButtonClick);
});
