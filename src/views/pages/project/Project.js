import React, { useState, useEffect } from 'react'
import {
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CRow,
  CInput,
  CButton,
} from  '@coreui/react'
import axios from 'axios';

const Project = (prop) => {

  const [project, setProject] = useState([]);
  const [boards, setBoards] = useState([]);
  const projectId = prop.match.params.project;
  const boardTitleBtn = document.getElementById('add-board-btn');
  const boardTitleInput = document.getElementById('board-title-input');
  
  const handleClickOutside = () => {

  };

  const handleClickAddBoardBtn = () => {    
    boardTitleBtn.classList.add('display-none');
    boardTitleInput.classList.remove('display-none');
    boardTitleInput.focus();
  };
  
  const handleKeyDownBoardTitle = (e) => {
    if(e.key === 'Enter'){
      axios.post('http://localhost:8080/api/v1/boards', {
        title: e.target.value,
        project_id: projectId
      })
      .then(res => {
        console.log(res);
        setBoards([res.data.data, ...boards]);
        boardTitleInput.value = '';
        boardTitleInput.classList.add('display-none');
        boardTitleBtn.classList.remove('display-none');
      })
      .catch(res => console.log(res));
    }
  };
  
  // 리스트 호출
  useEffect(() => {
    axios.get('http://localhost:8080/api/v1/projects/'+projectId)
      .then(res => {
        console.log(res);
        const project = res.data.data;
        setProject(project);
        setBoards(project.boards)
      })
      .catch(res => console.log(res));
  }, [projectId]);

  return (
    <>
      <CCard>
        <CCardBody>
          <h1>{project.title}</h1>
        </CCardBody>
      </CCard>
      <CRow>
        {boards.map((board, boardIndex) => (
          <CCol xs="12" sm="6" md="4" lg="3" xl="3" key={boardIndex}>
            <CCard>
              <CCardHeader>
                <h4>{board.title}</h4>
              </CCardHeader>
            </CCard>
            {board.cards.map((card, cardIndex) => (
              <CCard>
                <CCardHeader>
                  {card.title}
                </CCardHeader>
                <CCardBody>
                  Card Contents
                </CCardBody>
              </CCard>
            ))}
          </CCol>
        ))}
        <CCol xs="12" sm="6" md="4" lg="3" xl="3">
          <CCard>
            <CCardHeader>
              <CRow>
                <CCol md="12">
                  <h4
                    id="add-board-btn"
                    onClick={handleClickAddBoardBtn}
                  >+ Add a board</h4>
                </CCol>
              </CRow>
              <CRow>
                <CCol md="8" lg="8">
                  <CInput
                    id="board-title-input"
                    name="board-title-input"
                    placeholder="Enter board title"
                    className="display-none"
                    onKeyDown={handleKeyDownBoardTitle}
                  />
                </CCol>
                <CCol md="4" lg="4">
                  <CButton type="submit" color="primary">Add</CButton>
                </CCol>
              </CRow>
            </CCardHeader>
          </CCard>
        </CCol>
      </CRow>
    </>
  )
}

export default Project
