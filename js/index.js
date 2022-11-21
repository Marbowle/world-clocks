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
}
function updateCity(event) {
  let cityTimeZone = event.target.value;
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
  `;
}

updateTime();
setInterval(updateTime, 10000);

let citiesSelectElement = document.querySelector("#city");
citiesSelectElement.addEventListener("change", updateCity);
