//DOM ELEMENTS

const time = document.getElementById('time'),
    greeting = document.getElementById('greeting'),
    name = document.getElementById('name'),
    focus = document.getElementById('focus');

    //options
    const showAmPm = true;


//Show Time

function showTime() {
    let today = new Date(),
        hour = today.getHours(),
        min = today.getMinutes(),
        sec = today.getSeconds();
        
        
    //SET AM OR PM
    const amPm = hour >= 12 ? 'PM' : 'AM';

    //12hr format

    hour = hour % 12 || 12;

    //output time

    time.innerHTML = `${hour}<span>:</span>${addZero(min)}<span>:</span>${addZero(sec
        )} ${showAmPm ? amPm : ''}`;
    setTimeout(showTime, 1000);

}

//add zeros
function addZero(n) {
    return(parseInt(n, 10) < 10 ? '0' : '') + n;
}
//set background  and greeting
function setBgGreet() {
    let today = new Date(),
        hour = today.getHours();

        if(hour < 12) {
            //morning
            document.body.style.backgroundImage = "url('../img/morning.jpg')";
            greeting.textContent = 'Good Morning';
            
        } else if(hour < 16) {
            //afternoon
            document.body.style.backgroundImage = "url('../img/afternoon.jpg')";
            greeting.textContent = 'Good Afternoon';
            
        }
        else if(hour < 18) {
            //afternoon
            document.body.style.backgroundImage = "url('../img/evening.jpg')";
            greeting.textContent = 'Good Evening';
            document.body.style.color = 'white';
        } else {
            //evening
            document.body.style.backgroundImage = "url('../img/night.jpg')";
            greeting.textContent = 'Good Night';
            document.body.style.color = 'white';
        }
}


//Get Name
function getName() {
    if(localStorage.getItem('name') === null) {
        name.textContent = '[Enter Name]';
    } else {
        name.textContent = localStorage.getItem('name');
    }
}

//set name
function setName(e) {
    if(e.type === 'keypress') {
        //make sure enter is pressed
        if(e.which == 13 || e.keyCode == 13) {
            localStorage.setItem('name', e.target.innerText);
            name.blur(); // remove cursor from that control
        }
    } else {
        localStorage.setItem('name', e.target.innerText);
    }
}

//Get Focus
function getFocus() {
    if(localStorage.getItem('focus') === null) {
        focus.textContent = '[Enter Focus]';
    } else {
        focus.textContent = localStorage.getItem('focus');
    }
}

//set focus
function setFocus(e) {
    if(e.type === 'keypress') {
        //make sure enter is pressed
        if(e.which == 13 || e.keyCode == 13) {
            localStorage.setItem('focus', e.target.innerText);
            focus.blur(); // remove cursor from that control
        }
    } else {
        localStorage.setItem('focus', e.target.innerText);
    }
}

name.addEventListener('keypress', setName);
name.addEventListener('blur', setName);
focus.addEventListener('keypress', setFocus);
focus.addEventListener('blur', setFocus);

//Run
showTime();
setBgGreet();
getName();
getFocus();

