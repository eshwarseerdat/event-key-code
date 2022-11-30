const keyDiv = document.querySelector("#key");
const codeDiv = document.querySelector("#code");
const keyCodeDiv = document.querySelector("#key-code");

window.addEventListener("keydown", (e) => {
  const { code, key, keyCode } = e;
  keyDiv.innerText = code === "Space" ? "Space" : key.toUpperCase();
  codeDiv.innerText = code;
  keyCodeDiv.innerText = keyCode;
});
