window.addEventListener('message', event =>
    {
        document.getElementsByTagName('frame')[1].contentWindow.postMessage(event.data, '*');
    }
);