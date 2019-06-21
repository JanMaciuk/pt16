import React, { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Table from 'react-bootstrap/Table';
import { Streamer } from './Components/StreamerComponent';

function App() {

  const [streamersData, setStreamersData] = useState([])
  //useEffect z pusta tablica uruchamia sie tylko raz jak componentDidMount
  const url = 'https://api.twitch.tv/helix/streams?first=20&language=pl'
  
  useEffect(() => {
    const loadData = async ()=> {
      const data =  await fetch(url, {
        headers:{
          'Client-ID': '6diokkaw3yha2uty0ycs0am8pftkd3'
        }
      })
      const streams = await data.json()
      const streamsData = streams.data.map( streamer => {
        return {
          username: streamer.user_name,
          title: streamer.title,
          viewer_count: streamer.viewer_count,
        }
      })
      console.log(streams)
      setStreamersData(streams.data)
    }
    setInterval(loadData,2000) 
  } ,[])


  return (
    <Container>
      <Table striped>
        <body>
          { streamersData.map(streamer => <Streamer 
          user_name={streamer.user_name}
          viewer_count={streamer.viewer_count}
          title={streamer.title}
          />
          )}
        </body>
      </Table>
    </Container>
  );
}

export default App;


