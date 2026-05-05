import { useState, type FormEvent } from "react"
import { type Employee } from "../App";

interface AddFormProps{
    insertData:(emp:Employee)=>void;
}

export default function AddForm({insertData}:AddFormProps){

    const [name,setName] = useState<string>("");
    const [salary, setSalary] = useState<number>(15000);

    function submitData(e:FormEvent<HTMLFormElement>){
        e.preventDefault()
        const newEmployee:Employee={
            id:Math.floor(Math.random()*1000), //0-999
            name:name,
            salary:salary
        }
        // console.log(newEmployee);
        insertData(newEmployee);
        setName("");
        setSalary(15000);
    }
    
    return (
        <>
        <form onSubmit={submitData}>
            <label>ชื่อพนักงาน</label>
            <input type="text" value={name} onChange={(e)=>setName(e.target.value)}/>
            {/* แปลง e.target.value เป็น number */}
            <select value={salary} onChange={(e)=>setSalary(Number(e.target.value))}>
                <option>15000</option>
                <option>20000</option>
                <option>50000</option>
                <option>80000</option>
            </select>
            <button type="submit" disabled={name.trim()===""}>บันทึก</button>
        </form>
        </>
    )
}