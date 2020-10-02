import React from 'react'

import './app-header.css'

const AppHeader = (props) => {
  return (
    <div className="app-header d-flex">
      <h1>Mike Konovalov</h1>
      <h2>Понравилось {props.liked} записей из {props.allPosts}</h2>
    </div>
  )
}

export default AppHeader