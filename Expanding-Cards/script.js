//We select all our panels
const panels = document.querySelectorAll('.panel')

panels.forEach(panel => {
  // Adding a lisener for click, and then create a function for that event
  panel.addEventListener('click', () => {
    removeActiveClasses()
    panel.classList.add('active')
  })
})

function removeActiveClasses(){
  panels.forEach(panel => {
    panel.classList.remove('active')
  })
}
