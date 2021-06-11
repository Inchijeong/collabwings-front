import React, { useState, useEffect, useRef } from 'react'
import {
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CRow,
  CInput,
  CTextarea,
  CButton,
  CLabel,
  CFormGroup,
  CModal,
  CModalTitle,
  CModalHeader,
  CModalBody,
  CModalFooter,
} from  '@coreui/react'
import axios from 'axios';

const Project = (prop) => {

  const [project, setProject] = useState([]);
  const [boards, setBoards] = useState([]);
  const [isAddableBoard, setAddableBoard] = useState(false);
  const [modal, setModal] = useState(false);
  const [inputs, setInputs] = useState({
    title: '',
    contents: ''
  });
  const { title, contents } = inputs;
  const [seletedBoardIndex, setSeletedBoardIndex] = useState(-1);
  const boardAddCardHeader = useRef();
  const projectId = prop.match.params.project;
  const boardAddBtnRow = document.getElementById('board-add-btn-row');
  const boardAddInputRow = document.getElementById('board-add-input-row');
  const boardAddTitleInput = document.getElementById('board-add-title-input');

  const handleInputChange = (e) => {
    const nextInputs = {
      ...inputs,
      [e.target.name]: e.target.value
    };
    setInputs(nextInputs);
  }

  const handleCreateCard = () => {
    axios.post('http://localhost:8080/api/v1/cards', {
      title: inputs.title,
      contents: inputs.contents,
      board_id: seletedBoardIndex
    })
    .then(res => {
      const targetBoard = boards.filter(b => {return b.id === seletedBoardIndex})[0];
      targetBoard.cards.push(res.data.data)
      setInputs({
        title: '',
        contents: ''
      });
      setModal();
    })
    .catch(res => console.log(res));
  }

  const handleClickBoardAddCardHeader = () => {
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
      setBoards([...boards, res.data.data]);
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
    if(isAddableBoard && (!boardAddCardHeader.current || !boardAddCardHeader.current.contains(e.target))){
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
        {boards.slice(0).reverse().map((board, boardIndex) => (
          <CCol xs="12" sm="6" md="4" lg="3" xl="3" key={boardIndex}>
            <CCard>
              <CCardHeader>
                <h4>{board.title}</h4>
              </CCardHeader>
              <CCardBody>
                {board.cards.map((card, cardIndex) => (
                  <CCard key={cardIndex}>
                    <CCardHeader>
                      {card.title}
                    </CCardHeader>
                    <CCardBody>
                      {card.contents}
                    </CCardBody>
                  </CCard>
                ))}
                <CButton
                  variant="outline"
                  color="secondary"
                  onClick={() => {
                    setModal(!modal);
                    setSeletedBoardIndex(board.id);
                  }}
                  block
                >+ Add a Card</CButton>
              </CCardBody>
            </CCard>
          </CCol>
        ))}
        <CCol xs="12" sm="6" md="4" lg="3" xl="3">
          <CCard className="cusor-pointer">
            <CCardHeader
              onClick={handleClickBoardAddCardHeader}
              innerRef={boardAddCardHeader}
            >
              <CRow id="board-add-btn-row">
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
                    placeholder="Enter Board Title"
                    onKeyDown={handleKeyDownBoardAddTitle}
                  />
                </CCol>
                <CCol md="3" lg="3">
                  <CButton
                    color="primary"
                    onClick={handleClickBoardAddBtn}
                  >Add</CButton>
                </CCol>
              </CRow>
            </CCardHeader>
          </CCard>
        </CCol>
      </CRow>
      {/* 카드 생성 모달 */}
      <CModal 
      show={modal} 
      onClose={setModal}
      >
        <CModalHeader closeButton>
          <CModalTitle>Create a Card</CModalTitle>
        </CModalHeader>
        <CModalBody>
          <CFormGroup>
            <CLabel htmlFor="name">Title</CLabel>                    
            <CInput
              id="title"
              name="title"
              value={title}
              onChange={handleInputChange}
              placeholder="Enter Card Title"
              required />
          </CFormGroup>
          <CFormGroup>
            <CLabel htmlFor="name">Contents</CLabel>
            <CTextarea 
              id="contents"
              name="contents"
              value={contents}
              onChange={handleInputChange}
              placeholder="Enter Card Contents"
              rows="10"
            />
          </CFormGroup>
        </CModalBody>
        <CModalFooter>
          <CButton
            color="primary"
            onClick={() => handleCreateCard()}
          >Create</CButton>{' '}
          <CButton 
            color="secondary" 
            onClick={() => setModal(false)}
          >Cancel</CButton>
        </CModalFooter>
      </CModal>
      {/* 카드 생성 모달 끝*/}
    </>
  )
}

export default Project
