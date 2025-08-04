const fs = require("fs");
const path = require("path");
const { execSync } = require("child_process");

const submissionsDir = path.join(__dirname, "../submissions");
const outputDir = path.join(__dirname, "../extracted");

if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir);
}

fs.readdirSync(submissionsDir).forEach((file) => {
  if (!file.endsWith(".mkcd")) return;

  const tempJson = path.join(outputDir, "temp.json");
  const outFile = path.join(outputDir, file.replace(".mkcd", ".ts"));

  try {
    // mkcdの中からJSONファイルを抽出
    execSync(`7z e -so "${path.join(submissionsDir, file)}" > "${tempJson}"`);
    const mkcdJson = JSON.parse(fs.readFileSync(tempJson, "utf8"));

    if (mkcdJson.source) {
      const source = JSON.parse(mkcdJson.source);
      const mainTs = source["main.ts"];
      if (mainTs) {
        fs.writeFileSync(outFile, mainTs, "utf8");
        console.log(`Extracted main.ts -> ${outFile}`);
      } else {
        console.warn(`No main.ts in ${file}`);
      }
    } else {
      console.warn(`No "source" field in ${file}`);
    }
    fs.unlinkSync(tempJson);
  } catch (err) {
    console.error(`Failed to extract ${file}: ${err.message}`);
  }
});
