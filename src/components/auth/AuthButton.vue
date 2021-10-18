<script setup lang="ts">
import { auth } from 'boot/firebase'
import { firebaseUser, useAuth } from 'src/composable/useAuth'
import { GoogleAuthProvider, signInWithPopup, signOut } from 'firebase/auth'

useAuth()
const provider = new GoogleAuthProvider()

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
