import React, { useState } from 'react';
import { Col, Row, Button, Form, FormGroup, Label, Input } from 'reactstrap';
import styled from 'styled-components';

const NewInput = styled(Input)`
  width: 100%;
`;

const NewCol = styled(Col)`
  width: 100% !important;
`;

const NewFormGroup = styled(FormGroup)`
  width: 300px;
`;


const CharacterForm = (props) => {

    
    const [name1, setName1] = useState('');


    const changeHandler = (e) => {
        setName1(e.target.value);
};

    const handleSubmit = (e) => {
        // e.preventDefault();
        props.setName(name1);
        console.log(props.name);

    }



  return (
    <Form>
      <Row form>
        <NewCol md={6}>
          <NewFormGroup>
            <Label for="exampleEmail"></Label>
            <NewInput onChange={(e) => changeHandler(e)} type="text" name="email" id="exampleEmail" placeholder='Star Wars Character Name' />
          </NewFormGroup>
        </NewCol>
      </Row>
      <Button onClick={(e) => handleSubmit(e)}>SEARCH</Button>
    </Form>
  );
}

export default CharacterForm;