/* function f1() {
    // создаем объект xhr - объект запроса
    const xhr = new XMLHttpRequest();

    // задаем куда отправить запрос и его параметры
    xhr.open('GET', 'https://api.openweathermap.org/data/2.5/weather?id=703448&units=metric&APPID=034db5e22bb9d25ed45db79a77a3a4a1');

    // пишем обработчик ответа, когда наступит событие onload
    xhr.onload = function () {
        console.log(xhr.status);
        console.log(xhr.response);
        const data = JSON.parse(xhr.response);
        console.log(data);
        document.querySelector('.out-1').textContent = data.name;
    };

    // отправляем запрос
    xhr.send();
} */

// f1();

/* function f2() {
    // создаем объект xhr - объект запроса
    const xhr = new XMLHttpRequest();
    // задаем куда отправить запрос и его параметры
    xhr.open('GET', 'https://api.itgid.info/api/25/employee/read');

    // Добавляем авторизацию
    xhr.setRequestHeader('apikey', 'a7YIZbL10lRotUHp');

    // пишем обработчик ответа, когда наступит событие onload
    xhr.onload = function () {
        console.log(xhr.status);
        console.log(xhr.response);
        const data = JSON.parse(xhr.response);
        console.log(data);
    };

    // отправляем запрос
    xhr.send();
}

f2(); */

function f3() {
    // task 11
    const xhr = new XMLHttpRequest();
    xhr.open('POSt', 'https://api.itgid.info/api/25/random/generate-password');
    xhr.setRequestHeader('apikey', 'a7YIZbL10lRotUHp');

    // добавляем данные для отправки - Form Data
    const data = new FormData();
    data.append("length", 16);

    // пишем обработчик ответа, когда наступит событие onload
    xhr.onload = function () {
        console.log(xhr.status);
        // console.log(xhr.response);
        const data = JSON.parse(xhr.response);
        console.log(data);
    };

    // отправляем запрос
    xhr.send(data);
}

f3();