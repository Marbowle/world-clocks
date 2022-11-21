function updateTime() {
  //Staszow
  let staszowElement = document.querySelector("#staszow");
  if (staszowElement) {
    let staszowDateElement = staszowElement.querySelector(".date");
    let staszowTimeElement = staszowElement.querySelector(".time");
    staszowDateElement.innerHTML = moment()
      .tz("Europe/Warsaw")
      .format("MMMM  Do, dddd");
    staszowTimeElement.innerHTML = moment().format("hh:mm A");
  }

  //Stockholm
  let stockholmElement = document.querySelector("#stockholm");
  if (stockholmElement) {
    let stockholmDateElement = stockholmElement.querySelector(".date");
    let stockholmTimeElement = stockholmElement.querySelector(".time");
    stockholmDateElement.innerHTML = moment()
      .tz("Europe/Stockholm")
      .format("MMMM  Do, dddd");
    stockholmTimeElement.innerHTML = moment().format("hh:mm A");
  }
  //Paris
  let parisElement = document.querySelector("#paris");
  if (parisElement) {
    let parisDateElement = parisElement.querySelector(".date");
    let parisTimeElement = parisElement.querySelector(".time");
    parisDateElement.innerHTML = moment()
      .tz("Europe/Paris")
      .format("MMMM  Do, dddd");
    parisTimeElement.innerHTML = moment().format("hh:mm A");
  }
  //Bogota
  let bogotaElement = document.querySelector("#bogota");
  if (bogotaElement) {
    let bogotaDateElement = bogotaElement.querySelector(".date");
    let bogotaTimeElement = bogotaElement.querySelector(".time");
    bogotaDateElement.innerHTML = moment()
      .tz("America/Bogota")
      .format("MMMM  Do, dddd");
    bogotaTimeElement.innerHTML = moment().format("hh:mm A");
  }
  //Reykjaviki
  let reykjavikElement = document.querySelector("#reykjavik");
  if (reykjavikElement) {
    let reykjavikDateElement = reykjavikElement.querySelector(".date");
    let reykjavikTimeElement = reykjavikElement.querySelector(".time");
    reykjavikDateElement.innerHTML = moment()
      .tz("Atlantic/Reykjavik")
      .format("MMMM  Do, dddd");
    reykjavikTimeElement.innerHTML = moment().format("hh:mm A");
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
