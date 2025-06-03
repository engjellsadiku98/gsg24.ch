function setCookie(name, value, days) {
  const expires = new Date(Date.now() + days * 864e5).toUTCString();
  document.cookie = `${name}=${value}; expires=${expires}; path=/`;
}

function getCookie(name) {
  return document.cookie.split('; ').reduce((r, v) => {
    const parts = v.split('=');
    return parts[0] === name ? decodeURIComponent(parts[1]) : r
  }, '');
}

function acceptAllCookies() {
  setCookie("cookiesAccepted", "all", 365);
  setCookie("analytics", "true", 365);
  setCookie("marketing", "true", 365);
  hideBanner();
}

function saveCookieSettings() {
  const analytics = document.getElementById("analyticsCookies").checked;
  const marketing = document.getElementById("marketingCookies").checked;
  setCookie("cookiesAccepted", "custom", 365);
  setCookie("analytics", analytics, 365);
  setCookie("marketing", marketing, 365);
  hideBanner();
}

function openSettings() {
  document.getElementById("cookie-settings").classList.remove("hidden");
}

function hideBanner() {
  document.getElementById("cookie-consent").classList.add("hidden");
}

window.onload = function () {
  if (!getCookie("cookiesAccepted")) {
    document.getElementById("cookie-consent").classList.remove("hidden");
  }
}