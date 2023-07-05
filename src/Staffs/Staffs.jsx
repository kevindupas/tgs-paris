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

function Staffs() {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [staff, setStaff] = useState(false);

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
        fetch(`${URL}/api/salon/${SALON_ID}/staffs`, options)
            .then((res) => res.json())
            .then(
                (data) => {
                    setIsLoaded(true);
                    setStaff(data.data[0]);
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

    if (staff) {
        return (
            <>
                <GlobalStyle />
                <div className="bg-[#4FC0F0] pt-32 pb-12 h-[75vh]">
                    <h1 className="text-left text-white text-2xl bg-[#F27B7B] w-fit px-6 font-bold py-1">{staff.title}</h1>
                    <div className="p-6" dangerouslySetInnerHTML={{ __html: staff.content }} />
                </div>
            </>
        );
    }
}

export default Staffs;
