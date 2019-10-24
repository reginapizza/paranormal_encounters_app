'use strict'
const getEncountersHandlebars = require('../templates/getEncounters.handlebars')
const showEncounterHandlebars = require('../templates/showEncounter.handlebars')

const onCreateEncounterSuccess = function (data) {
  $('#message-center').text('Successfully created an Encounter.').fadeIn(0, 1)
  $('#message-center').text('Successfully created an Encounter.').fadeOut(5000, 0)
  $('.background-info').hide()
  $('#createEncounter').modal('hide')
  $('#encounter-info').trigger('reset')
}

const onCreateEncounterFailure = function (data) {
  $('#message-center').text('Failed to create an Encounter. Please try again.').fadeIn(0, 1)
  $('#message-center').text('Failed to create an Encounter. Please try again.').fadeOut(5000, 0)
  $('#createEncounter').modal('hide')
  $('#encounter-info').trigger('reset')
}

const onGetAllEncountersSuccess = function (data) {
  data.encounters = data.encounters.map(encounter => {
    encounter.date_of_encounter = new Date(encounter.date_of_encounter).toLocaleDateString()
    encounter.time_of_encounter = new Date(encounter.time_of_encounter).toLocaleTimeString()

    return encounter
  })
  $('.resource-view').empty()
  $('.resource-view').css('display', 'block').append(getEncountersHandlebars({encounters: data.encounters}))
  $('#message-center').text('Successfully got all Encounters').fadeIn(0, 1)
  $('#message-center').text('Successfully got all Encounters').fadeOut(5000, 0)
  $('.background-info').hide()
}

const onGetAllEncountersFailure = function (data) {
  $('#message-center').text('Failed to get all Encounters. Please try again.').fadeIn(0, 1)
  $('#message-center').text('Failed to get all Encounters. Please try again.').fadeOut(5000, 0)
}

const onShowEncounterSuccess = function (data) {
  $('#showEncounter').modal('hide')
  $('#showEncounterForm').trigger('reset')
  $('.resource-view').empty()
  data.encounter.date_of_encounter = new Date(data.encounter.date_of_encounter).toLocaleDateString()
  data.encounter.time_of_encounter = new Date(data.encounter.time_of_encounter).toLocaleTimeString()
  $('#message-center').text('Successfully got an Encounter').fadeIn(0, 1)
  $('#message-center').text('Successfully got an Encounter').fadeOut(5000, 0)
  $('.background-info').hide()
  $('.resource-view').css('display', 'block').append(showEncounterHandlebars({encounter: data.encounter}))
}

const onShowEncounterFailure = function (data) {
  $('#showEncounter').modal('hide')
  $('#message-center').text('ID could not be found, please try again.').fadeIn(0, 1)
  $('#message-center').text('ID could not be found, please try again.').fadeOut(5000, 0)
  $('#showEncounterForm').trigger('reset')
}

const onUpdateEncounterSuccess = function (data) {
  $('.resource-view').empty()
  data.encounter.date_of_encounter = new Date(data.encounter.date_of_encounter).toLocaleDateString()
  data.encounter.time_of_encounter = new Date(data.encounter.time_of_encounter).toLocaleTimeString()
  $('#message-center').text('Successfully updated Encounter').fadeIn(0, 1)
  $('#message-center').text('Successfully updated Encounter').fadeOut(5000, 0)
  $('#updateEncounter').modal('hide')
  $('#updateEncounterForm').trigger('reset')
  $('.resource-view').css('display', 'block').append(showEncounterHandlebars({encounter: data.encounter}))
  $('.background-info').hide()
}

const onUpdateEncounterFailure = function (data) {
  $('#updateEncounter').modal('hide')
  $('#message-center').text('You do not have permission to do that.').fadeIn(0, 1)
  $('#message-center').text('You do not have permission to do that.').fadeOut(5000, 0)
  $('#updateEncounterForm').trigger('reset')
}

const onDeleteEncounterSuccess = function () {
  $('.resource-view').empty()
  $('.background-info').show()
  $('#message-center').text('Successfully deleted an Encounter').fadeIn(0, 1)
  $('#message-center').text('Successfully deleted an Encounter').fadeOut(5000, 0)
  $('#deleteEncounter').modal('hide')
  $('#deleteEncounterForm').trigger('reset')
}

const onDeleteEncounterFailure = function () {
  $('#deleteEncounter').modal('hide')
  $('#message-center').text('You do not have permission to do that.').fadeIn(0, 1)
  $('#message-center').text('You do not have permission to do that.').fadeOut(5000, 0)
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
