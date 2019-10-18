'use strict'

const authEvents = require('./auth/events.js')

$(() => {
  $('.sign-up').on('submit', authEvents.onSignUp)
  $('.sign-in-start-button').on('click', authEvents.onSignInButton)
  $('.sign-in').on('submit', authEvents.onSignIn)
  $('.change-password-start-button').on('click', authEvents.onChangePasswordButton)
  $('.change-password').on('submit', authEvents.onChangePassword)
  $('.cancel').on('click', authEvents.onCancelButton)
  $('.sign-out').on('submit', authEvents.onSignOut)
})
