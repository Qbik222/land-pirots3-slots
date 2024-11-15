window.addEventListener('orientationchange', () => {
    window.location.reload()
});

const playBtn = document.querySelector('.play-btn'),
    overlay = document.querySelector('.land__overlay'),
    popup = document.querySelector('.popup'),
    overflow = document.querySelector('body'),
    wrapper = document.querySelector('.land'),
    // bubbleText = document.querySelector('.bonus__main-bubble'),
    winOuter = document.querySelector('.outer-col-win'),
    slotsWindow = document.querySelector(".window")


//slots
var icons = [
    'win1.png','win2.png','win3.png','win4.png','win5.png','win6.png','win7.png','win8.png','win9.png',
    'win10.png','win11.png','win12.png','win13.png','win14.png','win15.png'
];

var slots = document.querySelector('.slots');
var cols = document.querySelectorAll('.col');

for(var i in cols) {
    if (!cols.hasOwnProperty(i))
        continue;
    var col = cols[i];
    var str = '';
    var firstThree = '';
    for(var x = 0; x < 30; x++) {
        var part = '<div class="icon-wrap"><img class="icon" src="img/slots/'+icons[Math.floor(Math.random()*icons.length)]+'"></div>';
        // var part = '<img class="icon" src="img/slots/'+icons[Math.floor(Math.random()*icons.length)]+'">';
        str += part
        if (x < 3) firstThree += part;
    }
    col.innerHTML =  str+firstThree;
}

(function startSlotsImg(){

    const startCol1 = ['win1.png', 'win12.png', 'win13.png'];
    const startCol2 = ['win7.png', 'win8.png', 'win10.png'];
    const startCol3 = ['win11.png', 'win14.png', 'win12.png'];
    const startCol4 = ['win5.png', 'win1.png', 'win2.png'];
    const startCol5 = ['win5.png', 'win6.png', 'win13.png'];




    const colsImg1 = Array.from(cols[0].querySelectorAll('img'))
    colsImg1[32].setAttribute('src', 'img/slots/'+ startCol1[0])
    colsImg1[31].setAttribute('src', 'img/slots/'+ startCol1[1])
    colsImg1[30].setAttribute('src', 'img/slots/'+ startCol1[2])


    const colsImg2 = Array.from(cols[1].querySelectorAll('img'))
    colsImg2[32].setAttribute('src', 'img/slots/'+ startCol2[0])
    colsImg2[31].setAttribute('src', 'img/slots/'+ startCol2[1])
    colsImg2[30].setAttribute('src', 'img/slots/'+ startCol2[2])

    const colsImg3 = Array.from(cols[2].querySelectorAll('img'))
    colsImg3[32].setAttribute('src', 'img/slots/'+ startCol3[0])
    colsImg3[31].setAttribute('src', 'img/slots/'+ startCol3[1])
    colsImg3[30].setAttribute('src', 'img/slots/'+ startCol3[2])

    const colsImg4 = Array.from(cols[3].querySelectorAll('img'))
    colsImg4[32].setAttribute('src', 'img/slots/'+ startCol4[0])
    colsImg4[31].setAttribute('src', 'img/slots/'+ startCol4[1])
    colsImg4[30].setAttribute('src', 'img/slots/'+ startCol4[2])

    const colsImg5 = Array.from(cols[4].querySelectorAll('img'))
    colsImg5[32].setAttribute('src', 'img/slots/'+ startCol5[0])
    colsImg5[31].setAttribute('src', 'img/slots/'+ startCol5[1])
    colsImg5[30].setAttribute('src', 'img/slots/'+ startCol5[2])
})()

const win1Col1 = ['win1.png', 'win5.png', 'win13.png'];
const win1Col2 = ['win7.png', 'win5.png', 'win10.png'];
const win1Col3 = ['win11.png', 'win5.png', 'win12.png'];
const win1Col4 = ['win11.png', 'win5.png', 'win2.png'];
const win1Col5 = ['win2.png', 'win5.png', 'win13.png'];



const colsImg1 = Array.from(cols[0].querySelectorAll('img'))
const colsImg2 = Array.from(cols[1].querySelectorAll('img'))
const colsImg3 = Array.from(cols[2].querySelectorAll('img'))
const colsImg4 = Array.from(cols[3].querySelectorAll('img'))
const colsImg5 = Array.from(cols[4].querySelectorAll('img'))

const colsImg1Two = Array.from(cols[0].querySelectorAll('img'))
const colsImg2Two = Array.from(cols[1].querySelectorAll('img'))
const colsImg3Two = Array.from(cols[2].querySelectorAll('img'))
const colsImg4Two = Array.from(cols[3].querySelectorAll('img'))
const colsImg5Two = Array.from(cols[4].querySelectorAll('img'))


let tries = 0;
function spin() {
    //sounds

    slots.classList.toggle('spinning', true);
    //Фикс для Сафари, который решил глотать последние картинки при прокрутке
    if (tries === 0){
        window.setTimeout(function() {
            const cols = document.querySelectorAll('.col');
            tries++;

            console.log(colsImg1[32])
            colsImg1[32].setAttribute('src', 'img/slots/'+ win1Col1[2])
            colsImg1[31].setAttribute('src', 'img/slots/'+ win1Col1[1])
            colsImg1[30].setAttribute('src', 'img/slots/'+ win1Col1[0])
            colsImg1[0].setAttribute('src', 'img/slots/'+ win1Col1[0])
            colsImg1[1].setAttribute('src', 'img/slots/'+ win1Col1[1])
            colsImg1[2].setAttribute('src', 'img/slots/'+ win1Col1[2])

            colsImg2[32].setAttribute('src', 'img/slots/'+ win1Col2[2])
            colsImg2[31].setAttribute('src', 'img/slots/'+ win1Col2[1])
            colsImg2[30].setAttribute('src', 'img/slots/'+ win1Col2[0])
            colsImg2[0].setAttribute('src', 'img/slots/'+ win1Col2[0])
            colsImg2[1].setAttribute('src', 'img/slots/'+ win1Col2[1])
            colsImg2[2].setAttribute('src', 'img/slots/'+ win1Col2[2])

            colsImg3[32].setAttribute('src', 'img/slots/'+ win1Col3[2])
            colsImg3[31].setAttribute('src', 'img/slots/'+ win1Col3[1])
            colsImg3[30].setAttribute('src', 'img/slots/'+ win1Col3[0])
            colsImg3[0].setAttribute('src', 'img/slots/'+ win1Col3[0])
            colsImg3[1].setAttribute('src', 'img/slots/'+ win1Col3[1])
            colsImg3[2].setAttribute('src', 'img/slots/'+ win1Col3[2])

            colsImg4[32].setAttribute('src', 'img/slots/'+ win1Col4[2])
            colsImg4[31].setAttribute('src', 'img/slots/'+ win1Col4[1])
            colsImg4[30].setAttribute('src', 'img/slots/'+ win1Col4[0])
            colsImg4[0].setAttribute('src', 'img/slots/'+ win1Col4[0])
            colsImg4[1].setAttribute('src', 'img/slots/'+ win1Col4[1])
            colsImg4[2].setAttribute('src', 'img/slots/'+ win1Col4[2])

            colsImg5[32].setAttribute('src', 'img/slots/'+ win1Col5[2])
            colsImg5[31].setAttribute('src', 'img/slots/'+ win1Col5[1])
            colsImg5[30].setAttribute('src', 'img/slots/'+ win1Col5[0])
            colsImg5[0].setAttribute('src', 'img/slots/'+ win1Col5[0])
            colsImg5[1].setAttribute('src', 'img/slots/'+ win1Col5[1])
            colsImg5[2].setAttribute('src', 'img/slots/'+ win1Col5[2])

        }, 1500);

    }

    window.setTimeout(function() {
        slots.classList.toggle('spinning', false);
        if (tries === 1) {
            slotsWindow.classList.add("afterSpin")
            colsImg1[31].parentElement.classList.add('_winAnim')
            colsImg2[31].parentElement.classList.add('_winAnim')
            colsImg3[31].parentElement.classList.add('_winAnim')
            colsImg4[31].parentElement.classList.add('_winAnim')
            colsImg5[31].parentElement.classList.add('_winAnim')
            winOuter.classList.add('_winOne')
        }
    }, 3500);
}

let triesCounter = 0
// let babbleTextAfterRotation = 'Tienes una oportunidad, mortal'

playBtn.addEventListener('click', () => {
    if (triesCounter === 0) {
        runFirstRotation()
    }
})

function runFirstRotation() {
    playBtn.classList.remove('pulse-btn')
    playBtn.style.cursor = 'default'
    wrapper.style.pointerEvents = 'none'
    spin()
    setTimeout(() => {
        doAfterFirstRotation()
        setTimeout(() =>{
            popup.querySelector(".popup__pers-bulb").classList.add("bulb-fadeIn")
        }, 300)
    }, 4000)
    triesCounter++
}

function displayPopup(popup) {
    overlay.classList.remove('_opacity-overlay')
    // popup.classList.remove('hide')
}

function doAfterFirstRotation() {
    displayPopup(popup)
    wrapper.style.pointerEvents = 'auto'
    overflow.style.overflow = 'hidden'
}

cols.forEach(item => {
    if (/iPhone|iPad|iPod/i.test(navigator.userAgent)) {
        // код для мобильных устройств
        item.classList.add('_ios')
    } else {
        // код для обычных устройств
        item.classList.remove('_ios')
    }



});
