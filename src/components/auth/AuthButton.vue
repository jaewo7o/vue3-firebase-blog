<script setup lang="ts">
// Import the functions you need from the SDKs you need
import { ref } from 'vue'
import { initializeApp } from 'firebase/app'
import firebaseConfig from '../../../firebaseConfig'

import { getAuth, connectAuthEmulator, GoogleAuthProvider, signInWithPopup, signOut, onAuthStateChanged, User } from 'firebase/auth'

// Initialize Firebase
initializeApp(firebaseConfig)

const auth = getAuth()
connectAuthEmulator(auth, 'http://localhost:9099')
auth.useDeviceLanguage()
const provider = new GoogleAuthProvider()

const firebaseUser = ref<User | null>(null)
onAuthStateChanged(auth, user => {
    console.log(user)
    firebaseUser.value = user
})

</script>

<template>
    <q-btn
        v-if="firebaseUser"
        color="info"
        round
    >
        <q-avatar size="24px">
            <img :src="firebaseUser.photoURL || ''">
            <q-menu>
                <q-card class="my-card">
                    <q-list>
                        <q-item>
                            <q-item-section avatar>
                                <q-icon name="mdi-account" />
                            </q-item-section>
                            <q-item-section>
                                <q-item-label>이름</q-item-label>
                                <q-item-label caption>
                                    {{ firebaseUser.displayName }}
                                </q-item-label>
                            </q-item-section>
                        </q-item>
                        <q-item>
                            <q-item-section avatar>
                                <q-icon name="mdi-email" />
                            </q-item-section>
                            <q-item-section>
                                <q-item-label>이메일</q-item-label>
                                <q-item-label caption>
                                    {{ firebaseUser.email }}
                                </q-item-label>
                            </q-item-section>
                        </q-item>
                    </q-list>
                    <q-card-actions align="right">
                        <q-btn
                            icon="mdi-logout"
                            label="로그아웃"
                            flat
                            color="primary"
                            @click="signOut(auth)"
                        />
                    </q-card-actions>
                </q-card>
            </q-menu>
        </q-avatar>
    </q-btn>
    <q-btn
        v-else
        color="info"
        round
        @click="signInWithPopup(auth, provider)"
    >
        <q-avatar
            size="24px"
            icon="mdi-login"
        />
    </q-btn>
</template>
