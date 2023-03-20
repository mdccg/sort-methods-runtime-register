/**
 * Gera um número inteiro aleatório dentro
 * do intervalo de 32 bits, ou seja, de
 * (- 2^31) <= x <= (2^31 - 1)
 */
const generateNumber = (min: number = Number.MIN_SAFE_INTEGER, max: number = Number.MAX_SAFE_INTEGER) =>
  min + Math.floor(Math.random() * (max - min));

export const generateNumberArray = (length: number = 1e4): number[] =>
  Array(length).fill(0).map(() => generateNumber());