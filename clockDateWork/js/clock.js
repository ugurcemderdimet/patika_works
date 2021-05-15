let screenName = prompt("Lütfen İsminizi Giriniz : ");
document.getElementById("name").innerHTML = screenName;
function showTime() {
  var gun = new Date();
  var saat = gun.getHours();
  var dakika = gun.getMinutes();
  var saniye = gun.getSeconds();
  var session = gun.getDay();

  if (session == 1) {
    session = "Pazartesi";
  } else if (session == 2) {
    session = "Salı";
  } else if (session == 3) {
    session = "Çarşamba";
  } else if (session == 4) {
    session = "Perşembe";
  } else if (session == 5) {
    session = "Cuma";
  } else if (session == 6) {
    session = "Cumartesi";
  } else if (session == 7) {
    session = "Pazar";
  }

  saat = saat < 10 ? "0" + saat : saat;
  dakika = dakika < 10 ? "0" + dakika : dakika;
  saniye = saniye < 10 ? "0" + saniye : saniye;

  var time = saat + ":" + dakika + ":" + saniye + " " + session;
  document.getElementById("myClock").innerText = time;
  document.getElementById("myClock").textContent = time;

  setTimeout(showTime, 1000);
}
showTime();
