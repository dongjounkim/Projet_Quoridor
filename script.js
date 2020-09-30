var n = 0;

while (n < 9) {
    function dessinecase(i) {

        if (i % 2 == 0) {
            $("#game-board").append(
                `<div id="case${i}"
              class="case"
              style="width:60px;
                     height:60px;" >
           </div>`);
        } else {
            $("#game-board").append(
                `<div id="mur${i}"
              class="mur"
              style="width:60px;
                     height:20px;">
           </div>`);
        }
    }

    function colonne(i) {
        for (let i = 0; i < 17; i++) {
            dessinecase(i);
        }
    }

    function colonne(i).append(`style="left:${i+60}px;"`);
    n++;
}

/*

function dessinemur(i) {
    $("#game-board").append(
        `<div id="murdreoite${i}"
              class="murdreoite"
              style="width:20px;
                     height:60px;
                     position: absolute;
                     left:60px;
                     top: ${i*80}px+60px;" >
           </div>`)
}

for (let i=0; i<9; i++) {
    dessinemur(i)
}

function dessinecase(y) {
    
    if(y%2 == 0) {
        $("#game-board").append(
            `<div id="case${y}"
                  class="case"
                  style="width:60px;
                         height:60px;
                         position: absolute;
                         right: ${y*50}px;" >
               </div>`)
    }
    else {
      $("#game-board").append(
            `<div id="mur${y}"
                  class="mur"
                  style="width:60px;
                         height:20px;
                         position: absolute;
                         right: ${y*50}px;">
               </div>`)
      }
    }
    
    for (let y=0; y<17; y++) {
        dessinecase(y)
    }*/