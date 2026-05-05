import { useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";



interface Employee {
  id: number;
  name: string;
  salary: number;
}

function App() {
  const [isVisible, setIsvisible] = useState<boolean>(true);
  const [data, setData] = useState<Employee[]>([
    { id: 1, name: "Tjay", salary: 50000 },
    { id: 2, name: "boss", salary: 40000 },
    { id: 3, name: "poom", salary: 30000 },
  ]);

  function deleteData(id: number) {
      console.log("ต้องการลบข้อมูลพนักานรหัส", id);
      setData(data.filter(person => person.id !==id)); // ผลลับคือจะได้ array ก้อนใหม่ที่ id ไม่เท่ากับ id ที่ส่งมา

  }

  return (
    <>
    <Header title="แอพจัดการข้อมูลพนักงาน"/>
      <button onClick={() => setIsvisible(!isVisible)}>
        {isVisible ? "ซ่อน" : "แสดง"}
      </button>
      <p>จำนวนข้อมูล {data.length} รายการ</p>
      {isVisible && (
        <ul>
          {data.map((person) => (
            <li key={person.id}>
              ชื่อพนักงาน {person.name} , เงินเดือน {person.salary} บาท
              <button onClick={() => deleteData(person.id)}>ลบ</button>
            </li>
          ))}
        </ul>
      )}
      <hr />
      <Footer company="นันพาทัว" year={2027} />
    </>
  );
}

export default App;
