// Code for the modal
var $modal = document.querySelector('.event-modal');
if (!$modal) throw new Error('dialog query failed!');
var $newEventButton = document.querySelector('.new-event-button');
if (!$newEventButton) throw new Error('.new-event-button query failed!');
var $dismissModal = document.querySelector('.dismiss-modal');
if (!$dismissModal) throw new Error('.dismissModal query failed!');
$newEventButton.addEventListener('click', function () {
  $modal.showModal();
});
$dismissModal.addEventListener('click', function () {
  $modal.close();
});
var $confirmButton = document.querySelector('.confirm-button');
if (!$confirmButton) throw new Error('.confirm-button query failed!');
var $modalForm = document.querySelector('.modal-form');
if (!$modalForm) throw new Error('.modal-form query failed!');
$modalForm.addEventListener('submit', function () {
  var $formElements = $modalForm.elements;
  var dayPlan = {
    time: $formElements.time.value,
    day: $formElements.day.value,
    event: $formElements.eventInfo.value,
  };
  console.log(dayPlan);
});
// Code for switching the table based on day of the week
var $tableDay = document.querySelector('#chooseDay');
var $monTable = document.querySelector('.monTable');
var $tueTable = document.querySelector('.tueTable');
var $wedTable = document.querySelector('.wedTable');
var $thurTable = document.querySelector('.thurTable');
var $friTable = document.querySelector('.friTable');
var $satTable = document.querySelector('.satTable');
var $sunTable = document.querySelector('.sunTable');
if (!$tableDay) throw new Error('#chooseDay query failed!');
// let value = $tableDay.value;
$tableDay.addEventListener('change', function () {
  var dayString = $tableDay.options[$tableDay.selectedIndex].value;
  switch (dayString) {
    case 'monday':
      $monTable.setAttribute('class', 'unhidden');
      $tueTable.setAttribute('class', 'hidden');
      $wedTable.setAttribute('class', 'hidden');
      $thurTable.setAttribute('class', 'hidden');
      $friTable.setAttribute('class', 'hidden');
      $satTable.setAttribute('class', 'hidden');
      $sunTable.setAttribute('class', 'hidden');
      break;
    case 'tuesday':
      $monTable.setAttribute('class', 'hidden');
      $tueTable.setAttribute('class', 'unhidden');
      $wedTable.setAttribute('class', 'hidden');
      $thurTable.setAttribute('class', 'hidden');
      $friTable.setAttribute('class', 'hidden');
      $satTable.setAttribute('class', 'hidden');
      $sunTable.setAttribute('class', 'hidden');
      break;
    case 'wednesday':
      $monTable.setAttribute('class', 'hidden');
      $tueTable.setAttribute('class', 'hidden');
      $wedTable.setAttribute('class', 'unhidden');
      $thurTable.setAttribute('class', 'hidden');
      $friTable.setAttribute('class', 'hidden');
      $satTable.setAttribute('class', 'hidden');
      $sunTable.setAttribute('class', 'hidden');
      break;
    case 'thursday':
      $monTable.setAttribute('class', 'hidden');
      $tueTable.setAttribute('class', 'hidden');
      $wedTable.setAttribute('class', 'hidden');
      $thurTable.setAttribute('class', 'unhidden');
      $friTable.setAttribute('class', 'hidden');
      $satTable.setAttribute('class', 'hidden');
      $sunTable.setAttribute('class', 'hidden');
      break;
    case 'friday':
      $monTable.setAttribute('class', 'hidden');
      $tueTable.setAttribute('class', 'hidden');
      $wedTable.setAttribute('class', 'hidden');
      $thurTable.setAttribute('class', 'hidden');
      $friTable.setAttribute('class', 'unhidden');
      $satTable.setAttribute('class', 'hidden');
      $sunTable.setAttribute('class', 'hidden');
      break;
    case 'saturday':
      $monTable.setAttribute('class', 'hidden');
      $tueTable.setAttribute('class', 'hidden');
      $wedTable.setAttribute('class', 'hidden');
      $thurTable.setAttribute('class', 'hidden');
      $friTable.setAttribute('class', 'hidden');
      $satTable.setAttribute('class', 'unhidden');
      $sunTable.setAttribute('class', 'hidden');
      break;
    case 'sunday':
      $monTable.setAttribute('class', 'hidden');
      $tueTable.setAttribute('class', 'hidden');
      $wedTable.setAttribute('class', 'hidden');
      $thurTable.setAttribute('class', 'hidden');
      $friTable.setAttribute('class', 'hidden');
      $satTable.setAttribute('class', 'hidden');
      $sunTable.setAttribute('class', 'unhidden');
      break;
  }
});
// Code to render the the new html lines based off the code.
