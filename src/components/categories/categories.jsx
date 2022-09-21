import { Box, Container } from "@mui/material";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { getCategories, httpAddCategory } from "../../services/httpConsumer";
import Form from "./form";
import List from "./list";


const Categories = () =>{

    const [categories,setCategories] = useState([])

    const addCategory = (name) =>{
        httpAddCategory({name:name},(data)=>{
            setCategories(categories.concat(data))
        },()=>{
            
        })
        
    }

    useEffect(()=>{
        getCategories((data)=> setCategories(data),()=>{

        })
    },[])

    return (
        <Container maxWidth="md">
            <Box sx={{ bgcolor: '#cfe8fc', height: '80vh',marginTop: '5vh' }} >
                <Form addCategory={addCategory} />
                <hr/>
                <List categories={categories}/>
            </Box>
      </Container>
    )
}

export default Categories;