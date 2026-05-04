import { useState } from "react";

interface Employee {
  id: number;
  name: string;
  salary: number;
}

function App() {
  // ใส่ Generic เพื่อกำหนดว่าเป็น string (ใส่หรือไม่ใส่ก็ได้)
 
 
  const [person, setPerson] = useState<Employee>({
    id:100,
    name:"Tjay",
    salary:300000
  });
   const [isVisible, setIsvisible] = useState<boolean>(true);


  return (
    <>
    <button onClick={() => setIsvisible(!isVisible)}>{isVisible ? "ซ่อน" : "แสดง"}</button>
      {isVisible && (
        <div>
          <h2>รหัสพนักงาน {person.id}</h2>
          <h2>ชื่อพนักงาน {person.name}</h2>
          <h2>เงินเดือน {person.salary} บาท</h2>
          {/* น Arrow Function ถ้าเราต้องการส่งค่ากลับ (Return) เป็น Object ทันที เราต้องครอบด้วยวงเล็บกลมครับ 
          เพื่อไม่ให้คอมพิวเตอร์สับสนว่าปีกกานั้นเป็นขอบเขตของฟังก์ชันหรือเป็นตัว Object */}
          <button onClick={() => setPerson(data  => ({
            ...data,
            name:"boss",
            salary:200000
          }))}>แก้ใข</button>
        </div>
      )}
      <hr/>
       </>
  );
}

export default App;
