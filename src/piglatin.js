// const translate = (word) => {
//   for (let i = 0; i < word.length; i++) {
//     if (word.charAt(i) !== "a") {}
//   }else if(word.charAt(i) !== "e"){

//   }else if(word.charAt(i) !== "i"){

//   }else if(word.charAt(i) !== "o"
//   ){
//   }else(word.charAt(i) !== "u"
//   ){

//   }
// };

const translate = (word) => {
  for (let i = 0; i < word.length; i++) {
    if (
      word.charAt(i) === "a" ||
      word.charAt(i) === "e" ||
      word.charAt(i) === "i" ||
      word.charAt(i) === "o" ||
      word.charAt(i) === "u"
    ) {
      return `${word}way`;
    }
  }
  else if (
    word.charAt(i) !== "a" ||
    word.charAt(i) !== "e" ||
    word.charAt(i) !== "i" ||
    word.charAt(i) !== "o" ||
    word.charAt(i) !== "u"
  ) {
  }
};

module.exports = { translate };
