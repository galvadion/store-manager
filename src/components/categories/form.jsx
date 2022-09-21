import { Button, TextField } from "@mui/material";
import React from "react";
import { useState } from "react";

const Form = ({addCategory}) =>{

    const [name,setName] = useState("")
    const handleChange = (e) => {
        setName(e.target.value)
    }

    return (
        <>
            <TextField id="outlined-basic" 
                value={name}
                label="Name"
                onChange={handleChange}
                variant="outlined" />
            <Button 
                variant="contained" 
                onClick={()=>addCategory(name)}>
                Add
            </Button>
        </>
    )
}

export default Form;