function crear() {
  var elmnt = document.getElementById("ad");
  var cln = elmnt.cloneNode(true);
  var cl = document.getElementById("pporcent");
  var input = cl.getElementsByTagName("input");
  var cantidad = input.length;
  if (cantidad < 6) {
    document.getElementById("pporcent").appendChild(cln);
    document.getElementById("atd").style.visibility = "visible";
    if (cantidad == 5) {
      document.getElementById("adt").style.visibility = "hidden";
    }
  }
}
window.onload = function() {
  document.getElementById("apd").style.visibility = "hidden";
  document.getElementById("atd").style.visibility = "hidden";
};
function borrar() {
  var cln = document.getElementById("pporcent");
  var input = cln.getElementsByTagName("input");
  var cantidad = input.length;
  var elmnt = document.getElementById("ad");
  if (cantidad > 1) {
    elmnt.parentNode.removeChild(elmnt);
    document.getElementById("adt").style.visibility = "visible";
    if (cantidad == 2) {
      document.getElementById("atd").style.visibility = "hidden";
    }
  }
}

function crear1() {
  var elmnt = document.getElementById("porcent");
  var cln = elmnt.cloneNode(true);
  var cl = document.getElementById("inputs1");
  var divs = cl.getElementsByTagName("DIV");
  var cantidad = divs.length;
  if (cantidad < 15) {
    document.getElementById("inputs1").appendChild(cln);
    document.getElementById("apd").style.visibility = "visible";
    if (cantidad == 10) {
      document.getElementById("adp").style.visibility = "hidden";
    }
  }
}

function borrar1() {
  var cln = document.getElementById("inputs1");
  var divs = cln.getElementsByTagName("DIV");
  var cantidad = divs.length;
  var elmnt = document.getElementById("porcent");
  if (cantidad > 5) {
    elmnt.parentNode.removeChild(elmnt);
    document.getElementById("adp").style.visibility = "visible";
    if (cantidad < 15) {
      document.getElementById("apd").style.visibility = "hidden";
    }
  }
}
function deshabilitar() {
  var area = document.getElementById("porcentage");
  var input = document.getElementById("input1");
  var input1 = document.getElementById("ad");
  var input2 = document.getElementById("adt");
  var input3 = document.getElementById("atd");
  if (input.readOnly == false) {
    input.readOnly = true;
    input1.readOnly = true;
    input2.readOnly = true;
    input3.readOnly = true;
    area.className;
  } else {
    input.readOnly = false;
    input1.readOnly = false;
    input2.readOnly = false;
    input3.readOnly = false;
  }
}
function deshabilitar1() {
  var area = document.getElementById("percentChange");
  if (area.readOnly == false) {
    area.readOnly = true;
    area.style.color;
  } else {
    area.readOnly = false;
  }
}
