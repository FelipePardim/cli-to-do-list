const conf = new (require('conf'))()
const chalk = require('chalk')

function remove({ tasks }) {
 let todosList = conf.get('todo-list');

 if (!todosList || todosList.length <= 0) {
  console.log(
   chalk.red.bold('You don\'t have any tasks yet.')
  )
  return;
 }

 // Checks if user informed the tasks Id
 if (tasks) {
  let tasksIds = tasks.map(item => Number(item));

  if (tasks < 0 || tasks > todosList.length) {
   //display error message to user
   console.log(
    chalk.green.red('Task id informed not found!')
   );

   return;
  }

  // Removing the informed tasks from todo list
  todosList = todosList.filter(function (value, index) {
   return tasksIds.indexOf(index) == -1;
  })

  conf.set('todo-list', todosList);

  //display message to user
  console.log(
   chalk.green.bold('Task has been ') +
   chalk.red.bold('removed ') +
   chalk.green.bold('successfully!')
  );
 } else {
  conf.delete('todo-list');

  //display message to user
  console.log(
   chalk.red.bold('All the tasks has ') +
   chalk.green.bold('been removed successfully!')
  );
 }
}

module.exports = remove;