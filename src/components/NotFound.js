import { useNavigate } from "react-router-dom";
// import { Button } from "@mui/material";

export const NotFound = () => {
    const navigate = useNavigate();
    const submitHandler = () => {
        setTimeout(() => {
          
            navigate("/");
        },1000);
    };
    return (
    <>
    <h1 className="error" style={{
        marginTop: "12vw",
        marginLeft: "39vw",
        fontSize: 100
    }} > Oops..!! </h1>
    <div  className="msg" style={{
        marginTop: "1vw",
        marginLeft: "34vw",
        fontSize:25
    }}> Error 404 : The Requested Page Not Found...!!</div>
    <button  className ="btn" onClick= {submitHandler} style={{
          marginLeft: '45%',
          marginTop: '2%',
          border : '2px solid black'
    }}>Back To Home </button>
    </>
    );
}