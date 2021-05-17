import React, { useState } from 'react';
import FetchQuote from '../components/Quotes/fetchQuote';
import Quote from '../components/Quotes/Quote';
import { AquireQuote } from '../services/SimpsonsApi';

const SimpsonsQuote = () => {
    const [quote, setQuote] = useState({});

    const handleClick = async () => {
        const quote = await AquireQuote();
        setQuote(quote);
    };

    return (
        <>
        <FetchQuote onClick={handleClick} />
        <Quote {...quote} />
        </>
    )
}

export default SimpsonsQuote