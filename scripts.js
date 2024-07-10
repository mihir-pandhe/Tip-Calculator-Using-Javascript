function calculateTip() {
    const billAmount = parseFloat(document.getElementById('billAmount').value);
    const tipPercent = parseFloat(document.getElementById('tipPercent').value);
    const numPeople = parseFloat(document.getElementById('numPeople').value);

    if (isNaN(billAmount) || isNaN(tipPercent) || isNaN(numPeople) || billAmount <= 0 || tipPercent < 0 || numPeople <= 0) {
        document.getElementById('result').textContent = "Please enter valid values.";
        return;
    }

    const tipAmount = (billAmount * tipPercent) / 100;
    const totalAmount = billAmount + tipAmount;
    const amountPerPerson = totalAmount / numPeople;

    document.getElementById('result').textContent = `Tip: $${tipAmount.toFixed(2)}, Total: $${totalAmount.toFixed(2)}, Per Person: $${amountPerPerson.toFixed(2)}`;
}

document.getElementById('calculateBtn').addEventListener('click', calculateTip);
