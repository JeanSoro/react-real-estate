import React, { Component} from 'react';

export default class Filter extends Component {
  state = {
    name: 'Jean'
  };
  
  componentWillMount(){
    this.props.populateAction()
  }

  cities = () => {
    if(this.props.globalState.populateFormsData.cities != undefined) {
    let { cities } = this.props.globalState.populateFormsData

    return cities.map((item) => {
      return(
        <option key={item} value={item}>{item}</option>
        )
      })
    }
  }

  homeTypes = () => {
    if(this.props.globalState.populateFormsData.homeTypes != undefined) {
    let { homeTypes } = this.props.globalState.populateFormsData

    return homeTypes.map((item) => {
      return(
        <option key={item} value={item}>{item}</option>
        )
      })
    }
  }

  bedrooms = () => {
    let { bedrooms } = this.props.globalState.populateFormsData
    if(bedrooms != undefined) {
    let { bedrooms } = this.props.globalState.populateFormsData

    return bedrooms.map((item) => {
      return(
        <option key={item} value={item}>{item}+ BR</option>
        )
      })
    }
  }

  render () {
    return (
      <section id="filter">
        <div className="inside">
          <h4>Filter by Category</h4>
            <label htmlFor="city">City</label>
              <select 
                name="city" 
                className="filters city"
                onChange={this.props.change}>
                <option value="All">All</option>
                  {this.cities()}
              </select>

            <label htmlFor="city">Home Type</label>
              <select 
                name="homeType" 
                className="filters homeType" 
                onChange={this.props.change}>
                <option value="All">All Homes</option>
                  {this.homeTypes()}
              </select>

            <label htmlFor="city">Bedrooms</label>
              <select 
                name="bedrooms" 
                className="filters bedrooms" 
                onChange={this.props.change}>
                  {this.bedrooms()}
              </select>

          <div className="filters price">
            <span className="title">Price</span>
            <input type="text" name="min_price" className="min-price" 
              onChange={this.props.change}
              value={this.props.globalState.min_price}/>
            <input type="text" name="max_price" className="max-price"
              onChange={this.props.change}
              value={this.props.globalState.max_price}/>
          </div>
          <div className="filters floor-space">
            <span className="title">Floor Space</span>
            <input type="text" name="min_floor-space" className="min-floor-space" 
              onChange={this.props.change}
              value={this.props.globalState.min_floor_space}/>
            <input type="text" name="max_floor-space" className="max-floor-space" 
              onChange={this.props.change}
              value={this.props.globalState.max_floor_space}/>
          </div>
        <div className="filters extras">
          <span className="title">Extras</span>
          <label htmlFor="extras">
            <span>Elevators</span>
          <input name ="elevator" value="elevator" type="checkbox"  
          onChange={this.props.change}/>
        </label>

        <label htmlFor="extras">
          <span>Swimming Pool</span>
          <input name ="swimming_pool" value="swimming_pool" type="checkbox" 
          onChange={this.props.change}/>
        </label>

        <label htmlFor="extras">
          <span>Basement</span>
          <input name ="basement" value="basement" type="checkbox" 
          onChange={this.props.change}/>
        </label>

        <label htmlFor="extras">
          <span>Gym</span>
          <input name ="gym" value="gym" type="checkbox" 
          onChange={this.props.change}/>
        </label>
       </div>
      </div>
    </section>
    );
  }
}
