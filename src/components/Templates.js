import React, { useState } from 'react';
import PayslipTemplate from './PayslipTemplate';
import { useNavigate } from 'react-router-dom';
import * as XLSX from 'xlsx';
import './Templates.css';

// Utility function to convert number to words
const convertNumberToWords = (num) => {
  if (num === 0) return 'Zero';

  const ones = [
    'Zero', 'One', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight', 'Nine',
    'Ten', 'Eleven', 'Twelve', 'Thirteen', 'Fourteen', 'Fifteen', 'Sixteen', 'Seventeen', 'Eighteen', 'Nineteen'
  ];

  const tens = [
    '', '', 'Twenty', 'Thirty', 'Forty', 'Fifty', 'Sixty', 'Seventy', 'Eighty', 'Ninety'
  ];

  const convertChunk = (n) => {
    let str = '';
    if (n >= 100) {
      str += ones[Math.floor(n / 100)] + ' Hundred';
      n %= 100;
    }
    if (n >= 20) {
      str += (str ? ' ' : '') + tens[Math.floor(n / 10)];
      n %= 10;
    }
    if (n > 0) {
      str += (str ? ' ' : '') + ones[n];
    }
    return str;
  };

  let result = '';
  let chunkCount = 0;

  while (num > 0) {
    const chunk = num % 1000;
    if (chunk > 0) {
      result = convertChunk(chunk) + (chunkCount ? ' Thousand' : '') + (result ? ' ' + result : '');
    }
    num = Math.floor(num / 1000);
    chunkCount++;
  }

  return result.trim();
};

const Templates = () => {
  const navigate = useNavigate();
  const [data, setData] = useState({
    companyName: '',
    address: '',
    contactNumber: '',
    logo: '',
    salaryMonth: '',
    employeeName: '',
    designation: '',
    department: '',
    location: '',
    employeeId: '',
    bankName: '',
    bankAccountNumber: '',
    pan: '',
    epfNumber: '',
    esiNumber: '',
    uanNumber: '',
    basic: '',
    hra: '',
    da: '',
    travelAllowance: '',
    businessIncentive: '',
    lossOfPay: '',
    providentFund: '',
    netPay: '',
    amountInWords: '',
    email: '',
    numberOfWorkingDays: '',
    perDaySalary: '',
    totalDaysInMonth: ''
  });



  const handleChange = (e, field = null) => {
    const { name, value } = e.target;
    setData((prevData) => {
      const updatedData = { ...prevData, [field || name]: value };

      const numberOfWorkingDays = parseFloat(updatedData.numberOfWorkingDays) || 0;
      const perDaySalary = parseFloat(updatedData.perDaySalary) || 0;
      const totalDaysInMonth = 30;
      const leaveDays = totalDaysInMonth - numberOfWorkingDays;
      const basic = (numberOfWorkingDays * perDaySalary).toFixed(2); // Correct calculation based on working days
      const providentFund = (basic * 0.12).toFixed(2);
      const hra = parseFloat(updatedData.hra) || 0;
      const da = parseFloat(updatedData.da) || 0;
      const travelAllowance = parseFloat(updatedData.travelAllowance) || 0;
      const businessIncentive = parseFloat(updatedData.businessIncentive) || 0;
      const totalEarnings = parseFloat(basic) + hra + da + travelAllowance + businessIncentive;
      const totalDeductions = parseFloat(providentFund);
      const netPay = (totalEarnings - totalDeductions).toFixed(2);
      const amountInWords = convertNumberToWords(parseFloat(netPay));

      return {
        ...updatedData,
        basic,
  
        providentFund,
        netPay,
        amountInWords,
        leaveDays,
        totalDaysInMonth
      };
    });
  };

  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onload = (evt) => {
      const bstr = evt.target.result;
      const wb = XLSX.read(bstr, { type: 'binary' });
      const wsname = wb.SheetNames[0];
      const ws = wb.Sheets[wsname];
      const excelData = XLSX.utils.sheet_to_json(ws, { header: 1 });
      if (excelData.length <= 25) {
        console.error('Invalid Excel format');
        return;
      }
      const parsedData = {
        companyName: excelData[1][1] || '',
        address: excelData[2][1] || '',
        contactNumber: excelData[3][1] || '',
        salaryMonth: excelData[4][1] || '',
        employeeName: excelData[5][1] || '',
        designation: excelData[6][1] || '',
        department: excelData[7][1] || '',
        location: excelData[8][1] || '',
        employeeId: excelData[9][1] || '',
        bankName: excelData[10][1] || '',
        bankAccountNumber: excelData[11][1] || '',
        pan: excelData[12][1] || '',
        epfNumber: excelData[13][1] || '',
        esiNumber: excelData[14][1] || '',
        uanNumber: excelData[15][1] || '',
        basic: '',
        hra: excelData[16][1] || '',
        da: excelData[17][1] || '',
        travelAllowance: excelData[18][1] || '',
        businessIncentive: excelData[19][1] || '',
        lossOfPay: '',
        providentFund: '',
        netPay: '',
        amountInWords: '',
        email: excelData[25][1] || '',
        numberOfWorkingDays: excelData[21][1] || '',
        perDaySalary: excelData[22][1] || '',
        totalDaysInMonth: excelData[23][1] || ''
      };

      setData((prevData) => {
        const updatedData = { ...prevData, ...parsedData };
        const numberOfWorkingDays = parseFloat(updatedData.numberOfWorkingDays) || 0;
        const perDaySalary = parseFloat(updatedData.perDaySalary) || 0;
        const totalDaysInMonth = 30; // Calculate days in month from salaryMonth
        const leaveDays = totalDaysInMonth - numberOfWorkingDays;
        const basic = (numberOfWorkingDays * perDaySalary).toFixed(2); // Correct calculation based on working days
        const providentFund = (basic * 0.12).toFixed(2);
        const hra = parseFloat(updatedData.hra) || 0;
        const da = parseFloat(updatedData.da) || 0;
        const travelAllowance = parseFloat(updatedData.travelAllowance) || 0;
        const businessIncentive = parseFloat(updatedData.businessIncentive) || 0;
        const totalEarnings = parseFloat(basic) + hra + da + travelAllowance + businessIncentive;
        const totalDeductions =  parseFloat(providentFund);
        const netPay = (totalEarnings - totalDeductions).toFixed(2);
        const amountInWords = convertNumberToWords(parseFloat(netPay));

        return {
          ...updatedData,
          basic,
        
          providentFund,
          netPay,
          amountInWords,
          leaveDays,
          totalDaysInMonth
        };
      });
    };
    reader.readAsBinaryString(file);
  };

  const handleOkClick = () => {
    navigate('/preview', { state: { data } });
  };

  return (
    <div className="templates">
      <PayslipTemplate data={data} handleChange={handleChange} />
      <button className='btnpreview' onClick={handleOkClick}>Preview</button>
    </div>
  );
};
export default Templates;
// import React, { useState } from 'react';
// import PayslipTemplate from './PayslipTemplate';
// import { useNavigate } from 'react-router-dom';
// import * as XLSX from 'xlsx';
// import './Templates.css';

// // Utility function to convert number to words
// const convertNumberToWords = (num) => {
//   if (num === 0) return 'Zero';

//   const ones = [
//     'Zero', 'One', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight', 'Nine',
//     'Ten', 'Eleven', 'Twelve', 'Thirteen', 'Fourteen', 'Fifteen', 'Sixteen', 'Seventeen', 'Eighteen', 'Nineteen'
//   ];

//   const tens = [
//     '', '', 'Twenty', 'Thirty', 'Forty', 'Fifty', 'Sixty', 'Seventy', 'Eighty', 'Ninety'
//   ];

//   const convertChunk = (n) => {
//     let str = '';
//     if (n >= 100) {
//       str += ones[Math.floor(n / 100)] + ' Hundred';
//       n %= 100;
//     }
//     if (n >= 20) {
//       str += (str ? ' ' : '') + tens[Math.floor(n / 10)];
//       n %= 10;
//     }
//     if (n > 0) {
//       str += (str ? ' ' : '') + ones[n];
//     }
//     return str;
//   };

//   let result = '';
//   let chunkCount = 0;

//   while (num > 0) {
//     const chunk = num % 1000;
//     if (chunk > 0) {
//       result = convertChunk(chunk) + (chunkCount ? ' Thousand' : '') + (result ? ' ' + result : '');
//     }
//     num = Math.floor(num / 1000);
//     chunkCount++;
//   }

//   return result.trim();
// };

// const Templates = () => {
//   const navigate = useNavigate();
//   const [data, setData] = useState({
//     companyName: '',
//     address: '',
//     contactNumber: '',
//     logo: '',
//     salaryMonth: '',
//     employeeName: '',
//     designation: '',
//     department: '',
//     location: '',
//     employeeId: '',
//     bankName: '',
//     bankAccountNumber: '',
//     pan: '',
//     epfNumber: '',
//     esiNumber: '',
//     uanNumber: '',
//     basic: '',
//     hra: '',
//     da: '',
//     travelAllowance: '',
//     businessIncentive: '',
//     lossOfPay: '',
//     providentFund: '',
//     netPay: '',
//     amountInWords: '',
//     email: '',
//     numberOfWorkingDays: '',
//     perDaySalary: '',
//     totalDaysInMonth: '30'
//   });

//   const handleChange = (e, field = null) => {
//     const { name, value } = e.target;
//     setData((prevData) => {
//       const updatedData = { ...prevData, [field || name]: value };

//       const numberOfWorkingDays = parseFloat(updatedData.numberOfWorkingDays) || 0;
//       const perDaySalary = parseFloat(updatedData.perDaySalary) || 0;
//       const totalDaysInMonth = 30;
//       const basic = (perDaySalary * totalDaysInMonth).toFixed(2); // Basic salary calculation
//       const leaveDays = totalDaysInMonth - numberOfWorkingDays;
//       const lossOfPay = (leaveDays * perDaySalary).toFixed(2); // Loss of pay calculation
//       const providentFund = (basic * 0.12).toFixed(2); // Provident fund calculation
//       const hra = parseFloat(updatedData.hra) || 0;
//       const da = parseFloat(updatedData.da) || 0;
//       const travelAllowance = parseFloat(updatedData.travelAllowance) || 0;
//       const businessIncentive = parseFloat(updatedData.businessIncentive) || 0;
//       const totalEarnings = parseFloat(basic) + hra + da + travelAllowance + businessIncentive;
//       const totalDeductions = parseFloat(lossOfPay) + parseFloat(providentFund);
//       const netPay = (totalEarnings - totalDeductions).toFixed(2);
//       const amountInWords = convertNumberToWords(parseFloat(netPay));

//       return {
//         ...updatedData,
//         basic,
//         lossOfPay,
//         providentFund,
//         netPay,
//         amountInWords,
//         leaveDays,
//         totalDaysInMonth
//       };
//     });
//   };

//   const handleFileUpload = (e) => {
//     const file = e.target.files[0];
//     const reader = new FileReader();
//     reader.onload = (evt) => {
//       const bstr = evt.target.result;
//       const wb = XLSX.read(bstr, { type: 'binary' });
//       const wsname = wb.SheetNames[0];
//       const ws = wb.Sheets[wsname];
//       const excelData = XLSX.utils.sheet_to_json(ws, { header: 1 });
//       if (excelData.length <= 25) {
//         console.error('Invalid Excel format');
//         return;
//       }
//       const parsedData = {
//         companyName: excelData[1][1] || '',
//         address: excelData[2][1] || '',
//         contactNumber: excelData[3][1] || '',
//         salaryMonth: excelData[4][1] || '',
//         employeeName: excelData[5][1] || '',
//         designation: excelData[6][1] || '',
//         department: excelData[7][1] || '',
//         location: excelData[8][1] || '',
//         employeeId: excelData[9][1] || '',
//         bankName: excelData[10][1] || '',
//         bankAccountNumber: excelData[11][1] || '',
//         pan: excelData[12][1] || '',
//         epfNumber: excelData[13][1] || '',
//         esiNumber: excelData[14][1] || '',
//         uanNumber: excelData[15][1] || '',
//         hra: excelData[16][1] || '',
//         da: excelData[17][1] || '',
//         travelAllowance: excelData[18][1] || '',
//         businessIncentive: excelData[19][1] || '',
//         email: excelData[25][1] || '',
//         numberOfWorkingDays: excelData[21][1] || '',
//         perDaySalary: excelData[22][1] || '',
//         totalDaysInMonth: '30'
//       };

//       setData((prevData) => {
//         const updatedData = { ...prevData, ...parsedData };
//         const numberOfWorkingDays = parseFloat(updatedData.numberOfWorkingDays) || 0;
//         const perDaySalary = parseFloat(updatedData.perDaySalary) || 0;
//         const totalDaysInMonth = 30; // Fixed value for days in the month
//         const basic = (perDaySalary * totalDaysInMonth).toFixed(2); // Basic salary calculation
//         const leaveDays = totalDaysInMonth - numberOfWorkingDays;
//         const lossOfPay = (leaveDays * perDaySalary).toFixed(2); // Loss of pay calculation
//         const providentFund = (basic * 0.12).toFixed(2); 
//         const hra = parseFloat(updatedData.hra) || 0;
//         const da = parseFloat(updatedData.da) || 0;
//         const travelAllowance = parseFloat(updatedData.travelAllowance) || 0;
//         const businessIncentive = parseFloat(updatedData.businessIncentive) || 0;
//         const totalEarnings = parseFloat(basic) + hra + da + travelAllowance + businessIncentive;
//         const totalDeductions = parseFloat(lossOfPay) + parseFloat(providentFund);
//         const netPay = (totalEarnings - totalDeductions).toFixed(2);
//         const amountInWords = convertNumberToWords(parseFloat(netPay));

//         return {
//           ...updatedData,
//           basic,
//           lossOfPay,
//           providentFund,
//           netPay,
//           amountInWords,
//           leaveDays,
//           totalDaysInMonth
//         };
//       });
//     };
//     reader.readAsBinaryString(file);
//   };

//   const handleOkClick = () => {
//     navigate('/preview', { state: { data } });
//   };

//   return (
//     <div className="templates">
//       <h1>Payslip Templates</h1>
//       <div className="upload-section">
//         <input
//           type="file"
//           accept=".xlsx, .xls"
//           onChange={handleFileUpload}
//         />
//       </div>
//       <PayslipTemplate data={data} handleChange={handleChange} />
//       <button className='btnpreview' onClick={handleOkClick}>OK</button>
//       <div className='salary-output'>
//         <h2>Salary Details</h2>
//         <p><strong>Basic Salary:</strong> {data.basic}</p>
//         <p><strong>Loss of Pay:</strong> {data.lossOfPay}</p>
//         <p><strong>Provident Fund:</strong> {data.providentFund}</p>
//         <p><strong>Net Pay:</strong> {data.netPay}</p>
//         <p><strong>Amount in Words:</strong> {data.amountInWords}</p>
//       </div>
//     </div>
//   );
// };

// export default Templates;
