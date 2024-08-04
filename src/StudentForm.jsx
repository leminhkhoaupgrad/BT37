import React, { useState } from "react";

function StudentForm({ addStudent }) {
  const [student, setStudent] = useState({
    id: "",
    name: "",
    phone: "",
    email: "",
  });

  const handleChange = (e) => {
    setStudent({ ...student, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addStudent(student);
    setStudent({ id: "", name: "", phone: "", email: "" }); // Reset form
  };

  return (
    <div className="container px-5 py-5 justify-center items-center min-w-full">
      <h1 className="my-5 py-2 px-5 text-3xl bg-black text-white">
        Thông tin sinh viên
      </h1>
      <form onSubmit={handleSubmit} className="grid grid-cols-2 gap-4">
        <input
          type="text"
          name="id"
          value={student.id}
          onChange={handleChange}
          placeholder="Mã SV"
          className="border p-2"
        />
        <input
          type="text"
          name="phone"
          value={student.phone}
          onChange={handleChange}
          placeholder="Số điện thoại"
          className="border p-2"
        />
        <input
          type="text"
          name="name"
          value={student.name}
          onChange={handleChange}
          placeholder="Họ tên"
          className="border p-2"
        />
        <input
          type="email"
          name="email"
          value={student.email}
          onChange={handleChange}
          placeholder="Email"
          className="border p-2"
        />
        <div>
          <button
            type="submit"
            className=" bg-green-500 text-white px-4 py-2 rounded"
          >
            Thêm sinh viên
          </button>
        </div>
      </form>
    </div>
  );
}

export default StudentForm;
