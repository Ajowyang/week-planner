interface DayPlan {
  time: string;
  day: string;
  event: string;
}

// Code for the modal
const $modal = document.querySelector('.event-modal') as HTMLDialogElement;
if (!$modal) throw new Error('dialog query failed!');

const $newEventButton = document.querySelector(
  '.new-event-button',
) as HTMLButtonElement;
if (!$newEventButton) throw new Error('.new-event-button query failed!');

const $dismissModal = document.querySelector(
  '.dismiss-modal',
) as HTMLButtonElement;
if (!$dismissModal) throw new Error('.dismissModal query failed!');

$newEventButton.addEventListener('click', function () {
  $modal.showModal();
});

$dismissModal.addEventListener('click', function () {
  $modal.close();
});

const $confirmButton = document.querySelector('.confirm-button');
if (!$confirmButton) throw new Error('.confirm-button query failed!');
const $modalForm = document.querySelector('.modal-form') as HTMLFormElement;
if (!$modalForm) throw new Error('.modal-form query failed!');

interface FormElements extends HTMLCollection {
  time: HTMLSelectElement;
  day: HTMLSelectElement;
  eventInfo: HTMLTextAreaElement;
}

$modalForm.addEventListener('submit', function () {
  const $formElements = $modalForm.elements as FormElements;
  const dayPlan: DayPlan = {
    time: $formElements.time.value,
    day: $formElements.day.value,
    event: $formElements.eventInfo.value,
  };

  console.log(dayPlan);
});

// Code for switching the table based on day of the week
const $tableDay = document.querySelector('#chooseDay') as HTMLSelectElement;
const $monTable = document.querySelector('.monTable');
const $tueTable = document.querySelector('.tueTable');
const $wedTable = document.querySelector('.wedTable');
const $thurTable = document.querySelector('.thurTable');
const $friTable = document.querySelector('.friTable');
const $satTable = document.querySelector('.satTable');
const $sunTable = document.querySelector('.sunTable');
if (!$tableDay) throw new Error('#chooseDay query failed!');

// let value = $tableDay.value;

$tableDay.addEventListener('change', function () {
  const dayString = $tableDay.options[$tableDay.selectedIndex].value;

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
// const $trList = document.querySelector('tr-list');

// function renderTR(data: DayPlan): unknown{
//   const $tdTime = document.createElement('td');
//   $tdTime.setAttribute('class', 'time-table');
//   $tdTime.textContent = data.time;

//   const $tdEvent = document.createElement('td');
//   $tdEvent.setAttribute('class', 'event-table');
//   $tdEvent.textContent = data.event;

//   const $tdButtonEdit = document.createElement('td');
//   $tdButtonEdit.setAttribute('class', 'button-edit');

//   const $tdButtonDel = document.createElement('td');
//   $tdButtonDel.setAttribute('class', 'button-delete');

//   const $buttonEdit = document.createElement('button');
//   $buttonEdit.setAttribute('class', 'delete');
//   $buttonEdit.setAttribute('type', 'submit');

//   const $buttonDel = document.createElement('button');
//   $buttonDel.setAttribute('class', 'delete');
//   $buttonDel.setAttribute('type', 'submit');

//
