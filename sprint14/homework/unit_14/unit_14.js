const param = {
  "url": "https://api.openweathermap.org/data/2.5/",
  "appid": "034db5e22bb9d25ed45db79a77a3a4a1"
}

const moreCities = {
  703448: 'Kyiv',
  2643741: 'City of London',
  3117735: 'Madrid',
  1816670: 'Beijing',
  2172517: 'Canberra',
  1261481: 'New Delhi',
}

const select = document.createElement('select');
select.classList.add('cities');

document.querySelector('.out').before(select);

for (let key in moreCities) {
  let newCity = document.createElement('option');
  newCity.setAttribute(`id`, `${moreCities[key]}`);
  newCity.setAttribute('value', `${key}`);
  newCity.textContent = `${moreCities[key]}`;
  document.querySelector('.cities').append(newCity);
}

function showWeather(data) {
  console.log(data);

  document.querySelector('.descr').innerHTML = `${data.weather[0].description}`;
  document.querySelector('.temp').innerHTML = `${data.main.feels_like}&deg;`;
  document.querySelector('.wind').innerHTML = `Wind — ${data.wind.speed} m/s, ${data.wind.deg}&deg;`
  document.querySelector('.humidity').innerHTML = `Humidity — ${data.main.humidity}%`;
  document.querySelector('.pressure').innerHTML = `Pressure — ${data.main.pressure} mmHg`;
  document.querySelector('.city-name').innerHTML = `${data.name}`;
  document.querySelector('.icon').innerHTML = `<img src="https://openweathermap.org/img/wn/${data.weather[0]['icon']}@2x.png">`;
}

function getWeather() {
  const cityId = document.querySelector('.cities').value;

  fetch(`${param.url}weather?id=${cityId}&units=metric&APPID=${param.appid}`)
    .then(weather => {
      return weather.json();
    })
    .then(showWeather);
}

getWeather();

document.querySelector('.cities').onchange = getWeather;