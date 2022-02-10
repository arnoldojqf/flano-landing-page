// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import React from 'react';
import { ReactDOM } from 'react-dom';
import { Button, Flex, useWalletModal } from '@pancakeswap/uikit'

const { onPresentConnectModal } = useWalletModal(
  () => null,
  () => null,
  "0xbdda50183d817c3289f895a4472eb475967dc980"
);

console.log('onPresentConnectModal', onPresentConnectModal);

const domContainer = document.querySelector('#unlock_wallet');

const myelement = (
  <Flex>
    <Button onClick={onPresentConnectModal}>Open connect modal</Button>
  </Flex>
);

ReactDOM.render(myelement, domContainer);

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDGyD9M9WslZMr1tCdAPFT7hKUe1sKlt5U",
  authDomain: "flano-landing-page.firebaseapp.com",
  projectId: "flano-landing-page",
  storageBucket: "flano-landing-page.appspot.com",
  messagingSenderId: "980779285592",
  appId: "1:980779285592:web:5438c24bfa649012a71e2d",
  measurementId: "G-7B63YKNPS3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);