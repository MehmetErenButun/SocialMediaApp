import { Button, Item, ItemDescription, Label, Segment } from "semantic-ui-react";
import { Activity } from "../../../app/models/Activity";

interface Props {
  activities: Activity[];
  selectAct: (id: string) => void;
  deleteAct:(id:string)=>void;
}

export default function ActList({ activities,selectAct,deleteAct }: Props) {
  return (
    <Segment>
      <Item.Group divided>
      {activities.map((act) => (
        <Item key={act.id}>
          <Item.Content>
            <Item.Header as="a">{act.title}</Item.Header>
            <Item.Meta>{act.date}</Item.Meta>
            <Item.Description>
              <div>{act.description}</div>
              <div>
                {act.city},{act.venue}
              </div>
            </Item.Description>
            <Item.Extra>
              <Button onClick={()=> selectAct(act.id)} floated="right" content="View" color="blue" ></Button>
              <Button onClick={()=> deleteAct(act.id)} floated="right" content="Delete" color="red" ></Button>
              <Label basic content={act.category}></Label>
            </Item.Extra>
          </Item.Content>
        </Item>
      ))}
      </Item.Group>
    </Segment>
  );
}
