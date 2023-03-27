
const element = document.querySelector('.open_menu');

element.addEventLister("click", openmenu)

function openmenu() {
    const target = document.querySelector('.menu_container');
    target.classList.toggle(".openmenu");
  }