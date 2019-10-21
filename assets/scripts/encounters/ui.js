'use strict'
const handlebars = require('../templates/encounters.handlebars')

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
  // new Date(encounter.date_of_encounter).toLocaleDateString()
  data.encounters = data.encounters.map(encounter => {
    encounter.date_of_encounter = new Date(encounter.date_of_encounter).toLocaleDateString()
    encounter.time_of_encounter = new Date(encounter.time_of_encounter).toLocaleTimeString()

    return encounter
  })
  $('.resource-view').empty()
  $('.resource-view').append(handlebars({encounters: data.encounters}))
  $('.resource-action-message').text('Successfully got all Encounters')
  $('.background-info').hide()
}

const onGetAllEncountersFailure = function (data) {
  console.log('getAllEncounters ui failed')
  $('.resource-action-message').text('Failed to get all Encounters')
}

const onShowEncounterSuccess = function (data) {
  console.log(data)
  $('#showEncounter').modal('hide')
  $('#showEncounterForm').trigger('reset')
  $('.resource-view').empty()
  // data.encounters = data.encounters.map(encounter => {
  //   encounter.date_of_encounter = new Date(encounter.date_of_encounter).toLocaleDateString()
  //   encounter.time_of_encounter = new Date(encounter.time_of_encounter).toLocaleTimeString()
  //
  //   return encounter
  // })
  $('.resource-action-message').text('Successfully got an Encounter')
  $('.background-info').hide()
  $('.resource-view').append(`${data.encounter}`)
  // $('.resource-view').append(handlebars({encounters: data.encounters}))
}

const onShowEncounterFailure = function (data) {
  console.log('showEncounterFailure ui')
  $('.resource-action-message').text('Failed to get an Encounter')
  $('#showEncounterForm').trigger('reset')
}

const onUpdateEncounterSuccess = function (data) {
  console.log('success update')
  data.encounters = data.encounters.map(encounter => {
    encounter.date_of_encounter = new Date(encounter.date_of_encounter).toLocaleDateString()
    encounter.time_of_encounter = new Date(encounter.time_of_encounter).toLocaleTimeString()

    return encounter
  })
  $('.resource-action-message').text('Successfully updated Encounter')
  $('#updateEncounter').modal('hide')
  $('#updateEncounterForm').trigger('reset')
  $('.resource-view').append(handlebars({encounters: data.encounters}))
  $('.background-info').hide()
}

const onUpdateEncounterFailure = function (data) {
  console.log('failure update')
  $('.resource-action-message').text('Failed to update Encounter')
}

const onDeleteEncounterSuccess = function () {
  console.log('success delete')
  $('.resource-view').empty()
  $('.background-info').show()
  $('.resource-action-message').text('Successfully deleted an Encounter')
  $('#deleteEncounter').modal('hide')
  $('#deleteEncounterForm').trigger('reset')
}

const onDeleteEncounterFailure = function () {
  console.log('failure delete')
  $('.resource-action-message').text('Failed to delete an Encounter')
  $('#deleteEncounterForm').trigger('reset')
}

module.exports = {
  // onModalSuccess,
  // onModalFailure,
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
