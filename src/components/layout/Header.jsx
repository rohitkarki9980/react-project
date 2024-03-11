import { Link } from "react-router-dom";

const Header = () => {
  return (
<>
<div className="nav1 grid md:grid-cols-4 bg-slate-200 py-3">
  <div className="banner col-span-1 text-center text-2xl font-bold text-red-400 uppercase">
  <Link to={"/"}> Store </Link>
  </div>
  <div className="search col-span-2 flex  px-5">
    <input type="search" className="w-full rounded-s-lg outline-0 px-4" />
    <button className="bg-yellow-500 w-20 rounded-r-md px-4 py-2">Search</button>
  </div>
  <div className="icons col-span-1">Icon</div>

</div>

<div className="flex justify-between items-center bg-fuchsia-400 h-20">
      
      <Link to={'/'}>Home</Link>
      <Link to={'/about'}>About</Link>
      <div className="relative group">
        <Link to={'/contact'} className="hover:text-blue-500">Contact us</Link>
        <ul className="absolute hidden bg-white py-2 px-4 rounded shadow-md mt-2 group-hover:block">
          <li>Phone number</li>
          <li>Address</li>
          <li>Email</li>
        </ul>
      </div>
      <Link to={'/admin'}>Admin</Link>
    </div>
</>
  );
};

export default Header;
