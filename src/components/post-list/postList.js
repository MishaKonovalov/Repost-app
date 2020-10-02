import React, { Component } from 'react'
import PostListItem from '../post-list-item/postListItem'


import './post-list.css'

export default class PostList extends Component{
  constructor(props){
    super(props)
    this.state = {
      deleted: false
    }
    this.handleClick = this.handleClick.bind(this)
  }
  handleClick(index) {
    this.setState({deleted: true})
    console.log(this.state)
    this.props.onDelete(index)
  }
  render() {
    const {posts, onToggleImportant, onToggleLike} = this.props
    let className = 'list-group-item' 

    const elements = posts.map((item, index) => {
      const {id, ...items} = item
      return (
        <li key={id} className={className}>
          <PostListItem 
          {...items} 
          deleted={this.state.deleted}
          onDelete={() => this.handleClick(index)}
          onToggleImportant = {() => onToggleImportant(id)}
          onToggleLike={() => onToggleLike(id)}
          />
        </li>
      )
    })
  
    return (
      <ul className="app-list">
        {elements}
      </ul>
    )
  }
}



