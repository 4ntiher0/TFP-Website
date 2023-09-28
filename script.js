document.getElementById('toggleButton').addEventListener('click', function() {
    var link = document.getElementById('cssLink');
    if (link.getAttribute('href') === 'stylelt.css') {
        link.setAttribute('href', 'styles.css');
    } else {
        link.setAttribute('href', 'stylelt.css');
    }
});