// select hamburger
        const hamburger = document.querySelector('.hamburger')
        // select nav-menu
        const navMenu = document.querySelector('.nav-menu')
        // add event listener
        hamburger.addEventListener('click', mobileMenu)
        // navmenu function
            //toggle active
            //toggle active
        function mobileMenu() {
            hamburger.classList.toggle('active')
            navMenu.classList.toggle('active')

        }
// script for date and time functionality

setInterval(() => {
    let date = new Date();
    document.getElementById("dateandtime").innerHTML = date;            
}, 1000);



// validation functionality

const validate = () => {
    let name = document.querySelector("#name").value;
    if (name[0] === name[0].toUpperCase() && /^[^\d\s]*$/.test(name) ) {
      return true;
    } else if(!(name[0] === name[0].toUpperCase())) {
      alert("Enter First letter capital of your name.");
      return false;
    }else if(!(/^[^\d\s]*$/.test(name))){
      alert("You have to enter name not a number")
      return false
    }
  };
//   typeof name !== 'number'