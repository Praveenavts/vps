import React from 'react';
import './Paysliptemplate.css';
import Vislogo from './images/vetri.png'

const PayslipTemplateVetri = ({ data, handleChange }) => {
  return (
    <div className="payslip">
      <h1>Vetri Academy</h1>

      <div className="header">
        <div className="company-info">
        <div className='company-logo'>
          <img src={Vislogo}></img>
        </div>
        <div className='company-details'>
<p className='comp-para'><span className='com-span'>Company Name:</span> Vetri Academy</p>
<p className='comp-para'><span className='com-span'>Address:</span> Aprils Complex,Surendai</p>
<p className='comp-para'><span className='com-span'>Mail To:</span> Business@vetriit.com</p>
<p className='comp-para'><span className='com-span'>Contact No:</span> 91 8438558527</p>
<p className='comp-para'><span className='com-span'>Website:</span> www.vetritechnologysolutions.com </p>
  
   
   
        </div>
        </div>
       
      </div>
      <h2>
        Pay slip for the month of{' '}
        <input
          type="month"
          name="salaryMonth"
          value={data.salaryMonth || ''}
          onChange={handleChange}
        />
      </h2>
      <div className="employee-details">
        <div className="employee-details-col">
          <input
            type="text"
            name="employeeName"
            value={data.employeeName || ''}
            onChange={handleChange}
            placeholder="Employee Name"
          />
          <input
            type="text"
            name="designation"
            value={data.designation || ''}
            onChange={handleChange}
            placeholder="Designation"
          />
          <input
            type="text"
            name="department"
            value={data.department || ''}
            onChange={handleChange}
            placeholder="Department"
          />
          <input
            type="text"
            name="location"
            value={data.location || ''}
            onChange={handleChange}
            placeholder="Location"
          />
          <input
            type="text"
            name="employeeId"
            value={data.employeeId || ''}
            onChange={handleChange}
            placeholder="Employee ID"
          />
        </div>
        <div className="employee-details-col">
          <input
            type="text"
            name="bankName"
            value={data.bankName || ''}
            onChange={handleChange}
            placeholder="Bank Name"
          />
          <input
            type="text"
            name="bankAccountNumber"
            value={data.bankAccountNumber || ''}
            onChange={handleChange}
            placeholder="Bank Account Number"
          />
          <input
            type="text"
            name="pan"
            value={data.pan || ''}
            onChange={handleChange}
            placeholder="PAN"
          />
          {/* <input
            type="text"
            name="epfNumber"
            value={data.epfNumber || ''}
            onChange={handleChange}
            placeholder="EPF Number"
          />
          <input
            type="text"
            name="esiNumber"
            value={data.esiNumber || ''}
            onChange={handleChange}
            placeholder="ESI Number"
          />
          <input
            type="text"
            name="uanNumber"
            value={data.uanNumber || ''}
            onChange={handleChange}
            placeholder="UAN Number"
          /> */}
        </div>
      </div>
        <div className="salary-info">
        <h3>Salary Information</h3>
        <input
          type="number"
          name="numberOfWorkingDays"
          value={data.numberOfWorkingDays || ''}
          onChange={handleChange}
          placeholder="Number of Working Days"
        />
        <input
          type="number"
          name="perDaySalary"
          value={data.perDaySalary || ''}
          onChange={handleChange}
          placeholder="Per Day Salary"
        />
       
      </div>
      <div className="earnings-deductions">
        <div className="earnings">
          <h3>Earnings</h3>
          <input
            type="text"
            name="basic"
            value={data.basic || ''}
            onChange={handleChange}
            placeholder="Basic"
            readOnly
          />
          {/* <input
            type="text"
            name="hra"
            value={data.hra || ''}
            onChange={handleChange}
            placeholder="HRA"
          />
                    <input
            type="text"
            name="businessIncentive"
            value={data.businessIncentive || ''}
            onChange={handleChange}
            placeholder="Business Incentive"
          />
 */}
          <input
            type="text"
            name="travelAllowance"
            value={data.travelAllowance || ''}
            onChange={handleChange}
            placeholder="Travel Allowance"
          />

        </div>
        <div className="deductions">
          <h3>Deductions</h3>
         
          <input
            type="text"
            name="providentFund"
            value={data.providentFund || ''}
            onChange={handleChange}
            placeholder="Provident Fund"
            readOnly
          />
        </div>
      </div>
    
      <div className="summary">
        <h3>Net Pay for the month</h3>
        <div className="net-pay">
          <h3>Net Pay: {data.netPay || '0.00'}</h3>
          <h4>Amount in Words: {data.amountInWords || 'Zero'}</h4>
        </div>
      </div>
      <div className="signature">
        <p>Employee's Signature: __________________________</p>
      </div>
    </div>
  );
};

export default PayslipTemplateVetri;
