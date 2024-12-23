function updateTimer() {
    const now = new Date();
    const nextYear = now.getFullYear() + 1;
    const newYear = new Date(`January 1, ${nextYear} 00:00:00`);
    const diff = newYear - now;
  
    if (diff <= 0) {
        document.querySelector('.timer-container').innerHTML = 
            "<h2>Основная стратегия нового года это заманить вас всех сюда!</h2>";
        return;
    }
  
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((diff % (1000 * 60)) / 1000);
  
    document.getElementById('days').innerText = days;
    document.getElementById('hours').innerText = hours;
    document.getElementById('minutes').innerText = minutes;
    document.getElementById('seconds').innerText = seconds;
  }
  
  updateTimer();
  setInterval(updateTimer, 1000);

// снежинки
        function createSnowflake() {
            const snowflake = document.createElement('div');
            snowflake.classList.add('snowflake');
            snowflake.innerText = '❄'; 

            snowflake.style.left = Math.random() * 100 + 'vw';
            snowflake.style.fontSize = Math.random() * 10 + 15 + 'px';
            snowflake.style.animationDuration = Math.random() * 3 + 2 + 's'; 

            document.body.appendChild(snowflake);

            setTimeout(() => {
                snowflake.remove();
            }, 5000);
        }

        setInterval(createSnowflake, 200);
// Подарки
let wishes = [
    "Что бы забанили фокса, и забанили Лёву (что бы не мутился) © Дьулустан",
    "Разблокируйте ютуб и дайте мне e34 © Фома",
    "Желаю, что бы в новом году ты перестал играть в Доту © Дамир",
    "Бро я сижу в днд сюжет пишу © Лёва",
    "ПУСТЬ ВСЕ ВАШИ ДОЛГИ( У ДРУГА, ПО РАБОТЕ, КРЕДИТУ) ИСЧЕЗНУУУУУУУУУУУУУТ! ©Кирилл",
    "Что б столб стоял и деньги были ©Паша",
    "С новой гойдой ©Артём"
];

const gifts = document.querySelectorAll('.gift');

gifts.forEach(gift => {
gift.addEventListener('click', () => {

    if (!gift.classList.contains('opened')) {

        gift.classList.add('opened');

        if (wishes.length > 0) {
            const randomIndex = Math.floor(Math.random() * wishes.length);
            const randomWish = wishes[randomIndex];

            const message = gift.querySelector('.message');
            message.textContent = randomWish;

            wishes.splice(randomIndex, 1);
        } else {
            const message = gift.querySelector('.message');
            message.textContent = "Все подарки уже открыты!";
        }
    }
});
});

//игра
function askUser() {
    const input = document.getElementById("placeInput").value.toLowerCase();
    const response = document.getElementById("response");

    if (input === "парк") {
        response.innerText = "Здорово! Парк — отличное место для отдыха.";
    } else if (input === "магазин") {
        response.innerText = "Магазин? Надеюсь, покупки прошли удачно!";
    } else if (input === "школа") {
        response.innerText = "Школа — важное место для знаний.";
    } else if (input === "") {
        response.innerText = "Пожалуйста, введите место!";
    } else {
        response.innerText = `Интересно! Я никогда не был в ${input}.`;
    }
}

function openEnvelope(envelope, congratsText) {
    if (!envelope.classList.contains("opened")) {
        envelope.classList.add("opened");

        const congratsDiv = document.getElementById("congrats");
        congratsDiv.textContent = congratsText;
    }
}