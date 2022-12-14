import React from "react";
import { Button, Container, Menu } from "semantic-ui-react";


interface Props{
    handleOpenForm:(id?:string)=>void;
}

export default function NavBar({handleOpenForm}:Props) {
  return (
    
    <Menu inverted fixed='top'>
        <Container>
            <Menu.Item header>
                <img src="assets/logo.png" alt="logo" style={{marginRight:'10px'}}/>
                Reaktivite
            </Menu.Item>
            <Menu.Item name="Activities"/>
            <Menu.Item>
                <Button onClick={()=>handleOpenForm()} positive content='Create Activity'></Button>
            </Menu.Item>
        </Container>
    </Menu>);
}
