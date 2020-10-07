import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state(){
    return {
      project_selected_id: null,
      projects: [
        {
          "id": 1,
          "title": "Project title #1",
          "description": "Description of the project #1",
          "price": 600,
          "valute": "RUB",
          "payed": 300,
        },
        {
          "id": 2,
          "title": "Project title #2",
          "description": "Description of the project #2",
          "price": 6,
          "valute": "USD",
          "payed": 2,
        },
        {
          "id": 3,
          "title": "Project title #3",
          "description": "Description of the project #3",
          "price": 5,
          "valute": "EUR",
          "payed": 0,
        },
      ],
      tasks: [
        {
          "id": 1,
          "project_id": 1,
          "title": "Task title #1 of the project #1",
        },
        {
          "id": 2,
          "project_id": 1,
          "title": "Task title #2 of the project #1",
        },
        {
          "id": 3,
          "project_id": 1,
          "title": "Task title #3 of the project #1",
        },
        {
          "id": 4,
          "project_id": 2,
          "title": "Task title #1 of the project #2",
        },
      ],
      times: [
        {
          "type": "task",
          "which_id": 1,
          "start": 1602085940717,
          "end": 1602085950828,
        },
        {
          "type": "task",
          "which_id": 1,
          "start": 1602085940717,
          "end": 1602085950828,
        },
        {
          "type": "project",
          "which_id": 2,
          "start": 1602085940717,
          "end": 1602085950828,
        },
      ],
    }
  },
  getters: {
    getProjects(state){
      return state.projects
    },
    getSelectedProject(state){
      return state.projects.find(project => project.id === state.project_selected_id)
    },
    getSelectedProjectID(state){
      return state.project_selected_id
    },
    getTasks(state){
      return state.tasks.filter(task => task.project_id === state.project_selected_id)
    },
  },
  mutations: {
    setSelectedProject(state, id){
      state.project_selected_id = id
    }
  },
})

export default store
