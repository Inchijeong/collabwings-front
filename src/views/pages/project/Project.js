import React, { useState, useEffect, useRef } from 'react'
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
  const [isAddableBoard, setAddableBoard] = useState(false);
  const boardAddCol = useRef();
  const projectId = prop.match.params.project;
  const boardAddBtnRow = document.getElementById('board-add-btn-row');
  const boardAddInputRow = document.getElementById('board-add-input-row');
  const boardAddTitleInput = document.getElementById('board-add-title-input');

  const handleClickBoardAddCol = () => {
    console.log('isAddableBoard', isAddableBoard);
    if(!isAddableBoard){
      boardAddBtnRow.classList.add('display-none');
      boardAddInputRow.classList.remove('display-none');
      boardAddInputRow.focus();
      setAddableBoard(true);
    }
  };
  const handleClickBoardAddBtn = (e) => {
    axios.post('http://localhost:8080/api/v1/boards', {
      title: boardAddTitleInput.value,
      project_id: projectId
    })
    .then(res => {
      console.log(res);
      setBoards([res.data.data, ...boards]);
      setAddableBoard(false);
      boardAddTitleInput.value = '';
      boardAddInputRow.classList.add('display-none');
      boardAddBtnRow.classList.remove('display-none');
    })
    .catch(res => console.log(res));
  }

  const handleKeyDownBoardAddTitle = (e) => {
    if(e.key === 'Enter') handleClickBoardAddBtn();
  };

  const handleClickOutside = (e) => {
    if(isAddableBoard && (!boardAddCol.current || !boardAddCol.current.contains(e.target))){
      setAddableBoard(false);
      boardAddInputRow.classList.add('display-none');
      boardAddBtnRow.classList.remove('display-none');
    }
  };
  
  window.addEventListener('click', handleClickOutside);

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
              <CCard key={cardIndex}>
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
        <CCol 
          xs="12" sm="6" md="4" lg="3" xl="3"
          onClick={handleClickBoardAddCol}
          innerRef={boardAddCol}
        >
          <CCard>
            <CCardHeader>
              <CRow
                id="board-add-btn-row"
                className="cusor-pointer"
              >
                <CCol md="12">
                  <h4>+ Add a Board</h4>
                </CCol>
              </CRow>
              <CRow
                id="board-add-input-row"
                className="display-none"
              >
                <CCol md="9" lg="9">
                  <CInput
                    id="board-add-title-input"
                    name="board-add-title-input"
                    placeholder="Enter board title"
                    onKeyDown={handleKeyDownBoardAddTitle}
                  />
                </CCol>
                <CCol md="3" lg="3">
                  <CButton
                    type="submit"
                    color="primary"
                    onClick={handleClickBoardAddBtn}
                  >Add</CButton>
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
