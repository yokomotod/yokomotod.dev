module.exports = {
  "*.{js,jsx,ts,tsx}": ["eslint --fix", () => "tsc --noEmit", "git add"],
}
