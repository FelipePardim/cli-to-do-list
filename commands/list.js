const Conf = require('conf');
const config = new Conf();

const chalk = require('chalk');

function list() {
 let todoList = config.get('todo-list');

 if (todoList && todoList.length) {
  console.log(
   chalk.blue.bold('Tasks in green are done. Tasks in yellow are still not done.')
  );

  //user has tasks in todoList
  if (!todoList.length) {
   return;
  }

  // Marking each task as done by its Id
  todoList.forEach((task, index) => {
   if (task.done) {
    console.log(
     chalk.greenBright(`${index}. ${task.text}`)
    )
   } else {
    console.log(
     chalk.yellowBright(`${index}. ${task.text}`)
    )
   }
  });
 } else {
  //user does not have tasks in todoList
  console.log(
   chalk.red.bold('You don\'t have any tasks yet.')
  )
 }
}

module.exports = list;