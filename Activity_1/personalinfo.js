const personalinfo = {
    StudentName: "Edford Mac Clellan Ulep Ongcal",
    IDNumber: "2026-9857",
    YearLevel: "II",
    Program: "Information Technology",
    EnrolledCourses: {
        Course1: {
            CourseTitle: "Web Development-2",
            FinalGrade: 96
        },
        Course2: {
            CourseTitle: "Arts Appreciation",
            FinalGrade: 99
        },
        Course3: {
            CourseTitle: "Networking-1",
            FinalGrade: 98
        },
        Course4: {
            CourseTitle: "Mobile App Development",
            FinalGrade: 92
        },
        Course5: {
            CourseTitle: "Integrated Programming-1",
            FinalGrade: 96
        },
        Course6: {
            CourseTitle: "Event-Driven Programming",
            FinalGrade: 96
        }
    }
};

const C1 = personalinfo.EnrolledCourses.Course1;
const C2 = personalinfo.EnrolledCourses.Course2;
const C3 = personalinfo.EnrolledCourses.Course3;
const C4 = personalinfo.EnrolledCourses.Course4;
const C5 = personalinfo.EnrolledCourses.Course5;
const C6 = personalinfo.EnrolledCourses.Course6;

const totalSubjects = 6;
const totalgrade = (C1.FinalGrade + C2.FinalGrade + C3.FinalGrade + C4.FinalGrade + C5.FinalGrade + C6.FinalGrade);
const totalweightedgrade = totalgrade / totalSubjects;
const computeGWA = totalweightedgrade.toFixed(2);

let generalWeightedAverageLetter = "F(Failed)";
if (computeGWA >= 98) {
    generalWeightedAverageLetter = "A";
} else if (computeGWA >= 94) {
    generalWeightedAverageLetter = "A-";
} else if (computeGWA >= 90) {
    generalWeightedAverageLetter = "B+";
} else if (computeGWA >= 87) {
    generalWeightedAverageLetter = "B";
} else if (computeGWA >= 83) {
    generalWeightedAverageLetter = "B-";
} else if (computeGWA >= 80) {
    generalWeightedAverageLetter = "C+";
} else if (computeGWA >= 77) {
    generalWeightedAverageLetter = "C";
} else if (computeGWA >= 73) {
    generalWeightedAverageLetter = "D";
}

personalinfo.GWA = computeGWA;
personalinfo.LetterGrade = generalWeightedAverageLetter;

console.log("Student Name: ", personalinfo.StudentName);
console.log("ID Number: ", personalinfo.IDNumber);
console.log("Year Level: ", personalinfo.YearLevel);
console.log("Program: ", personalinfo.Program);
console.log();
console.log("=Courses Enrolled=");
console.log(C1.CourseTitle + ": ", C1.FinalGrade);
console.log(C2.CourseTitle + ": ", C2.FinalGrade);
console.log(C3.CourseTitle + ": ", C3.FinalGrade);
console.log(C4.CourseTitle + ": ", C4.FinalGrade);
console.log(C5.CourseTitle + ": ", C5.FinalGrade);
console.log(C6.CourseTitle + ": ", C6.FinalGrade);
console.log();
console.log("General Weighted Average: ", personalinfo.GWA);
console.log("Letter Grade: ", personalinfo.LetterGrade);
