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
  updateTheProgress()
})

//Adding funcionality to the previous button
prev.addEventListener('click', ()=>{
  currentCircleActive--;
  if(currentCircleActive < 1){
    currentCircleActive = 1;
  }
  updateTheProgress()
})

//We will color the progress bar and the number circles
function updateTheProgress(){
  // giving color to the active circles
  circles.forEach((circle, index) => {
    if(index < currentCircleActive) {
      circle.classList.add('active')
    } else {
      circle.classList.remove('active')
    }
  })

  const actives = document.querySelectorAll('.active')

  //We use the width attribute to increase or deacrese the progress bar
  progressBar.style.width = (actives.length - 1)/ (circles.length - 1 ) * 100 + '%'

  //Manage the behaviour of the buttons depending on the progress
  if(currentCircleActive === 1){
    prev.disabled = true
  } else if(currentCircleActive === circles.length){
    next.disabled = true
  }
  else{
    prev.disabled = false
    next.disabled = false
  }
}