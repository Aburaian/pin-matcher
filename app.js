function getPin() {
    const pin = Math.round(Math.random() * 10000);
    const pinString = pin + "";
    if (pinString.length == 4) {
        return pin;
    } else {
        return getPin();
    }
}

function generatePin() {
    const pin = getPin()
    document.getElementById("numberInput").value = pin;
}

function calculationButton(number) {
    document.getElementById("added-number").value += number;
}

function numberDeled() {
    document.getElementById("added-number").value = "";
}

function submitButton() {
    const pin = document.getElementById("numberInput").value;
    const numberInput = document.getElementById("added-number").value;
    if (pin == numberInput) {
        document.getElementById("pin-Match").style.display = "block";
        document.getElementById("pin-notMatch").style.display = "none";
    } else {
        document.getElementById("pin-notMatch").style.display = "block";
        document.getElementById("pin-Match").style.display = "none";
    }
}