var faker = require('faker');
 
const fakersNeeded = 50
const a = new Array(fakersNeeded).fill(null)
                       .map(e =>
                   e = faker.fake("{{name.lastName}}, {{name.firstName}} {{internet.email}}"))

console.log(a)                 ;



