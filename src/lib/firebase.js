import * as firebase from 'firebase';

const config = {
	apiKey: 'AIzaSyANRwiqwbNnLT-2chBMikZ8g64febUJ6VI',
	authDomain: 'bored-718b1.firebaseapp.com',
	databaseURL: 'https://bored-718b1.firebaseio.com',
	projectId: 'bored-718b1',
	storageBucket: 'bored-718b1.appspot.com',
	messagingSenderId: '1073064848250'
};

export default (!firebase.apps.length ? firebase.initializeApp(config) : firebase.app());
