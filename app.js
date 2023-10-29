let tg = window.Telegram.WebApp;

// растянуть окно
tg.expand();

// завершает работу приложения, создаётся телеграмовским скриптом
tg.MainButton.textColor = '#FFFFFF';
tg.MainButton.color = '#FF00FF';

// получаем кнопку из index.html
let btn = document.getElementById('btn');

btn.addEventListener('click', function(){
	tg.MainButton.setText('Сообщение прочитано!');
	tg.MainButton.show();
	tg.sendData('sendTestMessage');
});

window.addEventListener('load', function() {
	let btn = document.querySelector('.btn');
	document.addEventListener('change', fCheck);

	function fCheck() {
		btn.style.display = document.querySelectorAll('.checkbox:checked').length ? 'inline' : 'none';
	}
});
