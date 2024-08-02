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
$modalForm.addEventListener('submit', function (event) {
  event.preventDefault();
  var $formElements = $modalForm.elements;
  console.log($formElements);
  var dayPlan = {
    time: $formElements.time.value,
    day: $formElements.day.value,
    event: $formElements.event.value,
  };
  console.log(dayPlan);
  addStuff(dayPlan);
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
function addStuff(object) {
  var index = 1;
  switch (object.day) {
    case 'monday': {
      var $tableRows = $monTable.querySelectorAll('tr');
      console.log($tableRows);
      for (var i = 1; i < $tableRows.length; i++) {
        if (!$tableRows[i].classList.contains('filled')) {
          index = i;
          break;
        }
      }
      var $tableData = $tableRows[index].querySelectorAll('td');
      console.log($tableData);
      $tableData[0].textContent = object.time;
      $tableData[1].textContent = object.event;
      $tableRows[index].classList.add('filled');
      break;
    }
    case 'tuesday':
      {
        var $tableRows = $tueTable.querySelectorAll('tr');
        console.log($tableRows);
        for (var i = 1; i < $tableRows.length; i++) {
          if (!$tableRows[i].classList.contains('filled')) {
            index = i;
            break;
          }
        }
        var $tableData = $tableRows[index].querySelectorAll('td');
        console.log($tableData);
        $tableData[0].textContent = object.time;
        $tableData[1].textContent = object.event;
        $tableRows[index].classList.add('filled');
      }
      break;
    case 'wednesday':
      {
        var $tableRows = $wedTable.querySelectorAll('tr');
        console.log($tableRows);
        for (var i = 1; i < $tableRows.length; i++) {
          if (!$tableRows[i].classList.contains('filled')) {
            index = i;
            break;
          }
        }
        var $tableData = $tableRows[index].querySelectorAll('td');
        console.log($tableData);
        $tableData[0].textContent = object.time;
        $tableData[1].textContent = object.event;
        $tableRows[index].classList.add('filled');
      }
      break;
    case 'thursday':
      {
        var $tableRows = $thurTable.querySelectorAll('tr');
        console.log($tableRows);
        for (var i = 1; i < $tableRows.length; i++) {
          if (!$tableRows[i].classList.contains('filled')) {
            index = i;
            break;
          }
        }
        var $tableData = $tableRows[index].querySelectorAll('td');
        console.log($tableData);
        $tableData[0].textContent = object.time;
        $tableData[1].textContent = object.event;
        $tableRows[index].classList.add('filled');
      }
      break;
    case 'friday':
      {
        var $tableRows = $friTable.querySelectorAll('tr');
        console.log($tableRows);
        for (var i = 1; i < $tableRows.length; i++) {
          if (!$tableRows[i].classList.contains('filled')) {
            index = i;
            break;
          }
        }
        var $tableData = $tableRows[index].querySelectorAll('td');
        console.log($tableData);
        $tableData[0].textContent = object.time;
        $tableData[1].textContent = object.event;
        $tableRows[index].classList.add('filled');
      }
      break;
    case 'saturday':
      {
        var $tableRows = $satTable.querySelectorAll('tr');
        console.log($tableRows);
        for (var i = 1; i < $tableRows.length; i++) {
          if (!$tableRows[i].classList.contains('filled')) {
            index = i;
            break;
          }
        }
        var $tableData = $tableRows[index].querySelectorAll('td');
        console.log($tableData);
        $tableData[0].textContent = object.time;
        $tableData[1].textContent = object.event;
        $tableRows[index].classList.add('filled');
      }
      break;
    case 'sunday':
      {
        var $tableRows = $sunTable.querySelectorAll('tr');
        console.log($tableRows);
        for (var i = 1; i < $tableRows.length; i++) {
          if (!$tableRows[i].classList.contains('filled')) {
            index = i;
            break;
          }
        }
        var $tableData = $tableRows[index].querySelectorAll('td');
        console.log('length:', $tableData.length);
        $tableData[0].textContent = object.time;
        $tableData[1].textContent = object.event;
        $tableData[2].textContent = object.time;
        var $actionRow = document.createElement('div');
        //create dic
        $actionRow.classList.add('row', 'justify-space-evenly');
        var $editButton = document.createElement('button');
        var $deleteButton = document.createElement('button');
        $editButton.textContent = 'EDIT';
        $deleteButton.textContent = 'DELETE';
        $actionRow.appendChild($editButton);
        $actionRow.appendChild($deleteButton);
        $tableData[2].appendChild($actionRow);
        $tableRows[index].classList.add('filled');
      }
      break;
  }
}
