const { Command } = require('commander');

const program = new Command();

program
  .command('greet')
  .description('Display a colorful greeting')
  .action(() => {
    require('./commands/greet');
  });

program
  .command('fetch')
  .description('Fetch data from a public API')
  .action(() => {
    require('./commands/fetch');
  });

program
  .command('read <file>')
  .description('Read and display file content')
  .action((file) => {
    process.argv[2] = file;
    require('./commands/read');
  });

program.parse();