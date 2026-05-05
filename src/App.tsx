import { useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import EmployeeList from "./components/EmployeeList";

// export ออกไปเพื่อไห้ file อื่นสามารถเข้าถึง interface ของ employee ได้
export interface Employee {
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
      {/* prop data กับ dalateData */}
      {isVisible && <EmployeeList data={data} deleteData={deleteData}/>}
      <hr />
      <Footer company="นันพาทัว" year={2027} />
    </>
  );
}

export default App;
