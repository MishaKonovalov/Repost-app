import React, { Component } from 'react'

import './post-status-filter.css'

export default class PostStatusFilter extends Component{
  constructor(props) {
    super(props)
    this.button = [
      {name: 'all', lable: 'Все'},
      {name: 'like', lable: 'Понравилось'}
    ]
  }

  render() {
    const buttons = this.button.map(({name, lable}) => {
      const activeClass = this.props.filter === name ? 
      'btn-primary' :
      'btn-outline-primary'

      return (
        <button
        key={name} 
        type="button" 
        className={`btn ${activeClass}`}
        onClick={() => this.props.onFilterSelect(name)}
        >
          {lable}
        </button>
        )
    })

    return (
      <div className="btn-group">
        {buttons}
      </div>
    )
  }
}

