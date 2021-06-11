import React, { useState, useEffect } from 'react'
import {
  Link
} from 'react-router-dom'
import {
  TheSidebar,
  TheFooter,
  TheHeader
} from '../containers/index'
import {
  CHeader,
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

  const [projects, setProjects] = useState([]);
  const [modal, setModal] = useState(false);
  const [inputs, setInputs] = useState({
    title: '',
    descriptions: ''
  });
  const { title, descriptions } = inputs;
  
  const handleInputChange = (e) => {
    const nextInputs = {
      ...inputs,
      [e.target.name]: e.target.value
    };
    setInputs(nextInputs);
  }

  const handleCreateProject = () => {
    axios.post('http://localhost:8080/api/v1/projects', {
      title: inputs.title,
      descriptions: inputs.descriptions
    })
    .then(res => {
      console.log(res);
      setProjects([res.data.data, ...projects]);
      setInputs({
        title: '',
        descriptions: ''
      });
      setModal();
    })
    .catch(res => console.log(res));
  }

  // 리스트 호출
  useEffect(() => {
    axios.get('http://localhost:8080/api/v1/projects')
      .then(res => {
        console.log(res);
        setProjects(res.data.data);
      })
      .catch(res => console.log(res));
  }, []);

  return (
    <>
      <CRow>
      {projects.map((project, index) => (
        <CCol xs="12" sm="6" md="4" key={index}>
          <Link to={`/project/${project.id}`}>
            <CCard accentColor="info">
              <CCardHeader>
                {project.title}
              </CCardHeader>
              <CCardBody>
                {project.descriptions}
              </CCardBody>
            </CCard>
          </Link>
        </CCol>
      ))}
      <CCol xs="12" sm="6" md="4" className="cusor-pointer">
        <CCard
          accentColor="info"
          onClick={() => setModal(!modal)}
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
          <CLabel htmlFor="name">Title</CLabel>                    
          <CInput
            id="title"
            name="title"
            value={title}
            onChange={handleInputChange}
            placeholder="Enter Project Title"
            required />
        </CFormGroup>
        <CFormGroup>
          <CLabel htmlFor="name">Descriptions</CLabel>                    
          <CInput
            id="descriptions"
            name="descriptions"
            value={descriptions}
            onChange={handleInputChange}
            placeholder="Enter Project Descriptions"
            required />
        </CFormGroup>
      </CModalBody>
      <CModalFooter>
        <CButton
          color="primary"
          onClick={() => handleCreateProject()}
        >Create</CButton>{' '}
        <CButton 
          color="secondary" 
          onClick={() => setModal(false)}
        >Cancel</CButton>
      </CModalFooter>
    </CModal>
    {/* 프로젝트 생성 모달 끝*/}
  </>
    // <div className="c-app c-default-layout">
    //   {/* <TheSidebar/> */}
    //   <div className="c-wrapper">
    //     {/* <TheHeader/> */}
    //     <CHeader className="align-items-center">
    //       <CCol md="12">
    //         <h2>Workspaces</h2>
    //       </CCol>
    //     </CHeader>
    //     <div className="c-body">
    //       <main className="c-main align-items-center">
    //         <CContainer fluid>
    //         </CContainer>
    //       </main>
    //     </div>
    //     <TheFooter/>
    //   </div>
    // </div>
  )
}

export default Workspaces
