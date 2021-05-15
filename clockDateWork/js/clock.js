let screenName = prompt("Lütfen İsminizi Giriniz : ");
document.getElementById("name").innerHTML = screenName;
function showTime() {
  var date = new Date();
  var clock = date.getHours();
  var minute = date.getMinutes();
  var second = date.getSeconds();
  var day = date.getDay();

  if (day == 1) {
    day = "Pazartesi";
  } else if (day == 2) {
    day = "Salı";
  } else if (day == 3) {
    day = "Çarşamba";
  } else if (day == 4) {
    day = "Perşembe";
  } else if (day == 5) {
    day = "Cuma";
  } else if (day == 6) {
    day = "Cumartesi";
  } else if (day == 7) {
    day = "Pazar";
  }

  clock = clock < 10 ? "0" + clock : clock;
  minute = minute < 10 ? "0" + minute : minute;
  second = second < 10 ? "0" + second : second;

  var time = clock + ":" + minute + ":" + second + " " + day;
  document.getElementById("myClock").innerText = time;
  document.getElementById("myClock").textContent = time;

  setTimeout(showTime, 1000);
}
showTime();
