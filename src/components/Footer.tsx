import React from "react";

const Footer = () => {
  return (
    <main className="bg-blue-950 h-full text-white ">
      <br />

<div className="flex justify-center space-x-8 ">

<div>
<ul className="">
<li className=" text-xl">Cars By Make</li>
<br />
<li className="hover:underline">Toyota Cars for Sale</li>
<li className="hover:underline">Suzuki Cars for Sale</li>
<li className="hover:underline">Honda Cars for Sale</li>
<li className="hover:underline">Daihatsu Cars for Sale</li>
</ul>
</div>

<div>
<ul className="">
<li className=" text-xl">Cars By City</li>
<br />
<li className="hover:underline"> Cars in Karachi</li>
<li className="hover:underline"> Cars in Lahore</li>
<li className="hover:underline">Cars in Rawalpindi</li>
<li className="hover:underline">Cars in Peshawar</li>
<li className="hover:underline">Cars in Faisalabad</li>
</ul>
</div>

<div>
<ul className="">
<li className=" text-xl">Explore PakWheels</li>
<br />
<li className="hover:underline">Used Cars</li>
<li className="hover:underline">Used Bikes</li>
<li className="hover:underline">New Cars</li>
<li className="hover:underline">Auto Parts & Accessories</li>
<li className="hover:underline">Cool Rides</li>
<li className="hover:underline">Forums</li>
<li className="hover:underline">Autoshow</li>
</ul>
</div>

<div>
<ul className="">
<li className=" text-xl">PakWheels.com</li>
<br />
<li className="hover:underline">About PakWheels.com</li>
<li className="hover:underline">Our Products</li>
<li className="hover:underline">Advertise With Us</li>
<li className="hover:underline">How To Pay</li>
<li className="hover:underline">FAQs</li>
<li className="hover:underline">Refunds & Returns</li>
</ul>
</div>

</div>

<br />
<br />

      <ul className="flex justify-center text-white space-x-5 ">
        <li className="hover:text-gray-500 hover:scale-105 transition-transform ">About</li>
        <li className="hover:text-gray-500 hover:scale-105 transition-transform ">Products</li>
        <li className="hover:text-gray-500 hover:scale-105 transition-transform ">Contact</li>
        <li className="hover:text-gray-500 hover:scale-105 transition-transform ">Privacy</li>
        <li className="hover:text-gray-500 hover:scale-105 transition-transform ">Terms</li>
        <li className="hover:text-gray-500 hover:scale-105 transition-transform ">Sitemap</li>
      </ul>
      <br />
     
      <div className="h-[1px] bg-slate-400 mx-20"></div>

      <br />
      <p className="text-center">
        Copyright © 2003 - 2025 PakWheels (Pvt) Ltd. - All Rights Reserved.
      </p>
      <p className="text-center">Terms of Service | Privacy Policy </p>
      <p className="text-center">
        Reproduction of material from any PakWheels.com pages without permission
        is strictly prohibited.
      </p>
      <br />
      
    </main>
  );
};

export default Footer;
