
    const myName = "Victor";
    console.log("My name:", myName);

    const Country = "Nigeria";
    console.log("Country:", Country);

    let Age = 24;
    console.log("Age:", Age);

    let isStudent = true;
    console.log("Is student:", isStudent);

    let favouriteFood = null;
    console.log("Favourite food:", favouriteFood);

    // template literal
    console.log(`My name is ${myName}, I am from ${Country}, 
      I am ${Age} years old, I am a student: ${isStudent},
       and my favourite food is ${favouriteFood}.`);

    Age += 1;
    console.log("New age:", Age);

    console.log( typeof myName);
    console.log( typeof Country);
    console.log( typeof Age);
    console.log( typeof isStudent);
    console.log( typeof favouriteFood);

    favouriteFood = "Pizza";
    console.log("Favourite Food:", favouriteFood);

    let temperature = 28;
    if (temperature > 35) {
        console.log("Very hot! Stay indoors.");
     }
    
    if (temperature > 35) {
        console.log("Very hot!");

    } else if (temperature >= 25 && temperature <= 35) {
        console.log("Warm and nice!");
    } else if (temperature >= 15 && temperature < 25) {
        console.log("A bit cool!");
    } else {
        console.log("Cold! wear a coat.");
    }
    let isSunny = true;
    if (temperature > 20 && isSunny === true) {
        console.log("Perfect beach day!"); 
    }
    if (temperature < 10 || isSunny === false) {
        console.log("Stay home today.");
    }

    let advice = temperature > 25 ? "sunscreen needed" : "No sunscreen needed";
    console.log(advice);

    console.log(typeof temperature);
    console.log(typeof isSunny);
    console.log(typeof advice);


    function timesTable(number) {
        for (let i = 1; i <= 12; i++) {
            console.log(`${number} x ${i} = ${number * i}`);
        }
    }
    console.log("---Times table for 3---");
    timesTable(3);

    console.log("---Times table for 7---");
    timesTable(7);

    function isEven(number) {
        return number % 2 === 0;
    }
    console.log("---Is Even Tests---");
    console.log(isEven(4)); // true
    console.log(isEven(7)); // false

    function countdown(number) { 
      for (let i = number; i >= 1; i--) {
        console.log(i);
      }
      console.log("Blast off!");
    }
    console.log("---Countdown Test---");
    countdown(5);

    function SunUpTo(n) { 
      let totalSum = 0;
      for (let i = 1; i <= n; i++) {
        totalSum += i;
      }
      return totalSum;
    }

    console.log("---Bonus Test ---");
    console.log(SunUpTo(5)); // 15


    const students = [
        { name: "Alice", age: 22 , score: 85, course: "Computer Science" },
        { name: "Bob", age: 24, score: 92, course: "Mathematics" },
        { name: "Charlie", age: 21, score: 78, course: "Physics" },
        { name: "David", age: 23, score: 88, course: "Chemistry" },
        { name: "Eve", age: 22, score: 95, course: "Biology" }
    ];

    console.log("---Students Data---");
    for (const student of students) {
        console.log(`${student.name} - score: ${student.score}`);
    }

  function getAverageScore(arr) {
  let totalScore = 0; 
  for (const student of arr) {
    totalScore += student.score;
  }
  return totalScore / arr.length;
}

const average = getAverageScore(students);
console.log("average score:", average);

const topStudents = students.filter(student => student.score >= 70);
console.log("topStudents:", topStudents);

    const studentNames = students.map(student => student.name);

    console.log("All Student names:", studentNames.join(", "));

    const minScore = Math.min(...students.map(student => student.score));
    const lowestScoringStudents = students.filter(student => student.score === minScore);

    if (lowestScoringStudents.length) {
        console.log(`\nNeeds extra support: $ {lowestScoringStudents.name}`);
    }

    const sortedStudents = students.slice().sort((a, b) => b.score - a.score);
    console.log(`\nSorted List (Highest to Lowest Score):", sortedStudents);`)



   const classroom = {
    name: "Peter", age: 24, scores: [85, 92, 78, 88, 95],  course: "Cyber Security",
    name: "james", age: 22, scores: [80, 85, 90, 95, 100], course: "Computer Science",
    name: "Mary", age: 21, scores: [70, 75, 80, 85, 90], course: "Mathematics",
    name: "John", age: 23, scores: [60, 65, 70, 75, 80], course: "Physics",
    name: "Sarah", age: 22, scores: [90, 95, 100, 85, 80], course: "Chemistry"
   }
   

   function getAverage(scores) {
    const sum = scores.reduce((total, score) => total + score, 0);
    return sum / scores.length;
   }

   function getGrade(average) {
    if (average >= 70) {
        return "A";
    } else if (average >= 60) {
        return "B";
    } else if (average >= 50) {
        return "C";
    } else if (average >= 40) {
        return "D";
    } else {
        return "F";
    }

    }


    function getStatus(average) {
        return average >= 50 ? "Pass" : "Fail";
    }

    
        const average = getAverage(student.scores);
        const grade = getGrade(average);
        const status = getStatus(average);
        console.log( "STUDENT REPORT CARD");
        console.log(`Name: ${student.name}`);
        console.log(`Average : ${average.toFixed(2)}`);
        console.log(`Grade: ${grade}`);
        console.log(`Status: ${status}`);
        console.log("-------------------------");


        classroom.forEach(student => {
            printReportCard(student);
        });

        function printClassSummary(classroom) {
            const totalStudents = classroom.length;
        }
            
            let totalAverage = 0;
            let highestScore = Infinity;
            let lowestScore = -Infinity;
            let passCount = 0;
            let failedCount = 0;

            classroom.forEach(student => {
                const studentAverage = getAverage(student.scores);
                totalAverageSum += studentAverage;

                if (getStatus(studentAverage) === "Pass") {
                    passCount++;
                } else {
                    failedCount++;
                }

                if (score > highestScore) {
                    highestScore = score;
                }
                if (score < lowestScore) {
                    lowestScore = score;
                }
            });

            const classAverage = totalStudents > 0 ? totalAverageSum / totalStudents : 0;
            console.log("=========CLASS SUMMARY=========");
            console.log(`5. Total Students: ${totalStudents}`);
            console.log(`6. Class Average: ${classAverage.toFixed(2)}`);
            console.log(`7. Highest Score: ${highestScore}`);
            console.log(`8. Lowest Score: ${lowestScore}`);
            console.log(`9. Students Passed: ${passedCount}`);
            console.log(`10. Students Failed: ${failedCount}`);

            console.log("=========END OF SUMMARY=========");

            printClassSummary(classroom);

            filterStudentsByCourse(classroom, "Computer Science");

            function filterStudentsByCourse(classroom, course) {
                const filteredStudents = classroom.filter(student => student.course === course);
                console.log(`\nStudents in ${course}:`);
                filteredStudents.forEach(student => {
                    console.log(`- ${student.name}`);
                });
            }


            function getAverage(scores) {
    if (scores.length === 0) return 0;
    const sum = scores.reduce((total, score) => total + score, 0);
    return sum / scores.length;
}

function getGrade(average) {
    if (average >= 70) return 'A';
    if (average >= 60) return 'B';
    if (average >= 50) return 'C';
    if (average >= 40) return 'D';
    return 'F';
}

function getStatus(average) {
    return average >= 50 ? 'PASS' : 'FAIL';
}

function printReportCard(student) {
    const average = getAverage(student.scores);
    const grade = getGrade(average);
    const status = getStatus(average);
    
    console.log("======================================");
    console.log("  STUDENT REPORT CARD");
    console.log("======================================");
    console.log(`Name    : ${student.name}`);
    console.log(`Age     : ${student.age}`);
    console.log(`Course  : ${student.course}`);
    console.log(`Scores  : ${student.scores.join(', ')}`);
    console.log(`Average : ${average.toFixed(2)}`);
    console.log(`Grade   : ${grade}`);
    console.log(`Status  : ${status}`);
    console.log("======================================");
}

classRoom.forEach(student => {
    printReportCard(student);
});

function printClassSummary(classRoom) {
    const totalStudents = classRoom.length;
    
    let totalAveragesSum = 0;
    let highestScore = -Infinity;
    let lowestScore = Infinity;
    let passedCount = 0;
    let failedCount = 0;

    classRoom.forEach(student => {
        const studentAverage = getAverage(student.scores);
        totalAveragesSum += studentAverage;
        
        if (getStatus(studentAverage) === 'PASS') {
            passedCount++;
        } else {
            failedCount++;
        }
        
        student.scores.forEach(score => {
            if (score > highestScore) highestScore = score;
            if (score < lowestScore) lowestScore = score;
        });
    });

    const classAverage = totalStudents > 0 ? totalAveragesSum / totalStudents : 0;

    console.log("\n======================================");
    console.log("            CLASS SUMMARY             ");
    console.log("======================================");
    console.log(`5. Total Students         : ${totalStudents}`);
    console.log(`6. Class Average Score    : ${classAverage.toFixed(2)}`);
    console.log(`7. Highest Class Score    : ${highestScore}`);
    console.log(`8. Lowest Class Score     : ${lowestScore}`);
    console.log(`9. Students Passed        : ${passedCount}`);
    console.log(`10. Students Failed       : ${failedCount}`);
    console.log("======================================\n");
}

printClassSummary(classRoom);

const honourRoll = classRoom.filter(student => {
    return getAverage(student.scores) >= 70;
});

console.log("======================================");
console.log("HONOUR ROLL STUDENTS:");
honourRoll.forEach(student => {
    console.log(`- ${student.name} (Average: ${getAverage(student.scores).toFixed(2)})`);
});

const needsSupportList = classRoom.filter(student => {
    return getAverage(student.scores) < 50;
});

console.log("\nNEEDS SUPPORT LIST:");
if (needsSupportList.length === 0) {
    console.log("- No students require immediate support.");
} else {
    needsSupportList.forEach(student => {
        console.log(`- ${student.name} (Average: ${getAverage(student.scores).toFixed(2)})`);
    });
}

const rankedClass = [...classRoom].sort((studentA, studentB) => {
    return getAverage(studentB.scores) - getAverage(studentA.scores); 
});

console.log("\n======================================");
console.log("      CLASS RANKINGS (HIGHEST TO LOWEST)      ");
console.log("======================================");
rankedClass.forEach((student, index) => {
    console.log(`${index + 1}. ${student.name} — Average: ${getAverage(student.scores).toFixed(2)}`);
});
console.log("======================================");