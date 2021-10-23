<script setup lang="ts">
import { ref } from 'vue'
import { useQuasar } from 'quasar'
import { useRouter } from 'vue-router'
import { Post, setPost } from 'src/models/Post'

const $q = useQuasar()
const router = useRouter()

const title = ref('')
const content = ref('')

const ruleRequired = (val: string) =>
    (val && val.length > 0) || 'Please type something'

const onSubmit = async () => {
    await setPost(new Post(title.value, content.value))

    $q.notify({
        message: 'Successfully saved'
    })

    await router.push('/list')
}

const onReset = () => {
    title.value = ''
    content.value = ''
}
</script>
<template>
    <q-form
        class="q-gutter-md"
        @submit="onSubmit"
        @reset="onReset"
    >
        <q-card>
            <q-card-section>
                <q-input
                    v-model="title"
                    filled
                    label="제목"
                    hint="제목을 쓰세요."
                    lazy-rules
                    :rules="[ ruleRequired ]"
                />

                <q-input
                    v-model="content"
                    filled
                    type="textarea"
                    label="내용"
                    hint="내용을 쓰세요."
                    lazy-rules
                    :rules="[ ruleRequired ]"
                />
            </q-card-section>

            <q-card-actions>
                <q-space />
                <q-btn
                    label="Submit"
                    type="submit"
                    color="primary"
                />
                <q-btn
                    label="Reset"
                    type="reset"
                    color="primary"
                    flat
                    class="q-ml-sm"
                />
            </q-card-actions>
        </q-card>
    </q-form>
</template>
