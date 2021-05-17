import React from 'react';
import PropTypes from 'prop-types';

const FetchQuote = ({ onClick }) => (
    <>
    <h2>Get a Simpsons quote</h2>
    <button onClick={onClick}>Go</button>
    </>
)

FetchQuote.propTypes = {
    onClick: PropTypes.func.isRequired
}

export default FetchQuote;