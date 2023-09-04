import fs from "fs";
import path from "path";
import { env } from "process";

import { simpleGit } from "simple-git";

const postsDir = path.resolve("src", "posts");

const sourceDir = path.resolve("src", "posts", "assets");
const destDir = path.resolve("public", "assets");

console.log("Copying images to public folder...");

const cloneSubmoduleRepo = async () => {
  const GITHUB_ASSETS_REPO_URL = env.GITHUB_ASSETS_REPO_URL; // set in vercel env var
  if (!GITHUB_ASSETS_REPO_URL) {
    return;
  }

  if (fs.existsSync(postsDir)) {
    console.log("Posts directory already exists. Skipping clone.");
    return;
  }

  await simpleGit().clone(GITHUB_ASSETS_REPO_URL, postsDir);
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
  await cloneSubmoduleRepo();
  copyAssets("content/posts");
};

main();
