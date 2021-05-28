const gramsIs = document.getElementById('gramsoutput');
const kilogramsIs = document.getElementById('kilogramsoutput');
const ouncesIs = document.getElementById('ouncesoutput');

document.getElementById('counterInput').addEventListener('input', function(n) {
    let pound = n.target.value;
    gramsIs.innerHTML = (pound / 0.0022046).toFixed(2);
    kilogramsIs.innerHTML = (pound / 2.2046).toFixed(2);
    ouncesIs.innerHTML = (pound * 16).toFixed(2);
});