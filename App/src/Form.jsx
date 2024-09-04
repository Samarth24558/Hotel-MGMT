import React from "react"

function Form()
{
    return(
        <>
        <h1>Employee Details:</h1>
        <label >Emp ID:</label>
        <input type="text" /><br /><br />
        <label >Emp Name:</label>
        <input type="text" />
        <br /><br />
        <label >Designation:</label>
        <input type="text" />
        <br /><br />
        <label >Salary:</label>
        <input type="text" />
        <br /><br />
        <label >Location:</label>
        <input type="text" />
        <br /><br />
        <button type="submit">SUBMIT</button>
    </>
    )

}

export default Form