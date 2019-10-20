'use strict'
const handlebars = require('../templates/encounters.handlebars')

const onModalSuccess = function () {
  console.log('modal trigger successful')
  $('#myInput').trigger('focus')
}

const onModalFailure = function () {
  console.log('modal failure')
}

const onCreateEncounterSuccess = function (data) {
  console.log(data)
  $('.resource-action-message').text('Successfully created an Encounter')
  $('.background-info').hide()
}

const onCreateEncounterFailure = function (data) {
  console.log(data)
  $('.resource-action-message').text('Failed to create an Encounter')
}

const onGetAllEncountersSuccess = function (data) {
  console.log(data)
  $('.resource-view').append(handlebars({encounters: data.encounters}))
  $('.resource-action-message').text('Successfully got all Encounters')
}

const onGetAllEncountersFailure = function (data) {
  console.log('getAllEncounters ui failed')
  $('.resource-action-message').text('Failed to get all Encounters')
}

const onShowEncounterSuccess = function (data) {
  console.log(data)
  $('.resource-action-message').text('Successfully got an Encounters')
}

const onShowEncounterFailure = function () {
  console.log('showEncounterFailure ui')
  $('.resource-action-message').text('Failed to get an Encounter')
}

const onUpdateEncounterSuccess = function () {
  console.log('success update')
  $('.resource-action-message').text('Successfully updated Encounter')
}

const onUpdateEncounterFailure = function () {
  console.log('failure update')
  $('.resource-action-message').text('Failed to update Encounter')
}

const onDeleteEncounterSuccess = function () {
  console.log('success delete')
  $('.resource-action-message').text('Successfully deleted an Encounter')
}

const onDeleteEncounterFailure = function () {
  console.log('failure delete')
  $('.resource-action-message').text('Failed to delete an Encounter')
}

module.exports = {
  onModalSuccess,
  onModalFailure,
  onCreateEncounterSuccess,
  onCreateEncounterFailure,
  onGetAllEncountersSuccess,
  onGetAllEncountersFailure,
  onShowEncounterSuccess,
  onShowEncounterFailure,
  onUpdateEncounterSuccess,
  onUpdateEncounterFailure,
  onDeleteEncounterSuccess,
  onDeleteEncounterFailure
}
