import React, { Component} from 'react'
import ReactDOM from 'react-dom'
import Header from './Header.js'
import Filter from './Filter.js';
import Listings from './Listings.js';
import listingsData from './data/listingData.js';


class App extends Component {
  state = {
    name: 'Jean',
    listingsData,
    city: 'All',
    homeType: 'All',
    bedrooms: '0',
    min_price: 0,
    max_price: 1000000,
    min_floor_space: 0,
    max_floor_space: 50000,
    elevator: false,
    basement: false,
    gym: false,
    swimming_pool: false,
    filteredData: listingsData,
    populateFormsData: '',
    sortby: 'price-dsc',
    view: 'long',
    search: ''
  }
  
  componentWillMount() {
    // Sorting prices from lowest to highest by default 
    let listingsData = this.state.listingsData.sort((a, b) => a.price - b.price)

    this.setState({
      listingsData
    })
  }

  change = (e) => {
    let name = e.target.name
    let value = (e.target.type === 'checkbox') ? e.target.checked : e.target.value
    
    this.setState({
      [name]: value
    }, () => {
      this.filteredData()
    })
  }

  changeView = (viewName) => {
    this.setState({
      view: viewName
    })
  }

  //filtering minimum and maximum prices, as well as floor spaces inputs
  filteredData = () => {
    let newData = this.state.listingsData.filter((item) => {
      return item.price >= this.state.min_price 
      && item.price <= this.state.max_price 
      && item.floorSpace >= this.state.min_floor_space 
      && item.floorSpace <= this.state.max_floor_space 
      && item.rooms >= this.state.bedrooms
    })

    //Filtering by cities
    if(this.state.city != "All") {
      newData = newData.filter( item => item.city === this.state.city )
    }

    // Filtering by hometypes
    if(this.state.homeType != "All") {
      newData = newData.filter( item => item.homeType === this.state.homeType )
    }

    // Sorting prices in ascending and descending order
    if(this.state.sortby == 'price-dsc') {
      newData = newData.sort( (a, b) => a.price - b.price )
    }

    if(this.state.sortby == 'price-asc') {
      newData = newData.sort( (a, b) => b.price - a.price )
    }

    // Logic for search input
    if(this.state.search != '') {
      newData = newData.filter((item) => {
        let city = item.city.toLowerCase()
        let searchText = this.state.search.toLowerCase()
        let searchMatch = city.match(searchText)

        if(searchMatch != null){
          return true
        }
      })
    }

    // Sorting through extra features data 
    if(this.state.swimming_pool != false) {
      newData = newData.filter( item => item.extras.includes('swimming_pool') === this.state.swimming_pool )
    }

    if(this.state.basement != false) {
      newData = newData.filter( item => item.extras.includes('basement') === this.state.basement )
    }

    if(this.state.gym != false) {
      newData = newData.filter( item => item.extras.includes('gym') === this.state.gym )
    }

    if(this.state.elevator != false) {
      newData = newData.filter( item => item.extras.includes('elevator') === this.state.elevator )
    }

    this.setState({
      filteredData: newData
    })
  }

  populateForms = () => {
    // City
    let cities = this.state.listingsData.map(item => item.city)
    cities = new Set(cities) // removes anything that is repeated, keeps unique ones, new Set() creates an object
    cities =[...cities] // spreading object into a new array to change type from object to array
    cities = cities.sort()

    //HomeType
    let homeTypes = this.state.listingsData.map(item => item.homeType )
    homeTypes = new Set(homeTypes)
    homeTypes = [...homeTypes]
    homeTypes = homeTypes.sort()

    // Bedrooms
    let bedrooms = this.state.listingsData.map(item => item.rooms )
    bedrooms = new Set(bedrooms)
    bedrooms = [...bedrooms]
    bedrooms = bedrooms.sort()

    this.setState({
      populateFormsData: {
        homeTypes,
        bedrooms,
        cities
      }
    })
  }

  render () {
    return (
      <div>
       <Header /> 
         <section id="content-area">
          <Filter 
            change={this.change} 
            globalState={this.state}
            populateAction={this.populateForms}
          />
          <Listings 
            listingsData={this.state.filteredData} 
            change={this.change} 
            globalState={this.state}
            changeView={this.changeView}
          />
        </section>
      
      </div>
    );
  }
}

const app = document.getElementById('app')
ReactDOM.render(<App />, app)



// <ModalComponent/>
