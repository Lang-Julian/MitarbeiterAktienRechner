let dividend = 0;
function calculate() {
    const years = parseInt(document.getElementById('years').value);
    let salary = parseInt(document.getElementById('salary').value);
    const discount = parseFloat(document.getElementById('discount').value) / 100;
    const growth = parseFloat(document.getElementById('growth').value) / 100;
    const stockPercent = parseFloat(document.getElementById('stockPercent').value) / 100;
    const stockGrowth = parseFloat(document.getElementById('stockGrowth').value) / 100;
    const yearlyDividend = parseFloat(document.getElementById('yearlyDividend').value) / 100;
    const discountTax = parseFloat(document.getElementById('discountTax').value) / 100;
    const dividendTax = parseFloat(document.getElementById('dividendTax').value) / 100;

    let totalInvestment = 0;
    let totalDividend = 0;
    let stockValue = 0;

    for (let i = 1; i <= years; i++) {
        const investment = salary * stockPercent * (1 + discount) * (1 - discountTax);
        totalInvestment += investment;
        stockValue += investment;
        stockValue *= (1 + stockGrowth);
        dividend = (stockValue * yearlyDividend) * (1- dividendTax);
        totalDividend += dividend;
        stockValue += dividend;
        salary *= (1 + growth);
    }

    const total = totalInvestment + stockValue;

    document.getElementById('dividend').textContent = dividend.toFixed(2) + ' €';
    document.getElementById('stockValue').textContent = stockValue.toFixed(2) + ' €';
    document.getElementById('total').textContent = total.toFixed(2) + ' €';
    document.getElementById('numYears').textContent = years.toString();
    document.getElementById('totalDividend').textContent = totalDividend.toFixed(2) + ' €';
}