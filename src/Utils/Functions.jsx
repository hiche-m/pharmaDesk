import { tailwindColors } from '../utils/Colors.jsx';

export function calcPercentage(defaultValue, comparedValue) {
    return Math.max(0, Math.min(1, (comparedValue * 0.5) / defaultValue));
}

export function drawCircle(ctx, x, y, radius) {
    ctx.beginPath();
    ctx.arc(x, y, radius, 0, Math.PI * 2);
    ctx.fillStyle = 'white';
    ctx.fill();
    ctx.strokeStyle = tailwindColors.primary;
    ctx.lineWidth = 2;
    ctx.stroke();
    ctx.closePath();
}

export function drawLine(ctx, x1, y1, x2, y2) {
    ctx.beginPath();
    ctx.moveTo(x1, y1);
    ctx.lineTo(x2, y2);
    ctx.strokeStyle = tailwindColors.primary;
    ctx.lineWidth = 2;
    ctx.stroke();
    ctx.closePath();
}

export function formatNumberWithComma(number) {
    return new Intl.NumberFormat('en-US').format(number);
}