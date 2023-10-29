let tg = window.Telegram.WebApp;
// let user_id = tg.initDataUnsafe.user.id;
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
	tg.sendData('sendTestMessage' + ' ' + '1');
	tg.close();
});

