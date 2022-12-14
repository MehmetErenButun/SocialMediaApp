import React from 'react';
import { Button, Card, Image } from 'semantic-ui-react';
import { Activity } from '../../../app/models/Activity';

interface Props {
    activity: Activity;
    closeSelectAct:()=>void;
    handleOpenForm:(id:string)=>void;

   
}

export default function ActivityDetails({ activity,closeSelectAct,handleOpenForm}: Props) {
    return (
        <Card fluid>
            <Image src={`/assets/categoryImages/${activity.category}.jpg`} />
            <Card.Content>
                <Card.Header>{activity.title}</Card.Header>
                <Card.Meta>
                    <span>{activity.date}</span>
                </Card.Meta>
                <Card.Description>
                    {activity.description}
                </Card.Description>
            </Card.Content>
            <Card.Content extra>
                <Button.Group widths='2'>
                    <Button onClick={()=>handleOpenForm(activity.id)} basic color='blue' content='Edit' />
                    <Button onClick={closeSelectAct} basic color='grey' content='Cancel' />
                </Button.Group>
            </Card.Content>
        </Card>
    )
}
