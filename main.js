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
// Code for switching the table based on day of the week
var $tableDay = document.querySelector('#chooseDay');
if (!$tableDay) throw new Error('#chooseDay query failed!');
// let value = $tableDay.value;
$tableDay.addEventListener('change', function () {
  var dayString = $tableDay.options[$tableDay.selectedIndex].text;
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
