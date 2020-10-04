<template>
  <md-dialog :md-active="value" @md-clicked-outside="$emit('input', false)">
    <md-dialog-title>Create new project</md-dialog-title>

    <md-dialog-content>
      <md-field>
        <label>Project name</label>
        <md-input v-model="data.project_name" maxlength="100"></md-input>
      </md-field>
      <md-field>
        <label>Description (optional)</label>
        <md-textarea v-model="data.project_desc" md-autogrow maxlength="256"></md-textarea>
      </md-field>
      <md-field :md-counter="false">
        <label>Payment</label>
        <span class="md-prefix">₽</span>
        <md-input v-model="data.payment" maxlength="10"></md-input>
      </md-field>
    </md-dialog-content>

    <md-dialog-actions>
      <md-button class="md-primary" @click="$emit('input', false)">Close</md-button>
      <md-button class="md-primary" @click="$emit('input', false)">Create</md-button>
    </md-dialog-actions>
  </md-dialog>
</template>

<script>
export default {
  name: 'ProjectCreateEditPopup',
  props: {
    value: {
      type: Boolean,
      default: false,
    },
  },
  data(){
    return {
      popup: false,
      data: {
        project_name: '',
        project_desc: '',
        payment: '',
      },
    }
  },
}
</script>