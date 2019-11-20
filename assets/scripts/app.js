'use strict'

const authEvents = require('./auth/events.js')
const encounterEvents = require('./encounters/events.js')

const today = new Date()
let dd = today.getDate()
let mm = today.getMonth() + 1
const yyyy = today.getFullYear()
if (dd < 10) {
  dd = '0' + dd
}
if (mm < 10) {
  mm = '0' + mm
}

const todayDate = yyyy + '-' + mm + '-' + dd

$(() => {
  $('.sign-up').on('submit', authEvents.onSignUp)
  $('.sign-in').on('submit', authEvents.onSignIn)
  $('.change-password').on('submit', authEvents.onChangePassword)
  $('.sign-out').on('submit', authEvents.onSignOut)
  $('.create-encounter').on('submit', encounterEvents.onCreateEncounter)
  $('.get-my-encounters').on('click', encounterEvents.onGetMyEncounters)
  $('.get-all-encounters').on('click', encounterEvents.onGetAllEncounters)
  $('.show-encounter').on('submit', encounterEvents.onShowEncounter)
  $('.update-encounter').on('submit', encounterEvents.onUpdateEncounter)
  $('.delete-encounter').on('submit', encounterEvents.onDeleteEncounter)
  document.getElementById('update-encounter-form').setAttribute('max', todayDate)
  document.getElementById('encounter-id').setAttribute('max', todayDate)
})
