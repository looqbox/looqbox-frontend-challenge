export function getTextColor(hexColor: string) {
  const r = parseInt(hexColor.substring(1, 3), 16);
  const g = parseInt(hexColor.substring(3, 5), 16);
  const b = parseInt(hexColor.substring(5, 7), 16);
  const yiq = (r * 299 + g * 587 + b * 114) / 1000;
  return yiq >= 128 ? '#2c2c2c' : '#f2f2f2';
}

export function getHexColor(color: string) {
  color = color === 'white' ? '#dadada' : color;
  const ctx = document.createElement('canvas').getContext('2d') as CanvasRenderingContext2D;
  ctx.fillStyle = color;
  return ctx.fillStyle;
}
