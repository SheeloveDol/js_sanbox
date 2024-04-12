const name = "Sheelove?";

function isQuestion(s) {
  return s.endsWith('?') ? s : s+'?';
}

console.log(isQuestion(name));