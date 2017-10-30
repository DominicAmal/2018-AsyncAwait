function step(cb) { process.nextTick(cb); }

function walk(cb) {
  return step((err) => {
    cb(new Error('too tired'))
  });
}

walk(console.log);
