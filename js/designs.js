// Grid mount function
function makeGrid() {

  // Storing grid height value
  const rowsnumber = document.getElementById('inputHeight').value;
  // Storing grid width value
  const cellsnumber = document.getElementById('inputWidth').value;
  // Storing table canvas
  const canvas = document.getElementById('pixelCanvas');

  // Delete rows to start
  canvas.innerHTML = '';

  

  // Loop to insert the rows
  for (let i = 0; i < rowsnumber; i++) {
    let row = canvas.insertRow(i);

    // Loop to insert the cells
    for (let j = 0; j < cellsnumber; j++) {
      let cell = row.insertCell(j);

      // Add click event to the cells
      cell.addEventListener('click', function(event) {
        // When the cell is clicked, the background color changes to the selected color
        event.target.style.backgroundColor = document.getElementById('colorPicker').value;
      });
    }
  }
}

// Add click event to the submit input
document.getElementById('sizePicker').addEventListener('submit', function(event) {
  event.preventDefault();
  // When the data is submitted the grid mount function is called
  makeGrid();
});
