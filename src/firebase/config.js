import firebase from 'firebase';
import 'firebase/auth';
import 'firebase/firestore';
import 'firebase/storage';

const firebaseConfig = {
  apiKey: 'AIzaSyALe1r07YyE6ga2Ph17A5yNoAiPcH7U7o0',
  authDomain: 'olx-react-ab781.firebaseapp.com',
  projectId: 'olx-react-ab781',
  storageBucket: 'olx-react-ab781.appspot.com',
  messagingSenderId: '819462385158',
  appId: '1:819462385158:web:613497710622d5fd749d87',
  measurementId: 'G-T0HV1Z5S6T',
};

export default firebase.initializeApp(firebaseConfig);
