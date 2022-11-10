function navToggle() {
  let siteNav = document.getElementById ('site-nav');
  let trigram = document.getElementById ('trigram');
  if (siteNav.getElementsByClassName === 'nav-wrap') {
    siteNav.classList.add ('mobile');
    trigram.classList.add ('tri-mobile');
  } else {
    siteNav.classList = 'nav-wrap';
    trigram.classList = 'nav-link';
  }
}
document.querySelectorAll('.open-modal').forEach(openBtn => {
  openBtn.addEventListener('click', event => {
    let cardContent = event.target.previousElementSibling;
    let modalContent = document.getElementById('modal-wrap');
    modalContent.appendChild(cardContent.cloneNode(true));
    modalContent.classList.add('show');
  })
});
document.getElementById('modal-wrap').addEventListener('click', event => {
  let modalContent = document.getElementById('modal-wrap');
  let cardContent = modalContent.firstElementChild;
  if (modalContent.className === 'show') {
    modalContent.innerHTML = '';
    modalContent.classList.remove('show');
    event.preventDefault();
    console.log(cardContent);
    return false;
  }
});