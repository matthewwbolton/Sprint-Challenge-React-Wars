import React from 'react';
import {
  Card, Col, CardImg, CardText, CardBody, CardLink,
  CardTitle, CardSubtitle
} from 'reactstrap';
import styled from 'styled-components';
import background_1 from '../img/background_1.jpg';

const NewCard = styled(Card)`
  background: url(${background_1});
  color: yellow;
  margin: 2%;
`;

const NewCardTitle = styled(CardTitle)`
  font-size: 25px;
  
`;


const CharacterCard = (props) => {
  return (
    <Col xs='6' md='4' xl='3'>
      <NewCard>
        <CardBody>
          <NewCardTitle>{props.character.name}</NewCardTitle>
          <CardSubtitle>Gender: {props.character.gender}</CardSubtitle>
          <CardSubtitle>Birth Year: {props.character.birth_year}</CardSubtitle>
          <CardSubtitle>Height: {props.character.height}</CardSubtitle>
          <CardSubtitle>Mass: {props.character.mass}</CardSubtitle>
          <CardSubtitle>Hair Color: {props.character.hair_color}</CardSubtitle>
          <CardSubtitle>Skin Color: {props.character.skin_color}</CardSubtitle>
          <CardSubtitle>Eye Color: {props.character.eye_color}</CardSubtitle>
            <CardLink href={props.character.homeworld}>Home World</CardLink>
            <CardLink href={props.character.url}>URL</CardLink>
        </CardBody>
      </NewCard>
    </Col>
  );
};

export default CharacterCard;



