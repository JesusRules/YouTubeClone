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
    <div style={{color: 'white'}}>{id}</div>
  )
}

export default ChannelDetail