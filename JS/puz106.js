// 21/04/21 Aiden - Added 6x6 grid templates
// List of possible games
var G1 = [1, null, 0, null, 0, 0, null, 1, null, 0, 0, null, null, null, null, null, null, 0, 0, null, null, 1, null, null, 1, 0, null, 1, 1, null, null, 0, null, null, 1, 1];
var G2 = [null, 1, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null];
var G3 = [null, null, 1, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null];

function loadGrid(g) { // 21/4/21 Aiden - Fills in the grid from a template
    var row = 6; 
    var col = 6;
    var grid = []; // Grid is not currently used

    for (let o = 0; o < row; o++) { // 'o' looping through row (min := 1, max :=6)
        for (let i = 0; i < col; i++) { // 'i' looping through collumn (min := 1, max := 6)
            document.getElementById("B" + (o + 1) + "_" + (i + 1)).value = g[Number((col * o) + (i))]; 
        }
    }
}