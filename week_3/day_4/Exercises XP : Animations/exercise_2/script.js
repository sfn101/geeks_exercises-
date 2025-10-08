function myMove() {
  const animate = document.getElementById('animate');
  let pos = 0;

  const interval = setInterval(frame, 1);

  function frame() {
    if (pos >= 350) {
      clearInterval(interval);
    } else {
      pos++;
      animate.style.left = pos + 'px';
    }
  }
}
