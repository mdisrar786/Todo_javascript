window.addEventListener('load', checkInternetConnection);

function checkInternetConnection() {
    const statusText = document.getElementById('statusCheck');
    const ipAddressText = document.getElementById('ipAddressText');
    const networkStrengthText = document.getElementById('NetworkStrengthText');

    statusText.textContent = "Checking....";

    if (navigator.onLine) {
        fetch('https://api.ipify.org?format=json')
            .then((response) => response.json())
            .then((data) => {
                console.log(data);
                ipAddressText.textContent = data.ip;
                statusText.textContent = "Connected";
                const connection = navigator.connection;
                console.log(connection)
                const networkStrength = connection ? connection.downlink + " Mbps" : "unknown";
                networkStrengthText.textContent = networkStrength;
            })
            .catch(() => {
                statusText.textContent = "Disconnected";
                ipAddressText.textContent = '-';
                networkStrengthText.textContent = '-';
            });
    } else {
        statusText.textContent = "Disconnected";
        ipAddressText.textContent = '-';
        networkStrengthText.textContent = '-';
    }
}
