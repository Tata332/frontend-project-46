#!/usr/bin/env node

import { Command } from 'commander';
import gendiff from '../src/gendiff.js';


const program = new Command();
program
  .version('1.0.0')
  .description('Compares two configuration files and shows a difference.')
  .option('-f, --format [type]', 'output format', 'stylish')
  .arguments('<filepath1> <filepath2>')
  .action((filepath1, filepath2) => {
    const result = gendiff(filepath1, filepath2, program.opts().format);
    console.log(result);
  });

program.parse();