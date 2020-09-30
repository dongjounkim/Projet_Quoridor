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