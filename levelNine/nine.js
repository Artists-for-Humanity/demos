let level = 1;
let select = true;
let color = ['', 'blue', 'green', 'yellow', 'red', 'orange'];
let levels = [[
    0, 0, 0, 0, 0, 0, 1,
    2, 4, 1, 0, 0, 5, 0,
    3, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 5,
    0, 0, 0, 0, 0, 0, 0,
    0, 0, 4, 0, 0, 2, 0,
    0, 0, 3, 0, 0, 0, 0
]];

start();
function start() {
    let boxes = document.getElementsByClassName('eachbox');
    let backColor = [];
    let count;
    for (let i = 0; i < boxes.length; i++) {
        boxes[i].innerText = levels[level - 1][i];
        if (levels[level - 1][i] == 0) {
            boxes[i].innerText = '';
            boxes[i].style.backgroundColor = 'transparent';
        } else {
            boxes[i].innerText = levels[level - 1][i];
            boxes[i].style.backgroundColor = color[boxes[i].innerText];
            boxes[i].draggable = true;
        }
        backColor[i] = boxes[i].style['background-color']
        boxes[i].addEventListener('dragstart', (e) => {
            select = boxes[i].innerText;
        });

        boxes[i].addEventListener('dragenter', (e) => {
            if(e.target.innerText === ''){
                boxes[i].style.backgroundColor = color[select];
                backColor[i] = color[select];
            }
        });

        boxes[i].addEventListener('dragend', () => {
            count = backColor.filter((item) => {
               return item.length < 8;  
            });
            if(count.length == 49) {
                check();
            }
        });
    }

    function check() {
        if (boxes[6].style.backgroundColor === color[1] &&
            boxes[5].style.backgroundColor === color[1] &&
            boxes[4].style.backgroundColor === color[1] &&
            boxes[11].style.backgroundColor === color[1] &&
            boxes[18].style.backgroundColor === color[1] &&
            boxes[19].style.backgroundColor === color[1] &&
            boxes[26].style.backgroundColor === color[1] &&
            boxes[33].style.backgroundColor === color[1] &&
            boxes[34].style.backgroundColor === color[1] &&
            boxes[41].style.backgroundColor === color[1] &&
            boxes[48].style.backgroundColor === color[1] &&
            boxes[47].style.backgroundColor === color[1] &&
            boxes[46].style.backgroundColor === color[1] &&
            boxes[45].style.backgroundColor === color[1] &&
            boxes[38].style.backgroundColor === color[1] &&
            boxes[31].style.backgroundColor === color[1] &&
            boxes[30].style.backgroundColor === color[1] &&
            boxes[23].style.backgroundColor === color[1] &&
            boxes[16].style.backgroundColor === color[1] &&
            boxes[9].style.backgroundColor === color[1] &&

            boxes[7].style.backgroundColor === color[2] &&
            boxes[0].style.backgroundColor === color[2] &&
            boxes[1].style.backgroundColor === color[2] &&
            boxes[2].style.backgroundColor === color[2] &&
            boxes[3].style.backgroundColor === color[2] &&
            boxes[10].style.backgroundColor === color[2] &&
            boxes[17].style.backgroundColor === color[2] &&
            boxes[24].style.backgroundColor === color[2] &&
            boxes[25].style.backgroundColor === color[2] &&
            boxes[32].style.backgroundColor === color[2] &&
            boxes[39].style.backgroundColor === color[2] &&
            boxes[40].style.backgroundColor === color[2] &&

            boxes[14].style.backgroundColor === color[3] &&
            boxes[21].style.backgroundColor === color[3] &&
            boxes[28].style.backgroundColor === color[3] &&
            boxes[35].style.backgroundColor === color[3] &&
            boxes[42].style.backgroundColor === color[3] &&
            boxes[43].style.backgroundColor === color[3] &&
            boxes[44].style.backgroundColor === color[3] &&

            boxes[8].style.backgroundColor === color[4] &&
            boxes[15].style.backgroundColor === color[4] &&
            boxes[22].style.backgroundColor === color[4] &&
            boxes[29].style.backgroundColor === color[4] &&
            boxes[36].style.backgroundColor === color[4] &&
            boxes[37].style.backgroundColor === color[4] &&

            boxes[12].style.backgroundColor === color[5] &&
            boxes[13].style.backgroundColor === color[5] &&
            boxes[20].style.backgroundColor === color[5] &&
            boxes[27].style.backgroundColor === color[5]
            ) {
            alert("Level Complete");
        }
    }
}
