import React, { useState } from "react";
import Category from "./Category";
import { TextField,Button } from "@mui/material";
import { Navigate } from "react-router-dom";
export const Categories = () => {
    const [data, setData] = useState(Category);
    const filterResult = (catItem) => {
        const result = Category.filter((curData) => {
            return curData.category === catItem;
        });
        setData(result);
    };
    const submitHandler = () => {
        setTimeout(() => {
            console.log(" Searching...")
            Navigate("/");
        },1000);
    };
    return (
        <>
            {/* <h1 className="text-center text-info  " > Categories Of Books</h1> */}
            <div className="container-fluid mx-2">
                <div className="row mt-5 mx-2" >
                    <div className="col-md-3" style={{
                        marginTop: 36
                    }}>
                        <h3 style={{
                              marginLeft : 14,
                              marginTop : 33.5,
                            marginBottom: 76
                        }} className="">Search By Category</h3>
                        <button className="btn btn-warning w-100 mb-4 mx-0" onClick={() => {
                            filterResult('Computer')
                        }}>Computer </button>
                        <button className="btn btn-warning w-100 mb-4 mx-0 " onClick={() => {
                            filterResult('Biography')
                        }}>Biography    </button>
                        <button className="btn btn-warning w-100 mb-4 mx-0 " onClick={() => {
                            filterResult('Finance')
                        }}>Finance    </button>
                        <button className="btn btn-warning w-100 mb-4 mx-0 " onClick={() => {
                            filterResult('Drama')
                        }}>Drama </button>
                        <button className="btn btn-warning w-100 mb-4 mx-0 " onClick={() => {
                            filterResult('History')
                        }}>History </button>
                        <button className="btn btn-warning w-100 mb-4 mx-0 " onClick={() => {
                            setData(Category)
                        }}>All </button>
                    </div>

                    <div className="col-md-9" style={{
                        display:"grid",
                        gap:"1.6rem"
                    }}>
                        
                        <div className="row">
                        <TextField id="outlined-basic"  label="Book Name" style={{
                            marginTop: 30,
                            marginBottom : 50,
                            height: 20
                        }} variant="outlined" />
                        <Button variant="contained" onClick={submitHandler} style={{
                            height: 40
                        }}  >Search</Button>
                            {data.map((values) => {
                                const { id, title, price, image, text } = values;
                                return (
                                    <>
                                        <div className="col-md-4" style={{
                                            marginTop: 50,

                                        }} key={id}>
                                            <div className="card" >
                                                <img className="card-img-top" src={image} alt="sorry" />
                                                <div className="card-body">
                                                    <h5 className="card-title">{title} </h5>
                                                    <p className="card-text">{text} </p>
                                                    <p>Price : {price} </p>
                                                    <button className=" btn btn-dark" style={{
                                                        position: " absolute",
                                                        right : "5%",
                                                        bottom : "2%"
                                                    }}>Add To Cart</button>
                                                </div>
                                            </div>





                                        </div>
                                    </>
                                )
                            })}


                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}