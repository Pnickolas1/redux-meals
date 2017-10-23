import React, { Component } from 'react'
import { connect } from 'react-redux';
import { addRecipe, removeFromCalendar } from '../actions'

class App extends Component {

  doThing = () => {
    this.props.dispatch(addRecipe({}))
  }

  render() {
    console.log(this.props)
    console.log(this.props.name)
    return (
      <div>
        <p>Hello World</p>
      </div>
    )
  }
}

function mapStateToProps ({calendar, food}) {
  const dayOrder = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday']

  return {
    calendar: dayOrder.map((day) => ({
      day,
      meals: Object.keys(calendar[day]).reduce((meals, meal) => {
        meals[meal] = calendar[day][meal]
          ? food[calendar[day][meal]]
          : null

        return meals
      }, {})
    })),
  }
}

function mapDispatchToProps (dispatch){
  return{
    selectRecipe: (data) => dispatch(addRecipe(data)),
    remove: (data) => dispatch(removeFromCalendar(data)),
  }
}


export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(App)