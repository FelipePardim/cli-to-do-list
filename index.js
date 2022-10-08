#! /usr/bin/env node

const { program } = require('commander');

// Commands
const list = require('./commands/list');
const add = require('./commands/add');
const remove = require('./commands/remove');
const markDone = require('./commands/markDone');

program
 .command('list')
 .description('List all the TODO tasks')
 .action(list)

program
 .command('add <task>')
 .description('Add a new TODO task')
 .action(add)

program
 .command('mark-done')
 .description('Mark a TODO task as done')
 .option('-t, --tasks <tasks...>', 'The tasks to mark done. If not specified, all tasks will be marked done.')
 .action(markDone)

 program
 .command('remove')
 .description('Remove a tasks from TODO list')
 .option('-t, --tasks <tasks...>', 'The tasks to remove. If not specified, all tasks will be removed.')
 .action(remove)

program.parse()