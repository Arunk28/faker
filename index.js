var faker = require('faker');

const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  });
  
  readline.question('How many fake data needed?', cnt => {
    
    const fakersNeeded = parseInt(cnt);
    const a = new Array(fakersNeeded).fill(null)
                       .map(e =>
                   e = faker.fake("{{name.lastName}}, {{name.firstName}} {{internet.email}}"))

    console.log(a)         

  });

        



