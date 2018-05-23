var button_submit = document.getElementById('js-count');

var real = document.getElementById('js-real');
var comp = document.getElementById('js-comp');
var corr = document.getElementById('js-corr');

var result_container = document.getElementById('js-result');
var result_number = document.getElementById(('js-result-number'));

button_submit.onclick = function() {
    real.classList.remove('is-danger');
    comp.classList.remove('is-danger');
    corr.classList.remove('is-danger');

    if (!real.value) {
        real.classList.add('is-danger');
        return;
    }

    if (!comp.value) {
        comp.classList.add('is-danger');
        return;
    }

    if (!corr.value) {
        corr.classList.add('is-danger');
        return;
    }

    var correction = corr.value / 1000;
    var native = comp.value / correction;
    var result = Math.round(real.value / native * 1000);

    result_number.innerHTML = result;
    result_container.classList.remove('nodisplay');
}
