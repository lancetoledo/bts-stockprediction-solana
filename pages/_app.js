import "../styles/globals.css";
// import { MoralisProvider } from 'react-moralis'
import { PredictionProvider } from "../context/PredictionContext";

function MyApp({ Component, pageProps }) {
  return (
    <PredictionProvider>
      <Component {...pageProps} />
    </PredictionProvider>
  );
}

export default MyApp;
