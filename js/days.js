window.onload = function() {
    let days = ul.getElementsByTagName('li');
    for (let i = 0; i < days.length; i++) {
        days[i].onclick = function () {
            window.parent.postMessage(i, '*');
        };
    }
}