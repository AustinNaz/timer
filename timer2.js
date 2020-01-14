const stdin = process.stdin;
// don't worry about these next two lines of setup work.
stdin.setRawMode(true);
stdin.setEncoding('utf8');



////////////
// Event Handling for User Input
////////////

// on any input from stdin (standard input), output a "." to stdout
stdin.on('data', (key) => {
  // process.stdout.write('.');

  if (key === '\u0003') {
    process.exit();
  }

  if (key === 'b') {
    process.stdout.write('.');
    console.log("Thanks for using me, ciao!")
  } else if (!Number(key)) {
    console.log('Please enter a number');
  } else if (key > 0 && key <= 9) {
    console.log(`Setting timer for ${key} seconds...`);
      setTimeout(() => {
        console.log('.');
      }, key * 1000);
  }
});

console.log('after callback');