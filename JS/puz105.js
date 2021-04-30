// 21/4/21 Aiden - Added 6x6 grid templates
var G1 = [1, null, 0, null, 0, 0, null, 1, null, 0, 0, null, null, null, null, null, null, 0, 0, null, null, 1, null, null, 1, 0, null, 1, 1, null, null, 0, null, null, 1, 1];
var G2 = [null, 1, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null];
var G3 = [null, null, 1, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null];

function loadGrid(g) { // 21/4/21 Aiden - Fills in the grid from a template
    var row = 6;
    var col = 6;
    var grid = JSON.parse(JSON.stringify(g)); // Deepcopy grid "g"

    for (let i = 0; i < row; i++) { // Loop through rows A-F
        for (let o = 0; o < col; o++) { // Loop through cols 1-6
            // Array.shift() method removes and returns the first element of the array
            document.getElementById("ABCDEF"[o] + (i+1)).value = grid.shift();
        }
    }
}
