'use strict'

const onModalSuccess = function () {
  console.log('modal trigger successful')
  $('#myInput').trigger('focus')
}

const onModalFailure = function () {
  console.log('modal failure')
}
module.exports = {
  onModalSuccess,
  onModalFailure
}
