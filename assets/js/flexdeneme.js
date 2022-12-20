let sayi1;
let sayi2;
let islem;

const ekranEL = document.querySelector(".baslik");

function set(num) {
  ekranEL.innerText += num;
  ekranEL.innerText = Number(ekranEL.innerText);
}
function topla() {
  sayi1 = Number(ekranEL.innerText);
  ekranEL.innerText = "";
  islem = "+";
}
function cikar() {
  sayi1 = Number(ekranEL.innerText);
  ekranEL.innerText = "";
  islem = "-";
}
function carp() {
  sayi1 = Number(ekranEL.innerText);
  ekranEL.innerText = "";
  islem = "*";
}
function bol() {
  sayi1 = Number(ekranEL.innerText);
  ekranEL.innerText = "";
  islem = "/";
}
function mod() {
  sayi1 = Number(ekranEL.innerText);
  ekranEL.innerText = "";
  islem = "%";
}
function isaret() {
  ekranEL.innerText = Number(ekranEL.innerText) * -1;
}
function nokta() {
  if (ekranEL.innerText.indexOf(".") < 0) {
    ekranEL.innerText = ekranEL.innerText + ".";
  }
}
function ust() {
  sayi1 = Number(ekranEL.innerText);
  ekranEL.innerText = "";
  islem = "^";
}
function sil() {
  ekranEL.innerText = "0";
  sayi1 = 0;
  sayi2 = 0;
  isaret = 0;
}
function hesapla() {
  sayi2 = Number(ekranEL.innerText);
  switch (true) {
    case islem == "+":
      ekranEL.innerText = sayi1 + sayi2;
      break;
    case islem == "-":
      ekranEL.innerText = sayi1 - sayi2;
      break;
    case islem == "*":
      ekranEL.innerText = sayi1 * sayi2;
      break;
    case islem == "/":
      ekranEL.innerText = sayi2 == 0 ? "0'a bolunmez" : sayi1 / sayi2;
      break;
    case islem == "%":
      ekranEL.innerText = sayi2 == 0 ? "0'a bolunmez" : sayi1 % sayi2;
      break;
    case islem == "^":
      ekranEL.innerText = sayi1 ** sayi2;
      break;
  }
}
