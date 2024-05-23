import React from 'react';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import Button from '@mui/material/Button';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import { styled } from '@mui/material/styles';
import Papa from 'papaparse';
import { useState } from 'react';

const VisuallyHiddenInput = styled('input')({
  clip: 'rect(0 0 0 0)',
  clipPath: 'inset(50%)',
  height: 1,
  overflow: 'hidden',
  position: 'absolute',
  bottom: 0,
  left: 0,
  whiteSpace: 'nowrap',
  width: 1
});

const UploadCsvLead = ({ open , handleClose}) => {
  const [fileName, setFileName] = useState('');
  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      setFileName(file.name);
      Papa.parse(file, {
        header: true,
        complete: (result) => {
          console.log(result.data);
        },
        error: (error) => {
          console.error('Error while parsing CSV:', error);
        }
      });
    }
  };
  return (
    <Dialog maxWidth={'xs'} fullWidth={true} open={open} onClose={handleClose}>
      <DialogTitle>Upload Csv</DialogTitle>
      <DialogContent display="flex">
        <p>Upload Leads for Outbound Calls</p>
        <Button component="label" role={undefined} variant="contained" tabIndex={-1} startIcon={<CloudUploadIcon />}>
          Upload file
          <input type="file" accept=".csv" style={{ display: 'none' }} onChange={handleFileUpload} />
        </Button>
        {fileName && <p>Uploaded Csv: {fileName}</p>}
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose} color="primary">
          Cancel
        </Button>
        <Button color="primary" variant="contained">
          Upload
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default UploadCsvLead;
