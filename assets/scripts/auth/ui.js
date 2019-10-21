'use strict'

const store = require('../store')

const onSignUpSuccess = function () {
  console.log('Signed Up Successfully')
  $('#message-center').text('Signed Up Successfully!')
  $('#signUp').modal('hide')
  $('#signUpForm').trigger('reset')
}

const onSignUpFailure = function () {
  console.log('Sign Up Failed')
  $('#message-center').text('Signed Up Failed. Please Try Again.')
  $('#signUpForm').trigger('reset')
}

const onSignInSuccess = function (responseData) {
  console.log('Signed In Successfully')
  $('#message-center').text('Signed In Successfully!')
  store.user = responseData.user
  $('#signIn').modal('hide')
  $('.sign-up, .sign-in').hide()
  $('.sign-out, .change-password').css('display', 'block')
  $('#signInForm').trigger('reset')
}

const onSignInFailure = function () {
  console.log('Sign In Failed')
  $('#message-center').text('Sign in failed. Please Try Again.')
  $('#signInForm').trigger('reset')
}

const onChangePasswordSuccess = function () {
  console.log('Changed Password Successfully')
  $('#message-center').text('Password changed successfully!')
  $('#changePassword').modal('hide')
  $('#changePasswordForm').trigger('reset')
}

const onChangePasswordFailure = function () {
  console.log('Changed Password Successfully')
  $('#message-center').text('Password change failed. Please Try Again.')
  $('.change-password').trigger('reset')
}

const onSignOutSuccess = function () {
  console.log('Signed Out Successfully')
  $('#message-center').text('Signed out successfully!')
  $('.sign-up, .sign-in').show()
  $('.change-password, .sign-out').hide()
}

const onSignOutFailure = function () {
  console.log('Sign Out Failed')
  $('#message-center').text('Sign out failed. Please Try Again.')
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
