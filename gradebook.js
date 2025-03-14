//Función que hace elalculo del promedio de la clase

const getAverage = (scores) => {
  let sum = 0;

  for (const score of scores) {
    sum += score;
  }
  return sum / scores.length;
};

//Funcion que asigna el grado de cada estudiante

const getGrade = (score) => {
  if (score === 100) {
    return "A++";
  } else if (score >= 90) {
    return "A";
  } else if (score >= 80) {
    return "B";
  } else if (score >= 70) {
    return "C";
  } else if (score >= 60) {
    return "D";
  } else {
    return "F";
  }
};

//Funcion que indica si paso el curso en base al grado obtenido

const hasPassingGrade = (score) => {
  return getGrade(score) !== "F";
};

//Funcion que da el resultado a los estudiantes

const studentsMsg = (totalScores, studentScore) => {
  const classAverage = getAverage(totalScores);
  const score = getGrade(studentScore);
  const isPassed = hasPassingGrade(studentScore);

  return isPassed
    ? `Class average: ${classAverage}. Your Grade: ${score}. You passed the course`
    : `Class average: ${classAverage}. Your Grade: ${score}. You failed the course`;
};

console.log(studentsMsg([92, 88, 12, 77, 57, 100, 67, 38, 97, 89], 37));
console.log(studentsMsg([56, 23, 89, 42, 75, 11, 68, 34, 91, 19], 100));
