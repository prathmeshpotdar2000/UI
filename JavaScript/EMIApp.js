 // Function to calculate EMI
 function calculateEMI() {
    // Retrieve values from input elements
    let loanAmount = parseFloat(document.getElementById('loanAmount').value);

    let tenure = parseFloat(document.getElementById('tenureRange').value) * 12; // Convert years to months

    let interestRate = parseFloat(document.getElementById('interestRateRange').value) / 12 / 100; // Monthly interest rate

    // EMI calculation using the formula
    let emi = (loanAmount * interestRate * Math.pow(1 + interestRate, tenure)) / (Math.pow(1 + interestRate, tenure) - 1);

    // Display result
    document.getElementById('emiResult').innerText = emi.toFixed(2);
}

// Event listeners to update displayed values when the range inputs change
document.getElementById('tenureRange').addEventListener('input', function() {
    document.getElementById('tenureValue').innerText = this.value;
});

document.getElementById('interestRateRange').addEventListener('input', function() {
    document.getElementById('interestValue').innerText = this.value;
});