import React from "react";
import { useWallet } from "@solana/wallet-adapter-react";
import { WalletMultiButton } from "@solana/wallet-adapter-react-ui";

// Constants
const TWITTER_HANDLE = "_buildspace";
const TWITTER_LINK = `https://twitter.com/${TWITTER_HANDLE}`;

const Home = () => {
  const wallet = useWallet();
  // Actions
  const renderNotConnectedContainer = () => (
    <div>
      <img
        src="https://media.giphy.com/media/eSwGh3YK54JKU/giphy.gif"
        alt="emoji"
      />

      <div className="button-container">
        <WalletMultiButton className="cta-button connect-wallet-button" />
      </div>
    </div>
  );

  return (
    <div className="App">
      <div className="container">
        <div className="header-container">
          <p className="header">🍭 Candy Drop</p>
          <p className="sub-text">NFT drop machine with fair mint</p>
          {/* Render your connect to wallet button right here */}
          {renderNotConnectedContainer()}
        </div>

        <div className="footer-container">
          <img alt="Twitter Logo" className="twitter-logo" src="./twitter-logo.svg"/>
          <a
            className="footer-text"
            href={TWITTER_LINK}
            target="_blank"
            rel="noreferrer"
          >{`built on @${TWITTER_HANDLE}`}</a>
        </div>
      </div>
    </div>
  );
};

export default Home;

// import React from "react";
// import { WalletMultiButton } from "@solana/wallet-adapter-react-ui";
// import { useWallet } from "@solana/wallet-adapter-react";
// import {
//   PhantomWalletAdapter,
//   SolflareWalletAdapter,
//   TorusWalletAdapter,
// } from "@solana/wallet-adapter-wallets";

// // Constants
// const GITHUB_HANDLE = "Seif-Mamdouh";
// const GITHUB_LINK = `https://github.com/${GITHUB_HANDLE}`;

// const Home = () => {

// const wallet = useWallet();

//   const renderNotConnectedContainer = () => (
//     <div>
//       <img src="https://media.giphy.com/media/eSwGh3YK54JKU/giphy.gif" alt="emoji"/>
//       <div className="button-container">
//         <WalletMultiButton className="cta-button connect-wallet-button" />
//       </div>
//     </div>
//   );
//   return (
//     <div className="App">
//       <div className="container">
//         <div className="header-container">
//           <p className="header">🍭 Candy Drop</p>
//           <p className="sub-text">NFT drop machine with fair mint</p>
//           {/* Render your connect to wallet button right here */}
//           {renderNotConnectedContainer()}
//           {/* wallet.publicKey ? "Hello Bitch" : */}
//         </div>

//         <div className="footer-container">
//           {/* <img alt="Twitter Logo" className="twitter-logo" src="twitter-logo.svg"/> */}
//           <a
//             className="footer-text"
//             href={GITHUB_LINK}
//             target="_blank"
//             rel="noreferrer"
//           >{`built by @${GITHUB_HANDLE}`}</a>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Home;

// import React from "react";
// import { WalletMultiButton } from "@solana/wallet-adapter-react-ui";
// import {
//   PhantomWalletAdapter,
//   SolflareWalletAdapter,
//   TorusWalletAdapter,
// } from "@solana/wallet-adapter-wallets";

// // Constants
// const GITHUB_HANDLE = "Seif-Mamdouh";
// const GITHUB_LINK = `https://github.com/${GITHUB_HANDLE}`;
// const TWITTER_IMAGE = './twitter-logo.svg'

// const Home = () => {
//     // Actions
//     const renderNotConnectedContainer = () => (
//         <div>
//             <img src="https://media.giphy.com/media/eSwGh3YK54JKU/giphy.gif" alt="emoji" />
//             <div className="button-container">
//                 <WalletMultiButton className="cta-button connect-wallet-button" />
//             </div>
//         </div>
//     );
//     return (
//         <div className="App">
//             <div className="container">
//                 <div className="header-container">
//                     <p className="header">🍭 Candy Drop</p>
//                     <p className="sub-text">NFT drop machine with fair mint</p>
//                 </div>
//                 <div className="footer-container">
//                     <img alt="Twitter Logo" className="twitter-logo" src={TWITTER_IMAGE} />
//                     <a className="footer-text" href={GITHUB_LINK} target="_blank" rel="noreferrer">{`built by @${GITHUB_HANDLE}`}</a>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default Home;

/* <img alt="Twitter Logo" className="twitter-logo" src={twitterLogo} />; */
