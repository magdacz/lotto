const btn = document.querySelector('button');
const output = document.querySelector('output');

function randomNumbers(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}

function showNumber() {
    const numbers = [];
    let random;
    
    for(let i = 0; i < 6; i++) {
        random = randomNumbers(1,49);
        
        while(numbers.indexOf(random) !== -1) {
            random = randomNumbers(1,49);
            console.log('powtórzyła się ' + random)
        }
        
        numbers.push(random)
    }
    
    output.value = numbers.join(', ')
}

btn.addEventListener('click', showNumber);
