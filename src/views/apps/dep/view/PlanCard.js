// ** React Imports
import { Fragment, useState } from 'react'

// ** Reactstrap Imports
import { Row, Col, Label, Card, CardBody, Badge, Progress, Button, Modal, ModalBody, ModalHeader } from 'reactstrap'

// ** Third Party Components
import Swal from 'sweetalert2'
import Select from 'react-select'
import withReactContent from 'sweetalert2-react-content'

// ** Utils
import { selectThemeColors } from '@utils'

// ** Styles
import '@styles/react/libs/react-select/_react-select.scss'
import '@styles/base/plugins/extensions/ext-component-sweet-alerts.scss'

const planOptions = [
  { value: 'standard', label: 'Standard - $99/month' },
  { value: 'exclusive', label: 'Exclusive - $249/month' },
  { value: 'enterprise', label: 'Enterprise - $499/month' }
]

const MySwal = withReactContent(Swal)

const PlanCard = () => {
  // ** State
  const [show, setShow] = useState(false)

  const handleConfirmCancel = () => {
    return MySwal.fire({
      title: '',
      text: 'Are you sure you would like to cancel your subscription?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes',
      customClass: {
        confirmButton: 'btn btn-primary',
        cancelButton: 'btn btn-outline-danger ms-1'
      },
      buttonsStyling: false
    }).then(function (result) {
      if (result.value) {
        MySwal.fire({
          icon: 'success',
          title: 'Unsubscribed!',
          text: 'Your subscription cancelled successfully.',
          customClass: {
            confirmButton: 'btn btn-success'
          }
        })
      } else if (result.dismiss === MySwal.DismissReason.cancel) {
        MySwal.fire({
          title: 'Cancelled',
          text: 'Unsubscription Cancelled!!',
          icon: 'error',
          customClass: {
            confirmButton: 'btn btn-success'
          }
        })
      }
    })
  }

  return (
    <Fragment>
  
      <Modal isOpen={show} toggle={() => setShow(!show)} className='modal-dialog-centered'>
        <ModalHeader className='bg-transparent' toggle={() => setShow(!show)}></ModalHeader>
        <ModalBody className='px-5 pb-2'>
          <div className='text-center mb-2'>
            <h1 className='mb-1'>Upgrade Plan</h1>
            <p>Choose the best plan for user.</p>
          </div>
          <Row className='pt-50'>
            <Col sm={8}>
              <Label className='form-label'>Choose Plan</Label>
              <Select
                isClearable={false}
                className='react-select'
                classNamePrefix='select'
                options={planOptions}
                theme={selectThemeColors}
                defaultValue={planOptions[0]}
              />
            </Col>
            <Col sm={4} className='text-sm-end mt-2'>
              <Button color='primary'>Upgrade</Button>
            </Col>
          </Row>
        </ModalBody>
        <hr />
        <ModalBody className='px-5 pb-3'>
          <h6>User current plan is standard plan</h6>
          <div className='d-flex justify-content-between align-items-center flex-wrap'>
            <div className='d-flex justify-content-center me-1 mb-1'>
              <sup className='h5 pricing-currency pt-1 text-primary'>$</sup>
              <h1 className='fw-bolder display-4 mb-0 text-primary me-25'>99</h1>
              <sub className='pricing-duration font-small-4 mt-auto mb-2'>/month</sub>
            </div>
            <Button outline color='danger' className='mb-1' onClick={handleConfirmCancel}>
              Cancel Subscription
            </Button>
          </div>
        </ModalBody>
      </Modal>
    </Fragment>
  )
}

export default PlanCard
