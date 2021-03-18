import React from 'react'
import {
  Route,
  Link
} from 'react-router-dom'
import {
  TheSidebar,
  TheFooter,
  TheHeader
} from '../../../containers/index'
import {
  CContainer,
  CFade,
  CBadge,
  CButton,
  CButtonGroup,
  CCard,
  CCardBody,
  CCardFooter,
  CCardHeader,
  CCol,
  CProgress,
  CRow,
  CCallout
} from '@coreui/react'
import CIcon from '@coreui/icons-react'

const Workspaces = () => {
  return (
    <div className="c-app c-default-layout">
      <TheSidebar/>
      <div className="c-wrapper">
        <TheHeader/>
        <div className="c-body">
          <main className="c-main">
            <CContainer fluid>
              <CRow>
                <CCol xs="12" sm="6" md="4">
                  <Link to="/project/1">
                    <CCard accentColor="info">
                      <CCardHeader>
                        Project Name
                      </CCardHeader>
                      <CCardBody>
                        Summary
                      </CCardBody>
                    </CCard>
                  </Link>
                </CCol>
                <CCol xs="12" sm="6" md="4">
                  <CCard accentColor="info">
                    <CCardHeader>
                      Project Name2
                    </CCardHeader>
                    <CCardBody>
                      Summary
                    </CCardBody>
                  </CCard>
                </CCol>
              </CRow>
            </CContainer>
          </main>
        </div>
        <TheFooter/>
      </div>
    </div>
    // <Link to="/project/2">2프</Link>
    // <Route path="/projects/:project"></Route>
  )
}

export default Workspaces
