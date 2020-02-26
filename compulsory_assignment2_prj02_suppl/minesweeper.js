var board = document.getElementById("MinesweeperBoard");
var testMode = false;
Generate();

function Generate(){
    var url = 'https://veff213-minesweeper.herokuapp.com/api/v1/minesweeper';
    var valrows = document.getElementById("valrows").value;
    var valcols = document.getElementById("valcols").value;
    var valmines = document.getElementById("valmines").value;


    axios.post(url, {rows: valrows, cols: valcols , mines: valmines})
                .then(function (response) {
                    console.log("Success: ", response.data);
                    var columns = response.data.board.cols;
                    var rows = response.data.board.rows;
                    var minePos = response.data.board.minePositions;
                    board.innerHTML="";
                    for (var i = 0; i < rows; i++){
                        row = grid.insertRow(i);
                        for (var j = 0; j < cols; j++){
                            cell = row.insertCell(j);
                            cell.onclick = function(){
                                clickCell(this);
                            };
                            var mine = document.createAttribute("datamine");
                            mine.value = "false";
                            cell.setAttributeNode(mine);
                        }
                    }
                    addMines();
                })
                .catch(function (error) {
                    console.log(error);
                    // var boardsize = valcols*valrows;
                    // if (valmines > boardsize){
                    //     console.log(error);
                    // }
                })
}



function addMines(){
    
}

// function makeBoard(rows, columns){
//     var board = document.getElementById("MinesweeperBoard");
//     board.innerHTML = "";
//     for (var i=0; i<rows; i++){
//         row = board.insertRow(i);
//         for (var j=0; j<columns; j++){
//             cell = row.insertCell(j);
//             cell.onclick = Generate();{
//                 clickCell(this);};

//                 var mine = document.createAttribute("datamine");
//                 mine.value = "false";
//                 cell.setAttribute("id",mine);
//         }
//     }
//     setMines();
// }

// function setMines(){

// }

// function makeBoard(rows, columns, minePos){
//     var buttonDiv = document.getElementById("MinesweeperBoard");
//     while (buttonDiv.firstChild){
//         buttonDiv.removeChild(buttonDiv.firstChild);
//     }
//     var buttonDiv = document.getElementById("MinesweeperBoard");

//     for (i = 0; i < rows; i++){
//         for (j =0; j < columns; j++){
//             var button = document.createElement("button");
//             buttonDiv.appendChild(button);
//             var mine = document.createAttribute("datamine");
//             mine.value = "false";
//         }
//         var br = document.createElement("br")
//         buttonDiv.appendChild(br)
//     }
//     setMines(rows, columns, minePos);
// }


// function setMines(row, columns, minePos){

// }







