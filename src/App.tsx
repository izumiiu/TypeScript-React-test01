import { useState } from "react";

function App() {
  // ใส่ Generic เพื่อกำหนดว่าเป็น string (ใส่หรือไม่ใส่ก็ได้)
  const [name, setName] = useState<string>("Tjay");
  const [salary, setSalary] = useState<number>(30000);
  const [isVisible, setIsvisible] = useState<boolean>(true);
  const [newName, setNewname] = useState<string>("");

  return (
    <>
      {isVisible && (
        <div>
          <h2>ชื่อพนักงาน : {name}</h2>
          <h2>เงินเดือน {salary} บาท</h2>
        </div>
      )}
      <hr />
      <input  onChange={(e) => setNewname(e.target.value)} />
      <button onClick={() => setName(newName)}>ยืนยัน</button>
      <button onClick={() => setSalary((salary + 1000))}>เพิ่ม</button>
      <button onClick={() => setSalary((salary - 1000))}>ลด</button>
      <button onClick={() => setIsvisible(!isVisible)}>{isVisible ? "ซ่อน" : "แสดง"}</button>
    </>
  );
}

export default App;
