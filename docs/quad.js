//find discriminant
function findd() {
  var a = document.getElementById('a_place').value;
  var b = document.getElementById('b_place').value;
  var c = document.getElementById('c_place').value;
  var result = document.getElementById('result');
  var err = document.getElementById('err');
  if (a != 0) {
    var d = ((b*b) - (4*a*c));
  //give result
  if (d > 0) {
    result.innerHTML = "D = " + d + " [Real & Distinct roots]";
  } else if (d < 0) {
    result.innerHTML = "D = " + d + " [No real roots]";
  } else {
    result.innerHTML = "D = " + d + " [Real & Equal roots]";
  }
}
  else {
    err.innerHTML = "Oops! a cannot be zero";
    result.innerHTML = "ERROR";
    setTimeout(function() {
      err.innerHTML = "";
      result.innerHTML = "GET_RESULT";
    }, 1500);
  }
}