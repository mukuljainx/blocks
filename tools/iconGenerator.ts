/* eslint-disable @typescript-eslint/no-var-requires */
const fs = require("fs");
const _ = require("lodash");
const path = require("path");
const { exit } = require("process");

const iconFolder = path.join(__dirname, "../src/blocks/Icon/feather");
const icons: string[] = [];

const iconFiles = fs.readdirSync(iconFolder);

const createEnumFile = (icons: string[]) => {
  const enumFile = `export enum Icon {
    ${icons.map((icon) => `${icon} = "${icon}",`).join("\n  ")}
    }`;

  fs.writeFileSync(
    path.join(__dirname, "../src/blocks/Icon/IconEnums.ts"),
    enumFile
  );
};

iconFiles.forEach((file: string, index: number) => {
  const iconName = _.camelCase(file.split(".")[0]);
  const iconExtension = file.split(".")[1];
  icons.push(iconName);
  fs.rename(
    path.join(iconFolder, file),
    path.join(iconFolder, `${iconName}.${iconExtension}`),
    (err: unknown) => {
      console.log(file);
      if (err) {
        console.log({ err });
        exit(1);
      }
      if (!err) {
        if (index === iconFiles.length - 1) {
          console.log("All done! Generating IconEnums.ts");
          createEnumFile(icons);
        }
      }
    }
  );
});
