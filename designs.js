// Select color input
// Select size input
const color= document.getElementById('colorPicker');
const rowsNumber = document.getElementById('inputHeight');
const cellsNumber= document.getElementById('inputWidth');
const canvas = document.getElementById('pixelCanvas');
const submitForm= document.getElementById('sizePicker');
// When size is submitted by the user, call makeGrid()
submitForm.addEventListener('submit',function(event){
  pixelCanvas.innerHTML='';
   submitForm.preventDefault();
   makeGrid(rowsNumber.value, cellsNumber.value);
});

pixelCanvas.addEventListener('click', function(){
   if (event.target.nodeName==='TD'){
     event.target.style.backgroundColor = colorPicker.value;
   }
});

function makeGrid({}) {
    for(let i=0; i<rowsNumber.value; i++){
       const row = pixelArtMaker.insertRow(0);
       for ( let j=0; j<cellsNumber.value; j++){
          row.insertCell(0);
      }
    }
}


    
// add color to the picker
   
