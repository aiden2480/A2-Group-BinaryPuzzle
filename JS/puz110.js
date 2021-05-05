// 21/04/21 Aiden - Added 6x6 grid templates

var G01 = [1, null, 0, null, 0, 0, null, 1, null, 0, 0, null, null, null, null, null, null, 0, 0, null, null, 1, null, null, 1, 0, null, 1, 1, null, null, 0, null, null, 1, 1];
var G02 = [null, null, null, null, null, null, null, 1, null, null, null, 1, null, 1, null, 1, null, null, null, null, 0, null, null, 1, null, 1, null, null, null, null, null, null, null, 0, 0, null];
var G03 = [null, 1, null, null, null, null, null, null, null, 0, null, 0, null, 0, null, 0, null, null, 1, null, null, null, 1, null, null, null, null, null, 0, null, 0, null, null, null, null, null];
var G04 = [0, null, null, 1, null, null, null, 0, null, null, null, 1, null, null, 1, 1, null, null, null, null, null, null, 1, 1, null, null, null, null, null, 0, 0, null, 1, null, 1, null];
var G05 = [null, null, null, null, null, null, null, 1, null, 1, null, 1, null, null, 0, 0, null, null, 0, null, null, null, null, null, null, null, null, null, 1, 1, null, null, 0, null, 0, null];
var G06 = [null, null, null, null, null, 0, null, 1, null, null, 1, null, null, null, null, 0, null, null, null, null, 1, null, null, null, null, null, 1, null, null, null, null, 0, null, null, 1, null];
var G07 = [1, null, 1, null, null, 1, null, null, null, 1, null, null, 0, null, null, 1, 0, null, null, null, 1, null, null, null, null, 1, null, null, null, null, 1, null, null, 1, 1, null];
var G08 = [1, 1, null, null, null, null, 1, null, null, 1, null, null, null, null, null, null, 0, null, 0, null, 0, null, null, null, null, null, null, null, null, null, null, null, 0, null, 0, null];
var G09 = [null, null, 0, 0, null, 0, null, null, null, null, null, null, null, 1, 1, null, null, null, null, null, null, null, 0, 0, null, null, 1, null, 0, null, null, null, null, null, null, null];
var G10 = [null, null, null, null, null, null, null, 1, null, null, null, null, null, null, 0, null, 1, 1, null, null, 0, null, null, null, null, 0, null, null, 1, null, null, null, null, null, null, null];
var G11 = [null, 1, null, 1, null, 1, null, null, null, null, null, null, 0, 0, null, null, null, null, null, null, null, null, 1, null, 0, null, 1, 0, null, null, null, 1, null, null, null, null];
var G12 = [0, null, null, null, null, null, null, 1, 1, null, null, null, null, null, 1, null, null, null, null, null, null, 0, null, null, 0, null, null, 1, null, null, null, null, null, null, null, null];
var G13 = [null, null, null, 1, null, null, null, null, null, null, null, 0, null, null, null, null, 0, 0, null, null, null, null, 1, null, 1, null, null, null, null, null, null, 0, null, 0, null, 0];
var GT = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36];
var row = 6; 
var col = 6;
var grid = [];

function loadGrid(g) { // 21/4/21 Aiden - Fills in the grid from a template
    grid = [];
    var gridCol = []; 
    var concatenation = "";

    // 30/4/21 Aiden - Convert 1D array to 2D
    for (let j = 0; j < row; j++) {
        for (let i = 0; i < col; i++) {
            gridCol.push(g[j * col + i]);
        }
        grid.push(gridCol);
        gridCol = []; // clear this array ready for the next row
    }

    // Value assignment is based on the 2D 'grid' instead of 'g'
    DisplayGrid(grid)

    // 30/4/21 Aiden - Concatenate
    for (i = 0; i < row; i++) {
        concatenation += `[${grid[i]}]\n`;
    }

    console.log(grid);
    document.getElementById("arrayView1D").value = `[${grid}]`;
    document.getElementById("arrayView2D").value = concatenation.trim();
    document.getElementById("arrayViewCell").value = String(grid[3][2]); // Row 4, Column 3
}

function DisplayGrid(G_Row_Col){
    for (let o = 0; o < row; o++) { // 'o' looping through row (min := 1, max :=6)
        for (let i = 0; i < col; i++) { // 'i' looping through column (min := 1, max := 6)
            document.getElementById("B" + (o + 1) + "_" + (i + 1)).value = G_Row_Col[o][i]; 
        }
    }
}

function BinaryPuzzleSolver() {
    window.alert('BinaryPuzzleSolver has not been coded yet');
}

function SolvePuzzle() {
    window.alert('SolvePuzzle has not been coded yet');
}

function SolveNumberPairs() {
    window.alert('SolveNumberPairs has not been coded yet');
}

function SolveRowPairs() {
    alert("Not coded yet");
}

function SolveColPairs() {
    alert("Not coded yet");
}

function SolveNumberTrios() {
    window.alert('SolveNumberTrios has not been coded yet');
}

function CompleteRowsCols() {
    window.alert('CompleteRowsCols has not been coded yet');
}
