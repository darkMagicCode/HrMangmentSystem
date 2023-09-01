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
import CardAppDesign from "../../../../ui-elements/cards/advance/CardAppDesign";
import { useNavigate } from "react-router-dom";

const ProjectsList = () => {
  let navigate = useNavigate();
  return (
    <div className="app-user-list">
      <Row>
        <Col
          lg="5"
          md="6"
          onClick={() => {
            navigate("/apps/user/view/50");
            // window.location.href = '/apps/user/view/50'
          }}
        >
          <CardAppDesign />
        </Col>
      </Row>
      {/* <Table /> */}
    </div>
  );
};

export default ProjectsList;
