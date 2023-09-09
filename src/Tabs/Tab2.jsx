import React, { useEffect, useState } from "react";
import {data} from "../data"

const Tab2 = () => {

   
    const [place,setPlace] =useState(data)
  
    
  
   
  return (
    <div className="flex items-center justify-center flex-col">
   

   {
    place?.map((data,index)=>{
        return (
            <div key={index} className="w-[500px]">
                <p>
                    {data.name}
                </p>
                <p>
                    {data.info}
                </p>
             
            </div>
        )

    })
   }


  </div>
  )
}

export default Tab2