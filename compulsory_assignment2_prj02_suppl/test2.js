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
    var board = document.getElementById("MinesweeperBoard");
    while (board.firstChild){
        board.removeChild(board.firstChild);
    }
    var board = document.getElementById("MinesweeperBoard");
    var id = 0;

    var myarr = [];
    for (i = 0; i < rows; i++){
        for (j = 0; j < columns; j++){
            var position = {
                pos:[i,j],
                id:"mybutton"+id
            }
            myarr.push(position)
            var button = document.createElement("button");
            button.setAttribute("id","mybutton"+id);
            button.setAttribute("mine","false")
            board.appendChild(button, myarr);
            id += 1;
            button.onclick = function(){clickCell(this, myarr, minePos);
            };
        }
        var br = document.createElement("br")
        board.appendChild(br)
    }
    console.log(myarr)
    setMines(minePos,myarr);
}

function setMines(minePos,myarr){
    minePos.forEach(pos => {
        for(var i = 0; i < myarr.length;i++){
            if(pos[0] == myarr[i].pos[0] && pos[1] == myarr[i].pos[1]){
                document.getElementById(myarr[i].id).setAttribute("mine","true");
            }
        }
    });
}

function revealMines(myarr, minePos){
    minePos.forEach(pos => {
        for(var i = 0; i < myarr.length;i++){
            if(pos[0] == myarr[i].pos[0] && pos[1] == myarr[i].pos[1]){
                document.getElementById(myarr[i].id).setAttribute("mine","true");
            }
        }
    });
}


function clickCell(button, myarr, minePos){
    console.log("clickCell");
    if (button.getAttribute("mine") === "true"){
        console.log("BOMB");
        revealMines(myarr, minePos);
        // for (i=0; i<myarr.length; i++){
        //     if (button.getAttribute("mine") === "true"){
        //        document.getElementById(myarr[i].id).setAttribute("value","revealMines");
        //     }
        // }
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









