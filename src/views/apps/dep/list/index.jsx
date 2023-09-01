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
import { useNavigate } from "react-router-dom";

const DepList = () => {
  let navigate = useNavigate()

  return (
    <div className="app-user-list">
      <Row className="match-height">
        <Col
          lg="4"
          md="6"
          sm="12"
          onClick={() => {

            navigate('/apps/user/view/50')
              }}
        >
          <CardMeetup />
        </Col >{" "}
        <Col lg="4" md="6" sm="12" onClick={() => {

  navigate('/apps/user/view/50')
  }}>
          <CardMeetup />
        </Col>
      </Row>
    </div>
  );
};

export default DepList;
