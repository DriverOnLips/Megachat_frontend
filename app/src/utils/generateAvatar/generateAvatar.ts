import { createCanvas } from 'canvas';

export const createImageWithInitials = (...names: string[]): string => {
  const canvas = createCanvas(100, 100);
  const ctx = canvas.getContext('2d');

  const centerX = canvas.width / 2;
  const centerY = canvas.height / 2;
  const radius = Math.min(centerX, centerY);

  ctx.beginPath();
  ctx.arc(centerX, centerY, radius, 0, 2 * Math.PI);
  ctx.closePath();
  ctx.clip();

  const colors = ['#FFFF00', '#FF0000', '#0000FF']; // Желтый, красный, голубой
  const randomColor = colors[Math.floor(Math.random() * colors.length)];

  ctx.fillStyle = randomColor;
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  ctx.font = '45px Roboto Serif';
  ctx.fillStyle = '#000000'; // Цвет текста

  const initialsText = names
    .map((name) => name[0].toUpperCase())
    .join('')
    .slice(0, 2);

  const textWidth = ctx.measureText(initialsText).width;

  const textX = (canvas.width - textWidth) / 2;
  const textY = canvas.height / 2 + 16;

  ctx.fillText(initialsText, textX, textY);

  const dataURL = canvas.toDataURL();

  return dataURL;
};
