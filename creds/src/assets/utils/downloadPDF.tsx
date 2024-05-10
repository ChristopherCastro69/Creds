import html2canvas from "html2canvas";
import jsPDF from "jspdf";

const downloadPDF = (
  containerId: string,
  setIsDownloadModal: React.Dispatch<React.SetStateAction<boolean>>
): void => {
  const certificateContainer = document.getElementById(containerId);
  if (certificateContainer) {
    // set the downloading here to true
    // console.log("Downloading" + setIsDownloading);
    // setIsDownloading(true); // Set downloading to true when starting download

    html2canvas(certificateContainer, { scale: 5 })
      .then((canvas) => {
        const imgData = canvas.toDataURL("image/png");
        const pdf = new jsPDF("landscape", "mm", "a4");

        const pdfWidth = 297;
        const pdfHeight = 210;
        const imgWidth = pdfWidth;
        const imgHeight = (canvas.height * imgWidth) / canvas.width;

        const offsetX = (pdfWidth - imgWidth) / 2;

        if (imgHeight > pdfHeight) {
          const scaleFactor = pdfHeight / imgHeight;
          pdf.addImage(
            imgData,
            "PNG",
            offsetX,
            0,
            imgWidth * scaleFactor,
            pdfHeight
          );
        } else {
          pdf.addImage(imgData, "PNG", offsetX, 0, imgWidth, imgHeight);
        }
        pdf.save("certificate.pdf");
        alert("Download complete!"); // Show alert message when download completes
        // then set the downloading to false here
        setIsDownloadModal(false);
      })
      .catch(() => {
        alert("Error occurred while downloading PDF."); // Show alert message if there's an error
      });
  }
};

export default downloadPDF;
