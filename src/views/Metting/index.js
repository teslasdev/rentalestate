import { useNavigate } from 'react-router-dom';
import { DataGrid, GridToolbar } from '@mui/x-data-grid';
import Iconify from '../../ui-component/iconify';
import TableStyle from '../../ui-component/TableStyle';
import { useState } from 'react';
import { Stack, Button, Container, Typography, Box, Card } from '@mui/material';
import VisibilityIcon from '@mui/icons-material/Visibility';
import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { getApi } from 'views/services/api';
import moment from 'moment';
import { useEffect } from 'react';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';

import AddMeetings from './Addmeetings';
import DeleteMeeting from './Components/DeleteMeeting';

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

// ----------------------------------------------------------------------

const Meeting = () => {
  const [openAdd, setOpenAdd] = useState(false);
  const [meetingData, setMeetingData] = useState([]);
  const [openMeeting, setOpenMeeting] = useState(false);
  const navigate = useNavigate();
  const [id, setId] = useState('');
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = anchorEl;
  const user = JSON.parse(localStorage.getItem('user'));

  //-------------------------------------
  const handleClick = (id) => {
    setAnchorEl(id);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  // function for fetching all the meetings data from the db
  const fetchMeetingData = async () => {
    try {
      const response = await getApi(user.role === 'admin' ? 'api/meeting/viewallmeetings' : `api/meeting/viewusermeetings/${user._id}`);
      setMeetingData(response?.data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchMeetingData();
  }, [openAdd, openMeeting]);

  //function for meetings view

  const handleOpenView = (meetingId) => {
    navigate(`/meetings/view/${meetingId}`);
  };

  const handleOpenDeleteMeeting = (meetingId) => {
    setId(meetingId);
    setOpenMeeting(true);
  };
  const handleCloseMeeting = () => setOpenMeeting(false);
  let count = 0;
  //-----------------------------------------------

  const columns = [
    {
      field: 'id',
      headerName: '#',
      flex: 1,
      renderCell: (params) => {
        return <Box> {(count += 1)}</Box>;
      }
    },
    {
      field: 'agenda',
      headerName: 'Agenda',
      flex: 1,
      cellClassName: 'name-column--cell name-column--cell--capitalize',
      renderCell: (params) => {
        const handleFirstNameClick = () => {
          navigate(`/meetings/view/${params.row._id}`);
        };

        return <Box onClick={handleFirstNameClick}>{params.value}</Box>;
      }
    },
    {
      field: 'dateTime',
      headerName: 'Date & Time',
      flex: 1
    },
    {
      field: 'timestamp',
      headerName: 'Time Stamp',
      flex: 1,
      renderCell: (params) => {
        return <Box>{moment(params.row.timestamp).format('DD/MM hh:mm A')}</Box>;
      }
    },
    {
      field: 'createdByName',
      headerName: 'Create By',
      flex: 1,
      renderCell: (params) => {
        return <Box>{params.value}</Box>;
      }
    },

    {
      field: 'action',
      headerName: 'Action',
      flex: 1,

      renderCell: (params) => {
        return (
          <>
            <div>
              <IconButton
                aria-label="more"
                id="long-button"
                aria-controls={open ? 'long-menu' : undefined}
                aria-expanded={open ? 'true' : undefined}
                aria-haspopup="true"
                onClick={() => handleClick(params.row._id)}
              >
                <MoreVertIcon />
              </IconButton>

              <StyledMenu
                id="demo-customized-menu"
                MenuListProps={{
                  'aria-labelledby': 'demo-customized-button'
                }}
                anchorEl={anchorEl === params.row._id}
                open={open === params.row._id}
                onClose={handleClose}
              >
                <MenuItem onClick={() => handleOpenView(params.row._id)} disableRipple>
                  <VisibilityIcon style={{ marginRight: '8px', color: 'green' }} />
                  View
                </MenuItem>
                <MenuItem onClick={() => handleOpenDeleteMeeting(params.row._id)} sx={{ color: 'red' }} disableRipple>
                  <DeleteIcon style={{ marginRight: '8px', color: 'red' }} />
                  Delete
                </MenuItem>
              </StyledMenu>
            </div>
          </>
        );
      }
    }
  ];

  const handleOpenAdd = () => setOpenAdd(true);
  const handleCloseAdd = () => setOpenAdd(false);
  return (
    <>
      <AddMeetings open={openAdd} handleClose={handleCloseAdd} />
      <DeleteMeeting open={openMeeting} handleClose={handleCloseMeeting} id={id} />
      <Container>
        <Stack direction="row" alignItems="center" mb={5} justifyContent={'space-between'}>
          <Typography variant="h4">Meetings</Typography>
          <Stack direction="row" alignItems="center" justifyContent={'flex-end'} spacing={2}>
            <Button variant="contained" startIcon={<Iconify icon="eva:plus-fill" />} onClick={handleOpenAdd}>
              New Meeting
            </Button>
          </Stack>
        </Stack>
        <TableStyle>
          <Box width="100%">
            <Card style={{ height: '600px', paddingTop: '15px' }}>
              <Typography variant="h4" sx={{ margin: '2px 15px' }}>
                Meetings ( {meetingData?.length} )
              </Typography>
              <DataGrid
                rows={meetingData}
                columns={columns}
                checkboxSelection
                getRowId={(row) => row._id}
                slots={{ toolbar: GridToolbar }}
                slotProps={{ toolbar: { showQuickFilter: true } }}
              />
            </Card>
          </Box>
        </TableStyle>
      </Container>
    </>
  );
};

export default Meeting;
