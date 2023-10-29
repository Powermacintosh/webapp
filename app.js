let tg = window.Telegram.WebApp;

// растянуть окно
tg.expand();

// завершает работу приложения, создаётся телеграмовским скриптом
tg.MainButton.textColor = '#FFFFFF';
tg.MainButton.color = '#FF00FF';

let btn = document.getElementById('btn');
document.addEventListener('change', fCheck);

function fCheck() {
	btn.style.display = document.querySelectorAll('.checkbox:checked').length ? 'inline' : 'none';
}

btn.addEventListener('click', function(){
	tg.MainButton.show();
	tg.sendData('send1TestMessage' + ' ' + tg.initDataUnsafe.user.id);
});
