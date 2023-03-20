import { spawn } from 'child_process';
import { join } from 'path';
import { writeFileSync, appendFileSync } from 'fs';

const command = 'yarn';
const options = ['start'];

// Cria um processo filho que executa o arquivo principal
const childProcess = spawn(command, options);

/**
 * Localiza o arquivo que armazenará a saída do processo filho e limpa seu conteúdo. Obs.:
 * Caso o arquivo não exista, a função `writeFileSync` o criará
 */
const path = join(__dirname, '..', 'data', 'output.txt');
writeFileSync(path, '');

// Cria uma thread para capturar a saída padrão do processo filho
childProcess.stdout.on('data', (data) => {
  // Concatena o conteúdo atual do arquivo à próxima linha da saída padrão
  appendFileSync(path, `${data}`);
});

childProcess.on('exit', (code: number | null, signal: NodeJS.Signals | null) => {
  console.log(`O processo filho encerrou com código ${code} e sinal ${signal}`);
});