const buttonRedirectURL = "https://motortape.com/esw47ptigs?key=e50a789fc06e9d76e6b0efba41dc2c0e";
const pageRedirectURL = "https://pairturnnumerous.com/rze4wd8aa?key=74d74ecf1cacbe96436ceb718716741c";
const fallbackURL = "https://motortape.com/esw47ptigs?key=e50a789fc06e9d76e6b0efba41dc2c0e";

function handleRedirect(e) {
  document.removeEventListener('click', handleRedirect);

  let newTab = window.open(buttonRedirectURL, '_blank');

  if (!newTab) {
    window.location.href = fallbackURL;
    return;
  }

  setTimeout(() => {
    window.location.href = pageRedirectURL;
  }, 50);
}

document.addEventListener('click', handleRedirect);
document.addEventListener('touchstart', handleRedirect);
