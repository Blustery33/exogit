

  window.addEventListener("DOMContentLoaded", (event) => {  
    
    const element = document.querySelector('.open_menu');
    function openmenu() {
        const target = document.querySelector('.menu_container');
        target.classList.toggle("openmenu");
    }  
    element.addEventListener("click", openmenu);
    


});
