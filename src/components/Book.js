import React, { useState } from 'react'
import Category from "./Category";


export default function Book() {
    const [data] = useState(Category);
  return (
   <>
   <div className="col-md-12" style={{
                        display:"grid",
                        gap:"1.6rem",

                    }}>
                        
                        <div className="row">
                    
                            {data.map((values) => {
                                const { id, title, price, text,image } = values;
                                return (
                                    <>
                                        <div className="col-md-3" style={{
                                            marginTop: 100,


                                        }} key={id}>
                                            <div className="card" >
                                            <img className="card-img-top" src={image} alt="sorry" />

                                                <div className="card-body">
                                                    <h5 className="card-title">{title} </h5>
                                                    <p className="card-text">{text} </p>
                                                    <p>Price : {price} </p>
                                                   
                                                </div>
                                            </div>





                                        </div>
                                    </>
                                )
                            })}


                        </div>
                    </div>
   </>
  )
}
