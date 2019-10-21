'use strict'

const authEvents = require('./auth/events.js')
const encounterEvents = require('./encounters/events.js')

$(() => {
  $('.sign-up').on('submit', authEvents.onSignUp)
  $('.sign-in').on('submit', authEvents.onSignIn)
  $('.change-password').on('submit', authEvents.onChangePassword)
  $('.sign-out').on('submit', authEvents.onSignOut)
  $('.create-encounter').on('submit', encounterEvents.onCreateEncounter)
  $('.get-all-encounters').on('click', encounterEvents.onGetAllEncounters)
  $('.show-encounter').on('submit', encounterEvents.onShowEncounter)
  $('.update-encounter').on('submit', encounterEvents.onUpdateEncounter)
  $('.delete-encounter').on('submit', encounterEvents.onDeleteEncounter)
})
