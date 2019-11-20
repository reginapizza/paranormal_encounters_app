'use strict'

const config = require('../config')
const store = require('../store')

const createEncounter = function (formData) {
  return $.ajax({
    method: 'POST',
    url: config.apiUrl + '/encounters',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data: formData
  })
}

const getAllEncounters = function () {
  return $.ajax({
    url: config.apiUrl + '/encounters',
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data: {

    }
  })
}

const getMyEncounters = function () {
  return $.ajax({
    url: config.apiUrl + '/index_my',
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data: {

    }
  })
}

const showEncounter = function (formData) {
  return $.ajax({
    url: config.apiUrl + '/encounters/' + formData.encounter.id,
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data: formData
  })
}

const updateEncounter = function (formData) {
  return $.ajax({
    url: config.apiUrl + '/encounters/' + formData.encounter.id,
    method: 'PATCH',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data: formData
  })
}

const deleteEncounter = function (formData) {
  return $.ajax({
    url: config.apiUrl + '/encounters/' + formData.encounter.id,
    method: 'DELETE',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data: formData
  })
}

module.exports = {
  createEncounter,
  getAllEncounters,
  getMyEncounters,
  showEncounter,
  updateEncounter,
  deleteEncounter
}
