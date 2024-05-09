import React from "react";
import { FC } from "react";
import enspaceLogo from "./../logo/enspace logo.png";
import jsLogo from "./../logo/js cebu.png";
import lmLogo from "./../logo/lm logo.png";
import rtLogo from "./../logo/react cebu.png";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";

interface CertificateProps {
  name: string;
}

const Certificate: FC<CertificateProps> = ({ name }) => {
  const downloadPDF = () => {
    const certificateContainer = document.getElementById(
      "certificate-container"
    );

    if (certificateContainer) {
      html2canvas(certificateContainer).then((canvas) => {
        const imgData = canvas.toDataURL("image/png");
        const pdf = new jsPDF();
        const imgWidth = 210; // PDF page width (in mm)
        const imgHeight = (canvas.height * imgWidth) / canvas.width;
        pdf.addImage(imgData, "PNG", 0, 0, imgWidth, imgHeight);
        pdf.save("certificate.pdf");
      });
    }
  };

  return (
    <>
      <div className="h-screen flex flex-col items-center justify-center">
        <div className="wrapper border rounded-sm ">
          <div
            id="certificate-container"
            className="certificateContainer border-solid border-4 border-white p-8 rounded-lg mt-2 mb-3 bg-white text-black text-center"
          >
            <div className="logo mb-8 flex justify-center">
              <img className="mx-3" src={jsLogo} alt="JavaScript Cebu Logo" />
              <img className="mx-3" src={rtLogo} alt="React Cebu Logo" />
              <img className="mx-3" src={lmLogo} alt="LM Logo" />
              <img className="mx-3" src={enspaceLogo} alt="Enspace Logo" />
            </div>
            <span className="block font-mono text-s mb-7">
              This certificate is awarded to
            </span>
            <p className="primaryItalicText text-5xl font-bold mt-3 font-mono">
              {name}
            </p>
            <span className="text-s block font-mono mt-10 text-start">
              For successfully participating in the{" "}
              <strong>Automated Testing Workshop </strong>
              event held last May 04, 2024 at{" "}
              <strong>enspace Cebu Business Park</strong>.
            </span>

            <span className="text-s block font-mono mt-5 text-start">
              Given this 6th day of May, 2024 at Cebu City, Philippines
            </span>
            {/* Additional styles for logos */}
          </div>
        </div>
        <button
          onClick={downloadPDF}
          className="border-2 border-black w-full bg-gray-200 py-4 px-6 text-base font-bold shadow transition-colors duration-300 hover:bg-black hover:text-white mt-12"
        >
          Download PDF
        </button>
      </div>
    </>
  );
};

export default Certificate;
