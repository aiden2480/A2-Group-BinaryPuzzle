// 21/04/21 Aiden - Added 6x6 grid templates
// G1 is used 
var G1 = [1, null, 0, null, 0, 0, null, 1, null, 0, 0, null, null, null, null, null, null, 0, 0, null, null, 1, null, null, 1, 0, null, 1, 1, null, null, 0, null, null, 1, 1];
var G2 = [null, 1, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null];
var G3 = [null, null, 1, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null];
var G4 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36];

function loadGrid(g) { // 21/4/21 Aiden - Fills in the grid from a template
    var row = 6; 
    var col = 6;
    var gridCol = [];
    var grid = [];
    var concatenation = "";

    for (let o = 0; o < row; o++) { // 'o' looping through row (min := 1, max :=6)
        for (let i = 0; i < col; i++) { // 'i' looping through collumn (min := 1, max := 6)
            document.getElementById("B" + (o + 1) + "_" + (i + 1)).value = g[Number((col * o) + (i))]; 
        }
    }

    // 30/4/21 Aiden - Convert 1D array to 2D
    for (let j = 0; j < row; j++) {
        for (let i = 0; i < col; i++) {
            gridCol.push(g[j * col + i]);
        }
        grid.push(gridCol);
        gridCol = []; // clear this array ready for the next row
    }

    // 30/4/21 Aiden - Concatenate
    for (i = 0; i < row; i++) {
        concatenation += `[${grid[i]}]\n`;
    }

    console.log(grid);
    document.getElementById("arrayView1D").value = grid;
    document.getElementById("arrayView2D").value = concatenation;
    document.getElementById("arrayViewCell").value = grid[3][2]; // Row 4, Column 3
}
