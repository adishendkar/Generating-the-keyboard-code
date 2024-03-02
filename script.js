window.addEventListener("keydown", (e) => {
  document.getElementById(
    "result"
  ).innerHTML = `The key pressed is <span>${e.key} </span><br><span> ${e.keyCode} </span>`;
});
