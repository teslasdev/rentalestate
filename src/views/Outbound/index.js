import { useNavigate } from 'react-router-dom';
import { DataGrid, GridToolbar } from '@mui/x-data-grid';
import Iconify from '../../ui-component/iconify';
import TableStyle from '../../ui-component/TableStyle';
import { useState } from 'react';
import { Stack, Button, Container, Typography, Box, Card } from '@mui/material';
import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import Menu from '@mui/material/Menu';
import { getApi } from 'views/services/api';
import { useEffect } from 'react';
import AddLead from './AddLead.js';
import UploadCsvLead from 'views/Lead/UploadCsvLead';

// ----------------------------------------------------------------------

//-------------------------------------------------------------------------------------------------
const StyledMenu = styled((props) => (
  <Menu
    elevation={0}
    anchorOrigin={{
      vertical: 'bottom',
      horizontal: 'right'
    }}
    transformOrigin={{
      vertical: 'top',
      horizontal: 'right'
    }}
    {...props}
  />
))(({ theme }) => ({
  '& .MuiPaper-root': {
    borderRadius: 6,
    marginTop: theme.spacing(1),
    minWidth: 180,
    color: theme.palette.mode === 'light' ? 'rgb(55, 65, 81)' : theme.palette.grey[300],
    boxShadow:
      'rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px',
    '& .MuiMenu-list': {
      padding: '4px 0'
    },
    '& .MuiMenuItem-root': {
      '& .MuiSvgIcon-root': {
        fontSize: 18,
        color: theme.palette.text.secondary,
        marginRight: theme.spacing(1.5)
      },
      '&:active': {
        backgroundColor: alpha(theme.palette.primary.main, theme.palette.action.selectedOpacity)
      }
    }
  }
}));

const Lead = () => {
  const navigate = useNavigate();
  const [openAdd, setOpenAdd] = useState(false);
  const [openEdit, setOpenEdit] = useState(false);
  const [OpenUploadCsv, setOpenUploadCsv] = useState(false);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [OutboundData, setOutbound] = useState([]);
  const user = JSON.parse(localStorage.getItem('user'));

  //-------------------------------------------
  const open = anchorEl;
  const handleClick = (id) => {
    // console.log('event.currentTarget', event.currentTarget);
    setAnchorEl(id);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleDropdownClick = (params) => {
    // console.log(params?);
    alert(params?.id);
  };

  // functions for opening the dialog boxes ---------------------------------

  // function for  mail dialog/////////////////////////////////////
  const handleOpenEmail = (id) => {
    setLeadId(id);
    setOpenSendMail(true);
  };
  const handleCloseEmail = () => setOpenSendMail(false);

  // function for  mail dialog/////////////////////////////////////
  const handleOpenCall = (id) => {
    setLeadId(id);
    setOpenCall(true);
  };
  const handleCloseCall = () => setOpenCall(false);
  // function for  delete dialog/////////////////////////////////////
  const handleOpenUploadCsv = () => {
    setOpenUploadCsv(true);
  };
  const handleCloseUploadCsv = () => setOpenUploadCsv(false);

  // function for add dialog/////////////////////////////////////

  const handleOpenAdd = () => setOpenAdd(true);
  const handleCloseAdd = () => setOpenAdd(false);

  const handleOpenEditlead = (data) => {
    setPropsData(data);
    setOpenEdit(true);
    console.log(openEdit);
  };
  const handleCloseEditlead = () => setOpenEdit(false);
  //-----------------------------------------------
  const handleOpenview = (id) => {
    navigate(`/dashboard/lead/view/${id}`);
  };

  // ----------------------------------------------------------------------

  // function for fetching all the leads data from the db

  const fetchLeadData = async () => {
    try {
      const response = await getApi(`api/phoneCall/getUploadedLead`);
      setOutbound(response?.data?.leads);
      console.log(response.data)
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchLeadData()
  },[])
  let count = 0
  const columns = [
    {
      field: 'id',
      headerName: '#',
      flex: 1,
      renderCell: () => {
        return <Box>{(count += 1)}</Box>;
      }
    },
    {
      field: 'name',
      headerName: 'Name',
      flex: 1,
      cellClassName: 'name-column--cell name-column--cell--capitalize',
      renderCell: (params) => {
        const handleFirstNameClick = () => {
          navigate(`/dashboard/lead/view/${params?.row._id ? params?.row._id : params?.row.call_id }`);
        };

        return <Box onClick={handleFirstNameClick}>{params?.value ? params?.value : 'No Name'}</Box>;
      }
    },
    {
      field: 'email',
      headerName: 'Email',
      flex: 1
    },
    {
      field: 'phoneNumber',
      headerName: 'Phone Number',
      flex: 1
    },
    // {
    //   field: 'Date',
    //   headerName: 'Date',
    //   flex: 1,
    //   renderCell: (params) => {
    //     return <Typography style={{ color: 'black' }}>{moment(params?.row?.updatedDate).format('h:mm A DD-MM-YYYY')}</Typography>
    //   }
    // },
    {
      field: 'Status',
      headerName: 'Status',
      flex: 1,
      renderCell: (params) => {
        return (
          <Button
            padding={1}
            borderRadius={1}
            onClick={() => navigate(`/dashboard/outbound-calls/view/${params.row._id}`)}
            display={'flex'}
            justifyContent={'center'}
            alignItems={'center'}
            style={{ background: '#ede7f6', color: '#5e35b1' }}
          >
            View Status
           </Button>
        );
      }
    },
  ];

  return (
    <>
      <AddLead open={openAdd} handleClose={handleCloseAdd} />
      <UploadCsvLead open={OpenUploadCsv} handleClose={handleCloseUploadCsv}/>
      <Container>
        <Stack direction="row" alignItems="center" mb={5} justifyContent={'space-between'}>
          <Typography variant="h4">Outbound-Management</Typography>
          <Stack direction="row" alignItems="center" justifyContent={'flex-end'} spacing={2}>
            <Button variant="contained" startIcon={<Iconify icon="eva:plus-fill" />} onClick={handleOpenAdd}>
              New Outbound
            </Button>
            <Button variant="contained" startIcon={<Iconify icon="eva:plus-fill" />} onClick={handleOpenUploadCsv}>
              Upload Csv
            </Button>
          </Stack>
        </Stack>
        <TableStyle>
          <Box width="100%">
            <Card style={{ height: '600px', paddingTop: '10px' }}>
              {OutboundData && (
                <>
                  <Typography variant="h4" sx={{ margin: '2px 15px' }}>
                    Outbound ( {OutboundData?.length} )
                  </Typography>
                  <DataGrid
                    rows={OutboundData}
                    columns={columns}
                    checkboxSelection
                    getRowId={(row) => row?._id ? row?._id : row?.call_id}
                    initialState={{
                      pagination: {
                        paginationModel: { page: 0, pageSize: 10 }
                      }
                    }}
                    slots={{ toolbar: GridToolbar }}
                    pageSizeOptions={[5, 20]}
                    slotProps={{ toolbar: { showQuickFilter: true } }}
                  />
                </>
              )}
            </Card>
          </Box>
        </TableStyle>
      </Container>
    </>
  );
};

export default Lead;
