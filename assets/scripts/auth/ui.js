'use strict'

const store = require('../store')

// const onSignUpSuccess = function () {
//   $('#message-center').text('Signed Up Successfully! Please Sign In.').fadeIn(0, 1)
//   $('#message-center').text('Signed Up Successfully! Please Sign In.').fadeOut(3000, 0)
//   $('#signUp').modal('hide')
//   $('#signUpForm').trigger('reset')
// }

const onSignUpFailure = function () {
  $('#message-center').text('Sign Up Failed. Please Try Again.').fadeIn(0, 1)
  $('#message-center').text('Sign Up Failed. Please Try Again.').fadeOut(5000, 0)
  $('#signUpForm').trigger('reset')
  $('#signUp').modal('hide')
}

const onSignInSuccess = function (responseData) {
  $('#message-center').text('Signed In Successfully!').fadeIn(0, 1)
  $('#message-center').text('Signed In Successfully!').fadeOut(5000, 0)
  store.user = responseData.user
  $('#signIn, #signUp').modal('hide')
  $('.sign-up, .sign-in').hide()
  $('.sign-out, .change-password, .get-my-encounters, .get-all-encounters, .show-encounter, .update-encounter, .delete-encounter, .create-encounter').css('display', 'block')
  $('#signInForm, #signUpForm').trigger('reset')
}

const onSignInFailure = function () {
  $('#message-center').text('Sign in failed. Please Try Again.').fadeIn(0, 1)
  $('#message-center').text('Sign in failed. Please Try Again.').fadeOut(5000, 0)
  $('#signInForm').trigger('reset')
}

const onChangePasswordSuccess = function () {
  $('#message-center').text('Password changed successfully!').fadeIn(0, 1)
  $('#message-center').text('Password changed successfully!').fadeOut(5000, 0)
  $('#changePassword').modal('hide')
  $('#changePasswordForm').trigger('reset')
}

const onChangePasswordFailure = function () {
  $('#message-center').text('Password change failed. Please Try Again.').fadeIn(0, 1)
  $('#message-center').text('Password change failed. Please Try Again.').fadeOut(5000, 0)
  $('.change-password').trigger('reset')
}

const onSignOutSuccess = function () {
  $('#message-center').text('Signed out successfully!').fadeIn(0, 1)
  $('#message-center').text('Signed out successfully!').fadeOut(5000, 0)
  $('.resource-view').css('display', 'none')
  $('.sign-up, .sign-in, .background-info').show()
  $('.sign-out, .change-password, .get-my-encounters, .get-all-encounters, .show-encounter, .update-encounter, .delete-encounter, .create-encounter').hide()
  $('#signUpForm, #signInForm, #changePasswordForm, #encounter-info, #deleteEncounterForm, #updateEncounterForm, #showEncounterForm').trigger('reset')
}

const onSignOutFailure = function () {
  $('#message-center').text('Sign out failed. Please Try Again.').fadeIn(0, 1)
  $('#message-center').text('Sign out failed. Please Try Again.').fadeOut(5000, 0)
  $('.sign-out').trigger('reset')
}

module.exports = {
  // onSignUpSuccess,
  onSignUpFailure,
  onSignInSuccess,
  onSignInFailure,
  onChangePasswordSuccess,
  onChangePasswordFailure,
  onSignOutSuccess,
  onSignOutFailure
}
