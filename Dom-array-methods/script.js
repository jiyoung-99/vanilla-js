const main = document.getElementById('main');
const addUserBtn = document.getElementById('add-user');
const doubleBtn = document.getElementById('double');
const showMillionairesBtn = document.getElementById('show-millionaires');
const sortBtn = document.getElementById('sort');
const calculateWealthBtn = document.getElementById('calculate-wealth');

let data = [];

getRandomUser();
getRandomUser();
getRandomUser();

// Fetch random user and add money
async function getRandomUser() {
    const res = await fetch('https://randomuser.me/api');
                    // .then(res => res.json())
                    // .then(data => )
    const data = await res.json();

    const user = data.results[0];

    const newUser = {
        name: `${user.name.first} ${user.name.last}`,
        money: Math.floor(Math.random() * 10000000)

    };
    console.log(newUser);
    addData(newUser);
}

function addData(obj) {
    data.push(obj);

    updateDOM();
}

function updateDOM(providedData = data) {

    main.innerHTML = '<h2><strong>Person</strong>wealth</h2>'

    providedData.forEach(item => {
        const element = document.createElement('div');
        element.classList.add('person');
        element.innerHTML = `<strong>${item.name}</strong> ${item.money}`
        main.appendChild(element)
    });
}

//Form number of money
