'use strict'

const authEvents = require('./auth/events.js')
const encounterEvents = require('./encounters/events.js')

$(() => {
  $('.sign-up').on('submit', authEvents.onSignUp)
  $('.sign-in-start-button').on('click', authEvents.onSignInButton)
  $('.sign-in').on('submit', authEvents.onSignIn)
  $('.change-password-start-button').on('click', authEvents.onChangePasswordButton)
  $('.change-password').on('submit', authEvents.onChangePassword)
  $('.cancel').on('click', authEvents.onCancelButton)
  $('.sign-out').on('submit', authEvents.onSignOut)
  $('#myModal').on('shown.bs.modal', encounterEvents.onModalClick)
  $('#submit-encounter').on('submit', encounterEvents.onSubmitEncounter)
})
