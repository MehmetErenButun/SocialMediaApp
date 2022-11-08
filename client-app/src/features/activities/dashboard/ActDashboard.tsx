import React from "react";
import { Grid, GridColumn, List } from "semantic-ui-react";
import { Activity } from "../../../app/models/Activity";
import ActivityDetails from "../details/ActivityDetails";
import ActForm from "../form/ActForm";
import ActList from "./ActList";

interface Props {
  activities: Activity[];
  selectedAct : Activity | undefined;
  selectAct:(id:string)=>void;
  closeSelectAct:()=>void;
  handleOpenForm:(id:string)=>void;
  handleCloseForm:()=>void;
  editMode: boolean;
  createOrEdit:(activity:Activity)=>void;
  deleteAct:(id:string)=>void;
}
export default function ActDashboard({activities,selectAct,selectedAct,closeSelectAct,handleCloseForm,handleOpenForm,editMode,createOrEdit,deleteAct}: Props) {
  return (
    <Grid>
    <Grid.Column width="10">
    <ActList deleteAct={deleteAct} activities={activities} selectAct={selectAct}></ActList>
    </Grid.Column>
    <Grid.Column width="4">
        {selectedAct && !editMode &&
        <ActivityDetails   handleOpenForm={handleOpenForm} activity={selectedAct} closeSelectAct={closeSelectAct}></ActivityDetails>}
        {editMode &&
        <ActForm createOrEdit={createOrEdit} activity={selectedAct} handleCloseForm={handleCloseForm}></ActForm>}
    </Grid.Column>
    </Grid>
  );
}
