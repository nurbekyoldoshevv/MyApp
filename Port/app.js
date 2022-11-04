window.addEventListener('load', function (e) {
    var text = document.querySelector('.text');
    var inner = text.innerHTML
    text.innerHTML = ''
    var sum = ''

    var i = 0
    function print(){
        // sum = sum + inner.charAt(i)
        sum += inner.charAt(i)
        text.innerHTML = sum
        i++
    }

    setInterval(print, 20);
});