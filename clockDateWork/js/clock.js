let screenName = prompt("Lütfen İsminizi Giriniz : ");
document.getElementById("name").innerHTML = screenName;
function showTime() {
  var date = new Date();
  var clock = date.getHours();
  var minute = date.getMinutes();
  var second = date.getSeconds();
  var day = date.getDay();
  var currentDay = "";

  switch (day) {
    case 1:
      currentDay = "Pazartesi";
      break;
    case 2:
      currentDay = "Salı";
      break;
    case 3:
      currentDay = "Çarşamba";
      break;
    case 4:
      currentDay = "Perşembe";
      break;
    case 5:
      currentDay = "Cuma";
      break;
    case 6:
      currentDay = "Cumartesi";
      break;
    case 7:
      currentDay = "Pazar";
      break;
    default:
      currentDay = "error";
      break;
  }

  clock = clock < 10 ? "0" + clock : clock;
  minute = minute < 10 ? "0" + minute : minute;
  second = second < 10 ? "0" + second : second;

  var time = clock + ":" + minute + ":" + second + " " + currentDay;
  document.getElementById("myClock").innerText = time;
  document.getElementById("myClock").textContent = time;

  setTimeout(showTime, 1000);
}
showTime();
