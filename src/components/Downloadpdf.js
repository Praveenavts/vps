import React from 'react';
import { PDFDownloadLink, Document, Page, Text } from '@react-pdf/renderer';

const DownloadPDF = () => {
  const MyDocument = () => (
    <Document>
      <Page>
        <Text>Payslip Content</Text>
      </Page>
    </Document>
  );

  return (
    <div>
      <h2>Download PDF</h2>
      <PDFDownloadLink document={<MyDocument />} fileName="payslip.pdf">
        {({ loading }) => (loading ? 'Loading document...' : 'Download now!')}
      </PDFDownloadLink>
    </div>
  );
};

export default DownloadPDF;
