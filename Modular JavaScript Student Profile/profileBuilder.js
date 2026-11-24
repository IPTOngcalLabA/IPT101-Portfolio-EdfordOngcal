function createStudentProfile(name,id,program,yearLevel,schoolYear) {
    return {
        name: name,
        id: id,
        program: program,
        yearLevel: yearLevel,
        schoolYear: schoolYear,
    };
    }


const myProfile = createStudentProfile(
    "Edford U. Ongcal",
    6857,
    "Bachelor of Science in Information Technology",
    2,
    "2026-2027"
);

console.log(myProfile);