import { ChangeEvent, useState } from "react";
import { Button, Form, Segment } from "semantic-ui-react";
import { Activity } from "../../../app/models/Activity";

interface Props {
  activity: Activity | undefined;
  handleCloseForm: () => void;
  createOrEdit:(act:Activity)=>void
}

export default function ActForm({
  handleCloseForm,
  activity: selectedActivity,
  createOrEdit
}: Props) {


  
  const initialState = selectedActivity ?? {
    id: "",
    title: "",
    description: "",
    date: "",
    category: "",
    city: "",
    venue: "",
  };

  const [activity, setActivity] = useState(initialState);

  function handleSumbit() {
    createOrEdit(activity)
  }

  function handleInputChange(
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    const { name, value } = event.target;
    setActivity({ ...activity, [name]: value });
  }

  return (
    <Segment>
      <Form onSubmit={handleSumbit} autoComplete="off">
        <Form.Input
          placeholder="Başlık"
          value={activity.title}
          name="title"
          onChange={handleInputChange}
        ></Form.Input>
        <Form.TextArea
          placeholder="Açıklama"
          value={activity.description}
          name="description"
          onChange={handleInputChange}
        ></Form.TextArea>
        <Form.Input
          placeholder="Kategori"
          value={activity.category}
          name="category"
          onChange={handleInputChange}
        ></Form.Input>
        <Form.Input
          placeholder="Tarih"
          value={activity.date}
          name="date"
          onChange={handleInputChange}
        ></Form.Input>
        <Form.Input
          placeholder="Şehir"
          value={activity.city}
          name="city"
          onChange={handleInputChange}
        ></Form.Input>
        <Form.Input
          placeholder="Mekan"
          value={activity.venue}
          name="venue"
          onChange={handleInputChange}
        ></Form.Input>
        <Button
          floated="right"
          positive
          type="submit"
          content="Submit"
        ></Button>
        <Button
          onClick={handleCloseForm}
          floated="left"
          type="button"
          content="Cancel"
        ></Button>
      </Form>
    </Segment>
  );
}
