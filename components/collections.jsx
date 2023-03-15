import React from "react";
import Link from "next/link";

const collections = () => {
  const itemList = [
    {
      id: 1,
      image: "./gown.jpg",
      title: "Gown",
      price: "RS 2000",
      desc: "Some description about the clothes , Its a very nice warm and cozy dress",
    },
    {
      id: 2,
      image: "./gown.jpg",
      title: "Gown",
      price: "RS 4000",
      desc: "Hello description about the clothes , Its a very nice warm and cozy dress",
    },
    {
      id: 3,
      image: "./gown.jpg",
      title: "Gown",
      price: "RS 6000",
      desc: "Three description about the clothes , Its a very nice warm and cozy dress",
    },
    {
      id: 4,
      image: "./gown.jpg",
      title: "Gown",
      price: "RS 5000",
      desc: "Here description about the clothes , Its a very nice warm and cozy dress",
    },
    {
      id: 5,
      image: "./gown.jpg",
      title: "Gown",
      price: "RS 8000",
      desc: "Macro description about the clothes , Its a very nice warm and cozy dress",
    },
  ];
  return (
    <div className=" flex my-5 px-12">
      <h1 className="absolute uppercase text-[24px]">Collections</h1>
      <div className="flex my-[30px]">
        {itemList.map((list) => (
        <>
        <div className="mr-[62px] my-[19px] border-solid border-2 border-black-500 h-[200px] w-[200px]">
        <img src="./gown.jpg" alt="gown"/>
        <div className="my-[8px] flex justify-between">
          <h1 className="uppercase text-[24px] font-semibold ">
                {list.title}
            </h1>
          <h1 className="text-[#620C8B] text-[24px] font-semibold ">{list.price}</h1>
        </div> 
        <p className="text-[#82E109] text-[14px]">{list.desc}</p>
      </div></>))}
        
      </div>
      
    </div>
  );
};

export default collections;
