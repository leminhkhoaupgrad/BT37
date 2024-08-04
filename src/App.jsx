import { useState } from "react";
import StudentForm from "./StudentForm";
import StudentsTable from "./StudentsTable";
import SearchBar from "./SearchBar";

function App() {
  const [students, setStudents] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  const addStudent = (newStudent) => {
    setStudents([...students, newStudent]);
  };

  const filteredStudents = students.filter((student) =>
    student.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <StudentForm addStudent={addStudent} />
      <SearchBar onSearch={setSearchTerm} />
      <StudentsTable students={filteredStudents} />
    </div>
  );
}
export default App;
