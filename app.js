const navToggle = document.querySelector('.nav-toggle');
const links = document.querySelector('.links');

navToggle.addEventListener('click', function () {
    links.classList.toggle("show-links");
  //  below is another way to right the one line code written above.
//if(links.classList.contains('show-links')) {
  //  links.classList.remove('show-links')
//} else {
  //  links.classList.add("show-links");}

})

