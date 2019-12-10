export default function spaceCase(str) {
    if (typeof str !== "string")
      throw new TypeError("This function requires a string parameter");
  
    const noSpaces = str.replace(/[\W\d_]/g, "");
    return [...noSpaces]
      .map(char => {
        if (char === char.toUpperCase()) {
          return `-${char.toLowerCase()}`;
        } else {
          return char;
        }
      })
      .join("");
  }