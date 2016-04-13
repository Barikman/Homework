var body = document.createElement('div');
body.classList.add('body');
document.body.appendChild(body);

var headerTimer = document.createElement('div');
headerTimer.classList.add('form');
body.appendChild(headerTimer);

var mainDisplay = document.createElement('div');
mainDisplay.classList.add('timer');
mainDisplay.innerHTML = '00:00:00.00';
headerTimer.appendChild(mainDisplay);

var timerButtons = document.createElement('div');
timerButtons.classList.add('timer_buttons');
body.appendChild(timerButtons);

var startButton = document.createElement('button');
startButton.classList.add('start')
startButton.innerHTML = 'START';
startButton.addEventListener('click', start);
timerButtons.appendChild(startButton);

var pauseButton = document.createElement('button');
pauseButton.classList.add('pause')
pauseButton.innerHTML = 'PAUSE';
pauseButton.addEventListener('click', pause)
timerButtons.appendChild(pauseButton);

var clearButton = document.createElement('button');
clearButton.classList.add('clear')
clearButton.innerHTML = 'CLEAR';
clearButton.addEventListener('click', clear)
timerButtons.appendChild(clearButton);

var ms1 = 0;
var ms2 ='';
var sec1 = 0;
var sec2 ='';
var min1 = 0;
var min2 ='';
var hour1 = 0;
var hour2 ='';
var clockTimer;

function start(){
	if(ms1 <= 99){ms1++;}

	if(ms1 > 99){
		sec1++;
		ms1 = 0;
	}

	if (sec1 > 59){
		min1++;
		sec1 = 0;
	}

	if (min1 > 59){
		hour1++;
		min1 = 0;
	}

	if (hour1 > 23){hour1 = 0;}

	if(ms1 < 10){
		ms2 = '0'+ ms1;
	}else{ms2 = ms1;}

	if (sec1 < 10){
		sec2 = '0'+ sec1;
	} else {sec2 = sec1;}

	if (min1 < 10){
		min2 = '0'+ min1;
	} else {min2 = min1;}

	if (hour1 < 10){
		hour2 = '0'+ hour1;
	} else {hour2 = hour1;}

	mainDisplay.innerHTML = hour2 + ':' + min2 + ':' + sec2 + '.' + ms2;
	clockTimer = setTimeout(start, 10); 
	startButton.style.margin = '-7000px';
	pauseButton.style.margin = '0px';
}

function pause(){
	clearTimeout(clockTimer);
	pauseButton.style.margin = '-7000px';
	startButton.style.margin = '0px';
	startButton.innerHTML = 'CONTINUE';
}

function clear() {
	clearTimeout(clockTimer);
	startButton.style.margin = '0px';
	startButton.innerHTML = 'START';
	ms1 = 0;
	sec1 = 0;
	min1 = 0;
	hour1 = 0;
	mainDisplay.innerHTML = '00:00:00.00';
}