const text = document.getElementById("text");
async function connect() {
    accounts = await ethereum.request({ method: 'eth_requestAccounts' });
        text.textContent = 'Addresses: "' + accounts + '"';
};
