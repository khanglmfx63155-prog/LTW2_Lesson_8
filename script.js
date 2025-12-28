function date_time() {
  date = new Date();
  h = date.getHours();
  if (h < 10) {
    h = "0" + h;
  }
  m = date.getMinutes();
  if (m < 10) {
    m = "0" + m;
  }
  s = date.getSeconds();
  if (s < 10) {
    s = "0" + s;
  }

  time = h + ":" + m + ":" + s;
  console.log(time);
  document.getElementById("time").innerHTML = h + ":" + m + ":" + s;
  setTimeout(date_time, 500);
}
date_time();
