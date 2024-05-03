import React, { useState, useEffect } from 'react';
import {
  Button,
  Grid,
  TextField,
  Typography,
  List,
  ListItem,
  Box,
  Divider,
  CircularProgress,
  Card,
  CardContent,
  Container
} from '@mui/material';
import { getApi, postApi } from 'views/services/api';
import { documentSchema } from 'schema';
import { DataGrid, GridColDef, GridToolbar } from '@mui/x-data-grid';
import { IconActivityHeartbeat, IconHeartbeat, IconPhone, IconPlane, IconTextPlus } from '@tabler/icons';
import moment from 'moment';
import TableStyle from 'ui-component/TableStyle';
import { useNavigate, useParams } from 'react-router';
import ReactAudioPlayer from 'react-audio-player';

function Details() {
  const params = useParams();

  const inboundId = params.id;
  const [callData, setCallData] = useState([]);
  const fetchInboundDetails = async () => {
    try {
      const res = await getApi(`api/llm//viewcallbyid/${inboundId}`);
      setCallData(res.data.result);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchInboundDetails();
  }, []);

  const messages = callData?.transcript && callData?.transcript.split('\n');

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
                  <IconPhone />
                </Box>
                <Typography fontSize="18px" color="#5e35b1">
                  User
                </Typography>
              </Box>

              <Box py={3}>
                <Box display={'flex'} gap={1} py={2}>
                  <Typography variant="h5">Call Id:</Typography>
                  <Typography style={{ color: 'black' }}>{callData?.call_id ? callData?.call_id : 'N/A'}</Typography>
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

                <Box display={'flex'} gap={1} py={2}>
                  <Typography variant="h5">Start Time:</Typography>
                  <Typography style={{ color: 'black' }}>{moment(callData?.start_time).format('h:mm A')}</Typography>
                </Box>

                <Box display={'flex'} gap={1} py={2}>
                  <Typography variant="h5">End Time:</Typography>
                  <Typography style={{ color: 'black' }}>{moment(callData?.end_time).format('h:mm A')}</Typography>
                </Box>
                <Box display={'flex'} alignItems={'center'} gap={1} py={2}>
                  <Typography variant="h5">User Sentiments:</Typography>
                  <Box
                    sx={
                      callData?.call_analysis?.user_sentiment == 'Positve'
                        ? {
                            backgroundColor: '#01B574',
                            color: 'white',
                            padding: '4px',
                            borderRadius: '5px'
                          }
                        : callData?.call_analysis?.user_sentiment == 'Neutral'
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
                    {callData?.call_analysis ? callData?.call_analysis?.user_sentiment : 'N/A'}
                  </Box>
                </Box>

                <Box display={'flex'} flexDirection={'column'} gap={1} py={2}>
                  <Typography variant="h5">Transcript:</Typography>
                  <Typography style={{ color: 'black' }}>{callData?.transcript && callData?.transcript.split('\n')}</Typography>
                </Box>

                <Box display={'block'} gap={1} py={2}>
                  <Typography variant="h5">Call Audio Track:</Typography>
                  <Box paddingY={3}>
                    <ReactAudioPlayer src={callData?.recordingUrl} controls />
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
                  Agent
                </Typography>
              </Box>
              <Box py={3}>
                <Box display={'flex'} gap={1} py={2}>
                  <Typography variant="h5">Agent Id:</Typography>
                  <Typography style={{ color: 'black' }}>{callData?.agent_id ? callData?.agent_id : 'N/A'}</Typography>
                </Box>

                <Box display={'flex'} alignItems={'center'} gap={1} py={2}>
                  <Typography variant="h5">Agent Sentiments:</Typography>
                  <Box
                    sx={
                      callData?.call_analysis?.agent_sentiment == 'Positive'
                        ? {
                            backgroundColor: '#01B574',
                            color: 'white',
                            padding: '4px',
                            borderRadius: '5px'
                          }
                        : callData?.call_analysis?.agent_sentiment == 'Neutral'
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
                    {callData?.call_analysis ? callData?.call_analysis?.agent_sentiment : 'N/A'}
                  </Box>
                </Box>
                <Box display={'flex'} flexDirection={'column'} gap={1} py={2}>
                  <Typography variant="h5">Call Summary :</Typography>
                  <Typography style={{ color: 'black' }}>{callData?.call_analysis ? callData?.call_analysis?.call_summary : 'N/A'}</Typography>
                </Box>

                <Box display={'flex'} alignItems={'center'} gap={1} py={2}>
                  <Typography variant="h5">Agent Completion Rating:</Typography>
                  <Box
                    sx={
                      callData?.call_analysis?.agent_task_completion_rating == 'Complete'
                        ? {
                            backgroundColor: '#01B574',
                            color: 'white',
                            padding: '4px',
                            borderRadius: '5px'
                          }
                        : callData?.call_analysis?.agent_task_completion_rating == 'Partial'
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
                    {callData?.call_analysis ? callData?.call_analysis?.agent_task_completion_rating : 'N/A'}
                  </Box>
                </Box>
                <Box display={'flex'} flexDirection={'column'} gap={1} py={2}>
                  <Typography variant="h5">Agent Completion Reason :</Typography>
                  <Typography style={{ color: 'black' }}>{callData?.call_analysis ? callData?.call_analysis?.agent_task_completion_rating_reason : 'N/A'}</Typography>
                </Box>

                <Box display={'flex'} alignItems={'center'} gap={1} py={2}>
                  <Typography variant="h5">Call Completion Rating:</Typography>
                  <Box
                    sx={
                      callData?.call_analysis?.call_completion_rating == 'Complete'
                        ? {
                            backgroundColor: '#01B574',
                            color: 'white',
                            padding: '4px',
                            borderRadius: '5px'
                          }
                        : callData?.call_analysis?.call_completion_rating == 'Partial'
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
                    {callData?.call_analysis ? callData?.call_analysis?.call_completion_rating : 'N/A'}
                  </Box>
                </Box>
                <Box display={'flex'} flexDirection={'column'} gap={1} py={2}>
                  <Typography variant="h5">Call Completion Reason :</Typography>
                  <Typography style={{ color: 'black' }}>{callData?.call_analysis ? callData?.call_analysis?.call_completion_rating_reason : 'N/A'}</Typography>
                </Box>
              </Box>
            </Box>
          </Box>

          {/* <Box display={'flex'} alignItems={'center'} mt={3} gap={2}>
              <Box
                width={'50px'}
                height={'50px'}
                borderRadius={4}
                display={'flex'}
                justifyContent={'center'}
                alignItems={'center'}
                style={{ background: '#ede7f6', color: '#5e35b1' }}
              >
                <IconTextPlus />
              </Box>
              <Typography fontSize={'18px'} color={'#5e35b1'}>
                Summary
              </Typography>
            </Box>
            <Typography fontSize={'16px'} my={5}>
              Lorem fsjddfkfsunsfkndjvakslgfvabksdkuwekfukjcsksjkf
            </Typography>
            <Box display={'flex'} alignItems={'center'} mt={3} gap={2}>
              <Box
                width={'50px'}
                height={'50px'}
                borderRadius={4}
                display={'flex'}
                justifyContent={'center'}
                alignItems={'center'}
                style={{ background: '#ede7f6', color: '#5e35b1' }}
              >
                <IconActivityHeartbeat />
              </Box>
              <Typography fontSize={'18px'} color={'#5e35b1'}>
                Transcript
              </Typography>
            </Box>
            <Typography fontSize={'16px'} my={5}>
              Lorem fsjddfkfsunsfkndjvakslgfvabksdkuwekfukjcsksjkf
            </Typography> */}
        </CardContent>
      </Card>
    </Grid>
  );
}

export default Details;
