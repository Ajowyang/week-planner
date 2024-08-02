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
if (!$tableDay) throw new Error('#chooseDay query failed!');

// let value = $tableDay.value;

$tableDay.addEventListener('change', function () {
  const dayString = $tableDay.options[$tableDay.selectedIndex].text;
  console.log(dayString);
  switch (dayString) {
    case 'monday':
      break;
    case 'tuesday':
      break;
    case 'wednesday':
      break;
    case 'thursday':
      break;
    case 'friday':
      break;
    case 'saturday':
      break;
    case 'sunday':
      break;
  }
});
