import React from 'react'
import { Link } from 'react-router-dom'
import {
  CButton,
  CCard,
  CCardBody,
  CCardGroup,
  CCol,
  CContainer,
  CForm,
  CRow
} from '@coreui/react'

const Home = () => {

  return (
    <CContainer>
      <CRow className="justify-content-center">
        <CCol>
          <CCardGroup>
            <CCard>
              <CCardBody>
                <CForm>
                  {/* <h1>Login</h1>
                  <p className="text-muted">Sign In to your account</p>
                  <Link to="/login">
                    <CButton color="primary" size="lg" id="login-btn">로그인 하기</CButton>
                  </Link> */}
                  <Link to="/workspaces">
                    <CButton color="primary" size="lg" id="workspaces-btn" block>Go Workspaces</CButton>
                  </Link>
                </CForm>
              </CCardBody>
            </CCard>
          </CCardGroup>
        </CCol>
      </CRow>
    </CContainer>
  )
}

export default Home
