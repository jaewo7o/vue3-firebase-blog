<script setup lang="ts">
import AuthButton from 'components/auth/AuthButton.vue'
</script>

<template>
    <q-layout
        view="hHr LpR lFf"
        :container="false"
    >
        <q-header>
            <q-toolbar>
                <q-toolbar-title>
                    Vue3 Firebase Blog
                </q-toolbar-title>
                <auth-button />
            </q-toolbar>
        </q-header>
        <q-page-container>
            <router-view />
        </q-page-container>
    </q-layout>
</template>
