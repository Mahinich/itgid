let out = document.querySelector('.out');
console.log(out);

// for (let i = 0; i < 5; i++) {
//     // i= 1
//     for (let k = 0; k < 10; k++) {
//         // k = 0
//         out.innerHTML += '*';
//     }
//     out.innerHTML += '<br>';
// }

for (let i = 1; i < 10; i++) {
    for (let k = 1; k < 10; k++) {
        out.innerHTML += `${i}*${k}=${k * i}<br>`;
    }
    out.innerHTML += '<hr>';
}