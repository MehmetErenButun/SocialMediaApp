import React, { useEffect, useState } from "react";
import { Button, Container, Header, List } from "semantic-ui-react";
import axios from "axios";
import {Activity} from '../models/Activity'
import NavBar from "./NavBar";

function App() {
  const [activities, SetActivities] = useState<Activity[]>([]);

  useEffect(() => {
    axios.get<Activity[]>('http://localhost:5000/api/activities').then(res => {
      console.log(res);
      SetActivities(res.data);
    });
  }, []);

  return (
    <>
      <NavBar/>
      <Container style={{marginTop:'7em'}}>
      <List>
        {activities.map(act => (
          <List.Item key={act.id}>{act.title}</List.Item>
        ))}
      </List>
      </Container>
    </>
  );
}

export default App;
