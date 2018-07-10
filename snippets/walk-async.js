async function step() {}

async function walk() {
  await step();
  throw new Error('too tired');
}

walk().catch(err => console.log(err));
