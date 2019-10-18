'use strict'
const getFormFields = require('../../../lib/get-form-fields.js')
const api = require('./api')
const ui = require('./ui')

const onModalClick = function (event) {
  console.log('Modal was clicked- events.js ok')
  event.preventDefault()
  const form = event.target
  const formData = getFormFields(form)
  api.createEncounter(formData)
    .then(ui.onModalSuccess)
    .catch(ui.onSignUpFailure)
}

module.exports = {
  onModalClick
}
