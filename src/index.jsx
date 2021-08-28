import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Outlined = styled.button`
    font-size: 16px;
    padding: 15px;
    border: 1px solid #e0115f;
    outline: none;
    box-shadow: none;
    background-color: white;
    color: #e0115f;
    text-decoration: none;
    transition: border 0.25s, background 0.25s, color 0.25s;
    &:hover {
        cursor: pointer;
        color: #990c41;
        border-color: #990c41;
        background-color: #dddddd;
    }
`;

const Contained = styled.button`
    font-size: 16px;
    padding: 15px;
    border: 0;
    outline: none;
    box-shadow: none;
    background-color: #e0115f;
    color: white;
    text-decoration: none;
    transition: border 0.25s, background 0.25s, color 0.25s;
    &:hover {
        cursor: pointer;
        background-color: #990c41;
    }
`;


const Text = styled.button`
    font-size: 16px;
    padding: 15px;
    border: 0;
    outline: none;
    box-shadow: none;
    background-color: transparent;
    color: #e0115f;
    text-decoration: none;
    &:hover {
        cursor: pointer;
        text-decoration: underline;
    }
`;


const FancyButton = ({label, variant, type, onClick, ...props}) => {
    let ButtonStyle = Outlined;
    if(variant ==='confined') {
         ButtonStyle = Contained;
    } else if(variant ==='text') {
         ButtonStyle = Text;
    }
    return <ButtonStyle {...props} type={type} onClick={onClick}>{label}</ButtonStyle>
}

FancyButton.defaultProps = {
    type: 'button',
    variant:'outlined'
}

FancyButton.propTypes = {
    label: PropTypes.string,
    variant: PropTypes.oneOf(['outlined', 'confined', 'text']),
    type: PropTypes.oneOf(['button', 'submit', 'reset']),
    onClick: PropTypes.func.isRequired,

}

export default FancyButton;