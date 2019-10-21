'use strict'
const getEncountersHandlebars = require('../templates/getEncounters.handlebars')
const showEncounterHandlebars = require('../templates/showEncounter.handlebars')

const onCreateEncounterSuccess = function (data) {
  console.log(data)
  $('#message-center').text('Successfully created an Encounter')
  $('.background-info').hide()
  $('#createEncounter').modal('hide')
}

const onCreateEncounterFailure = function (data) {
  console.log(data)
  $('#message-center').text('Failed to create an Encounter')
  $('#createEncounter').modal('hide')
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
  $('.resource-view').append(getEncountersHandlebars({encounters: data.encounters}))
  $('#message-center').text('Successfully got all Encounters')
  $('.background-info').hide()
}

const onGetAllEncountersFailure = function (data) {
  console.log('getAllEncounters ui failed')
  $('#message-center').text('Failed to get all Encounters')
}

const onShowEncounterSuccess = function (data) {
  console.log(data)
  $('#showEncounter').modal('hide')
  $('#showEncounterForm').trigger('reset')
  $('.resource-view').empty()
  // data.encounter = data.encounter.map(encounter => {
  //   encounter.date_of_encounter = new Date(encounter.date_of_encounter).toLocaleDateString()
  //   encounter.time_of_encounter = new Date(encounter.time_of_encounter).toLocaleTimeString()
  //
  //   return encounter
  // })
  $('#message-center').text('Successfully got an Encounter')
  $('.background-info').hide()
  $('.resource-view').append(showEncounterHandlebars({encounter: data.encounter}))
}

const onShowEncounterFailure = function (data) {
  console.log('showEncounterFailure ui')
  $('#showEncounter').modal('hide')
  $('#message-center').text('Failed to get an Encounter')
  $('#showEncounterForm').trigger('reset')
}

const onUpdateEncounterSuccess = function (data) {
  console.log('success update')
  data.encounters = data.encounters.map(encounter => {
    encounter.date_of_encounter = new Date(encounter.date_of_encounter).toLocaleDateString()
    encounter.time_of_encounter = new Date(encounter.time_of_encounter).toLocaleTimeString()

    return encounter
  })
  $('#message-center').text('Successfully updated Encounter')
  $('#updateEncounter').modal('hide')
  $('#updateEncounterForm').trigger('reset')
  $('.resource-view').append(showEncounterHandlebars({Encounter: data.encounter}))
  $('.background-info').hide()
}

const onUpdateEncounterFailure = function (data) {
  console.log('failure update')
  $('#updateEncounter').modal('hide')
  $('#message-center').text('Failed to update Encounter')
}

const onDeleteEncounterSuccess = function () {
  console.log('success delete')
  $('.resource-view').empty()
  $('.background-info').show()
  $('#message-center').text('Successfully deleted an Encounter')
  $('#deleteEncounter').modal('hide')
  $('#deleteEncounterForm').trigger('reset')
}

const onDeleteEncounterFailure = function () {
  console.log('failure delete')
  $('#deleteEncounter').modal('hide')
  $('#message-center').text('Failed to delete an Encounter')
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
