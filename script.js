const students = {
  student1: {
    name: "Riya",
    attendance: "92%",
    grades: "A+",
    remarks: "Excellent performance this term!",
  },
  student2: {
    name: "Arjun",
    attendance: "85%",
    grades: "B+",
    remarks: "Needs improvement in math.",
  },
  student3: {
    name: "Meera",
    attendance: "97%",
    grades: "A",
    remarks: "Consistently punctual and hardworking.",
  },
};

function switchStudent() {
  const selector = document.getElementById("studentSelector");
  const selected = selector.value;
  const data = students[selected];

  document.getElementById("studentName").textContent = data.name;
  document.getElementById("attendance").textContent = data.attendance;
  document.getElementById("grades").textContent = data.grades;
  document.getElementById("remarks").textContent = data.remarks;
}
