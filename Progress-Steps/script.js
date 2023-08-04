const progressBar = document.getElementById('progress')
const prev = document.getElementById('prev')
const next = document.getElementById('next')
const circles = document.querySelectorAll('.circle')

let currentCircleActive = 1

//Adding functionality to the next button
next.addEventListener('click', ()=>{
  currentCircleActive++;

  if(currentCircleActive > circles.length){
    currentCircleActive = circles.length
  }
  update()
})

//Adding funcionality to the previous button
prev.addEventListener('click', ()=>{
  currentCircleActive--;
  if(currentCircleActive < 1){
    currentCircleActive = 1;
  }
  update()
})

//We will color the progress bar and the number circles
function update(){
  circles.forEach((circle, index) => {
    if(index < currentCircleActive) {
      circle.classList.add('active')
    } else {
      circle.classList.remove('active')
    }
  })
}