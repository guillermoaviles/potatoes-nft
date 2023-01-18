import React from "react";
import placeholder from "../media/nft-placeholder.png"
import { Fab } from '@mui/material';
import Header from './Header';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

export default function Mint() {
    const navigate = useNavigate();

    const [session, setSession] = useState({});

    useEffect(() => {
        axios(`${process.env.REACT_APP_SERVER_URL}/authenticate`, {
            withCredentials: true,
        })
            .then(({ data }) => {
                const { ...authData } = data; // remove unimportant iat value

                setSession(authData);
            })
            .catch((err) => {
                navigate('/signin');
            });
    // eslint-disable-next-line
    }, []);

    async function signOut() {
        await axios(`${process.env.REACT_APP_SERVER_URL}/logout`, {
            withCredentials: true,
        });

        navigate('/signin');
    }

    return (
        <div className="App">
            <Header />
            <h3>User session:</h3>
            <pre>{JSON.stringify(session, null, 2)}</pre>
            <p style={{ marginTop: "10vh", fontSize: "1.5vh", width: "500px" }}>
                The cost of each potato follows a bonding curve, increasing
                10% in price after every mint. Whenever a new potato is
                minted, 9% goes back to the previous minter, along with their
                principal. This means; as long as someone else mints after
                you, you'll get your money back + 9% on top!
            </p>
            <img
                src={placeholder}
                className="nft"
                alt="logo"
            />
            <p>
                Cost: 0.11 ETH
            </p>
            <Fab
                variant="extended"
                color="primary"
                size="large"
                aria-label="add"
            >
                Mint
            </Fab>
            <button type="button" onClick={signOut}>
                Sign out
            </button>
        </div>
    );
}
