// Check your console, if you see errors after connection successful, know they come from whatever code you write here.

// Test Connection JavaScript Compatibility [Remove if you no longer need]...

/* Try running these
    alert($('layout').parentElement.nodeName);
    alert(`Welcome To ${app.name}. Created by ${app.author}. Copyright ${app.copyright}.`);
    alert(d.fullDate());
*/
$Gdivs = $$('#game div');
_colors = ['red', 'magenta', 'cyan', 'purple', 'blue', 'yellow', 'orange', 'green', 'lightgreen', 'lightgrey'];
$time = [2, 1.8, 1.6, 1.4, 1.2, 1.0];
$speed = 'x1';
$absoluteSpeed = 3000;

function time() {
    var h, m, s;
    h = 0, m = 0, s = 0;
    setInterval(() => {
        s++;
        html($('#time'), `Time: ${h}:${m}:${s}`);
        if (s == 59) {
            s = 0; m++;
        }
        if (m > 59) {
            m = 0, h++;
        }
    }, 1000);
    /* Add Time Limit */
}
time();

var x = 1;
function score() {
    x = x + 5;
    html($('#score'), `Score: ${x}`);
    if (x > 50) {
        $speed += 'x2';
    }
    if (x > 100) {
        $speed += 'x4';
    }
    if (x > 100) {
        $speed += 'x8';
    }
    if (x > 100) {
        $speed += 'x16';
    }
}

widgets.construct('style');
addClass(widget, 'animation');
renderBefore($('#game'), widget);

//click($('body'), () => {//alert(arrayOfN(10));
    //function generateTiles() {
        setInterval(()=>{
        $heights = randomOfRange(40, 100);
        html($('.animation'), `@keyframes slideUp { 0% { transform: translateY(${screen.height}%); } }`);
        loopX($Gdivs, ()=> html(i, ''));
        randomOf($Gdivs.length, ()=>{
            html($Gdivs[n - 1], `<div onclick="score()" style="animation: 2s slideUp linear; transform: translateY(-${screen.height}%); background: ${randomize(_colors)}; width: 100%; height: ${$heights}%;"></div>`);
        });
    }, 1000);

function boostScore() {
    click();
}