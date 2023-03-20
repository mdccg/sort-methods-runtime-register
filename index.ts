import { generateNumberArray } from './src/functions/generateArray';
import { saveArray } from './src/functions/saveArray';

// Gera um vetor numérico com dez mil elementos
const numberArray = generateNumberArray();

// Salva o vetor numérico no arquivo "array.txt" para fins de análise
saveArray(numberArray);

// Cronometra a ordenação o vetor
console.time('Quick sort');
numberArray.sort();
console.timeEnd('Quick sort');

/**
 * Como o tipo de retorno do método `console.timeEnd` é void, não é possível capturar sua
 * saída com variáveis ou constantes, mesmo que utilize os módulos `path` e `fs` do Node.
 * Então, a única saída é executar este processo e criar uma thread para capturar sua
 * saída padrão
 * 
 * O arquivo `recordOutput.ts` fará este trabalho e salvará a saída no arquivo `output.txt`
 */