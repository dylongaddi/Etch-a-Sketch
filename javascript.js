const container = document.getElementById('container');




//function for making grids
function makeGrid(rows, columns) {
    container.style.setProperty('--gridRows', rows);
    container.style.setProperty('--gridColumns', columns);
    for (i = 0; i< (rows*columns); i++) {
        let square = document.createElement('div');
        container.appendChild(square).id = 'square'; 
    };
};

//different modes
function monochrome () {
    this.style.backgroundColor = 'black';
}

function eraser () {
    this.style.backgroundColor ='white'
}

//colorPicker
function colorPicker () {
    let colorSelected = document.querySelector('#color')
    colorSelected.addEventListener('input', () => {
        let color = colorSelected.value;
    const grid = document.querySelectorAll('#container > div');
        grid.forEach((square) => {
            square.addEventListener('mouseover', () => {
        square.style.backgroundColor = color;
    });
});
});
}



//controls for selecting mode
const modes = document.querySelectorAll('.modes')
modes.forEach((modeSelected) => {
    modeSelected.addEventListener('click', function() {
        let modeSelected=this.textContent;
        fillSquare(modeSelected);
    });
});

//function that gives control outline based on mode selected



//function that delivers output based off of mode selected
function fillSquare (modeSelected) {
    const grid = document.querySelectorAll('#container > div');
    grid.forEach((square) => {
    if (modeSelected === 'Monochrome Mode') {
        square.removeEventListener('mouseover', eraser)
        square.addEventListener('mouseover', monochrome)
    } else if (modeSelected === 'Eraser') {
        square.removeEventListener('mouseover', monochrome)
        square.addEventListener('mouseover', eraser)
    } else if (modeSelected === ''){
        square.removeEventListener('mouseover', eraser)
        square.removeEventListener('mouseover', monochrome)
    }
    });
}


//resetGrid does not keep borders intact 
//(maybe there is a way to make eraseGrid and resetGrid same function)
function resetGrid () {
    container.innerHTML = ''
}

//eraseGrid keeps borders intact
function eraseGrid () {
    const grid = document.querySelectorAll('#container > div');
    grid.forEach((square) => {
        square.style.backgroundColor = 'white';
    });
}

//changes cursor based on if square is filled or not
function changeGridCursor () {
    const grid = document.querySelectorAll('#container > div');
    grid.forEach((square) => {
    if (square.style.backgroundColor = 'white') {
        square.style.cursor = 'crosshair'
    } else {
        square.style.cursor = 'default'
    }
});
}

//prompts user for grid size
function gridSize () {
    let rows= prompt('Enter a whole number between 1-100 for your new grid size.')
    let columns= rows
    if (rows === null) {
        return
    } else if (isNaN(rows) || (rows<1 || rows>100)) {
        alert('Error: please enter a valid whole number between 1-100.                  Example: "16" for a 16x16 grid');
        return
    } else if ( 100 >= rows >= 1) {
        resetGrid();
        makeGrid(rows, columns);
}
}

makeGrid(30,30)
colorPicker();
changeGridCursor();




