(function(root) {

  var arr = [];

  root.bidenCoords = root.bidenCoords || arr;

  document.querySelector(".image").addEventListener("click", function(event) {

    var offset = {
      x: event.offsetX,
      y: event.offsetY
    };

    var el = {
      width: this.getBoundingClientRect().width,
      height: this.getBoundingClientRect().height
    };

    var path = this.src,
        filename = path.split("/").pop(),
        nextFile = parseInt(filename.split(".")[0]) + 1 + ".jpg";

    getCoords(el, offset, filename);

    this.src = path.replace(filename, nextFile);

  });

  function getCoords(element, offset, filename) {

    var coords = {
      file: filename,
      xy: []
    };

    var x = offset.x / element.width,
        y = offset.y / element.height;

    coords.xy.push(x, y);

    root.bidenCoords.push(coords);

  }

})(this);
