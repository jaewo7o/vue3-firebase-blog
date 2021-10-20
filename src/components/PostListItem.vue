<script setup lang="ts">
import { defineProps, computed } from 'vue'
import { QueryDocumentSnapshot, DocumentData } from 'firebase/firestore'

const props = defineProps<{
    item: QueryDocumentSnapshot<DocumentData>
}>()

const post = computed(() => props.item)

</script>
<template>
    <q-item>
        {{ post }}
    </q-item>
</template>
