enum GenderType {
  Male,
  Female,
}

interface Student {
  studentID: number;
  studentName: string;
  age?: number;
  gender: GenderType;
  subject: string;
  courseCompleted: boolean;
  addComment?: (comment: string) => string;
}

export function getStudentDetails(studentID: number): Student {
  return {
    studentID: 12345,
    studentName: "john",
    age: 12,
    gender: GenderType.Male,
    subject: "mongodb",
    courseCompleted: false,
  };
}

let someValue: number | string
someValue = 5;
someValue = "stringgg";
