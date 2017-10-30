async function step() {}

async function walk() {
  await step();
  throw new Error('too tired');
}

walk().then(console.log, console.log);
