'use strict'

const store = require('../store')

const onSignUpSuccess = function () {
console.log('Signed Up Successfully')
}

const onSignUpFailure = function () {
console.log('Sign Up Failed')
}

const onSignInSuccess = function (responseData) {
  console.log('Signed In Successfully')
}

const onSignInFailure = function () {
  console.log('Sign In Failed')
}

const onChangePasswordSuccess = function () {
  console.log('Changed Password Successfully')
}

const onChangePasswordFailure = function () {
  console.log('Changed Password Successfully')
}

const onSignOutSuccess = function () {
  console.log('Signed Out Successfully')
}

const onSignOutFailure = function () {
  console.log('Sign Out Failed')
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
