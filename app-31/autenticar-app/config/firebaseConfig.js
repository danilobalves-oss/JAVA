import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const configuracoesFirebase = {
 apiKey: "AIzaSyA-uOVdBQARnnuTfv01_Eih3jaJtFPcXMY",
  authDomain: "autenticar-tds25.firebaseapp.com",
  projectId: "autenticar-tds25",
  storageBucket: "autenticar-tds25.firebasestorage.app",
  messagingSenderId: "1091923917177",
  appId: "1:1091923917177:web:9ecac42a45a5270f84d7a8",
  measurementId: "G-RHZ0CCPBJR"
};

const app = initializeApp(configuracoesFirebase);
export const autenticacao = getAuth(app);