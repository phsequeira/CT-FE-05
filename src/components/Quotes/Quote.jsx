import React from 'react';
import PropTypes from 'prop-types';

const Quote = ({ image, name, text }) => (
<figure>
    <img src={image} alt={name} />
    <figcaption>{text}</figcaption>
</figure>
);

Quote.propTypes = {
image: PropTypes.string.isRequired,
name: PropTypes.string.isRequired,
text: PropTypes.string.isRequired
}

export default Quote;