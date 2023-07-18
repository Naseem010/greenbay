import React from 'react';
import { BiSolidUserCircle } from "react-icons/bi";
import Navbar from "../../components/Navbar/Navbar";
import Footer from '../../components/Footer/Footer';
import './members.css';
const Members = () => {
  return (
    <div className="members">
    <div className='members1'>
    <Navbar/>
      <p>MEMBERS</p>
    </div>
    <div className='executive-members'>
<h1>EXECUTIVE MEMBERS</h1>
<div className='executiveList'>
<div className='executiveName'>
<BiSolidUserCircle className='userlogo'/>
<p>ABHISHEK SINGH</p>
</div>
<div className='executiveName'>
<BiSolidUserCircle className='userlogo'/>
<p>ABHISHEK SINGH</p>
</div>
<div className='executiveName'>
<BiSolidUserCircle className='userlogo'/>
<p>ABHISHEK SINGH</p>
</div>
<div className='executiveName'>
<BiSolidUserCircle className='userlogo'/>
<p>ABHISHEK SINGH</p>
</div>
<div className='executiveName'>
<BiSolidUserCircle className='userlogo'/>
<p>ABHISHEK SINGH</p>
</div>
<div className='executiveName'>
<BiSolidUserCircle className='userlogo'/>
<p>ABHISHEK SINGH</p>
</div>
<div className='executiveName'>
<BiSolidUserCircle className='userlogo'/>
<p>ABHISHEK SINGH</p>
</div>
<div className='executiveName'>
<BiSolidUserCircle className='userlogo'/>
<p>ABHISHEK SINGH</p>
</div>
</div>
<h1>ASSOCIATION MEMBERS</h1>
<ol>
  <li>
    ANKIT SAXENA
  </li>
  <li>
   GUNJAN SHARMA
  </li>
  <li>
    MR. RAKESH KUMAR
  </li>  
  <li>
    MR. PRAKASH BHATIA
    </li>
    <li>
    MS. KIRTI KHANNNA
    </li>
    <li>
    DR. K.L AGARWAL
    </li>
    <li>
    DR. DIVYA DWIVEDI
    </li>
</ol>
    </div>
    <Footer className="memfooter"/>
    </div>
  );    
};

export default Members;
