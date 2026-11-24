// studentModule.js

export const studentDetails = {
    name: "Edford U. Ongcal",
    id: 6857,
    program: "Bachelor of Science in Information Technology",
    yearLevel: "2nd Year",
    schoolYear: "2026-2027",
};

export function printSummary(student, status) {
    return `Student: ${student.name} | ID: ${student.id} | Program: ${student.program} | Status: ${status}`;
}