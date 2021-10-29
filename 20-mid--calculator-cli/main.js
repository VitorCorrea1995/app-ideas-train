#!/usr/bin/env node


/**
 * Run 'npm link' after download it
 * Then you will can use this calculator by calling 'calc', for example: 'calc sqrt 4'
 */

const commander = require('commander');

const INTERGER_MSG = 'Integer value please';
const ERROR_MSG = 'Not a number';
const VERSION = '0.0.1'

const program = new commander.Command();
program.version(VERSION);

function parseNumberAux(value) {
  const parsedValue = Number(value);
  if (isNaN(parsedValue)) {
    throw new commander.InvalidArgumentError(ERROR_MSG);
  }

  return parsedValue;
}

function parseNumber(value) {
  if (Array.isArray(value)) {
    return value.map((v) => parseNumberAux(v));
  }
  return parseNumberAux(value);
}

function parseResult(value) {
  console.log(JSON.stringify(program.opts));
  return program.opts.float || program.opts.f ? value : Math.round(value);
}

program
  .option('-f, --float', 'Float argument')

program
  .command('add')
  .argument('<first>', INTERGER_MSG, parseNumber)
  .argument('<second>', INTERGER_MSG, parseNumber)
  .action((first, second) => {
    console.log(`${first} + ${second} = ${parseResult(first + second)}`);
  });

program.command('sum')
  .action(() => {
    let arr = 0;
    if (process.argv.slice(3).some(arg => typeof arg !== 'number'
      || (Number.isInteger(Number(arg)) && (program.opts.float || program.opts.f)))) {
      throw new Error(INTERGER_MSG);
    }
    process.argv.slice(3).forEach(arg => arr+=Number(arg));
    console.log(`${process.argv.slice(3).join(' + ')} = ${parseResult(arr)}`);
  });

program
  .command('sub')
  .argument('<first>', INTERGER_MSG, parseNumber)
  .argument('<second>', INTERGER_MSG, parseNumber)
  .action((first, second) => {
    console.log(`${first} - ${second} = ${parseResult(first - second)}`);
  });

program
  .command('mult')
  .argument('<first>', INTERGER_MSG, parseNumber)
  .argument('<second>', INTERGER_MSG, parseNumber)
  .action((first, second) => {
    console.log(`${first} x ${second} = ${parseResult(first * second)}`);
  });

program
  .command('div')
  .argument('<first>', INTERGER_MSG, parseNumber)
  .argument('<second>', INTERGER_MSG, parseNumber)
  .action((first, second) => {
    console.log(`${first} / ${second} = ${parseResult(first / second)}`);
  });

program
  .command('pow')
  .argument('<first>', INTERGER_MSG, parseNumber)
  .argument('<second>', INTERGER_MSG, parseNumber)
  .action((first, second) => {
    console.log(`${first} ^ ${second} = ${parseResult(Math.pow(first, second))}`);
  });

program
  .command('sqrt')
  .argument('<first>', INTERGER_MSG, parseNumber)
  .action((first) => {
    console.log(`√${first}= ${parseResult(Math.sqrt(first))}`);
  });

program
  .command('rand')
  .argument('<first>', INTERGER_MSG, parseNumber)
  .argument('<second>', INTERGER_MSG, parseNumber)
  .action((first, second) => {
    console.log(`Random between ${first} and ${second} = ${(Math.random() * (first + second)) - Math.min(first, second)}`);
  });

program
  .command('log')
  .argument('<first>', INTERGER_MSG, parseNumber)
  .action((first) => {
    console.log(`log ${first} = ${parseResult(Math.log10(first))}`);
  });

program.parse(process.argv);