<script setup lang="ts">
import { defineProps, computed, ref, defineEmits } from 'vue'
import { QueryDocumentSnapshot } from 'firebase/firestore'
import { Post, updatePost, deletePost } from 'src/models/Post'

const props = defineProps<{
  item: QueryDocumentSnapshot<Post>
}>()

const emit = defineEmits<{(e: 'refresh'): void}>()

const post = computed(() => props.item.data())
const content = ref(post.value.content)
async function update () {
    await updatePost(props.item.id, content.value)
    emit('refresh')
}

async function remove () {
    await deletePost(props.item.id)
    emit('refresh')
}

</script>
<template>
    <q-item>
        <q-item-section avatar>
            {{ item.id }}
        </q-item-section>
        <q-item-section>
            <q-item-label>{{ post.title }}</q-item-label>
            <q-item-label caption>
                {{ post.content }}
            </q-item-label>
            <q-item-label caption>
                {{ post.createdAt }}
            </q-item-label>
            <q-item-label caption>
                {{ post.updatedAt }}
            </q-item-label>
        </q-item-section>
        <q-item-section>
            <q-input v-model="content" />
        </q-item-section>
        <q-item-section side>
            <q-btn
                label="update"
                @click="update"
            />
        </q-item-section>
        <q-item-section side>
            <q-btn
                label="delete"
                @click="remove"
            />
        </q-item-section>
    </q-item>
</template>
