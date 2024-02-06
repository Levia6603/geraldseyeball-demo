const eyeLeft = document.querySelector(".eye-left");
const eyeRight = document.querySelector(".eye-right");
const eyeBallLeft = document.querySelector(".eyeball-left");
const eyeBallRight = document.querySelector(".eyeball-right");

window.addEventListener("mousemove", (e) => {
  leftPosition =
    e.x > eyeLeft.getBoundingClientRect().right
      ? eyeLeft.getBoundingClientRect().right
      : e.x < eyeLeft.getBoundingClientRect().left + 8
      ? eyeLeft.getBoundingClientRect().left + 8
      : e.x;
  topPosition =
    e.y > eyeLeft.getBoundingClientRect().bottom
      ? eyeLeft.getBoundingClientRect().bottom
      : e.y < eyeLeft.getBoundingClientRect().top + 4
      ? eyeLeft.getBoundingClientRect().top + 4
      : e.y;
  eyeBallLeft.style = `left: ${leftPosition - 8}px; top: ${topPosition - 4}px;`;
  eyeBallRight.style = `left: ${leftPosition + 27}px; top: ${
    topPosition - 3
  }px;`;
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
