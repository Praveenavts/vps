// import React from 'react';
// import './Paysliptemplate.css';
// import './Preview.css';
// import jsPDF from 'jspdf';
// import emailjs from 'emailjs-com';
// import { useLocation } from 'react-router-dom';

// const PreviewPage = () => {
//   const { state } = useLocation();
//   const data = state.data;

//   const handlePrint = () => {
//     window.print();
//   };

//   const handleDownload = () => {
//     const doc = new jsPDF();
//     doc.text('Payslip', 10, 10);
//     doc.text(`Company Name: ${data.companyName}`, 10, 20);
//     doc.text(`Employee Name: ${data.employeeName}`, 10, 30);
//     // Add more data fields as needed
//     doc.save('payslip.pdf');
//   };

//   const handleSendMail = () => {
//     const templateParams = {
//       to_name: data.employeeName,
//       message: 'Here is your payslip.',
//       from_name: data.companyName,
//       reply_to: 'company@example.com',
//       to_email: data.email || 'employee@example.com',
//     };

//     emailjs.send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', templateParams, 'YOUR_USER_ID')
//       .then((response) => {
//         console.log('SUCCESS!', response.status, response.text);
//       }, (error) => {
//         console.log('FAILED...', error);
//       });
//   };

//   return (
//     <div className="preview">
//       <div className='payslip'>
//         <div className='header'>
//           <div className='company-info'>
//             <p><strong>Company Name:</strong>{data.companyName}</p>
//             <p><strong>Address:</strong> {data.address}</p>
//             <p><strong>Contact Number:</strong> {data.contactNumber}</p>
//           </div>
//           <div className='logo'>
//             {/* Display the logo if available */}
//           </div>
//         </div>
//         <h2>Pay slip for the month of {data.salaryMonth}</h2>
//         <div className='employee-details'>
//           <div className='employee-details-col'>
//             <p><strong>Employee Name:</strong> {data.employeeName}</p>
//             <p><strong>Designation:</strong> {data.designation}</p>
//             <p><strong>Department:</strong> {data.department}</p>
//             <p><strong>Location:</strong> {data.location}</p>
//             <p><strong>Employee ID:</strong> {data.employeeId}</p>
//           </div>
//           <div className='employee-details-col'>
//             <p><strong>Bank Name:</strong> {data.bankName}</p>
//             <p><strong>Bank Account Number:</strong> {data.bankAccountNumber}</p>
//             <p><strong>PAN:</strong> {data.pan}</p>
//             <p><strong>EPF Number:</strong> {data.epfNumber}</p>
//             <p><strong>ESI Number:</strong> {data.esiNumber}</p>
//             <p><strong>UAN Number:</strong> {data.uanNumber}</p>
//           </div>
//         </div>

//         <div className='earnings-deductions'>
//           <div className='earnings'>
//             <h3>Earnings</h3>
//             <p><strong>Basic:</strong> {data.basic}</p>
//             <p><strong>HRA:</strong> {data.hra}</p>
//             <p><strong>DA:</strong> {data.da}</p>
//             <p><strong>Travel Allowance:</strong> {data.travelAllowance}</p>
//             <p><strong>Business Incentive:</strong> {data.businessIncentive}</p>
//           </div>
//           <div className='deductions'>
//             <h3>Deductions</h3>
//             <p><strong>Loss of Pay:</strong> {data.lossOfPay}</p>
//             <p><strong>Provident Fund:</strong> {data.providentFund}</p>
//           </div>
//         </div>

//         <div className='summary'>
//           <h3>Net Pay for the month</h3>
//           <p><strong>Net Pay:</strong> {data.netPay}</p>
//           <p><strong>Amount in Words:</strong> {data.amountInWords}</p>
//         </div>

//         <div className='signature'>
//           <p>Employee's Signature: __________________________</p>
//         </div>
//       </div>

//       <div className="button-group">
//         <button onClick={handleDownload}>Download</button>
//         <button onClick={handlePrint}>Print</button>
//         <button onClick={handleSendMail}>Send via Email</button>
//       </div>
//     </div>
//   );
// };

// export default PreviewPage;
import React from 'react';
import './Paysliptemplate.css';
import './Preview.css';
import jsPDF from 'jspdf';
import emailjs from 'emailjs-com';
import { useLocation } from 'react-router-dom';

const PreviewPage = () => {
  const location = useLocation();
  const data = location.state ? location.state.data : {};

  const printContent = () => {
    const printWindow = window.open('', '', 'height=600,width=800');
    printWindow.document.write('<html><head><title>Print Payslip</title>');
    printWindow.document.write('<style>');
    printWindow.document.write('body { font-family: Arial, sans-serif; }');
    // Create an outer box border with padding
    printWindow.document.write('.outer-border { padding: 20px; border: 5px solid #000; border-radius: 10px;}');
    printWindow.document.write('.payslip { background: #fff; padding: 20px; border: 2px solid #000; border-radius: 5px; }');
    printWindow.document.write('.header, .employee-details, .earnings-deductions, .summary, .signature { margin-bottom: 20px; }');
    printWindow.document.write('.header { border-bottom: 1px solid black; padding-bottom: 10px; }');
    printWindow.document.write('.employee-details, .earnings-deductions { display: flex; justify-content: space-between; border-bottom: 1px solid black; }');
    printWindow.document.write('.button-group { display: flex; justify-content: center; margin-top: 20px; }');
    printWindow.document.write('.button-group button { margin: 0 10px; }');
    printWindow.document.write('</style>');
    printWindow.document.write('</head><body >');
    // Wrap the payslip content with the outer border class
    printWindow.document.write('<div class="outer-border">');
    printWindow.document.write(document.querySelector('.payslip').innerHTML);
    printWindow.document.write('</div>');
    printWindow.document.write('</body></html>');
    printWindow.document.close();
    printWindow.focus();
    printWindow.print();
  };
  
  

  // const handleDownload = () => {
  //   const doc = new jsPDF();
  //   doc.text('Payslip', 10, 10);
  //   doc.text(`Company Name: ${data.companyName}`, 10, 20);
  //   doc.text(`Employee Name: ${data.employeeName}`, 10, 30);
  //   // Add more data fields as needed
  //   doc.save('payslip.pdf');
  // };

  const handleDownload = () => {
    const doc = new jsPDF();
  
    // Add Company Information
    doc.setFontSize(12);
    doc.text(`Company Name: ${data.companyName}`, 10, 10);
    doc.text(`Address: ${data.address}`, 10, 20);
    doc.text(`Contact Number: ${data.contactNumber}`, 10, 30);
    doc.text(`Pay slip for the month of ${data.salaryMonth}`, 10, 40);
    
    // Add Employee Information
    doc.text(`Employee Name: ${data.employeeName}`, 10, 50);
    doc.text(`Designation: ${data.designation}`, 10, 60);
    doc.text(`Department: ${data.department}`, 10, 70);
    doc.text(`Location: ${data.location}`, 10, 80);
    doc.text(`Employee ID: ${data.employeeId}`, 10, 90);
  
    // Add Bank Information
    doc.text(`Bank Name: ${data.bankName}`, 10, 100);
    doc.text(`Bank Account Number: ${data.bankAccountNumber}`, 10, 110);
    doc.text(`PAN: ${data.pan}`, 10, 120);
    doc.text(`EPF Number: ${data.epfNumber}`, 10, 130);
    doc.text(`ESI Number: ${data.esiNumber}`, 10, 140);
    doc.text(`UAN Number: ${data.uanNumber}`, 10, 150);
  
    // Add Earnings
    doc.text('Earnings:', 10, 160);
    doc.text(`Basic: ${data.basic}`, 10, 170);
    doc.text(`HRA: ${data.hra}`, 10, 180);
    doc.text(`DA: ${data.da}`, 10, 190);
    doc.text(`Travel Allowance: ${data.travelAllowance}`, 10, 200);
    doc.text(`Business Incentive: ${data.businessIncentive}`, 10, 210);
  
    // Add Deductions
    doc.text('Deductions:', 10, 220);
    doc.text(`Loss of Pay: ${data.lossOfPay}`, 10, 230);
    doc.text(`Provident Fund: ${data.providentFund}`, 10, 240);
    doc.text(`Net Pay: ${data.netPay}`, 10, 250);
    doc.text(`Amount in Words: ${data.amountInWords}`, 10, 260);
    doc.text(`Employee's Signature: __________________________`, 10, 270);
    doc.save('payslip.pdf');
  };
  

  const handleSendMail = () => {
    const templateParams = {
      to_name: data.employeeName,
      message: 'Here is your payslip.',
      from_name: data.companyName,
      reply_to: 'company@example.com',
      to_email: data.email || 'employee@example.com',
    };

    emailjs.send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', templateParams, 'YOUR_USER_ID')
      .then((response) => {
        console.log('SUCCESS!', response.status, response.text);
      }, (error) => {
        console.log('FAILED...', error);
      });
  };

  return (
    <div className="preview">
      <div className="payslip">
        <div className="header">
          <div className="company-info">
            <p><strong>Company Name:</strong> {data.companyName}</p>
            <p><strong>Address:</strong> {data.address}</p>
            <p><strong>Contact Number:</strong> {data.contactNumber}</p>
          </div>
          <div className="logo">
            {data.logo}
          </div>
        </div>
        <h2>Pay slip for the month of {data.salaryMonth}</h2>
        <div className="employee-details">
          <div className="employee-details-col">
            <p><strong>Employee Name:</strong> {data.employeeName}</p>
            <p><strong>Designation:</strong> {data.designation}</p>
            <p><strong>Department:</strong> {data.department}</p>
            <p><strong>Location:</strong> {data.location}</p>
            <p><strong>Employee ID:</strong> {data.employeeId}</p>
          </div>
          <div className="employee-details-col">
            <p><strong>Bank Name:</strong> {data.bankName}</p>
            <p><strong>Bank Account Number:</strong> {data.bankAccountNumber}</p>
            <p><strong>PAN:</strong> {data.pan}</p>
            <p><strong>EPF Number:</strong> {data.epfNumber}</p>
            <p><strong>ESI Number:</strong> {data.esiNumber}</p>
            <p><strong>UAN Number:</strong> {data.uanNumber}</p>
          </div>
        </div>

        <div className="earnings-deductions">
          <div className="earnings">
            <h3>Earnings</h3>
            <p><strong>Basic:</strong> {data.basic}</p>
            <p><strong>HRA:</strong> {data.hra}</p>
            <p><strong>DA:</strong> {data.da}</p>
            <p><strong>Travel Allowance:</strong> {data.travelAllowance}</p>
            <p><strong>Business Incentive:</strong> {data.businessIncentive}</p>
          </div>
          <div className="deductions">
            <h3>Deductions</h3>
            <p><strong>Loss of Pay:</strong> {data.lossOfPay}</p>
            <p><strong>Provident Fund:</strong> {data.providentFund}</p>
          </div>
        </div>

        <div className="summary">
          <h3>Net Pay for the month</h3>
          <p><strong>Net Pay:</strong> {data.netPay}</p>
          <p><strong>Amount in Words:</strong> {data.amountInWords}</p>
        </div>

        <div className="signature">
          <p>Employee's Signature: __________________________</p>
        </div>
      </div>

      <div className="button-group">
        <button onClick={handleDownload}>Download</button>
        <button onClick={printContent}>Print</button>
        <button onClick={handleSendMail}>Send via Email</button>
      </div>
    </div>
  );
};

export default PreviewPage;
