const colors = ['lightblue','lightcoral','lightgreen','lightpink','lightyellow','green','aliceblue','red','navy','lightgray'];
const color = document.getElementById('colors');
const button = document.getElementById('click-btn');

button.addEventListener('click', function() {
    let random = getRandomNumber();

    document.body.style.backgroundColor = colors[random];
    color.textContent = colors[random];
    color.style.color = colors[random];
    // console.log(random);
});

function getRandomNumber() {
    return Math.floor(Math.random() * colors.length);
};