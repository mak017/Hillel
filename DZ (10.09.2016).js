// первое задание
min = function(a, b) {
  if (a>b) {
    return b;
  } else {
    return a;
  }
}
// второе задание
function pow(x, n) {
  result = x;
  for (i=1; i<n; i++) {
    result *= x;
  }
  return result;
}
var x = prompt("x", '');
var n = prompt("n", '');
if (n<1) {
  alert("Ведите цело число больше единицы");
} else {
  console.log(pow(x, n));
}
// третье задание
var calculator = {
  read: function() {
    this.c = +prompt("c", 0);
    this.d = +prompt("d", 0);
  },
  sum: function() {
    return this.c+this.d;
  },
  mul: function() {
    return this.c*this.d;
  }
}
calculator.read();
console.log( calculator.sum() );
console.log( calculator.mul() );
