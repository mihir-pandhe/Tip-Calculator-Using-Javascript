function calculateTip() {
    const billAmount = parseFloat(document.getElementById('billAmount').value);
    const tipPercent = parseFloat(document.getElementById('tipPercent').value);

    if (isNaN(billAmount) || isNaN(tipPercent) || billAmount <= 0 || tipPercent < 0) {
        document.getElementById('result').textContent = "Please enter valid values.";
        return;
    }

    const tipAmount = (billAmount * tipPercent) / 100;
    const totalAmount = billAmount + tipAmount;

    document.getElementById('result').textContent = `Tip: $${tipAmount.toFixed(2)}, Total: $${totalAmount.toFixed(2)}`;
}
