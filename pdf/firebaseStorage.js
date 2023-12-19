import { PDFDocument } from 'pdf-lib';
import { ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage';
import { storage } from './firebase'; // Replace with the correct path

// Function to generate and upload a PDF to Firebase Storage
export async function generateAndUploadPdf() {
  try {
    // Your PDF generation logic using pdf-lib
    const pdfDoc = await PDFDocument.create();
    // ... Perform modifications using pdf-lib ...

    // Serialize the PDF to bytes
    const pdfBytes = await pdfDoc.save();

    // Upload the PDF to Firebase Storage
    const storageRef = ref(storage, '/template/result.pdf');
    const uploadTask = uploadBytesResumable(storageRef, pdfBytes);

    uploadTask.on(
      'state_changed',
      (snapshot) => {
        // Track upload progress if needed
        const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        console.log(`Upload is ${progress}% done`);
      },
      (error) => {
        console.error('Error during upload:', error);
      },
      async () => {
        // Upload complete, get download URL
        const downloadURL = await getDownloadURL(uploadTask.snapshot.ref);
        console.log('Download URL:', downloadURL);
      }
    );
  } catch (error) {
    console.error('Error generating or uploading PDF:', error);
  }
}