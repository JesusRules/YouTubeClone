import {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom';
import { Box } from '@mui/material';

import { Videos, ChannelCard } from './';
import { fetchFromAPI } from '../utils/fetchFromAPI';

const ChannelDetail = () => {
  const [ channelDetail, setChannelDetail ] = useState(null); //so now we can use in the rendering
  const [ videos, setVideos ] = useState([]);

  console.log(channelDetail, videos);

  const { id } = useParams();

  useEffect(() => {
    fetchFromAPI(`channels?part=snippet&id=${id}`)
      .then((data) => setChannelDetail(data?.items[0])) //saving to like state var so we can use
  
      fetchFromAPI(`search?channelId=${id}&part=snippet&order=date`)
      .then((data) => setVideos(data?.items))

    },[id])

  return (
    <Box minHeight="95vh">
      <Box>
          <div style={{
            background: 'linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(153,255,252,1) 72%, rgba(0,217,205,1) 99%)',
            zIndex: 10,
            height: '300px',
              }}
            />
            <ChannelCard channelDetail={channelDetail} marginTop="-110px"/>
      </Box>
      <Box display="flex" p="2">
          <Box sx={{ mr: { sm: '100px' }}} />
            <Videos videos={videos}/>
      </Box>

    </Box>
  )
}

export default ChannelDetail