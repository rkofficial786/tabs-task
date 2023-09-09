import React, { useEffect, useState } from 'react'

const Tab3 = () => {

    const API="https://fakestoreapi.com/products/" ;

  const [products,setProducts] =useState([])

  async function fetchData() {
    try {
      const data = await fetch(API);
      const output = await data.json();
     setProducts(output)
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
    products.map((item,index)=>{
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


  </div>
  
}

export default Tab3