const gitPullOrClone = require("git-pull-or-clone");
const path = require("path");

const repoUrl = "https://github.com/ldbv-by/bav4.git";
const branch = "master"; // Change to your branch
const targetPath = path.resolve(__dirname, "../bav4");

gitPullOrClone(
  repoUrl,
  targetPath,
  { depth: 1, branch }, // Shallow clone specific branch
  (err) => {
    if (err) throw err;
    console.log("Repo cloned or updated successfully");
  }
);
