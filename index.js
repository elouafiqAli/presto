console.log('Hello World!');

function printTree(height) {
  for (let i = 1; i <= height; i++) {
    const spaces = ' '.repeat(height - i);
    const stars = '*'.repeat(i * 2 - 1);
    console.log(spaces + stars + spaces);
  }
  const trunk = ' '.repeat(height - 1) + '|' + ' '.repeat(height - 1);
  console.log(trunk);
}

printTree(5);
