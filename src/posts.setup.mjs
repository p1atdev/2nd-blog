import fs from "fs";
import path from "path";
import { env } from "process";

import { simpleGit } from "simple-git";

const sourceDir = path.resolve("src", "posts", "assets");
const destDir = path.resolve("public", "assets");

console.log("Copying images to public folder...");

// 行儀が悪いけど、vercelのときだけurlを書き換えてトークンを差し込む
const configureSubmoduleUrl = () => {
  const GITHUB_ASSETS_KEY = env.GITHUB_ASSETS_KEY; // set in vercel env var
  if (!GITHUB_ASSETS_KEY) {
    return;
  }

  // console.log("GITHUB_ASSETS_KEY:", GITHUB_ASSETS_KEY);

  // .gitmodules の url を書き換える
  const gitmodulesPath = path.resolve(".gitmodules");
  const gitmodules = fs.readFileSync(gitmodulesPath, "utf-8");
  const newGitmodules = gitmodules.replace(
    "https://github.com",
    `https://${GITHUB_ASSETS_KEY}@github.com`
  );
  fs.writeFileSync(gitmodulesPath, newGitmodules, "utf-8");
};

const submoduleInit = async () => {
  const GIT_USERNAME = env.GIT_USERNAME;
  const GIT_EMAIL = env.GIT_EMAIL;

  if (GIT_USERNAME && GIT_EMAIL) {
    await simpleGit().addConfig("user.name", GIT_USERNAME);
    await simpleGit().addConfig("user.email", GIT_EMAIL);
  }

  await simpleGit().submoduleUpdate(["--init", "--recursive"], (err, data) => {
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
  configureSubmoduleUrl();
  await submoduleInit();
  copyAssets("content/posts");
};

main();
