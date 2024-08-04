function StudentsTable({ students }) {
  return (
    <div className="mt-4 p-4">
      <table className="w-full text-left">
        <thead className="bg-gray-800 text-white">
          <tr>
            <th className="p-2">Mã SV</th>
            <th className="p-2">Họ tên</th>
            <th className="p-2">Số điện thoại</th>
            <th className="p-2">Email</th>
          </tr>
        </thead>
        <tbody className="bg-white">
          {students.map((student) => (
            <tr key={student.id} className="border-b">
              <td className="p-2">{student.id}</td>
              <td className="p-2">{student.name}</td>
              <td className="p-2">{student.phone}</td>
              <td className="p-2">{student.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default StudentsTable;
