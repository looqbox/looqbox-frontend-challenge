export default function addZeros(number: number | string) {
  const stringfiedNumber = number?.toString();
  const numberLength = stringfiedNumber?.length;

  if (numberLength > 3) return stringfiedNumber;

  const numberWithZeros = '0'.repeat(3 - numberLength) + stringfiedNumber;

  return numberWithZeros;
}
