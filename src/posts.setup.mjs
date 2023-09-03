import fs from "fs";
import path from "path";
import { env } from "process";

import { simpleGit } from "simple-git";

const sourceDir = path.resolve("src", "posts", "assets");
const destDir = path.resolve("public", "assets");

console.log("Copying images to public folder...");

const submoduleInit = async () => {
  const GITHUB_ASSETS_KEY = env.GITHUB_ASSETS_KEY; // set in vercel env var
  const config = GITHUB_ASSETS_KEY
    ? [`Authorization: token ${GITHUB_ASSETS_KEY}`]
    : [];

  await simpleGit({
    config,
  }).submoduleUpdate(["--init", "--recursive"], (err, data) => {
    if (err) {
      throw err;
    }
    console.log("Submodule updated");
  });
};

const copyAssets = () => {
  const copy = (src, dest) => {
    fs.cp(
      src,
      dest,
      {
        recursive: true,
        force: true,
      },
      (err) => {
        if (err) {
          throw err;
        }
      }
    );
  };

  console.log("sourceDir:", sourceDir);
  console.log("destDir:", destDir);

  // assert sourceDir exists
  if (!fs.existsSync(sourceDir)) {
    throw new Error(`Source directory does not exist: ${sourceDir}`);
  }

  copy(sourceDir, destDir);

  console.log("Post data is ready!");
};

const main = async () => {
  await submoduleInit();
  copyAssets("content/posts");
};

main();
