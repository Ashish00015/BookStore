import { Button } from "@mui/material";
import {  useNavigate } from "react-router-dom";



export const ContactUs = () => {
    const navigate = useNavigate();
    const submitHandler = () => {
        setTimeout(() => {
            console.log(" Form Submited")
            navigate("/");
        },1000);
    };
    return (
        <>
    <div  className="page">Contact Us </div>
       
    <div style={{
        display : "flex",
        paddingLeft : 15,
        columnGap : 10
    }}>
    <input type="text" placeholder="Type Your Message Here" name="userName" />
  
    <Button variant="contained" onClick= {submitHandler} >Submit</Button>
    </div>
      </>
    );
};

