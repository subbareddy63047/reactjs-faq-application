// Write your code here.
import {Component} from 'react'

import FaqItem from '../FaqItem'

import './index.css'

class Faqs extends Component {
  constructor(props) {
    super(props)
    this.state = {initialList: props.faqsList}
  }

  onClick = id => {
    const {initialList} = this.state
    const filterList = initialList.map(each => {
      if (each.id === id) {
        return {...each, show: !each.show}
      }
      return each
    })
    this.setState({initialList: filterList})
  }

  render() {
    const {initialList} = this.state
    return (
      <div className="main-container">
        <div className="inner-container">
          <h1 className="heading">FAQs</h1>
          <ul className="list">
            {initialList.map(each => (
              <FaqItem eachItem={each} key={each.id} onClick={this.onClick} />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default Faqs
