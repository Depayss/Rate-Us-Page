

btn1.addEventListener(`click`, ()=>{
    btn1.classList.toggle(`bg`)
    btn2.classList.remove(`bg`)
    btn3.classList.remove(`bg`)
    btn4.classList.remove(`bg`)
    btn5.classList.remove(`bg`)
})

btn2.addEventListener(`click`, ()=>{
    btn2.classList.toggle(`bg`)
    btn1.classList.remove(`bg`)
    btn3.classList.remove(`bg`)
    btn4.classList.remove(`bg`)
    btn5.classList.remove(`bg`)
})

btn3.addEventListener(`click`, ()=>{
    btn3.classList.toggle(`bg`)
    btn2.classList.remove(`bg`)
    btn1.classList.remove(`bg`)
    btn4.classList.remove(`bg`)
    btn5.classList.remove(`bg`)
})

btn4.addEventListener(`click`, ()=>{
    btn4.classList.toggle(`bg`)
    btn2.classList.remove(`bg`)
    btn3.classList.remove(`bg`)
    btn1.classList.remove(`bg`)
    btn5.classList.remove(`bg`)
})

btn5.addEventListener(`click`, ()=>{
    btn5.classList.toggle(`bg`)
    btn2.classList.remove(`bg`)
    btn3.classList.remove(`bg`)
    btn4.classList.remove(`bg`)
    btn1.classList.remove(`bg`)
})


// submit btn


submitBtn.addEventListener(`click`, ()=>{
    window.location.href="https://twitter.com/home"
})