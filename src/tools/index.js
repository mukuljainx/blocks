const fs = require('fs');

const ignoreSet = new Set(['utils', 'index.ts']);

const components = fs
  .readdirSync('../blocks')
  .filter((component) => !ignoreSet.has(component));

const createImportString = (component) =>
  `import ${component} from './${component}';\n`;
let fileString = '';

components.forEach(
  (component) => (fileString += createImportString(component)),
);
fileString += '\n\n';
fileString += `export { ${components.join(', ')} };`;

console.log(fileString);

fs.writeFileSync('../blocks/index.ts', fileString);
