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