// ** User List Component
import Table from "./Table";

// ** Reactstrap Imports
import { Row, Col } from "reactstrap";

// ** Custom Components
import StatsHorizontal from "@components/widgets/stats/StatsHorizontal";

// ** Icons Imports
import { User, UserPlus, UserCheck, UserX } from "react-feather";

// ** Styles
import "@styles/react/apps/app-users.scss";
import CardMeetup from "../../../ui-elements/cards/advance/CardMeetup";

const DepList = () => {
  return (
    <div className="app-user-list">
        <Row className='match-height'>
        <Col lg="4" md="6" sm="12">
        <CardMeetup />
      </Col>  <Col lg="4" md="6" sm="12">
        <CardMeetup />
      </Col>
      </Row>
    </div>
  );
};

export default DepList;
