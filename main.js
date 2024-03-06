function numbtn(event){
    let button = event.target;
    let value = button.textContent;
    document.getElementById('display').textContent += value;
}


function calculate() {
    let input = document.getElementById('display').textContent;
    input = input.replace(/x/g, '*');
    let result = eval(input); 
    console.log(result);
    document.getElementById('display').textContent = result;
}

function allClear() {
    document.getElementById('display').textContent = '';
}

function clearLastInput() {
    let currentInput = document.getElementById('display').textContent;
    if (currentInput.length > 0) {
        // Remove the last character
        document.getElementById('display').textContent = currentInput.slice(0, -1);
    }
}