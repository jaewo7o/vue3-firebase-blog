import { initializeApp } from 'firebase/app'
import firebaseConfig from '../../firebaseConfig'

import { getAuth, connectAuthEmulator } from 'firebase/auth'

// Initialize Firebase
initializeApp(firebaseConfig)

const auth = getAuth()
connectAuthEmulator(auth, 'http://localhost:9099')
auth.useDeviceLanguage()

export { auth }
