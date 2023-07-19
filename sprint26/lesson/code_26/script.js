const param = {
    "url": "https://api.openweathermap.org/data/2.5/",
    "appid": "b348f775b55e41396a34ee57fe386727",
    "cityId": 2643743
}

async function getWeather() {
    let a = await fetch(`${param.url}weather?id=${param['cityId']}&units=metric&APPID=${param.appid}`);

    console.log(a);
    const result = await a.json();
    console.log(result);
    console.log(1);

}

// getWeather();

async function f1() {
    // создаем объект заголовков
    const requestHeaders = new Headers();
    requestHeaders.append('apikey', APIKEY);


    const res = await fetch(URL + '/api/26/employee/read?id=3', {
        method: 'GET',
        headers: requestHeaders
    });

    if (!res.ok) {
        const message = 'Error: ' + res.status;
        throw new Error(message);
    }

    console.log(res);
    const result = await res.json();
    console.log(result);
}

f1();

async function f2() {
    const requestHeaders = new Headers();
    requestHeaders.append('apikey', APIKEY);

    const formData = new FormData();
    formData.append('length', 4);
    formData.append('symbols', 1);

    const res = await fetch(URL + '/api/26/random/generate-password', {
        method: 'POST',
        headers: requestHeaders,
        body: formData
    });

    console.log(res);

    const result = await res.json();
    console.log(result);
}

// f2();