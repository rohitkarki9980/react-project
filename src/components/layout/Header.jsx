import { Link } from "react-router-dom";
import { IoPersonAddSharp } from "react-icons/io5";
import { BsCart4 } from "react-icons/bs";
import { BsBoxArrowInLeft } from "react-icons/bs";
const Header = () => {
  const menuItems =[
    {
      title:"Home",
      link:"/"
    },
    {
      title:"About",
      link:"/about"
    },
    {
      title:"Contact",
      link:"/contact"
    },
    {
      title:"Our Products",
      link:"/product"
    },


  ]
  return (
    <>
      <div className=" bg-primary-100 nav1 grid md:grid-cols-4 py-3">
        <div className="banner col-span-1 text-center text-2xl font-bold text-red-400 uppercase">
          <Link to={"/"}> Store </Link>
        </div>
        <div className="search col-span-2 flex  px-5">
          <input type="search" className="w-full rounded-s-lg outline-0 px-4" />
          <button className="bg-yellow-500 w-20 rounded-r-md px-4 py-2 hover:w-25 ">
            Search
          </button>
        </div>
        <div className="icons col-span-1 flex text-2xl justify-evenly cursor-pointer">
          <Link to='/register'> <IoPersonAddSharp color="red" size={"2rem"} /> </Link>
          <Link to='/cart'><BsCart4 color="red" size={"2.2rem"} /></Link>
          <Link to='/login'><BsBoxArrowInLeft color="red" size={"2.2rem"} /> </Link>
        </div>
      </div>
      <div className="flex justify-evenly items-center bg-red-400 h-[47px]">
        <div className="flex justify-evenly w-full">
          {menuItems.map((item, index) => (
            <Link
              to={item.link}
              key={index}
              className="text-white uppercase font-bold"
            >
              {item.title}
            </Link>
          ))}
        </div>
      </div>
    </>
  );
};

export default Header;
