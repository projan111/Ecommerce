import React from "react";

const collections = () => {
  const itemList = [
    {
      image: "./gown.jpg",
      title: "Gown",
      price: 2000,
      desc: "Some description about the clothes , Its a very nice warm and cozy dress",
    },
    {
      image: "./gown.jpg",
      title: "Gown",
      price: 4000,
      desc: "Some description about the clothes , Its a very nice warm and cozy dress",
    },
    {
      image: "./gown.jpg",
      title: "Gown",
      price: 6000,
      desc: "Some description about the clothes , Its a very nice warm and cozy dress",
    },
    {
      image: "./gown.jpg",
      title: "Gown",
      price: 5000,
      desc: "Some description about the clothes , Its a very nice warm and cozy dress",
    },
    {
      image: "./gown.jpg",
      title: "Gown",
      price: 8000,
      desc: "Some description about the clothes , Its a very nice warm and cozy dress",
    },
  ];
  return (
    <div className=" flex my-5 px-12">
      <h1 className="absolute uppercase text-[24px]">Collections</h1>
      <div className="flex my-[30px]">
        {itemList.map((list) => (
        <>
        <div className="mr-[62px] my-[19px] border-solid border-2 border-black-500 h-[200px] w-[200px]">
        <img src="./gown.jpg" alt="gown" />
        <div className="my-[8px] flex justify-between">
          <h1 className="uppercase text-[24px] font-semibold ">{list.title}</h1>
          <h1 className="text-[#620C8B] text-[24px] font-semibold ">RS 2000</h1>
        </div>
        <p className="text-[#82E109] text-[14px]">
          Some description about the clothes , Its a very nice warm and cozy
          dress
        </p>
      </div></>))}
        
      </div>
      
    </div>
  );
};

export default collections;
