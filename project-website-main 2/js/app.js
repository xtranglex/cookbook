const f = document.getElementById("form");
const q = document.getElementById("query");
const google = "https://www.google.com/search?q=";
// const site = "pagedart.com";

function submitted(event) {
  event.preventDefault();
  const url = google + q.value;
  const win = window.open(url, "_blank");
  win.focus();
}

f.addEventListener("submit", submitted);

f.addEventListener("submit", submitted);

document.addEventListener("scroll", function () {
  return scrollFunction();
});

function scrollFunction() {
  if (window.scrollY > 20) {
    document.getElementById("go-top").style.display = "block";
  } else {
    document.getElementById("go-top").style.display = "none";
  }
}

function topFunction() {
  window.scrollTo(0, 0);
}
