function countdownToNewYear() {
    const countdownElement = document.getElementById('countdown');

    // Получаем текущую дату и дату следующего Нового года
    const now = new Date();
    const nextYear = now.getFullYear() + 1;
    const newYearDate = new Date(`January 1, ${nextYear} 00:00:00`);

    // Вычисляем разницу во времени
    const timeDifference = newYearDate - now;

    // Если разница меньше или равна нулю, отображаем поздравление
    if (timeDifference <= 0) {
        countdownElement.textContent = "С Новым годом!";
        return;
    }

    // Переводим разницу в дни, часы, минуты и секунды
    const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

    // Обновляем содержимое HTML
    countdownElement.textContent = `${days} дней, ${hours} часов, ${minutes} минут, ${seconds} секунд`;
}

// Обновляем таймер каждую секунду
setInterval(countdownToNewYear, 1000);

// Инициализируем первый рендер
countdownToNewYear();
