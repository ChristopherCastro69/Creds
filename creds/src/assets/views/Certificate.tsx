import { FC, useState } from "react";
import enspaceLogo from "./../logo/enspace logo.png";
import jsLogo from "./../logo/js cebu.png";
import lmLogo from "./../logo/lm logo.png";
import rtLogo from "./../logo/react cebu.png";
import downloadPDF from "../utils/downloadPDF";

interface CertificateProps {
  name: string;
}

const Certificate: FC<CertificateProps> = ({ name }) => {
  // const [downloading, setDownloading] = useState(false);
  const [isDownloadModalOpen, setIsDownloadModalOpen] = useState(false);
  console.log("download: " + isDownloadModalOpen);

  const handleDownloadPDF = () => {
    setIsDownloadModalOpen(true); // Open the download modal(true); // Set downloading to true before starting download
    console.log("downloading:" + isDownloadModalOpen);
    downloadPDF("certificate-container", setIsDownloadModalOpen); // Pass the setDownloading function to update the downloading state
  };

  return (
    <>
      <div className="certificate h-screen flex flex-col items-center justify-center">
        <div
          className="wrapper-container p-14 border-4 border-white"
          id="certificate-container"
        >
          <div
            className="wrapper border-4 border-black rounded-sm"
            style={{ width: "880px", height: "580px" }}
          >
            <div className="certificateContainer p-10 mx-10 rounded-lg mt-10 mb-2 bg-white text-black text-center relative">
              <div className="logo mb-12 flex justify-center">
                <img
                  className="mx-3 w-auto h-8"
                  src={jsLogo}
                  alt="JavaScript Cebu Logo"
                />
                <img
                  className="mx-3 w-auto h-8"
                  src={rtLogo}
                  alt="React Cebu Logo"
                />

                <img className="mx-3 w-auto h-8" src={lmLogo} alt="LM Logo" />
                <img
                  className="mx-3 w-auto h-8"
                  src={enspaceLogo}
                  alt="Enspace Logo"
                />
              </div>
              <span className="block font-mono text-lg mb-8">
                This certificate is awarded to
              </span>
              <p className="primaryItalicText text-6xl font-bold mt-4 font-mono mb-4">
                {name}
              </p>
              <span className="text-lg block font-mono mt-16 text-start">
                For successfully participating in the{" "}
                <strong>Automated Testing Workshop </strong>
                event held last May 04, 2024 at{" "}
                <strong>enspace Cebu Business Park</strong>.
              </span>

              <span className="text-lg block font-mono mt-5 text-start">
                Given this 6th day of May, 2024 at Cebu City, Philippines
              </span>
              {/* Additional styles for logos */}
            </div>
          </div>
        </div>
        <button
          onClick={handleDownloadPDF} // Call handleDownloadPDF to start download
          // Calling the downloadPDF function with containerId
          className="border-2 border-black w-full bg-gray-200 py-4 px-6 text-base font-bold shadow transition-colors duration-300 hover:bg-black hover:text-white mt-12"
        >
          Download PDF
        </button>
      </div>
    </>
  );
};

export default Certificate;
