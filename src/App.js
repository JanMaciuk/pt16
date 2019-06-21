import React, { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container'


function App() {

  const [streamersData, setStreamersData] = useState(null)
  
  //useEffect z pusta tablica uruchamia sie tylko raz jak componentDidMount
  const url = 'https://api.twitch.tv/helix/streams?first=20&language=pl'
  
  useEffect(() => {
    const loadData = async ()=> {
      const data =  await fetch(url, {
        headers:{
          'Client-ID': 'cecgyyqyqwufh14zvxx3q4o49tqmxr'
        }
      })
      const streams = await data.json()
      console.log(streams)
      setStreamersData(streams.data)
    }
    loadData() 
  } ,[])


  return (
    <Container>
      {console.log(streamersData)}
    </Container>
  );
}

export default App;


