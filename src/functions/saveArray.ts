import { join } from 'path';
import { writeFileSync } from 'fs';

export const saveArray = (numberArray: number[]): void => {
  const path = join(__dirname, '..', 'data', 'array.txt');
  const data = numberArray.join('\n');
  writeFileSync(path, data);
  console.log(`Vetor gravado no arquivo "array.txt".`);
}