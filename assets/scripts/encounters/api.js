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

const showEncounter = function (formData) {
  return $.ajax({
    url: config.apiUrl + '/encounters/' + formData.encounter.id,
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    // data: {
    //   id: '',
    //   cell: [],
    //   over: ''
    // }
  })
}

//would you still use the same params and store?
const updateEncounter = function (formData) {
  return $.ajax({
    url: config.apiUrl + '/encounters/' + store.encounter.id,
    method: 'PATCH',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data: {
      // game: {
      //   cell: {
      //     index: index,
      //     value: value
      //   },
      //   over: status
      }
    }
  })
}

const deleteEncounter = function (formData) {
  return $.ajax({
    url: config.apiUrl + '/encounters/' + store.encounter.id,
    method: 'DELETE',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data: formData
  })
}

}

module.exports = {
  createEncounter,
  indexOfEncounter,
  updateEncounter,
  deleteEncounter
}
