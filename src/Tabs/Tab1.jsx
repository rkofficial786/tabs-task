import React, { useEffect, useState } from "react";

const Tab1 = () => {
  const API = "https://fakestoreapi.com/products";
  const [items,setItems] =useState([])

  async function fetchData() {
    try {
      const data = await fetch(API);
      const output = await data.json();
      setItems(output)
      console.log(output);
    } catch (error) {
      console.log("Error fetching data");
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  return <div className="flex items-center justify-center flex-col">
   

   {
    items.map((item,index)=>{
        return (
            <div key={index} className="w-[500px]">
                <p>
                    {item.title}
                </p>
                <p>
                    {item.description}
                </p>
               <img src={item.image} className="w-[300px]" alt="" />
            </div>
        )

    })
   }


  </div>;
};

export default Tab1;
