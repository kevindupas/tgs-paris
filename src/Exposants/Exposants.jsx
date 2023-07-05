import React, { useEffect, useState } from 'react';
import { createGlobalStyle } from 'styled-components';
import Loader from '../components/Loader';
import { SALON_ID, URL } from '../utils/config';

const GlobalStyle = createGlobalStyle`
  ul {
    list-style: disc !important;
    margin: 2% !important;
    padding-left: 2% !important;
  }
`;

function Exposants() {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [exposant, setExposant] = useState(false);

    useEffect(() => {
        const options = {
            method:  'GET',
            mode:    'cors',
            cache:   'default',
            headers: {
                Accept:         'application/json',
                'Content-Type': 'application/json',
            },
        };
        fetch(`${URL}/api/salon/${SALON_ID}/exposants`, options)
            .then((res) => res.json())
            .then(
                (data) => {
                    setIsLoaded(true);
                    setExposant(data.data[0]);
                },
                (err) => {
                    setIsLoaded(true);
                    setError(err);
                },
            );
    }, []);

    if (error) {
        return (
            <div>
                Error:
                {error.message}
            </div>
        );
    }
    if (!isLoaded) {
        return (
            <Loader />
        );
    }

    if (exposant) {
        return (
            <>
                <GlobalStyle />
                <div className="bg-[#4FC0F0] pt-32 pb-12">
                    <h1 className="text-left text-white text-2xl bg-[#F27B7B] w-fit px-6 font-bold py-1">{exposant.title}</h1>
                    <div className="p-6" dangerouslySetInnerHTML={{ __html: exposant.content }} />
                </div>
            </>
        );
    }
}

export default Exposants;
