const eyeLeft = document.querySelector(".eye-left");
const eyeRight = document.querySelector(".eye-right");
const eyeBallLeft = document.querySelector(".eyeball-left");
const eyeBallRight = document.querySelector(".eyeball-right");

window.addEventListener("mousemove", (e) => {
  eyesPosition(e, eyeLeft, eyeBallLeft);
  eyesPosition(e, eyeRight, eyeBallRight);
});
function eyesPosition(mouse, eye, eyeball) {
  leftPosition =
    mouse.x > eye.getBoundingClientRect().right
      ? eye.getBoundingClientRect().right
      : mouse.x < eye.getBoundingClientRect().left + 8
      ? eye.getBoundingClientRect().left + 8
      : mouse.x;
  topPosition =
    mouse.y > eye.getBoundingClientRect().bottom
      ? eye.getBoundingClientRect().bottom
      : mouse.y < eye.getBoundingClientRect().top + 4
      ? eye.getBoundingClientRect().top + 4
      : mouse.y;
  eyeball.style = `left: ${leftPosition - 8}px; top: ${topPosition - 4}px;`;
}
