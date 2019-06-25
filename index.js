/*Writing into an HTML element, using innerHTML.
Writing into the HTML output using document.write().
Writing into an alert box, using window.alert().
Writing into the browser console, using console.log()*/

function firstfunc() {
  document.getElementById("demo").innerHTML = Date();
}
/*var ch = ["issama","demb","elefko","e","fe"];
console.log(ch.slice(1,3));

var a = [1,"0",7,0,1];
a.forEach(myf);
function myf(element) {
    console.log(element==1) ;
}*/
function test() {
  var msg, x;
  msg = doocument.getElementById("demo");
  msg.innerHTML = "";
  x = document.getElementById("in").value;
  try {
    if (x == "") throw "empty";
    if (isNaN(x)) throw "thats not a number ";
  } catch (error) {
    msg.innerHTML = "input is " + error;
  }
}

/*$("#fadein").click(function() {
  $("#para").toggle(1000);
});*/

$(".btn1").click(function() {
  $(".box").animate({
    left: 100,
    height: "30px",
    width: "30px",
    opacity: "0.5"
  });
});

$(".btn2").click(function() {
  $(".box").animate({
    left: 0,
    height: "50px",
    width: "50px",
    opacity: "1"
  });
});

$(".btn3").click(function() {
  var box = $(".box");
  box.animate({ left: 200 });
  box.animate({ bottom: 200 });
  box.animate({ left: 0 });
  box.animate({ bottom: 0 });
});
