import React,{useState} from 'react'

function EMP()
{
    const [value,setVal]=useState({empid:'',empname:'',ta:'',da:'',ts:''})

    const [list,setList]=useState([]);

    const handleChange=(e)=>
    {
        const {name,value}=e.target;
        setVal(prevState=>({...prevState,[name]:value}))

    }

    const handleSubmit = (e)=>
    {
        e.preventDefault();
        setList(prevTable=>[...prevTable,value])
        setVal({empid:'',empname:'',ta:'',da:'',ts:''})

    }
    return(
        <>
        <h1>Employee Salary Form</h1>

        <form onSubmit={handleSubmit}>

        <input type="number" name="empid"  placeholder='Employee Id' value={value.empid} onChange={handleChange} required/><br /><br />
        <input type="text" name="empname" placeholder='Employee Name' value={value.empname} onChange={handleChange} required/><br /><br />
        <input type="number" name="ta" placeholder='TA' value={value.ta} onChange={handleChange} required/><br /><br />
        <input type="number" name="da" placeholder='DA' value={value.da} onChange={handleChange} required/><br /><br />
        <input type="number" name="ts" placeholder='TS' value={value.ts} onChange={handleChange} required/><br /><br />

        <button type='submit'>Submit</button><br /><br />

        </form>

        <table border={1}>
            <tr>
                <th>Emp ID</th>
                <th>Emp name</th>
                <th>TA</th>
                <th>DA</th>
                <th>Total Salary</th>
            </tr>
            
            {
                list.map((data,index)=>
                <tr key={index}>
                    <td>{data.empid}</td>
                    <td>{data.empname}</td>
                    <td>{data.ta}</td>
                    <td>{data.da}</td>
                    <td>{data.ts}</td>
                </tr>
                )

            }
        </table>

        </>
    )

}

export default EMP