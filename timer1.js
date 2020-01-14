args = process.argv.slice(2);

for (times of args) {
  Number(times);
  if (args && Number(times) && times > 0) {
    setTimeout(() => {
      process.stdout.write('.');
    }, times * 1000);
  }
}
