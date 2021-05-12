import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {
  CHeader,
  CFooter,
  CToggler,
  CHeaderBrand,
  CHeaderNav,
  CHeaderNavItem,
  CHeaderNavLink,
  CSubheader,
  CBreadcrumbRouter,
  CLink,
  CContainer
} from '@coreui/react'
import CIcon from '@coreui/icons-react'

// routes config
import routes from '../../../routes'

import { 
  TheHeaderDropdown,
  TheHeaderDropdownMssg,
  TheHeaderDropdownNotif,
  TheHeaderDropdownTasks
}  from '../../../containers/index'

const Home = () => {
  const dispatch = useDispatch()
  const sidebarShow = useSelector(state => state.sidebarShow)

  const toggleSidebar = () => {
    const val = [true, 'responsive'].includes(sidebarShow) ? false : 'responsive'
    dispatch({type: 'set', sidebarShow: val})
  }

  const toggleSidebarMobile = () => {
    const val = [false, 'responsive'].includes(sidebarShow) ? true : 'responsive'
    dispatch({type: 'set', sidebarShow: val})
  }
  
  return (
    <div className="c-app c-default-layout">
      <div className="c-wrapper">
        <CHeader withSubheader>
          {/* <CToggler
            inHeader
            className="ml-md-3 d-lg-none"
            onClick={toggleSidebarMobile}
          />
          <CToggler
            inHeader
            className="ml-3 d-md-down-none"
            onClick={toggleSidebar}
          /> */}
          <CHeaderBrand className="mx-auto d-lg-lg" to="/">
            <CIcon name="logo" height="48" alt="Logo"/>
          </CHeaderBrand>

          {/* <CHeaderNav className="d-md-down-none mr-auto">
            <CHeaderNavItem className="px-3" >
              <CHeaderNavLink to="/dashboard">Dashboard</CHeaderNavLink>
            </CHeaderNavItem>
            <CHeaderNavItem  className="px-3">
              <CHeaderNavLink to="/users">Users</CHeaderNavLink>
            </CHeaderNavItem>
            <CHeaderNavItem className="px-3">
              <CHeaderNavLink>Settings</CHeaderNavLink>
            </CHeaderNavItem>
          </CHeaderNav> */}

          {/* <CHeaderNav className="px-3">
            <TheHeaderDropdownNotif/>
            <TheHeaderDropdownTasks/>
            <TheHeaderDropdownMssg/>
            <TheHeaderDropdown/>
          </CHeaderNav> */}

          {/* <CSubheader className="px-3 justify-content-between">
            <CBreadcrumbRouter 
              className="border-0 c-subheader-nav m-0 px-0 px-md-3" 
              routes={routes} 
            />
              <div className="d-md-down-none mfe-2 c-subheader-nav">
                <CLink className="c-subheader-nav-link"href="#">
                  <CIcon name="cil-speech" alt="Settings" />
                </CLink>
                <CLink 
                  className="c-subheader-nav-link" 
                  aria-current="page" 
                  to="/dashboard"
                >
                  <CIcon name="cil-graph" alt="Dashboard" />&nbsp;Dashboard
                </CLink>
                <CLink className="c-subheader-nav-link" href="#">
                  <CIcon name="cil-settings" alt="Settings" />&nbsp;Settings
                </CLink>
              </div>
          </CSubheader> */}
        </CHeader>
        <div className="c-body">
          <CContainer>
            <a href="https://coreui.io" target="_blank" rel="noopener noreferrer">로그인 하기</a>
          </CContainer>
        </div>
        <CFooter fixed={false}>
          <div>
            <a href="https://coreui.io" target="_blank" rel="noopener noreferrer">CoreUI</a>
            <span className="ml-1">&copy; 2020 creativeLabs.</span>
          </div>
          <div className="mfs-auto">
            <span className="mr-1">Powered by</span>
            <a href="https://coreui.io/react" target="_blank" rel="noopener noreferrer">CoreUI for React</a>
          </div>
        </CFooter>
      </div>
    </div>
  )
}

export default Home
