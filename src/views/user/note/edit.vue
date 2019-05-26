<template>
  <note-detail :is-edit="true" />
</template>

<script>
import NoteDetail from '@/components/NoteDetail'

export default {
  name: 'CreateForm',
  components: { NoteDetail }
}
</script>

