import React, { Component } from 'react'
import AppHeader from '../app-header/header'
import SearchPanel from '../search-panel/searchPanel'
import PostStatusFilter from '../post-status-filter/postStatusFilter'
import PostList from '../post-list/postList'
import PostAddForm from '../post-add-form/postAddForm'

import './app.css'

export default class App extends Component{
  constructor(props) {
    super(props)
    this.state ={
      data: [
        {lable: 'Going to learn React', important: true, like: false, id: 1, deleted: false},
        {lable: 'that is so good', important: false, like: false, id: 2, deleted: false},
        {lable: 'thats vary good', important: false, like: false, id: 3, deleted: false}
      ],
      term: '',
      filter: 'all',
      deleted: false
    }
    this.deleteItem = this.deleteItem.bind(this)
    this.addItem = this.addItem.bind(this)
    this.onToggleImportant = this.onToggleImportant.bind(this)
    this.onToggleLike = this.onToggleLike.bind(this)
    this.onFilterSelect = this.onFilterSelect.bind(this)
    this.onUpdateSearch = this.onUpdateSearch.bind(this)
    this.maxId = 4
  }

  toggle({id, important = false, liked = false}){
    this.setState(({data}) => {

      const index = data.findIndex(elem => elem.id === id)
      const oldItem = data[index]
      const newItem = {...oldItem}

      if (important) {
        newItem.important = !oldItem.important
      }
      if (liked) {
        newItem.like = !oldItem.liked
      }

      const newState = [...data.slice(0, index), newItem, ...data.slice(index + 1)]

      return {
        data: newState
      }
    })
  }

  deleteItem(id) {
    this.setState(({data}) => {   
      const newArray = [...data.slice(0, id), ...data.slice(id + 1)]
      return {
        data: newArray,
      }
    })
  }

  addItem(body) {
    if(!body.length == 0) {
      const newItem = {
        lable: body,
        important: false,
        id: this.maxId++
      }
  
      this.setState(({data}) => {
        const newState = [...data, newItem]
        return {
          data: newState
        }
      })
    }
  }

  onToggleImportant(id) {
    this.toggle({id, important: true})
  }

  onToggleLike(id) {
    this.toggle({id ,liked: true})
  }

  onUpdateSearch(term) {
    this.setState({term})
  }

  filterPost(items, filter) {
    if(filter === 'like'){
      return items.filter(item => item.like)
    } else {
      return items
    }
  }

  searchPost(items, term) {
    if(term.length === 0) {
      return items
    }

    return items.filter(item => {
      return item.lable.indexOf(term) > -1
    })
  }

  onFilterSelect(filter) {
    this.setState({filter})
  }

  render(){
    const {data, term, filter} = this.state
    const liked = this.state.data.filter(item => item.like).length
    const allPosts = this.state.data.length
    const visiblePost = this.filterPost(this.searchPost(data, term), filter)
    
    return (
      <div className="app">
        <AppHeader 
        liked={liked}
        allPosts={allPosts}
        />
        <div className="search-panel d-flex">
          <SearchPanel onUpdateSearch={this.onUpdateSearch}/>
          <PostStatusFilter 
          filter={filter}
          onFilterSelect={this.onFilterSelect}
          />
        </div>
        <PostList 
        posts = {visiblePost}
        onDelete={this.deleteItem}
        deleted={this.state.deleted}
        onToggleImportant={this.onToggleImportant}
        onToggleLike={this.onToggleLike}
        />
        <PostAddForm
        onClick={this.addItem}
        />
      </div>
    )
  }
}


