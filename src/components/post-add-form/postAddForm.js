import React, { Component } from 'react'

import './post-add-form.css'

export default class PostAddForm extends Component{
  constructor(props){
    super(props)
    this.state = {
      text: ''
    }
    this.onValueChange = this.onValueChange.bind(this)
    this.onSubmit = this.onSubmit.bind(this)
  }

  onValueChange(e) {
    this.setState({text: e.target.value})
  }

  onSubmit(e) {
    e.preventDefault()
    this.props.onClick(this.state.text)
    this.setState({text: ''})
  }

  render() { 
    return (
      <form className="bottom-pannel d-flex"
      onSubmit={this.onSubmit}
      >
        <textarea
          type="text"
          placeholder="Что нового?"
          className='form-control new-post-label'
          onChange={this.onValueChange}
          value={this.state.text}
        />
        <button
          type="submit"
          className="btn btn-outline-primary"
        >Добавить
        </button>
      </form>
    )
  }
}
