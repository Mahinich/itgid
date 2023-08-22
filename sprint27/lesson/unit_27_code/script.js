const p1 = new Promise(function(){
    // pending - ожидание
    // fulfilled - выполено
    // rejected - выполнено с ошибкой
});

// console.log(p1); 

const p2 = new Promise((resolve, reject) =>{
    fetch('https://gipofiz.ua')
    // fetch('https://api.itgid.info/api/5delay')
        .then(response => {
            // console.log(response);
            if(response.ok) resolve(response.json());
            else reject(response);
        })
        .catch(error => reject(error));
});
console.log(p2);
p2.then(f1,f2);

function f1(data) {
    console.log(p2);
    console.log('success');
    console.log(data);
}

function f2(data) {
    console.log(p2);
    console.log('problem');
    console.log(data);
}

// console.log(p2);
// console.log('================');

// цепочку промисов

// fetch('https://api.itgid.info/api/delay')
//     .then(response => {
//         return response.json();
//     })
//     .then(data => {
//         console.log(data);
//         return fetch('https://api.itgid.info/api/test')
//     })
//     .then(response => response.json())
//     .then(data => {
//         console.log(data);
//     });

// на практике - цепочка запросов

// const requestHeaders = new Headers();
// requestHeaders.append("apikey", APIKEY);

// fetch('https://api.itgid.info/api/27/random/random-number?min=1&max=10',{
//     headers: requestHeaders
// })
//     .then(response => response.json())
//     .then(data => {
//         console.log(data['random-number']);
//         return fetch('https://api.itgid.info/api/27/employee/read/' + data['random-number'],{
//             headers: requestHeaders
//         });
//     })
//     .then(response => response.json())
//     .then(data => {
//             console.log(data);
//     });

// PromiseAll - запросы


/* const promise_3 = new Promise((resolve, reject) => {
    fetch('https://api.itgid.info/api/delay')
    .then(data => resolve(data.json()));
});

const promise_4 = new Promise((resolve, reject) => {
    fetch('https://api.itgid.info/api/test')
    .then(data => resolve(data.json()));
});

Promise.all([promise_3, promise_4]).then(f3);

function f3(data){
    console.log(data);
} */