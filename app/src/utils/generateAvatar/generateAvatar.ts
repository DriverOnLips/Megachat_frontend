import { createCanvas } from 'canvas';

export const createImageWithInitials = (
	name: string,
	surname: string
): string => {
	const canvas = createCanvas(100, 100);
	const ctx = canvas.getContext('2d');

	// Нарисуйте круг
	const centerX = canvas.width / 2;
	const centerY = canvas.height / 2;
	const radius = Math.min(centerX, centerY);

	ctx.beginPath();
	ctx.arc(centerX, centerY, radius, 0, 2 * Math.PI);
	ctx.closePath();
	ctx.clip();

	// Выбираем случайный цвет из массива цветов
	const colors = ['#FFFF00', '#FF0000', '#0000FF']; // Желтый, красный, голубой
	const randomColor = colors[Math.floor(Math.random() * colors.length)];

	// Устанавливаем цвет фона
	ctx.fillStyle = randomColor;
	ctx.fillRect(0, 0, canvas.width, canvas.height);

	// Настройки текста
	ctx.font = '65px Roboto Serif'; // Используем здесь ваш шрифт
	ctx.fillStyle = '#000000'; // Цвет текста

	// Рисуем первые буквы имени и фамилии
	ctx.fillText(name[0].toUpperCase(), 8, 72);
	ctx.fillText(surname[0].toUpperCase(), 52, 72);

	// Получаем Base64-кодированную строку изображения
	const dataURL = canvas.toDataURL();

	return dataURL;

	// Создаем элемент <img> и присваиваем ему src как Base64-кодированную строку
	const img = new Image();
	img.src = dataURL;

	// Вставляем изображение на страницу
	document.body.appendChild(img);
};
