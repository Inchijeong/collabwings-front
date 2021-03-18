import React from 'react'
import {
  TheFooter,
  TheHeader
} from '../../../containers/index'

const Home = () => {
  return (
    <div className="c-app c-default-layout">
      <div className="c-wrapper">
        <TheHeader/>
        <div className="c-body">
          안녕하세요!!
        </div>
        <TheFooter/>
      </div>
    </div>
  )
}

export default Home
