import { Paper, IconButton, TextField } from '@material-ui/core';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import PauseIcon from '@material-ui/icons/Pause';

import { API, graphqlOperation, Storage } from 'aws-amplify';
import { listDevices } from '../graphql/queries'
import { updateDevice, createDevice } from '../graphql/mutations'
import { useState, useEffect } from 'react';
import ReactPlayer from 'react-player';
import FavoriteIcon from '@material-ui/icons/Favorite';
import AddIcon from '@material-ui/icons/Add';
import PublishIcon from '@material-ui/icons/Publish';

import { v4 as uuid } from 'uuid';

function DevicesPage(props) {

    const [devices, setDevices] = useState([]);
    const [devicePlaying, setDevicePlaying] = useState('');
    const [audioURL, setAudioURL] = useState('');
    const [showAddSong, setShowAddSong] = useState(false);
  
    useEffect(() => {
      fetchDevices();
    }, [])
  
    const toggleDevice = async idx => {
      if (devicePlaying === idx) {
        setDevicePlaying('')
        return
      }

      const deviceFilePath = devices[idx].filePath;
      try {
        const fileAccessURL = await Storage.get(deviceFilePath, { express: 60 })
        console.log('access url', fileAccessURL);
        setDevicePlaying(idx);
        setAudioURL(fileAccessURL);
        return;
      } catch (error) {
        console.error('error accessing the file s3', error);
        setAudioURL('');
        setDevicePlaying('');
      }

    }

    const fetchDevices = async () => {
      try {
        const deviceData = await API.graphql(graphqlOperation(listDevices));
        const deviceList = deviceData.data.listDevices.items;
        console.log('Device list', deviceList);
        setDevices(deviceList);
      } catch (error) {
        console.log('error on fetching devices', error);
      }
    };
  
    const addLike = async (idx) => {
        try {
            const device = devices[idx];
            device.like = device.like + 1;
            delete device.createdAt;
            delete device.updatedAt;
          
            const deviceData =await API.graphql(graphqlOperation(updateDevice, { input: device}));
            const deviceList = [...devices];
            deviceList[idx] = deviceData.data.updateDevice;
            setDevices(deviceList);

        } catch (error) {
            console.log('error on adding Like to device', error);
        }
    }

    return (
        <div className="deviceList">
          {devices.map((device, idx) => {
            return <Paper variant="outlined" elevation={2} key={`device${idx}`}>
              <div className="deviceCard">
                <IconButton aria-label="play" onClick={() => toggleDevice(idx)} >
                  { devicePlaying === idx ? <PauseIcon /> : <PlayArrowIcon />}
                  
                </IconButton>
                <div>
                  <div className="deviceTitle">{device.title}</div>
                  <div className="deviceOwner">{device.owner}</div>
                </div>  
                <div> 
                  <IconButton aria-label="like" onClick={() => addLike(idx)}>
                    <FavoriteIcon />
                  </IconButton>
                  {device.like}
                </div>
                <div className="deviceDescription">{device.description}</div>
                <br/>
              </div>
              { devicePlaying === idx ? (
                  <div className='AudioPlayer'>
                    <ReactPlayer 
                      url={audioURL}
                      controls
                      playing
                      height="50px"
                      onPause={() => toggleDevice(idx)}
                    />
                  </div>
              ) : null }
            </Paper>;  
          })}
          {
            showAddSong ? (
              <AddSong onUpload={() => {
                setShowAddSong(false)
                fetchDevices()
              }} />
            ) : (
                  <IconButton onClick={() => setShowAddSong(true)}> 
                    <AddIcon />
                  </IconButton>
            )  
          }
        </div>

    );
}

export default DevicesPage;

const AddSong = ({onUpload}) => {

  const [songData, setSongData] = useState({});
  const [mp3Data, setMp3Data] = useState()

  const uploadSong = async () => {
    //Upload the song
    console.log('songData', songData);
    const { title, description, owner } = songData;

    const { key } = await Storage.put(`${uuid()}.mp3`, mp3Data, {contentType: 'audio/mp3'});

    const createSongInput = { 
      id: uuid(),
      title, 
      description,
      owner,
      filePath: key,
      like: 0
    }
    await API.graphql(graphqlOperation(createDevice, {input: createSongInput}))
    onUpload();
  }

  return (
    <div className="newSong">
      <TextField 
        label="Title" 
        value={songData.title} 
        onChange={e => setSongData({...songData, title:e.target.value})} />
      <TextField 
        label="Artist" 
        value={songData.owner} 
        onChange={e => setSongData({...songData, owner:e.target.value})} />
      <TextField 
        label="Description" 
        value={songData.description} 
        onChange={e => setSongData({...songData, description:e.target.value})} />
      <input type="file" accept="audio/mp3" onChange={e => setMp3Data(e.target.files[0])} /> 
      <IconButton onClick={uploadSong}>
        <PublishIcon />
      </IconButton>
    </div>
  )
}
