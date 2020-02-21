import React, { useState, useEffect } from 'react';
import { Col, Row, Button, Form, FormGroup, Label, Input } from 'reactstrap';
import axios from 'axios';

const CharacterForm = (props) => {

    // const [name, setName] = useState('');
    const [name1, setName1] = useState('');
 
    // useEffect(() => {
    //     axios   
    //         .get(`https://swapi.co/api/people/?search=${name}`)
    //         .then(res => {
    //             console.log(res.data.results.name);
    //             setName(res.data.results.name)
    //         })
    //         .catch(err => {
    //             console.log(err);
    //         });

    // }, [name]);

    const changeHandler = (e) => {
        setName1(e.target.value);
};

    const handleSubmit = (e) => {
        e.preventDefault();
        props.setName(name1);
        console.log(props.name);

    }



  return (
    <Form>
      <Row form>
        <Col md={6}>
          <FormGroup>
            <Label for="exampleEmail">Name:</Label>
            <Input onChange={(e) => changeHandler(e)} type="text" name="email" id="exampleEmail" placeholder="Name" />
          </FormGroup>
        </Col>
      </Row>
      <Button onClick={(e) => handleSubmit(e)}>SEARCH</Button>
    </Form>
  );
}

export default CharacterForm;