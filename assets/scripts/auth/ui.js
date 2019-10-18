'use strict'

const store = require('../store')

const onSignUpSuccess = function () {
  console.log('Signed Up Successfully')
  $('#auth_message').text('Signed Up Successfully!')
  $('.sign-up').trigger('reset')
}

const onSignUpFailure = function () {
  console.log('Sign Up Failed')
  $('#auth_message').text('Signed Up Failed.')
  $('.sign-up').trigger('reset')
}

const onSignInSuccess = function (responseData) {
  console.log('Signed In Successfully')
  $('#auth_message').text('Signed In Successfully!')
  store.user = responseData.user
}

const onSignInFailure = function () {
  console.log('Sign In Failed')
  $('#auth_message').text('Sign in failed.')
  $('.sign-in').trigger('reset')
}

const onChangePasswordSuccess = function () {
  console.log('Changed Password Successfully')
  $('#auth_message').text('Password changed successfully!')
  $('.change-password').trigger('reset')
}

const onChangePasswordFailure = function () {
  console.log('Changed Password Successfully')
  $('#auth_message').text('Password change failed.')
  $('.change-password').trigger('reset')
}

const onSignOutSuccess = function () {
  console.log('Signed Out Successfully')
  $('#auth_message').text('Signed out successfully!')
  $('.sign-up, .sign-in').show()
  $('.change-password, .sign-out').hide()
  $('.sign-out').trigger('reset')
}

const onSignOutFailure = function () {
  console.log('Sign Out Failed')
  $('#auth_message').text('Sign out failed')
  $('.sign-out').trigger('reset')
}

module.exports = {
  onSignUpSuccess,
  onSignUpFailure,
  onSignInSuccess,
  onSignInFailure,
  onChangePasswordSuccess,
  onChangePasswordFailure,
  onSignOutSuccess,
  onSignOutFailure
}
