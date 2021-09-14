function test() {

    const boxes = document.querySelectorAll('.box')

    const randomNum1 = Math.floor(Math.random() * 2)
    const randomNum2 = Math.floor(Math.random() * 4)
    const randomNum3 = Math.floor(Math.random() * 5)

    boxes.forEach( (box, i) => { 
        boxes[randomNum1].classList.add('blue')
        boxes[randomNum2].classList.add('blue')
        boxes[randomNum3].classList.add('blue')

        box.addEventListener('click', () => {
            box.classList.toggle('active')
        })  
    })
}
test()


const btn = document.querySelector('.btn')

btn.addEventListener('click', () => {

    let newArr = []

    const activeBoxes = document.querySelectorAll('.active')
        activeBoxes.forEach( box => {
           if (box.classList.contains('blue')) {
               newArr.push(box)
           } 
         
    })

    if(activeBoxes.length !== newArr.length) {
        alert('Не только синие')
        activeBoxes.forEach(item => item.classList.remove('active'))
    } else {
        alert('Только синие')
        activeBoxes.forEach(item => item.classList.remove('active'))
    }
})

