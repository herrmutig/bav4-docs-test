const clone = require("git-clone/promise");
const path = require("path");

const repoUrl = "https://github.com/ldbv-by/bav4.git";
const targetPath = path.resolve(__dirname, "../bav4");
const branchName = "master";

clone(repoUrl, targetPath, { checkout: branchName })
  .then(() => console.log("Repository cloned and checked out successfully"))
  .catch((err) => console.error("Clone failed:", err));
