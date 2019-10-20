'use strict'

const authEvents = require('./auth/events.js')
const encounterEvents = require('./encounters/events.js')

$(() => {
  $('.sign-up').on('submit', authEvents.onSignUp)
  $('.sign-in').on('submit', authEvents.onSignIn)
  $('.change-password').on('submit', authEvents.onChangePassword)
  $('.sign-out').on('submit', authEvents.onSignOut)
  // $('#createEncounter').on('shown.bs.modal', encounterEvents.onModalClick)
  $('#create-encounter-submit').on('submit', encounterEvents.onCreateEncounter)
  $('#get-all-encounters').on('click', encounterEvents.onGetAllEncounters)
  $('#show-encounter').on('click', encounterEvents.onShowEncounter)
  $('#update-encounter').on('click', encounterEvents.onUpdateEncounter)
  $('#delete-encounters').on('click', encounterEvents.onDeleteEncounter)
})
