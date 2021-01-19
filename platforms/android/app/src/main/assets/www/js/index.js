document.addEventListener('deviceready', onDeviceReady, false);

function onDeviceReady() {
    console.log('Initializing...');
    document.getElementById('open-button').addEventListener('click', open);
}

function open() {
    window.plugins.JWPlayer.open(
        callback => {
            console.log('Open result: ', callback);
        });

}

function close() {
    window.plugins.JWPlayer.close(
        callback => {
            alert('Close result: ', callback);
        });
}
