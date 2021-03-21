import React from 'react'
import {
  TheContent,
  TheSidebar,
  TheFooter,
  TheHeader,
  TheModal
} from './index'

const TheLayout = () => {
  return (
    <div className="c-app c-default-layout">
      <TheSidebar/>
      <div className="c-wrapper">
        <TheHeader/>
        <div className="c-body">
          <TheContent/>
          <TheModal/>
        </div>
        <TheFooter/>
      </div>
    </div>
  )
}

export default TheLayout
