function Generate(){
    
    var url = 'https://veff213-minesweeper.herokuapp.com/api/v1/minesweeper';
    var valrows = document.getElementById("valrows").value;
    var valcols = document.getElementById("valcols").value;
    var valmines = document.getElementById("valmines").value;


    axios.post(url, {rows: 10, cols: 10 , mines: 10})
                .then(function (response) {
                    console.log("Success: ", response.data);

                    var columns = response.data.board.cols;
                    var rows = response.data.board.rows;
                    var minepos = response.data.board.minePositions[0];
                    var buttonDiv = document.getElementById("MinesweeperBoard");

                    for (i = 0; i < rows; i++){
                        for (j =0; j < columns; j++){
                            var button = document.createElement("button");
                            if (i === minepos[0] && j === minepos[1]){
                                button.textContent = button["M"];
                                buttonDiv.appendChild(button);
                            }
                            else{
                                buttonDiv.appendChild(button);
                            }

                        }
                        
                        var br = document.createElement("br")
                        buttonDiv.appendChild(br)
                    }

                })
                .catch(function (error) {
                    console.log(error);
                })
}








