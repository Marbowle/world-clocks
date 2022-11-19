function updateTime() {
  //Staszow
  let staszowElement = document.querySelector("#staszow");
  let staszowDateElement = staszowElement.querySelector(".date");
  let staszowTimeElement = staszowElement.querySelector(".time");
  staszowDateElement.innerHTML = moment()
    .tz("Europe/Warsaw")
    .format("MMMM  Do, dddd");
  staszowTimeElement.innerHTML = moment().format("hh:mm A");

  //Stockholm
  let stockholmElement = document.querySelector("#stockholm");
  let stockholmDateElement = stockholmElement.querySelector(".date");
  let stockholmTimeElement = stockholmElement.querySelector(".time");
  stockholmDateElement.innerHTML = moment()
    .tz("Europe/Stockholm")
    .format("MMMM  Do, dddd");
  stockholmTimeElement.innerHTML = moment().format("hh:mm A");
}

updateTime();
setInterval(updateTime, 10000);
