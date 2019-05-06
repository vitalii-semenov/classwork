import data from './Rate.js';

async function getCurrensy() {
    let response =  await fetch('Carrensy.json')
    let parse = await response.json();
    return parse;
}

document.querySelector('body').innerHTML = `
<table>
    <tbody>
    </tbody>
</table>
`;
let tbody = document.querySelector('tbody');
getCurrensy()
    .then(parse => {
        parse.map(elem => {
            tbody.innerHTML += `
                <tr>
                    <td>${elem}</td>
                    <td><button onclick='document.querySelector("#${elem}").innerHTML = "${data(elem)}" '>EXCHANGE</button></td>
                    <td id='${elem}'></td>
                </tr>
            `
        })
    })