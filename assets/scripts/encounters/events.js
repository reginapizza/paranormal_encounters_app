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

const onCreateEncounter = function (event) {
  console.log('create encounter events.js')
  event.preventDefault()
  const form = event.target
  const formData = getFormFields(form)
  api.createEncounter(formData)
    .then(ui.onCreateEncounterSuccess)
    .catch(ui.onCreateEncounterFailure)
}

const onGetAllEncounters = function (event) {
  console.log('get all encounters events.js')
  event.preventDefault()
  const form = event.target
  const formData = getFormFields(form)
  api.getAllEncounters(formData)
    .then(ui.onGetAllEncountersSuccess)
    .catch(ui.onGetAllEncountersFailure)
}

const onShowEncounter = function (event) {
  console.log('show encounters events.js')
  event.preventDefault()
  const form = event.target
  const formData = getFormFields(form)
  api.showEncounter(formData)
    .then(ui.onShowEncounterSuccess)
    .catch(ui.onShowEncounterFailure)
}

const onUpdateEncounter = function (event) {
  console.log('update encounters events.js')
  event.preventDefault()
  const form = event.target
  const formData = getFormFields(form)
  api.updateEncounter(formData)
    .then(ui.onUpdateEncounterSuccess)
    .catch(ui.onUpdateEncounterFailure)
}

const onDeleteEncounter = function (event) {
  console.log('delete encounter events.js')
  event.preventDefault()
  const form = event.target
  const formData = getFormFields(form)
  api.deleteEncounter(formData)
    .then(ui.onDeleteEncounterSuccess)
    .catch(ui.onDeleteEncounterFailure)
}

module.exports = {
  onModalClick,
  onCreateEncounter,
  onGetAllEncounters,
  onShowEncounter,
  onUpdateEncounter,
  onDeleteEncounter
}
