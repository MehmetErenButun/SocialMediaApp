import React, { useEffect, useState } from "react";
import { Container} from "semantic-ui-react";
import axios from "axios";
import {Activity} from '../models/Activity'
import NavBar from "./NavBar";
import ActDashboard from "../../features/activities/dashboard/ActDashboard";
import {v4 as uuid} from 'uuid';


function App() {
  const [activities, SetActivities] = useState<Activity[]>([]);
  const [selectedAct,SetSelectedAct] = useState<Activity | undefined>(undefined);
  const [editMode,SetEditMode]=useState(false);

  function handleSelectedAct(id:string){
   SetSelectedAct(activities.find(x=>x.id===id));
  }

  function closeSelectAct(){
    SetSelectedAct(undefined);
  }

  function handleOpenForm(id?:string)
  {
    id ? handleSelectedAct(id) : closeSelectAct() ;
    SetEditMode(true);

  }

  function handleCloseForm()
  {
    SetEditMode(false);
  }

  function createOrEdit(activity:Activity)
  {
    activity.id ? SetActivities([...activities.filter(x=>x.id!==activity.id),activity])
    : SetActivities([...activities,{...activity,id:uuid()}]);
    SetEditMode(false);
    SetSelectedAct(activity);
  }

  function handleDeleteAct(id:string)
  {
    SetActivities([...activities.filter(x=>x.id!==id)])
  }



  useEffect(() => {
    axios.get<Activity[]>('http://localhost:5000/api/activities').then(res => {
      console.log(res);
      SetActivities(res.data);
    });
  }, []);

  return (
    <>
      <NavBar handleOpenForm={handleOpenForm}  />
      <Container style={{marginTop:'7em'}}>
     <ActDashboard 
     handleOpenForm={handleOpenForm}
     handleCloseForm={handleCloseForm}
     editMode = {editMode}
     createOrEdit={createOrEdit}
     activities={activities} 
     selectAct={handleSelectedAct} 
     deleteAct={handleDeleteAct}
     selectedAct={selectedAct} 
     closeSelectAct={closeSelectAct}></ActDashboard>
      </Container>
    </>
  );
}

export default App;
