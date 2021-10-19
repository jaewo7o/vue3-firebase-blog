import { initializeApp } from 'firebase/app'
import firebaseConfig from '../../firebaseConfig'

import { getAuth, connectAuthEmulator } from 'firebase/auth'

import { getFirestore, connectFirestoreEmulator } from 'firebase/firestore'

// Initialize Firebase
initializeApp(firebaseConfig)

const auth = getAuth()
connectAuthEmulator(auth, 'http://localhost:9099')
auth.useDeviceLanguage()

const db = getFirestore()
connectFirestoreEmulator(db, 'localhost', 8081)

export { auth, db }
