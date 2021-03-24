import React, { useState } from 'react'
import {
  CButton,
  CModal,
  CModalBody,
  CModalFooter,
  CModalHeader,
  CModalTitle,
} from '@coreui/react'

const TheModal = () => {

  const [modal, setModal] = useState(false)

  return (
    <CModal 
    show={modal} 
    onClose={setModal}
    >
      <CModalHeader closeButton>
        <CModalTitle>Create a Channel</CModalTitle>
      </CModalHeader>
      <CModalBody>
        Channel Name
      </CModalBody>
      <CModalFooter>
        <CButton color="primary">Do Something</CButton>{' '}
        <CButton 
          color="secondary" 
          onClick={() => setModal(false)}
        >Cancel</CButton>
      </CModalFooter>
    </CModal>
  )
}

export default React.memo(TheModal)