const startBtn = document.querySelector('#start')
const screens = document.querySelectorAll('.screen')
const timeList = document.querySelector('#time-list')
let time = 0
let score = 0
const timeEl = document.querySelector('#time')
const board = document.querySelector('#board')
const circleClasses = ['circle', 'circle1', 'circle2', 'circle3']

startBtn.addEventListener('click', (event) => {
    event.preventDefault()
    screens[0].classList.add('up')
})

timeList.addEventListener('click', event => {
    if (event.target.classList.contains('time-btn')) {
        time = parseInt(event.target.getAttribute('data-time'))
        screens[1].classList.add('up')
        startGame()
    }
})

// board.addEventListener('click', event => {
//     if (event.target.classList.contains('circle')) {
//         score++
//         event.target.remove()
//         createRandomCircle()
//     }
// })

board.addEventListener('click', event => {
    if (event.target.classList.contains('circle')) {
        score++
        event.target.remove()
        createRandomCircle()
    }
})

board.addEventListener('click', event => {
    if (event.target.classList.contains('circle1')) {
        score++
        event.target.remove()
        createRandomCircle()
    }
})

board.addEventListener('click', event => {
    if (event.target.classList.contains('circle2')) {
        score++
        event.target.remove()
        createRandomCircle()
    }
})

board.addEventListener('click', event => {
    if (event.target.classList.contains('circle3')) {
        score++
        event.target.remove()
        createRandomCircle()
    }
})

function startGame() {
    setInterval(decreaseTime, 1000)
    createRandomCircle()
    setTime(time)
}

function decreaseTime() {
    if (time === 0) {
        finishGame()
    }
    else {
        let current = --time
        if (current < 10) {
            current = `0${current}`
        }
        setTime(current)
    }

}

function setTime(value) {
    timeEl.innerHTML = `00:${value}`
}

function finishGame() {
    timeEl.parentNode.classList.add('hide')
    board.innerHTML = `<h1>Счет: <span class="primary">${score}</span></h1>`
}

function createRandomCircle () {
    const circle = document.createElement('div')
    const size = getRandomNumber(10, 60)
    const {width, height} = board.getBoundingClientRect()

    const x = getRandomNumber(0, width - size)
    const y = getRandomNumber(0, height - size)
    // circle.classList.add('circle')
    const randomCircleNumber = Math.floor(Math.random() * circleClasses.length)
    const randomCircleClass = circleClasses[randomCircleNumber]
    circle.classList.add(randomCircleClass)

    circle.style.width = `${size}px`
    circle.style.height = `${size}px`
    circle.style.top = `${y}px`
    circle.style.left = `${x}px`

            board.append(circle)
}

function getRandomNumber(min, max) {
    return Math.round(Math.random() * (max - min) + min)
}

//Hack the Game, Not worked, in developing process
// function winTheGame () {
//     function kill() {
//         const circle = document.querySelector('.circle' || '.circle1' || '.circle2' || '.circle3')
//         if (circle) {
//             circle.click()
//         }
//     }
//     setInterval(kill, 40)
// }

// function winTheGame () {
//     function kill() {
//         for (let i = 0; i < 10000; i++) {
//             const circle = document.querySelector('.circle' || '.circle1' || '.circle2' || '.circle3')
//             if (circle) {
//                 circle.click()
//             }
//         }
//
//     }
//     setInterval(kill, 40)
// }