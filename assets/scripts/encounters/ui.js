'use strict'
const getEncountersHandlebars = require('../templates/getEncounters.handlebars')
const showEncounterHandlebars = require('../templates/showEncounter.handlebars')

const onCreateEncounterSuccess = function (data) {
  $('#message-center').text('Successfully created an Encounter.')
  $('.background-info').hide()
  $('#createEncounter').modal('hide')
}

const onCreateEncounterFailure = function (data) {
  $('#message-center').text('Failed to create an Encounter. Please try again.')
  $('#createEncounter').modal('hide')
}

const onGetAllEncountersSuccess = function (data) {
  // new Date(encounter.date_of_encounter).toLocaleDateString()
  data.encounters = data.encounters.map(encounter => {
    encounter.date_of_encounter = new Date(encounter.date_of_encounter).toLocaleDateString()
    encounter.time_of_encounter = new Date(encounter.time_of_encounter).toLocaleTimeString()

    return encounter
  })
  $('.resource-view').empty()
  $('.resource-view').css('display', 'block').append(getEncountersHandlebars({encounters: data.encounters}))
  $('#message-center').text('Successfully got all Encounters')
  $('.background-info').hide()
}

const onGetAllEncountersFailure = function (data) {
  $('#message-center').text('Failed to get all Encounters. Please try again.')
}

const onShowEncounterSuccess = function (data) {
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
  $('.resource-view').css('display', 'block').append(showEncounterHandlebars({encounter: data.encounter}))
}

const onShowEncounterFailure = function (data) {
  $('#showEncounter').modal('hide')
  $('#message-center').text('ID could not be found, please try again.')
  $('#showEncounterForm').trigger('reset')
}

const onUpdateEncounterSuccess = function (data) {
  $('.resource-view').empty()
  // data.encounters = data.encounters.map(encounter => {
  //   encounter.date_of_encounter = new Date(encounter.date_of_encounter).toLocaleDateString()
  //   encounter.time_of_encounter = new Date(encounter.time_of_encounter).toLocaleTimeString()
  //
  //   return encounter
  // })
  $('#message-center').text('Successfully updated Encounter')
  $('#updateEncounter').modal('hide')
  $('#updateEncounterForm').trigger('reset')
  $('.resource-view').css('display', 'block').append(showEncounterHandlebars({encounter: data.encounter}))
  $('.background-info').hide()
}

const onUpdateEncounterFailure = function (data) {
  $('#updateEncounter').modal('hide')
  $('#message-center').text('You do not have permission to do that.')
}

const onDeleteEncounterSuccess = function () {
  $('.resource-view').empty()
  $('.background-info').show()
  $('#message-center').text('Successfully deleted an Encounter')
  $('#deleteEncounter').modal('hide')
  $('#deleteEncounterForm').trigger('reset')
}

const onDeleteEncounterFailure = function () {
  $('#deleteEncounter').modal('hide')
  $('#message-center').text('You do not have permission to do that.')
  $('#deleteEncounterForm').trigger('reset')
}

module.exports = {
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
