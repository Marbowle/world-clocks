function updateTime() {
  //Staszow
  let staszowElement = document.querySelector("#staszow");
  if (staszowElement) {
    let staszowDateElement = staszowElement.querySelector(".date");
    let staszowTimeElement = staszowElement.querySelector(".time");
    let staszowTimeZone = moment().tz("Europe/Warsaw");
    staszowDateElement.innerHTML = staszowTimeZone.format("MMMM  Do, dddd");
    staszowTimeElement.innerHTML = staszowTimeZone.format("hh:mm A");
  }

  //Stockholm
  let stockholmElement = document.querySelector("#stockholm");
  if (stockholmElement) {
    let stockholmDateElement = stockholmElement.querySelector(".date");
    let stockholmTimeElement = stockholmElement.querySelector(".time");
    let stockholmTimeZone = moment().tz("Europe/Stockholm");
    stockholmDateElement.innerHTML = stockholmTimeZone.format("MMMM  Do, dddd");
    stockholmTimeElement.innerHTML = stockholmTimeZone.format("hh:mm A");
  }
  //Paris
  let parisElement = document.querySelector("#paris");
  if (parisElement) {
    let parisDateElement = parisElement.querySelector(".date");
    let parisTimeElement = parisElement.querySelector(".time");
    let parisTimeZone = moment().tz("Europe/Paris");
    parisDateElement.innerHTML = parisTimeZone.format("MMMM  Do, dddd");
    parisTimeElement.innerHTML = parisTimeZone.format("hh:mm A");
  }
  //Bogota
  let bogotaElement = document.querySelector("#bogota");
  if (bogotaElement) {
    let bogotaDateElement = bogotaElement.querySelector(".date");
    let bogotaTimeElement = bogotaElement.querySelector(".time");
    let bogotaTimeZone = moment().tz("America/Bogota");
    bogotaDateElement.innerHTML = bogotaTimeZone.format("MMMM  Do, dddd");
    bogotaTimeElement.innerHTML = bogotaTimeZone.format("hh:mm A");
  }
  //Reykjaviki
  let reykjavikElement = document.querySelector("#reykjavik");
  if (reykjavikElement) {
    let reykjavikDateElement = reykjavikElement.querySelector(".date");
    let reykjavikTimeElement = reykjavikElement.querySelector(".time");
    let reykjavikTimeZone = moment().tz("Atlantic/Reykjavik");
    reykjavikDateElement.innerHTML = reykjavikTimeZone.format("MMMM  Do, dddd");
    reykjavikTimeElement.innerHTML = reykjavikTimeZone.format("hh:mm A");
  }
  //London
  let londonElement = document.querySelector("#london");
  if (londonElement) {
    let londonDateElement = londonElement.querySelector(".date");
    let londonTimeElement = londonElement.querySelector(".time");
    let londonTimeZone = moment().tz("Europe/London");
    londonDateElement.innerHTML = londonTimeZone.format("MMMM  Do, dddd");
    londonTimeElement.innerHTML = londonTimeZone.format("hh:mm A");
  }
}
function updateCity(event) {
  let cityTimeZone = event.target.value;
  if (cityTimeZone === "current") {
    cityTimeZone = moment.tz.guess();
  }
  let cityName = cityTimeZone.replace("_", " ").split("/")[1];
  let cityTime = moment().tz(cityTimeZone);
  let citiesElement = document.querySelector("#cities");
  citiesElement.innerHTML = `
  <div class="city">
          <div>
            <h2>${cityName}</h2>
            <div class="date">${cityTime.format("MMMM  Do, dddd")}</div>
          </div>
          <div class="time">${cityTime.format("hh:mm A")}</div>
        </div>
     <a href="/">All cities</a>
  `;
}

updateTime();
setInterval(updateTime, 10000);

let citiesSelectElement = document.querySelector("#city");
citiesSelectElement.addEventListener("change", updateCity);
