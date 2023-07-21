<template>
  <section class="border-amber-400 border-2 p-3 rounded-xl shadow-2xl">
    <FormKit key="i-title" id="iTitle" type="text" label="Title" validation="required|length:3" />

    <FormKit key="i-note" id="note" type="text" label="Note" validation="required|length:3"/>

    <FormKit key="i-priority" value="1" id="priority" type="number" label="Priority" validation="required|min:1"/>

    <FormKit type="datetime-local" label="Reminder" validation="required|date_after"
      validation-visibility="live" />
  </section>
</template>

<script setup>
</script>
