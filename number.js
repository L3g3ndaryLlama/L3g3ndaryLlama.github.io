window.onload = function(){
  var obj = document.getElementById("numberToCount");
  var current = parseInt(obj.innerHTML);

  setInterval(function(){
    if(current<=100)
    {
      obj.innerHTML = current++ + "%";
    }
  }, 80);
}