const $modal = document.querySelector('.event-modal') as HTMLDialogElement;
if (!$modal) throw new Error('dialog query failed!');

const $newEventButton = document.querySelector(
  '.new-event.button',
) as HTMLButtonElement;
if (!$newEventButton) throw new Error('.new-event-button query failed!');

const $dismissModal = document.querySelector(
  '.dismissModal',
) as HTMLButtonElement;
if (!$dismissModal) throw new Error('.dismissModal query failed!');

$newEventButton.addEventListener('click', function () {
  $modal.showModal();
});

$dismissModal.addEventListener('click', function () {
  $modal.close();
});
