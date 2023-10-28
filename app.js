let tg = window.telegram.WebApp;

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
})