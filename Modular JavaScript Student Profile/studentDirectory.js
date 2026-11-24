const studentRecord = {
    name: "Edford U. Ongcal",
    id: 6857,
    program: "Bachelor of Science in Information Technology",
    yearLevel: "2nd Year",
    schoolYear: "2026-2027",

    getEnrollmentDetails(semester, campus) {
        return `[${this.schoolYear} | ${semester}] Student ${this.name} (ID: ${this.id}) from ${this.program} (${this.yearLevel}) is registered at ${campus}.`;
    }
};

console.log(studentRecord.getEnrollmentDetails("1st Semester", "Main Campus"));