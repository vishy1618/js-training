// @flow

export function toCelsius(fahrenheit: number): number {
  return (fahrenheit - 32) * 5 / 9;
}

export function toFahrenheit(celsius: number): number {
  return (celsius * 9 / 5) + 32;
}

export function tryConvert(temperature: string, convert: Function): string {
  const input = parseFloat(temperature);
  if (Number.isNaN(input)) {
    return '';
  }
  const output = convert(input);
  const rounded = Math.round(output * 1000) / 1000;
  return rounded.toString();
}