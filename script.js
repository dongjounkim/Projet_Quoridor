function dessinecase(i) {
  $("#case").append(
        `<div id="case${i}"
              class="case"
              style="left:80px;
                     top:80px" >
           </div>`)          
}

for (let i=0; i<17; i++) {
    dessinecase(i)
}

var rows = 9;
var columns = 9;






$(document).ready(function () {
    for (var i = 0; i < columns; i++) {
        for (var y = 0; y < rows; y++) {
            $("#game-board").append(`<h2>"Hello"</h2>`);
            console.log(y);
        }
        $("#game-board").append(`<h2>"Hello2"</h2>`);
        console.log(i);
    }

});
