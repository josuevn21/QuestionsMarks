function QuestionsMarks(str) {
  const regex = /(\d)\D*?\D*?\D*?(\d)/g;
  let match = null;
  let isValid = false;
  while ((match = regex.exec(str)) !== null) {
    const num1 = parseInt(match[1]);
    const num2 = parseInt(match[2]);
    const questionMarks = match[0].match(/\?/g)?.length ?? 0;
    if (num1 + num2 === 10 && questionMarks === 3) {
      isValid = true;
      break;
    }
  }
  return isValid;
}

function checkQuestionsMarks() {
  const inputString = document.getElementById("inputString").value;
  const result = document.getElementById("result");
  const isQuestionsMarks = QuestionsMarks(inputString);
  result.innerHTML = isQuestionsMarks ? "true" : "false";
}

  
  //Show the output:
  document.write(output)