const bbutton = document.querySelector('#basket-button');
const modal = document.querySelector(".modal");
const close = document.querySelector(".close")
bbutton.addEventListener('click', toggleModal);
close.addEventListener('click', toggleModal);

   function toggleModal() {
       modal.classList.toggle("is_open")
   }

   new WOW().init();
