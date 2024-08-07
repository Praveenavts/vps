import React from 'react';
import './Sub.css'
const Subscriptions = () => {
  return (
    <div>
      <section className='sub'>
        <div className='sub-cont'>
          <h1 className='sub-title'>Vetri <span className='sub-span'>Payslip</span> Subscriptions</h1>
          <div className='sub-row'>
            <div className='sub-col'>
                <div className='sub-card'>
                   <div className='lite'>
                     <h1 className='lite-h1'>Lite</h1>
                   </div>
                   
                  
                   <div className='lite-cont'>
                   <h1 className='lite-h1'>500 RS / Month</h1>

                    <p>20 Employees</p>
                  <p>Single User</p>  
                   <p>Email 100 Payslips</p>
                   <p>Generate Unlimited Payslips</p>
                   <button className='sub-btn'>Select Plan</button>

                   </div>
                </div>
            </div>
            <div className='sub-col'>
                <div className='sub-card'>
                   <div className='plus'>
                     <h1 className='plus-h1' >Plus</h1>
                   </div>
                   <div className='plus-cont'>
                   <h1 className='plus-h1'>1000 RS /Month</h1>
                   
                    <p>50 Employees</p>
                  <p>Single User</p>  
                   <p>Email 250 Payslips</p>
                   <p>Generate Unlimited Payslips</p>

                   <button className='sub-btn'>Select Plan</button>
             
                   </div>   </div>
            </div>
            <div className='sub-col'>
                <div className='sub-card'>
                   <div className='premium'>
                     <h1 className='premium-h1'>Premium</h1>
                   </div>
                   <div className='premuim-cont'>
                   <h1 className='premium-h1'>2000 RS /Month</h1>

                    <p>100 Employees</p>
                  <p>Single User</p>  
                   <p>Email 500 Payslips</p>
                   <p>Generate Unlimited Payslips</p>

                   <button className='sub-btn'>Select Plan</button>
                   </div>
                </div>
            </div>
          </div>

        </div>



      </section>

    </div>
  );
};

export default Subscriptions;
