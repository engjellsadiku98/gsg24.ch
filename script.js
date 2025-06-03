function setCookie(name, value, days) {
    const d = new Date();
    d.setTime(d.getTime() + (days*24*60*60*1000));
    const expires = "expires=" + d.toUTCString();
    document.cookie = name + "=" + value + ";" + expires + ";path=/";
  }

  function getCookie(name) {
    const cname = name + "=";
    const ca = document.cookie.split(';');
    for(let i = 0; i < ca.length; i++) {
      let c = ca[i].trim();
      if (c.indexOf(cname) == 0) return c.substring(cname.length, c.length);
    }
    return "";
  }

  function acceptCookies() {
    setCookie("cookiesAccepted", "yes", 365);
    document.getElementById("cookie-banner").style.display = "none";
  }

  window.onload = function() {
    if (!getCookie("cookiesAccepted")) {
      document.getElementById("cookie-banner").style.display = "block";
    }
  }