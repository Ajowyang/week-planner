// interface DayPlan {
//   time: string;
//   day: string;
//   event: string;
// }

// const dayPlan: DayPlan = {
//   time: '',
//   day: '',
//   event: '',
// };

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
