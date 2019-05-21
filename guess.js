function getData(url, callback) {
    var xhttp = new XMLHttpRequest();

    xhttp.onload = function() {
        if (callback && typeof(callback) === 'function') {
            callback(this.responseText);
        }
    }

    xhttp.open('GET', url);
    xhttp.send();
}

function parseResponse(word, array) {
    var words = [];
    if (word.length > 0) {
        array.forEach(element => {
            if (element.startsWith(word)) {
                words.push(element);
            }
        });
    }
    return words;
}

function printParse(array) {
    $('#words').text('');
    array.forEach(element => {
        $('#words').append(element + ', ');
    });
}

var arr = [];

getData('https://raw.githubusercontent.com/dwyl/english-words/master/words.txt', function(response) {
    arr = response.split('\n');
});

function getSubmit() {
    var word = $("#word").val();
    var parse = parseResponse(word, arr);
    printParse(parse);
}
