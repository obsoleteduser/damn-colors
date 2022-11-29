const changer = document.querySelector('.generate')
const input = document.querySelector('input')
const hexChanger = document.querySelector('.genhex')

changer.addEventListener('click', ()=>{
    let R  = Math.floor(Math.random()*255)
    let G  = Math.floor(Math.random()*255)
    let B  = Math.floor(Math.random()*255)
    document.body.style.backgroundColor = `rgb(${R}, ${G}, ${B})`
    console.log(R)
    input.value = `R: ${R} G: ${G} B: ${B}`
})

hexChanger.addEventListener('click', ()=>{
    let color = Math.floor((Math.random()*16777216)).toString(16)
    document.body.style.backgroundColor = `#${color}`
    input.value = `#${color}`
})