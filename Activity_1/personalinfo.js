let bsit_students = {
    Student1: {
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
                FinalGrade: 99 },

            Course3: { 
                CourseTitle: "Networking-1", 
                FinalGrade: 98 },

            Course4: { 
                CourseTitle: "Mobile App Development", 
                FinalGrade: 92 },

            Course5: { 
                CourseTitle: "Integrated Programming-1", 
                FinalGrade: 96 },

            Course6: { 
                CourseTitle: "Event-Driven Programming", 
                FinalGrade: 96 }
        }
    },

    Student2: {
        StudentName: "Heartson Sencio",
        IDNumber: "2026-6845",
        YearLevel: "II",
        Program: "Information Technology",
        EnrolledCourses: {
            Course1: { 
                CourseTitle: "Web Development-2", 
                FinalGrade: 98 
            },

            Course2: { 
                CourseTitle: "Arts Appreciation", 
                FinalGrade: 99 },

            Course3: { 
                CourseTitle: "Networking-1", 
                FinalGrade: 97 },

            Course4: { 
                CourseTitle: "Mobile App Development", 
                FinalGrade: 95 },

            Course5: { 
                CourseTitle: "Integrated Programming-1", 
                FinalGrade: 96 },
                
            Course6: { 
                CourseTitle: "Event-Driven Programming", 
                FinalGrade: 94 }
        }
    },

    Student3: {
        StudentName: "Raven Villaver",
        IDNumber: "2026-6975",
        YearLevel: "II",
        Program: "Information Technology",
        EnrolledCourses: {
            Course1: { 
                CourseTitle: "Web Development-2", 
                FinalGrade: 95 
            },

            Course2: { 
                CourseTitle: "Arts Appreciation", 
                FinalGrade: 94 },

            Course3: { 
                CourseTitle: "Networking-1", 
                FinalGrade: 96 },

            Course4: { 
                CourseTitle: "Mobile App Development", 
                FinalGrade: 94 },

            Course5: { 
                CourseTitle: "Integrated Programming-1", 
                FinalGrade: 95 },
                
            Course6: { 
                CourseTitle: "Event-Driven Programming", 
                FinalGrade: 96 }
        }
    },

    Student4: {
        StudentName: "Richelle Baniago",
        IDNumber: "2026-6856",
        YearLevel: "II",
        Program: "Information Technology",
        EnrolledCourses: {
            Course1: { 
                CourseTitle: "Web Development-2", 
                FinalGrade: 95 
            },

            Course2: { 
                CourseTitle: "Arts Appreciation", 
                FinalGrade: 96 },

            Course3: { 
                CourseTitle: "Networking-1", 
                FinalGrade: 94 },

            Course4: { 
                CourseTitle: "Mobile App Development", 
                FinalGrade: 95 },

            Course5: { 
                CourseTitle: "Integrated Programming-1", 
                FinalGrade: 93 },
                
            Course6: { 
                CourseTitle: "Event-Driven Programming", 
                FinalGrade: 93 }
        }
    }
};



let personalinfo1 = bsit_students.Student1;
const C1_1 = personalinfo1.EnrolledCourses.Course1;
const C2_1 = personalinfo1.EnrolledCourses.Course2;
const C3_1 = personalinfo1.EnrolledCourses.Course3;
const C4_1 = personalinfo1.EnrolledCourses.Course4;
const C5_1 = personalinfo1.EnrolledCourses.Course5;
const C6_1 = personalinfo1.EnrolledCourses.Course6;
const totalSubjects1 = 6;
const totalgrade1 = (C1_1.FinalGrade + C2_1.FinalGrade + C3_1.FinalGrade + C4_1.FinalGrade + C5_1.FinalGrade + C6_1.FinalGrade);
const totalweightedgrade1 = totalgrade1 / totalSubjects1;
const computeGWA1 = totalweightedgrade1.toFixed(2);
personalinfo1.GWA = computeGWA1;

let personalinfo2 = bsit_students.Student2;
const C1_2 = personalinfo2.EnrolledCourses.Course1;
const C2_2 = personalinfo2.EnrolledCourses.Course2;
const C3_2 = personalinfo2.EnrolledCourses.Course3;
const C4_2 = personalinfo2.EnrolledCourses.Course4;
const C5_2 = personalinfo2.EnrolledCourses.Course5;
const C6_2 = personalinfo2.EnrolledCourses.Course6;
const totalSubjects2 = 6;
const totalgrade2 = (C1_2.FinalGrade + C2_2.FinalGrade + C3_2.FinalGrade + C4_2.FinalGrade + C5_2.FinalGrade + C6_2.FinalGrade);
const totalweightedgrade2 = totalgrade2 / totalSubjects2;
const computeGWA2 = totalweightedgrade2.toFixed(2);
personalinfo2.GWA = computeGWA2;

let personalinfo3 = bsit_students.Student3;
const C1_3 = personalinfo3.EnrolledCourses.Course1;
const C2_3 = personalinfo3.EnrolledCourses.Course2;
const C3_3 = personalinfo3.EnrolledCourses.Course3;
const C4_3 = personalinfo3.EnrolledCourses.Course4;
const C5_3 = personalinfo3.EnrolledCourses.Course5;
const C6_3 = personalinfo3.EnrolledCourses.Course6;
const totalSubjects3 = 6;
const totalgrade3 = (C1_3.FinalGrade + C2_3.FinalGrade + C3_3.FinalGrade + C4_3.FinalGrade + C5_3.FinalGrade + C6_3.FinalGrade);
const totalweightedgrade3 = totalgrade3 / totalSubjects3;
const computeGWA3 = totalweightedgrade3.toFixed(2);
personalinfo3.GWA = computeGWA3;

let personalinfo4 = bsit_students.Student4;
const C1_4 = personalinfo4.EnrolledCourses.Course1;
const C2_4 = personalinfo4.EnrolledCourses.Course2;
const C3_4 = personalinfo4.EnrolledCourses.Course3;
const C4_4 = personalinfo4.EnrolledCourses.Course4;
const C5_4 = personalinfo4.EnrolledCourses.Course5;
const C6_4 = personalinfo4.EnrolledCourses.Course6;
const totalSubjects4 = 6;
const totalgrade4 = (C1_4.FinalGrade + C2_4.FinalGrade + C3_4.FinalGrade + C4_4.FinalGrade + C5_4.FinalGrade + C6_4.FinalGrade);
const totalweightedgrade4 = totalgrade4 / totalSubjects4;
const computeGWA4 = totalweightedgrade4.toFixed(2);
personalinfo4.GWA = computeGWA4;

personalinfo1.LetterGrade = "F(Failed)";
if (computeGWA1 >= 98 && computeGWA1 <= 100) {
    personalinfo1.LetterGrade = "A";
} else if (computeGWA1 >= 94 && computeGWA1 <= 97) {
    personalinfo1.LetterGrade = "A-";
} else if (computeGWA1 >= 90 && computeGWA1 <= 93) {
    personalinfo1.LetterGrade = "B+";
} else if (computeGWA1 >= 87 && computeGWA1 <= 89) {
    personalinfo1.LetterGrade = "B";
} else if (computeGWA1 >= 83 && computeGWA1 <= 86) {
    personalinfo1.LetterGrade = "B-";
} else if (computeGWA1 >= 80 && computeGWA1 <= 82) {
    personalinfo1.LetterGrade = "C+";
} else if (computeGWA1 >= 77 && computeGWA1 <= 79) {
    personalinfo1.LetterGrade = "C";
} else if (computeGWA1 >= 73 && computeGWA1 <= 76) {
    personalinfo1.LetterGrade = "D";
}

personalinfo2.LetterGrade = "F(Failed)";
if (computeGWA2 >= 98 && computeGWA2 <= 100) {
    personalinfo2.LetterGrade = "A";
} else if (computeGWA2 >= 94 && computeGWA2 <= 97) {
    personalinfo2.LetterGrade = "A-";
} else if (computeGWA2 >= 90 && computeGWA2 <= 93) {
    personalinfo2.LetterGrade = "B+";
} else if (computeGWA2 >= 87 && computeGWA2 <= 89) {
    personalinfo2.LetterGrade = "B";
} else if (computeGWA2 >= 83 && computeGWA2 <= 86) {
    personalinfo2.LetterGrade = "B-";
} else if (computeGWA2 >= 80 && computeGWA2 <= 82) {
    personalinfo2.LetterGrade = "C+";
} else if (computeGWA2 >= 77 && computeGWA2 <= 79) {
    personalinfo2.LetterGrade = "C";
} else if (computeGWA2 >= 73 && computeGWA2 <= 76) {
    personalinfo2.LetterGrade = "D";
}

personalinfo3.LetterGrade = "F(Failed)";
if (computeGWA3 >= 98 && computeGWA3 <= 100) {
    personalinfo3.LetterGrade = "A";
} else if (computeGWA3 >= 94 && computeGWA3 <= 97) {
    personalinfo3.LetterGrade = "A-";
} else if (computeGWA3 >= 90 && computeGWA3 <= 93) {
    personalinfo3.LetterGrade = "B+";
} else if (computeGWA3 >= 87 && computeGWA3 <= 89) {
    personalinfo3.LetterGrade = "B";
} else if (computeGWA3 >= 83 && computeGWA3 <= 86) {
    personalinfo3.LetterGrade = "B-";
} else if (computeGWA3 >= 80 && computeGWA3 <= 82) {
    personalinfo3.LetterGrade = "C+";
} else if (computeGWA3 >= 77 && computeGWA3 <= 79) {
    personalinfo3.LetterGrade = "C";
} else if (computeGWA3 >= 73 && computeGWA3 <= 76) {
    personalinfo3.LetterGrade = "D";
}

personalinfo4.LetterGrade = "F(Failed)";
if (computeGWA4 >= 98 && computeGWA4 <= 100) {
    personalinfo4.LetterGrade = "A";
} else if (computeGWA4 >= 94 && computeGWA4 <= 97) {
    personalinfo4.LetterGrade = "A-";
} else if (computeGWA4 >= 90 && computeGWA4 <= 93) {
    personalinfo4.LetterGrade = "B+";
} else if (computeGWA4 >= 87 && computeGWA4 <= 89) {
    personalinfo4.LetterGrade = "B";
} else if (computeGWA4 >= 83 && computeGWA4 <= 86) {
    personalinfo4.LetterGrade = "B-";
} else if (computeGWA4 >= 80 && computeGWA4 <= 82) {
    personalinfo4.LetterGrade = "C+";
} else if (computeGWA4 >= 77 && computeGWA4 <= 79) {
    personalinfo4.LetterGrade = "C";
} else if (computeGWA4 >= 73 && computeGWA4 <= 76) {
    personalinfo4.LetterGrade = "D";
}


console.log("=========================================\n     STUDENTS PERSONAL INFORMATIONS\n=========================================");

console.log(
    "\nStudent Name: " + personalinfo1.StudentName +
    "\nID Number: " + personalinfo1.IDNumber +
    "\nYear Level: " + personalinfo1.YearLevel +
    "\nProgram: " + personalinfo1.Program +
    "\nCourses:" +
    "\n  " + C1_1.CourseTitle + ": " + C1_1.FinalGrade +
    "\n  " + C2_1.CourseTitle + ": " + C2_1.FinalGrade +
    "\n  " + C3_1.CourseTitle + ": " + C3_1.FinalGrade +
    "\n  " + C4_1.CourseTitle + ": " + C4_1.FinalGrade +
    "\n  " + C5_1.CourseTitle + ": " + C5_1.FinalGrade +
    "\n  " + C6_1.CourseTitle + ": " + C6_1.FinalGrade +
    "\nGWA: " + personalinfo1.GWA +
    "\nLetter Grade: " + personalinfo1.LetterGrade +
    "\n_______________________________________________"
);

console.log(
    "\nStudent Name: " + personalinfo2.StudentName +
    "\nID Number: " + personalinfo2.IDNumber +
    "\nYear Level: " + personalinfo2.YearLevel +
    "\nProgram: " + personalinfo2.Program +
    "\nCourses:" +
    "\n  " + C1_2.CourseTitle + ": " + C1_2.FinalGrade +
    "\n  " + C2_2.CourseTitle + ": " + C2_2.FinalGrade +
    "\n  " + C3_2.CourseTitle + ": " + C3_2.FinalGrade +
    "\n  " + C4_2.CourseTitle + ": " + C4_2.FinalGrade +
    "\n  " + C5_2.CourseTitle + ": " + C5_2.FinalGrade +
    "\n  " + C6_2.CourseTitle + ": " + C6_2.FinalGrade +
    "\nGWA: " + personalinfo2.GWA +
    "\nLetter Grade: " + personalinfo2.LetterGrade +
    "\n_______________________________________________"
);

console.log(
    "\nStudent Name: " + personalinfo3.StudentName +
    "\nID Number: " + personalinfo3.IDNumber +
    "\nYear Level: " + personalinfo3.YearLevel +
    "\nProgram: " + personalinfo3.Program +
    "\nCourses:" +
    "\n  " + C1_3.CourseTitle + ": " + C1_3.FinalGrade +
    "\n  " + C2_3.CourseTitle + ": " + C2_3.FinalGrade +
    "\n  " + C3_3.CourseTitle + ": " + C3_3.FinalGrade +
    "\n  " + C4_3.CourseTitle + ": " + C4_3.FinalGrade +
    "\n  " + C5_3.CourseTitle + ": " + C5_3.FinalGrade +
    "\n  " + C6_3.CourseTitle + ": " + C6_3.FinalGrade +
    "\nGWA: " + personalinfo3.GWA +
    "\nLetter Grade: " + personalinfo3.LetterGrade +
    "\n_______________________________________________"
);

console.log(
    "\nStudent Name: " + personalinfo4.StudentName +
    "\nID Number: " + personalinfo4.IDNumber +
    "\nYear Level: " + personalinfo4.YearLevel +
    "\nProgram: " + personalinfo4.Program +
    "\nCourses:" +
    "\n  " + C1_4.CourseTitle + ": " + C1_4.FinalGrade +
    "\n  " + C2_4.CourseTitle + ": " + C2_4.FinalGrade +
    "\n  " + C3_4.CourseTitle + ": " + C3_4.FinalGrade +
    "\n  " + C4_4.CourseTitle + ": " + C4_4.FinalGrade +
    "\n  " + C5_4.CourseTitle + ": " + C5_4.FinalGrade +
    "\n  " + C6_4.CourseTitle + ": " + C6_4.FinalGrade +
    "\nGWA: " + personalinfo4.GWA +
    "\nLetter Grade: " + personalinfo4.LetterGrade +
    "\n_______________________________________________"
);