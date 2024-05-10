import html2canvas from "html2canvas";
import jsPDF from "jspdf";

const downloadPDF = (
  containerId: string,
  setIsDownloadModal: React.Dispatch<React.SetStateAction<boolean>>
): void => {
  const certificateContainer = document.getElementById(containerId);
  if (certificateContainer) {
    // Create a custom overlay or modal to display the "Downloading..." message
    const downloadingOverlay = document.createElement("div");
    downloadingOverlay.style.position = "fixed";
    downloadingOverlay.style.top = "0";
    downloadingOverlay.style.left = "0";
    downloadingOverlay.style.width = "100%";
    downloadingOverlay.style.height = "100%";
    downloadingOverlay.style.backgroundColor = "rgba(0, 0, 0, 0.9)";
    downloadingOverlay.style.display = "flex";
    downloadingOverlay.style.alignItems = "center";
    downloadingOverlay.style.justifyContent = "center";
    downloadingOverlay.style.color = "#fff";
    downloadingOverlay.style.fontFamily = "Arial, sans-serif";
    downloadingOverlay.style.fontSize = "40px"; // Increased font size
    downloadingOverlay.innerHTML = "<h1>Downloading...</h1>";
    document.body.appendChild(downloadingOverlay);

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
        alert("Download Complete");
        // Remove the custom overlay or modal after download completes
        document.body.removeChild(downloadingOverlay);
        setIsDownloadModal(false);
      })
      .catch(() => {
        alert("Error occurred while downloading PDF."); // Show alert message if there's an error
        // Remove the custom overlay or modal if there's an error
        document.body.removeChild(downloadingOverlay);
      });
  }
};

export default downloadPDF;
