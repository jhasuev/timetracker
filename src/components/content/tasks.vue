<template>
  <md-table
    md-card
    md-fixed-header
    :value="getTasks"
    @md-selected="onSelect"
  >
    <md-table-toolbar>

      <md-field md-clearable class="md-toolbar-section-start">
        <md-input placeholder="Search a task..." v-model="search" />
      </md-field>

      <div class="md-toolbar-section-end">
        <md-button>
          Create new task
        </md-button>
      </div>

    </md-table-toolbar>

    <md-table-toolbar slot="md-table-alternate-header" slot-scope="{ count }">
      <div class="md-toolbar-section-start">{{ getAlternateLabel(count) }}</div>

      <div class="md-toolbar-section-end">
        <md-button class="md-icon-button">
          <md-icon>delete</md-icon>
        </md-button>
      </div>
    </md-table-toolbar>

    <md-table-row slot="md-table-row" slot-scope="{ item }" md-selectable="multiple">
      <md-table-cell md-label="Name">{{ item.title }}</md-table-cell>
      <md-table-cell md-label="Email">{{ item.time }}</md-table-cell>
      <md-table-cell md-label="Action">
        <md-button class="md-icon-button md-dense md-raised md-primary">
          <md-icon>play_arrow</md-icon>
          <md-tooltip md-direction="top">Start timer</md-tooltip>
        </md-button>
      </md-table-cell>
    </md-table-row>
  </md-table>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'Tasks',
  data(){
    return {
      selected: [],
      people: [
        {
          title: 'Shawna Dubbin',
          time: '00:02:27',
        },
        {
          title: 'Shawna Dubbin',
          time: '00:02:27',
        },
        {
          title: 'Shawna Dubbin',
          time: '00:02:27',
        },
        {
          title: 'Shawna Dubbin',
          time: '00:02:27',
        },
        {
          title: 'Shawna Dubbin',
          time: '00:02:27',
        },
        {
          title: 'Shawna Dubbin',
          time: '00:02:27',
        },
      ],
      search: '',
    }
  },
  computed: {
    ...mapGetters([
      'getTasks',
    ]),
  },
  methods: {
    onSelect (items) {
      this.selected = items
    },
    getAlternateLabel (count) {
      let plural = count > 1 ? 's' : ''

      return `${count} user${plural} selected`
    }
  }
}
</script>

<style lang="scss" scoped>
</style>