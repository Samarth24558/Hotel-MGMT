import { useState } from "react"


function Room()
{
    let [value,setInputValue]=useState({firstname:'',lastname:'',phonenumber:'',email:'',checkin:'',checkout:'',ng:'',roomtypes:'',})

    const [list,setList]=useState([])
 
    
    const handleChange = (e) =>
    {     
        const {name,value}= e.target;
        setInputValue(prevState=>({...prevState,[name]:value}));
    }

    const handleSubmit = (e) =>
    {
        e.preventDefault()
        console.log(value.firstname,value.lastname,value.phonenumber,value.email)
        setList(prevTable=>[...prevTable,value])
        setInputValue({firstname:'',lastname:'',phonenumber:'',email:'',checkin:'',checkout:'',ng:'',roomtypes:'',})

    }
    
    
    return(
    <>
        <h1><u>BOOKING ROOM</u></h1>
        <form onSubmit={handleSubmit}>
        <div className="container">
        <label htmlFor="firstname">First Name</label>
<input type="text" name="firstname" id="firstname"  onChange={handleChange} value={value.firstname} /><br />

<label htmlFor="lastname">Last Name</label>
<input type="text" name="lastname" id="lastname"  onChange={handleChange} value={value.lastname} /><br />

<label htmlFor="phonenumber">Phone Number</label>
<input type="text" name="phonenumber" id="phonenumber" onChange={handleChange} value={value.phonenumber} /><br />

<label htmlFor="email">Email</label>
<input type="text" name="email" id="email"  onChange={handleChange} value={value.email} /><br />

<label htmlFor="checkin">Check In</label>
<input type="date" name="checkin" id="checkin"  onChange={handleChange} value={value.checkin} /><br />

<label htmlFor="checkout">Check Out</label>
<input type="date" name="checkout" id="checkout"   onChange={handleChange} value={value.checkout} /><br />

<label htmlFor="ng">NG</label>
<input type="number" name="ng" id="ng" onChange={handleChange} value={value.ng} /><br />

<label htmlFor="roomtypes">Room Type</label>
<input type="text" name="roomtypes" id="roomtypes"  onChange={handleChange} value={value.roomtypes} /><br />

            <button type="submit" className="button">SUBMIT</button>
        </div>
        </form>
        <table id="customers">
            <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Phone Number</th>
            <th>Email</th>
            <th>Check In</th>
            <th>Check Out</th>
            <th>No.Guets</th>
            <th>Room Type</th>
            </tr>
            
                {
                    list.map((index,data)=>(
                        <tr key={data}>
                        <td>{index.firstname}</td>
                        <td>{index.lastname}</td>
                        <td>{index.phonenumber}</td>
                        <td>{index.email}</td>
                        <td>{index.checkin}</td>
                        <td>{index.checkout}</td>
                        <td>{index.ng}</td>
                        <td>{index.roomtypes}</td>
                        </tr>))
                }
           
           
        </table>

    </>
    )

}

export default Room