import React, { useState, useEffect } from 'react';
import {
 
  Grid,
  Typography,
  Box,
  Card,
  CardContent,
  Container
} from '@mui/material';
import { getApi, postApi } from 'views/services/api';
import { IconPhone, IconUser } from '@tabler/icons';
import moment from 'moment';
import { useNavigate, useParams } from 'react-router';
import ReactAudioPlayer from 'react-audio-player';

function DetailsOutbound() {
  const params = useParams();

  const OuboundId = params.id;
  const [callData, setCallData] = useState([]);
  const fetchInboundDetails = async () => {
    try {
      const res = await getApi(`api/phoneCall/viewlead/${OuboundId}`);
      setCallData(res.data.data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchInboundDetails();
  }, []);


  return (
    <Grid item xs={12} md={5}>
      <Card>
        <CardContent>
          <Typography variant="h5" mb="4" gutterBottom>
            Call View
          </Typography>
          <Box display={{ base: 'block', md: 'flex' }} w="100%">
            <Box width={{ base: '100%', md: '50%' }} mt={{ base: 3, md: 0 }} mr={{ base: 0, md: 3 }}>
              <Box display="flex" alignItems="center" gap={2}>
                <Box
                  width="50px"
                  height="50px"
                  borderRadius={4}
                  display="flex"
                  justifyContent="center"
                  alignItems="center"
                  style={{ background: '#ede7f6', color: '#5e35b1' }}
                >
                  <IconUser />
                </Box>
                <Typography fontSize="18px" color="#5e35b1">
                  Basic Information
                </Typography>
              </Box>

              <Box py={3}>
                <Box display={'flex'} gap={1} py={2}>
                  <Typography variant="h5">Call Id:</Typography>
                  <Typography style={{ color: 'black' }}>{callData?.call_id ? callData?.call_id : 'N/A'}</Typography>
                </Box>

                <Box display={'flex'} gap={1} py={2}>
                  <Typography variant="h5">Name:</Typography>
                  <Typography style={{ color: 'black' }}>{callData?.name}</Typography>
                </Box>

                <Box display={'flex'} gap={1} py={2}>
                  <Typography variant="h5">Phone Number:</Typography>
                  <Typography style={{ color: 'black' }}>{callData?.phoneNumber}</Typography>
                </Box>

                <Box display={'flex'} gap={1} py={2}>
                  <Typography variant="h5">Email Address:</Typography>
                  <Typography style={{ color: 'black' }}>{callData?.email}</Typography>
                </Box>

                <Box display={'flex'} alignItems={'center'} gap={1} py={2}>
                  <Typography variant="h5">Call Status:</Typography>
                  <Box
                    sx={
                      callData?.call_status == 'ended'
                        ? {
                            backgroundColor: '#01B574',
                            color: 'white',
                            padding: '4px',
                            borderRadius: '5px'
                          }
                        : callData?.call_status == 'pending'
                        ? {
                            backgroundColor: '#ECC94B',
                            color: 'white',
                            padding: '4px',
                            borderRadius: '5px'
                          }
                        : {
                            backgroundColor: '#eb7b74',
                            color: 'white',
                            padding: '4px',
                            borderRadius: '5px'
                          }
                    }
                  >
                    {callData?.call_status}
                  </Box>
                </Box>
              </Box>
            </Box>
            <Box width={{ base: '100%', md: '50%' }} mt={{ base: 3, md: 0 }} ml={{ base: 0, md: 3 }}>
              <Box display="flex" alignItems="center" gap={2}>
                <Box
                  width="50px"
                  height="50px"
                  borderRadius={4}
                  display="flex"
                  justifyContent="center"
                  alignItems="center"
                  style={{ background: '#ede7f6', color: '#5e35b1' }}
                >
                  <IconPhone />
                </Box>
                <Typography fontSize="18px" color="#5e35b1">
                  Call Logs
                </Typography>
              </Box>
              <Box py={3}>
                <Box display={'flex'} gap={1} py={2}>
                  <Typography variant="h5">Start Time:</Typography>
                  <Typography style={{ color: 'black' }}>{moment(callData?.start_date).format('h:mm A')}</Typography>
                </Box>

                <Box display={'flex'} gap={1} py={2}>
                  <Typography variant="h5">End Time:</Typography>
                  <Typography style={{ color: 'black' }}>{moment(callData?.end_date).format('h:mm A')}</Typography>
                </Box>
                <Box display={'flex'} flexDirection={'column'} gap={1} py={2}>
                  <Typography variant="h5">Call Summary :</Typography>
                  <Typography style={{ color: 'black' }}>{callData?.summary ? callData?.summary : 'N/A'}</Typography>
                </Box>
              </Box>
            </Box>
          </Box>
        </CardContent>
      </Card>
    </Grid>
  );
}

export default DetailsOutbound;
