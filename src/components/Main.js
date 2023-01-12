import React from "react";
import placeholder from "../media/nft-placeholder.png"
import { Fab } from '@mui/material';

function Main() {
    return (
        <div>
            <p style={{marginTop: "10vh", fontSize: "1.5vh", width: "500px"}}>
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
        </div>
    )
}

export default Main;