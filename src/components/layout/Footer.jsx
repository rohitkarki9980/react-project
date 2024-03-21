import { FaRegCopyright } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="bg-red-400 py-8">
      <div className="container mx-auto flex justify-evenly">
        <div className="text-white">
          <h1 className="text-2xl font-bold mb-4">Contact Us</h1>
          <p>123-456-7890</p>
          <p>123-456-7890</p>
        </div>
        <div className="text-white">
          <h1 className="text-2xl font-bold mb-4">Address</h1>
          <p>123 Street Name</p>
          <p>City, State, ZIP</p>
        </div>
        <div className="text-white">
          <h1 className="text-2xl font-bold mb-4">Email</h1>
          <p>example@example.com</p>
          <p>support@example.com</p>
        </div>
      </div>
      <div className="container mx-auto flex justify-center items-center mt-8">
        <FaRegCopyright />
        <h1 className="text-white text-2xl ml-2">Copyright 2024</h1>
      </div>
    </div>
  );
};

export default Footer;
