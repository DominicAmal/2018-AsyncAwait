function step() { return Promise.resolve(); }

function walk() {
  return step().then(() => {
    throw new Error('too tired');
  });
}

walk().then(console.log, console.log);
