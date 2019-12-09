module.exports = function playstring(string) {
  if (typeof string !== "string") throw new TypeError("PlayString wants a string!");
  return string.replace(/\s/g, "");
};
