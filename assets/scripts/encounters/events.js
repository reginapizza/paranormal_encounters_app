'use strict'
const getFormFields = require('../../../lib/get-form-fields.js')
const api = require('./api')
const ui = require('./ui')

const onCreateEncounter = function (event) {
  event.preventDefault()
  const form = event.target
  const formData = getFormFields(form)
  api.createEncounter(formData)
    .then(ui.onCreateEncounterSuccess)
    .catch(ui.onCreateEncounterFailure)
}

const onGetMyEncounters = function (event) {
  event.preventDefault()
  const form = event.target
  const formData = getFormFields(form)
  api.getMyEncounters(formData)
    .then(ui.onGetMyEncountersSuccess)
    .catch(ui.onGetMyEncountersFailure)
}

const onGetAllEncounters = function (event) {
  event.preventDefault()
  const form = event.target
  const formData = getFormFields(form)
  api.getAllEncounters(formData)
    .then(ui.onGetAllEncountersSuccess)
    .catch(ui.onGetAllEncountersFailure)
}

const onShowEncounter = function (event) {
  event.preventDefault()
  const form = event.target
  const formData = getFormFields(form)
  api.showEncounter(formData)
    .then(ui.onShowEncounterSuccess)
    .catch(ui.onShowEncounterFailure)
}

const onUpdateEncounter = function (event) {
  event.preventDefault()
  const form = event.target
  const formData = getFormFields(form)
  api.updateEncounter(formData)
    .then(ui.onUpdateEncounterSuccess)
    .catch(ui.onUpdateEncounterFailure)
}

const onDeleteEncounter = function (event) {
  event.preventDefault()
  const form = event.target
  const formData = getFormFields(form)
  api.deleteEncounter(formData)
    .then(ui.onDeleteEncounterSuccess)
    .catch(ui.onDeleteEncounterFailure)
}

module.exports = {
  onCreateEncounter,
  onGetMyEncounters,
  onGetAllEncounters,
  onShowEncounter,
  onUpdateEncounter,
  onDeleteEncounter
}
