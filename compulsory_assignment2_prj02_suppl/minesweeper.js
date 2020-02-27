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
                    makeBoard(rows,columns,minePos);
                })
                .catch(function (error) {
                    console.log(error);
                })

}



function makeBoard(rows, columns, minePos){
    var buttonDiv = document.getElementById("MinesweeperBoard");
    while (buttonDiv.firstChild){
        buttonDiv.removeChild(buttonDiv.firstChild);
    }
    var buttonDiv = document.getElementById("MinesweeperBoard");


    for (i = 0; i < rows; i++){
        for (j =0; j < columns; j++){
            var myarr = [[i],[j]];
            var button = document.createElement("button");
            button.setAttribute("value", myarr);
            buttonDiv.appendChild(button);
        }
        var br = document.createElement("br")
        buttonDiv.appendChild(br)
    }


}











// function addMines(){
    
// }

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









