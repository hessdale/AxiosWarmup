let advice_button = document.querySelector(`#advice_button`);

let body_html = document.querySelector(`body`);

let advice = document.querySelector(`article`);

function successFunction(response) {
    advice.innerHTML = `<h1>${response.data.slip.advice}</h1>`
};
function failureFunction(response) {
    body_html.insertAdjacentHTML(`afterend`, `<h1>error</h1>`);
};

function fetchadvice(details) {
    axios.request({
        url: `https://api.adviceslip.com/advice`
    }).then(successFunction).catch(failureFunction);
};
advice_button.addEventListener(`click`, fetchadvice);

let dice_bear = document.querySelector(`#dice_bear`);

let avatar = document.querySelector(`#avatar`);

function successFunction1(response) {
    avatar.innerHTML = `<svg>${response.data.svg}</svg>`
};
function failureFunction1(response) {
    body_html.insertAdjacentHTML(`afterend`, `<h1>error</h1>`);
};

function createavatar(details) {
    axios.request({
        url: `https://api.dicebear.com/6.x/pixel-art/json`
    }).then(successFunction1).catch(failureFunction1);
};
dice_bear.addEventListener(`click`, createavatar);

let random_button = document.querySelector(`#random_button`);
let random_info = document.querySelector(`#random_data`);

function successFunction2(response) {
    random_info.innerHTML = `<h1>${response.data[0]}</h1><p>${response.data[0]}</p><p>${response.data[0]}</p>`
};
function failureFunction2(response) {
    random_info.insertAdjacentHTML(`afterend`, `<h1>error</h1>`);
};

function randominfo(details) {
    axios.request({
        url: `https://random-data-api.com/api/v2/users?size=10&response_type=json`
    }).then(successFunction2).catch(failureFunction2);
};
random_button.addEventListener(`click`, randominfo);
