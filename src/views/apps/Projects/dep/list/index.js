// ** User List Component
import Table from './Table'

// ** Reactstrap Imports
import { Row, Col } from 'reactstrap'

// ** Custom Components
import StatsHorizontal from '@components/widgets/stats/StatsHorizontal'

// ** Icons Imports
import { User, UserPlus, UserCheck, UserX } from 'react-feather'

// ** Styles
import '@styles/react/apps/app-users.scss'
import CardAppDesign from '../../../../ui-elements/cards/advance/CardAppDesign'

const ProjectsList = () => {
  return (
    <div className='app-user-list'>
      <Row>
      <Col lg='4' md='6'>
          <CardAppDesign />
        </Col>
      </Row>
      {/* <Table /> */}
    </div>
  )
}

export default ProjectsList
