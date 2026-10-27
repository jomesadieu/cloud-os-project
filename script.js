// Find the checklist items and the status message.
const checkboxes = document.querySelectorAll('[data-task]');
const status = document.getElementById('progress-status');
const resetButton = document.getElementById('reset-progress');

// Update the number of completed tasks shown on the page.
function updateProgress() {
  const completed = Array.from(checkboxes).filter(
    checkbox => checkbox.checked
  ).length;

  status.textContent =
    `Progress: ${completed} of ${checkboxes.length} tasks complete.`;
}

// Restore each task's saved state and listen for changes.
checkboxes.forEach(checkbox => {
  const storageKey = `cloud-os-task-${checkbox.dataset.task}`;

  try {
    checkbox.checked = localStorage.getItem(storageKey) === 'complete';
  } catch (error) {
    // The checklist still works for this visit if storage is unavailable.
    console.log('Browser storage is unavailable.');
  }

  checkbox.addEventListener('change', () => {
    try {
      localStorage.setItem(
        storageKey,
        checkbox.checked ? 'complete' : 'incomplete'
      );
    } catch (error) {
      console.log('Could not save checklist state.');
    }

    updateProgress();
  });
});

// Clear the saved checklist when the reset button is pressed.
resetButton.addEventListener('click', () => {
  checkboxes.forEach(checkbox => {
    checkbox.checked = false;

    try {
      localStorage.removeItem(`cloud-os-task-${checkbox.dataset.task}`);
    } catch (error) {
      console.log('Could not clear saved checklist state.');
    }
  });

  updateProgress();
});

// Display the correct count when the page first opens.
updateProgress();
