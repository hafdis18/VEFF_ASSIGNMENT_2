function Generate(){
    
    var url = 'https://veff213-minesweeper.herokuapp.com/api/v1/minesweeper';

    axios.post(url, {cols: 10, rows:10 , mines:10})
                .then(function (response) {
                    console.log("Success: ", response.data);

                    var columns = response.data.board.cols;
                    var rows = response.data.board.rows;
                    var mines = response.data.board.mines;
                    var buttonDiv = document.getElementById("MinesweeperBoard");

                    for (i = 0; i < rows; i++){
                        for (j =0; j < columns; j++){
                            var button = document.createElement("button");
                            buttonDiv.appendChild(button);
                        }
                        
                        var br = document.createElement("br")
                        buttonDiv.appendChild(br)
                    }

                })
                .catch(function (error) {
                    console.log(error);
                });
}




