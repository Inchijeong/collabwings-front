import React, { useState } from 'react'
import {
  Link
} from 'react-router-dom'
import {
  TheSidebar,
  TheFooter,
  TheHeader
} from '../../../containers/index'
import {
  CContainer,
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CRow,
  CButton,
  CModal,
  CModalBody,
  CModalFooter,
  CModalHeader,
  CModalTitle,
  CFormGroup,
  CLabel,
  CInput
} from '@coreui/react'

import CIcon from '@coreui/icons-react'
import { freeSet } from '@coreui/icons'

import axios from 'axios';

const Workspaces = () => {

  const [modal, setModal] = useState(false)

  axios.get('http://localhost:8080/api/hello')
  .then(res => {
    console.log(res);
    // this.setState({
    //   message: res.date.message
    // })
  })
  .catch(res => console.log(res))

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
                <CCol xs="12" sm="6" md="4">
                  <CCard accentColor="info">
                    <CCardHeader>
                      Project Name3
                    </CCardHeader>
                    <CCardBody>
                      Summary
                    </CCardBody>
                  </CCard>
                </CCol>
                <CCol xs="12" sm="6" md="4">
                  <CCard
                    accentColor="info"
                    onClick={() => setModal(!modal)}
                    // onClick={()=>{alert('생성')}}
                  >
                    <CCardHeader>
                      Create a Project
                    </CCardHeader>
                    <CCardBody>
                      <CIcon size={'xl'} name="cil-plus" content={freeSet.cilPlus}/>
                    </CCardBody>
                  </CCard>
                </CCol>
              </CRow>
              {/* 프로젝트 생성 모달 */}
              <CModal 
              show={modal} 
              onClose={setModal}
              >
                <CModalHeader closeButton>
                  <CModalTitle>Create a Project</CModalTitle>
                </CModalHeader>
                <CModalBody>
                  <CFormGroup>
                    <CLabel htmlFor="name">Name</CLabel>                    
                    <CInput id="name" placeholder="Enter Project Name" required />
                  </CFormGroup>
                  <CFormGroup>
                    <CLabel htmlFor="name">Descriptions</CLabel>                    
                    <CInput id="descriptions" placeholder="Enter Project Descriptions" required />
                  </CFormGroup>
                </CModalBody>
                <CModalFooter>
                  <CButton color="primary">Create</CButton>{' '}
                  <CButton 
                    color="secondary" 
                    onClick={() => setModal(false)}
                  >Cancel</CButton>
                </CModalFooter>
              </CModal>
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
