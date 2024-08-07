// import React from 'react';
// import './Paysliptemplate.css';

// const PayslipTemplate = ({ data, handleChange }) => {
//   return (
//     <div className="payslip">
//       <div className="header">
//         <div className="company-info">
//           <input
//             type="text"
//             name="companyName"
//             value={data.companyName || ''}
//             onChange={handleChange}
//             placeholder="Company Name"
//           />
//           <input
//             type="text"
//             name="address"
//             value={data.address || ''}
//             onChange={handleChange}
//             placeholder="Address"
//           />
//           <input
//             type="text"
//             name="contactNumber"
//             value={data.contactNumber || ''}
//             onChange={handleChange}
//             placeholder="Contact Number"
//           />
//         </div>
//         <div className="logo">
//           <input
//             type="file"
//             name="logo"
//             onChange={(e) => handleChange(e, 'file')}
//           />
//         </div>
//       </div>
//       <h2>
//         Pay slip for the month of{' '}
//         <input
//           type="month"
//           name="salaryMonth"
//           value={data.salaryMonth || ''}
//           onChange={handleChange}
//         />
//       </h2>
//       <div className="employee-details">
//         <div className="employee-details-col">
//           <input
//             type="text"
//             name="employeeName"
//             value={data.employeeName || ''}
//             onChange={handleChange}
//             placeholder="Employee Name"
//           />
//           <input
//             type="text"
//             name="designation"
//             value={data.designation || ''}
//             onChange={handleChange}
//             placeholder="Designation"
//           />
//           <input
//             type="text"
//             name="department"
//             value={data.department || ''}
//             onChange={handleChange}
//             placeholder="Department"
//           />
//           <input
//             type="text"
//             name="location"
//             value={data.location || ''}
//             onChange={handleChange}
//             placeholder="Location"
//           />
//           <input
//             type="text"
//             name="employeeId"
//             value={data.employeeId || ''}
//             onChange={handleChange}
//             placeholder="Employee ID"
//           />
//         </div>
//         <div className="employee-details-col">
//           <input
//             type="text"
//             name="bankName"
//             value={data.bankName || ''}
//             onChange={handleChange}
//             placeholder="Bank Name"
//           />
//           <input
//             type="text"
//             name="bankAccountNumber"
//             value={data.bankAccountNumber || ''}
//             onChange={handleChange}
//             placeholder="Bank Account Number"
//           />
//           <input
//             type="text"
//             name="pan"
//             value={data.pan || ''}
//             onChange={handleChange}
//             placeholder="PAN"
//           />
//           <input
//             type="text"
//             name="epfNumber"
//             value={data.epfNumber || ''}
//             onChange={handleChange}
//             placeholder="EPF Number"
//           />
//           <input
//             type="text"
//             name="esiNumber"
//             value={data.esiNumber || ''}
//             onChange={handleChange}
//             placeholder="ESI Number"
//           />
//           <input
//             type="text"
//             name="uanNumber"
//             value={data.uanNumber || ''}
//             onChange={handleChange}
//             placeholder="UAN Number"
//           />
//         </div>
//       </div>
//         <div className="salary-info">
//         <h3>Salary Information</h3>
//         <input
//           type="number"
//           name="numberOfWorkingDays"
//           value={data.numberOfWorkingDays || ''}
//           onChange={handleChange}
//           placeholder="Number of Working Days"
//         />
//         <input
//           type="number"
//           name="perDaySalary"
//           value={data.perDaySalary || ''}
//           onChange={handleChange}
//           placeholder="Per Day Salary"
//         />
       
//       </div>
//       <div className="earnings-deductions">
//         <div className="earnings">
//           <h3>Earnings</h3>
//           <input
//             type="text"
//             name="basic"
//             value={data.basic || ''}
//             onChange={handleChange}
//             placeholder="Basic"
//             readOnly
//           />
//           <input
//             type="text"
//             name="hra"
//             value={data.hra || ''}
//             onChange={handleChange}
//             placeholder="HRA"
//           />
//           <input
//             type="text"
//             name="da"
//             value={data.da || ''}
//             onChange={handleChange}
//             placeholder="DA"
//           />
//           <input
//             type="text"
//             name="travelAllowance"
//             value={data.travelAllowance || ''}
//             onChange={handleChange}
//             placeholder="Travel Allowance"
//           />
//           <input
//             type="text"
//             name="businessIncentive"
//             value={data.businessIncentive || ''}
//             onChange={handleChange}
//             placeholder="Business Incentive"
//           />
//         </div>
//         <div className="deductions">
//           <h3>Deductions</h3>        
//           <input
//             type="text"
//             name="providentFund"
//             value={data.providentFund || ''}
//             onChange={handleChange}
//             placeholder="Provident Fund"
//             readOnly
//           />
//         </div>
//       </div>  
//       <div className="summary">
//         <h3>Net Pay for the month</h3>
//         <div className="net-pay">
//           <h3>Net Pay: {data.netPay || '0.00'}</h3>
//           <h4>Amount in Words: {data.amountInWords || 'Zero'}</h4>
//         </div>
//       </div>
//       <div className="signature">
//         <p>Employee's Signature: __________________________</p>
//       </div>
//     </div>
//   );
// };
// export default PayslipTemplate;
// import React from 'react';
// import PayslipTemplateVTS from './Vts';
// import PayslipTemplateVIS from './Vis';
// import PayslipTemplateVetri from './Vetriacedamic';
// const PayslipTemplatesPage = ({ data, handleChange }) => {
//   return (
//     <div className="templates-page">
//       <PayslipTemplateVTS data={data} handleChange={handleChange} />
//       <PayslipTemplateVIS data={data} handleChange={handleChange} />
//       <PayslipTemplateVetri data={data} handleChange={handleChange} />
//     </div>
//   );
// };
// export default PayslipTemplatesPage;
import React, { useState } from 'react';
import PayslipTemplateVTS from './Vts';
import PayslipTemplateVIS from './Vis';
import PayslipTemplateVetri from './Vetriacedamic';
import vis from './images/vistem.png'
import vts from './images/vtstem.png'
import va from './images/vatem.png'

const PayslipTemplatesPage = ({ data, handleChange }) => {
  const [selectedTemplate, setSelectedTemplate] = useState(null);

  const handleBackClick = () => {
    setSelectedTemplate(null);
  };

  return (
    <div className="templates-page">
      {selectedTemplate === null ? (
      <div className="template-buttons">
      <div onClick={() => setSelectedTemplate('VTS')} className="template-option">
        <img src={vts} alt="VTS Template" />
        <h3 className='tem-btnn'>VTS Template</h3>
      </div>
      <div onClick={() => setSelectedTemplate('VIS')} className="template-option">
        <img src={vis} alt="VIS Template" />
        <h3 className='tem-btnn'>VIS Template</h3>
      </div>
      <div onClick={() => setSelectedTemplate('Vetri')} className="template-option">
        <img src={va} alt="Vetri Template" />
        <h3 className='tem-btnn'>Vetri Template</h3>
      </div>
    </div>
    
      ) : (
        <div className="template-content">
          <button onClick={handleBackClick}>Back</button>
          {selectedTemplate === 'VTS' && <PayslipTemplateVTS data={data} handleChange={handleChange} />}
          {selectedTemplate === 'VIS' && <PayslipTemplateVIS data={data} handleChange={handleChange} />}
          {selectedTemplate === 'Vetri' && <PayslipTemplateVetri data={data} handleChange={handleChange} />}
        </div>
      )}
    </div>
  );
};

export default PayslipTemplatesPage;

