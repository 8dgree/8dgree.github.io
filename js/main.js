(function() {

  var canvas = document.getElementById('koi');

  // resize the canvas to fill browser window dynamically
  window.addEventListener('resize', resizeCanvas, false);

  function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    /**
     * Drawings need to be inside this function otherwise they will be reset when 
     * the browser window is resized and the canvas will be cleared.
     */
    drawKoi();
  }
  resizeCanvas();

  function drawKoi() {
  }

})();
