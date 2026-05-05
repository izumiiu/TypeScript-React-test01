// ระบุ type ข้องหน้า เพื่อป้องกันการ import ผิดประเภท เพราะถ้าไม่กำหนด type ค่าที่รับมาจะเป็นข้อมูล
import { type Employee } from "../App"; // import Employee มาจาก App component

interface EmployeeListProps{
    data:Employee[];
    deleteData:(id:number)=>void;
}

export default function EmployeeList({data, deleteData}:EmployeeListProps) {
  return (
    <>
      <ul>
        {data.map((person) => (
          <li key={person.id}>
            ชื่อพนักงาน: {person.name} , เงินเดือน {person.salary} บาท
            <button onClick={() => deleteData(person.id)}>ลบ</button>
          </li>
        ))}
      </ul>
    </>
  );
}
