import React, { useState, useEffect } from 'react';
import CharacterCard from './CharacterCard';
import axios from 'axios';
import { Container, Row, Col } from 'reactstrap';
import PageButton from './Button';
import styled from 'styled-components';
import Form from './Form';

const ButtonContainer = styled.div`
    display: flex;
    width: 48%;
    justify-content: space-evenly;
    align-items: center;
`;


const CharacterPage = () => {
    
    const [data, setData] = useState([]);
    const [page, setPage] = useState(1);
    const [name, setName] = useState('');

    // useEffect(() => {
    //     axios   
    //         .get(`https://swapi.co/api/people/?search=${name}`)
    //         .then(res => {
    //             console.log(res.data)
    //         })
    //         .catch(err => {
    //             console.log(err)
    //         })
    // }, [name])

  

    useEffect(() => {
        axios
            .get(`https://swapi.co/api/people/?page=${page}`)
            .then(res => {
                console.log(res.data.results);
                setData(res.data.results);
            })
            .catch(err => {
                console.log(err)
            })
    }, [page])

  
    return(
    <Container>
        <Row>
            {data.map((character, index) => {
                return <CharacterCard  key = {index} character = {character} />
            })};
            <ButtonContainer>
                <PageButton page = {page} setPage={setPage} />
            </ButtonContainer>  
        </Row>
        <Form name={name} setName={setName}/>
    </Container>
)



}


export default CharacterPage;


