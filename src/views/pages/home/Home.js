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
  CInput,
  CInputGroup,
  CInputGroupPrepend,
  CInputGroupText,
  CRow
} from '@coreui/react'
import CIcon from '@coreui/icons-react'

const Home = () => {

  return (
    <CContainer>
      <CRow className="justify-content-center">
        <CCol md="8">
          <CCardGroup>
            <CCard className="p-4">
              <CCardBody>
                <CForm>
                  <h1>Login</h1>
                  <p className="text-muted">Sign In to your account</p>
                  <Link to="/login">
                    <CButton color="primary" size="lg" id="login-btn">로그인 하기</CButton>
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
