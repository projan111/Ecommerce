import React,{useState} from 'react'
import Link from 'next/link'

const newPage = () => {
  return (
    <>
      <NavBar />
    <div className='flex relative justify-center my-10'>
      <div className='flex-col'>
        <img className='h-[70px] w-[70px] m-3 border-solid border-4 border-green-600' src="/gown.jpg" alt="gown" />
        <img className='h-[70px] w-[70px] m-3 border-solid border-2 border-green-600' src="/gown.jpg" alt="gown" />
        <img className='h-[70px] w-[70px] m-3 border-solid border-2 border-green-600' src="/gown.jpg" alt="gown" />
        <img className='h-[70px] w-[70px] m-3 border-solid border-2 border-green-600' src="/gown.jpg" alt="gown" />
      </div>
      <div>
      <img className='h-[315px] w-[315px] my-3 border-solid border-2 border-green-600' src="/gown.jpg" alt="gown" />
      </div>

      <Descriptions />
    </div>
    </>
  )
}

const NavBar = () => {
  return (
    <div className={` flex grow justify-between items-center px-10 w-screen h-[109px] top-0 bg-[#82E109] `}>
    <div className="flex felx-row my-5">
      <p
        className="my-5 text-white text-3xl px-2 hover:text-[#620C8B] cursor-pointer">
      </p>
      <Link href={'/'}>
        <h1 className="text-white text-[44px] uppercase font-semibold">
        Namuna Store
      </h1>
        </Link> 
    </div>
    <div className="flex flex-row ">
      <h2 className="cursor-pointer mx-3 text-white hover:text-[#620C8B]">
        LOGIN
      </h2>
      <h2 className="cursor-pointer text-white hover:text-[#620C8B]">
        SIGNUP
      </h2>
    </div>
  </div>

  )
}


const Descriptions = () => {
  const [count, setCount] = useState(0)
  const itemList = [
    {
      id: 1,
      image: "./gown.jpg",
      title: "Gown",
      price: "Rs 2000",
      mrp: "Rs 5000"
    },
  ]
  const clickMeBtn = () => {
    alert("Congratulation! You just made a purchase")
  }
  return (
    <div className='m-5'>
      {itemList.map((list) => (<div>
        <h1 className="uppercase text-[24px] font-semibold ">{list.title}</h1>
        <h1 className="text-[#000000] text-[14px]">"Some description about the clothes , Its a very nice warm and cozy dress.<br/> If you want to buy more product like this then you can find more products<br/> inside my site out there."</h1>
        <div className='flex items-center '>
          <h1 className='pr-4 text-lg'><del>{list.mrp}</del></h1>
          <h1 className="text-[#620C8B] text-[24px] font-semibold ">{list.price}</h1>
        </div>
        <div className='flex'>
          <span className='bg-black text-white px-2 rounded my-3 cursor-pointer'
          onClick={() => setCount(count - 1)}
          >-</span>
          <p className='m-3'>{count}</p>
          <span className='bg-black text-white px-2 rounded my-3 cursor-pointer'
          onClick={() => setCount(count + 1)}
          >+</span>
        </div>
        <button className='bg-green-600 text-gray-200 rounded px-3 py-1 hover:bg-green-500 hover:text-white'
        onClick={clickMeBtn}
        >Add to cart</button>
      </div>))}
    </div>
  )
}

export default newPage




// <h1 className="uppercase text-[24px] font-semibold ">
// {list.title}
// </h1>
// <h1 className="text-[#620C8B] text-[24px] font-semibold ">{list.price}</h1>
// </div> 
// <p className="text-[#82E109] text-[14px]">{list.desc}</p>