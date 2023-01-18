import React from 'react';
import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { createClient, configureChains, WagmiConfig } from 'wagmi';
import { publicProvider } from 'wagmi/providers/public';
import { mainnet } from "wagmi/chains";

import Signin from './components/signin.jsx';
import Mint from './components/mint.jsx';


const { provider, webSocketProvider } = configureChains([mainnet], [
  publicProvider(),
]);

const client = createClient({
  provider,
  webSocketProvider,
  autoConnect: true,
});

const router = createBrowserRouter([
  {
    path: '/signin',
    element: <Signin />,
  },
  {
    path: '/mint',
    element: <Mint />,
  },
]);

function App() {
  return (
    <WagmiConfig client={client}>
      <RouterProvider router={router} />
    </WagmiConfig>
  );
}

export default App;
