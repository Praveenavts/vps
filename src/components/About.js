
import React, { useEffect } from 'react';
import './About.css';
import Aboutimg from './images/enquiry.png';

const About = () => {
  

  return (
    <div>
      <section className='about'>
        <div className="about-container">
<div className='about-row'>
<div className='about-col'>
  <div className='about-img'>
    <img src={Aboutimg}></img>
  </div>
</div>
<div className='about-col'>
  <h1 className='about-head'>VETRI <span className='about-span'>Payslip</span></h1>
  <p className='about-para'>Payslips are important for financial management and record-keeping, and they often serve as proof of income for things like loan applications or rental agreements. They are usually issued on a regular basis, such as weekly, biweekly, or monthly, depending on the employer's payroll schedule.</p>
<p className='about-para'>A Vetri Payslip Generator is a tool or software designed to create payslips for employees, either for individual use or for entire organizations. It simplifies the process of generating accurate and professional payslips by automating calculations and formatting.</p>
<p className='about-para'>To calculate your net salary, you need to account for various deductions from your gross salary. The general formula is:

Net Salary=Gross Salary−Total Deductions</p>
</div>
</div>
        </div>
      </section>
    </div>
  );
};

export default About;
