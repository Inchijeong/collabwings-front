import React, { useState } from 'react'
import { CIcon } from '@coreui/icons-react';
import { freeSet } from '@coreui/icons'
import {
  CButton,
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CModal,
  CModalBody,
  CModalFooter,
  CModalHeader,
  CModalTitle,
  CRow
} from '@coreui/react'

const Channel = () => {

  const [modal, setModal] = useState(false)

  return (
    <div>
      <CIcon name="cil-list" size="2xl"/>
      <p>Channel</p>
      <CIcon size="2xl" content={freeSet.cilPlus} />

      <CIcon name="cilPencil" />
      <p>Plus</p>

      <CButton 
        onClick={() => setModal(!modal)} 
        className="mr-1"
      >Launch demo modal</CButton>
    </div>
  )
}

export default Channel
