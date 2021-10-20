<script setup lang="ts">
import { PostListItem } from './PostListItem.vue'
import { db } from 'boot/firebase'
import {
    collection,
    query,
    getDocs,
    QueryDocumentSnapshot,
    DocumentData
} from 'firebase/firestore'
import { onMounted, ref } from 'vue'

const items = ref<QueryDocumentSnapshot<DocumentData>[]>([])

const getData = async () => {
    const q = query(collection(db, 'posts'))

    console.log('======>>>>')
    const querySnapshot = await getDocs(q)
    items.value = querySnapshot.docs
    // querySnapshot.docs.forEach((doc) => {
    //     console.log('doc', doc)
    //     console.log('doc.data', doc.data())
    //     items.value.push(doc.data())
    //     console.log('items', items)
    //     console.log('items.value', items.value)
    // })
}

onMounted(() => getData())
</script>
<template>
    <div>
        <q-list bordered>
            <post-list-item
                v-for="item in items"
                :key="item.id"
                :item="item"
            />
        </q-list>
        <q-page-sticky
            position="bottom-right"
            :offset="[18,18]"
        >
            <q-btn
                round
                color="pink"
                icon="mdi-pencil"
                to="/write"
            />
        </q-page-sticky>
    </div>
</template>
