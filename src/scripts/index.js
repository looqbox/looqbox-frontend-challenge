import './bootstrap'
import angular from 'angular'
// import axios from 'axios'
import registerServiceWorker from './registerServiceWorker'

const app = angular.module('pokedex', [])

class DialogModel {
  constructor() {
    this.visible = false
  }

  open(data) {
    this.data = data
    console.log(this.data)
    this.visible = true
  }

  close() {
    this.visible = false
  }
}

app.controller('MainController', [
  '$scope',
  '$http',
  ($scope, $http) => {
    let limit = 0
    let offset = 0

    $http
      .get('https://pokeapi.co/api/v2/pokemon/', {
        params: { offset, limit }
      })
      .then(response => {
        const pokemons = []

        response.data.results.map(pokemon => {
          $http.get(pokemon.url).then(function(response) {
            pokemons.push(response.data)
          })
        })

        $scope.pokemons = pokemons
      })

    $scope.title = 'Pokedex'
    $scope.viewDialog = new DialogModel()
  }
])

app.directive('viewPokemonDialog', [
  () => ({
    restrict: 'E',
    scope: {
      model: '='
    },
    link: (scope, element, attributes) => {
      scope.$watch('model.visible', newValue => {
        const modalElement = element.find('.modal')

        modalElement.modal(newValue ? 'show' : 'hide')
      })

      element.on('shown.bs.modal', () => {
        scope.$apply(() => {
          scope.model.visible = true
        })
      })

      element.on('hidden.bs.modal', () => {
        scope.$apply(() => {
          scope.model.visible = false
        })
      })
    },
    templateUrl: 'view-pokemon-dialog.html'
  })
])

registerServiceWorker()
