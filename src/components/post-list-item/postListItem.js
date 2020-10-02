import React, {Component} from 'react'

import './post-list-item.css'

export default class PostListItem extends Component{
  constructor(props){
    super(props)
    this.state = {
      del: false
    }
  }

  render() {
    let classNames =  'app-list-item d-flex justify-content-between'
    // const {lable, onDelete, onToggleImportant, onToggleLike, important, like} = this.props

    if (this.props.important){
      classNames += ' important'
    }

    if (this.props.like){
      classNames += ' like'
    }
  
    return (
     <div className={classNames}>
      <span className="app-list-item-lable" onClick={this.props.onToggleLike}>
        {this.props.lable}
      </span>
      <div className="d-flex justify-content-center align-items-center">
        <button type="button" className="btn-star btn-sm" onClick={this.props.onToggleImportant}>
          <i className="fa fa-star"></i>
        </button>
        <button type="button" className="btn-trash btn-sm" onClick={this.props.onDelete}>
          <i className="fa fa-trash-o"></i>
        </button>
        <i className="fa fa-heart"></i>
      </div>
      </div>
    )
  } 
}

// const PostListItem = ({lable, important = false}) => {

//   let classNames =  'app-list-item d-flex justify-content-between'

//   if (important){
//     classNames += ' important'
//   }

//   return (
    
//   )
// }

// export default PostListItem