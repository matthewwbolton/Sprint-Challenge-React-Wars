import React from 'react';
import { Button } from 'reactstrap';
import styled from 'styled-components';

const NewButton = styled(Button)`
    height: 75px;
    width: 40%;
`;


const PageButton = (props) => {

return(
    <>
    <NewButton onClick={() => props.page > 2 ? props.setPage(props.page - 1) : props.setPage(1)}>Previous Page</NewButton>
    <NewButton onClick={() => props.setPage(props.page + 1)}>Next Page</NewButton>
    </>
)


}

export default PageButton;