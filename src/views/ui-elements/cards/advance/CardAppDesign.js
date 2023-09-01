// ** Third Party Components
import classnames from "classnames";

// ** Custom Components
import Avatar from "@components/avatar";

// ** Reactstrap Imports
import {
  Card,
  CardTitle,
  CardBody,
  CardText,
  Badge,
  Button,
  Progress,
  CardImg,
} from "reactstrap";

// ** Avatar Imports
import avatar7 from "@src/assets/images/portrait/small/avatar-s-7.jpg";
import avatar9 from "@src/assets/images/portrait/small/avatar-s-9.jpg";
import avatar14 from "@src/assets/images/portrait/small/avatar-s-14.jpg";
import profileImg from "@src/assets/images/portrait/small/avatar-s-13.jpg";
import coverImg from "@src/assets/images/banner/banner-12.jpg";

const CardAppDesign = () => {
  const avatarArr = [
    {
      img: avatar9,
      imgHeight: 34,
      imgWidth: 34,
    },
    {
      content: "PI",
      color: "light-danger",
    },
    {
      img: avatar14,
      imgHeight: 34,
      imgWidth: 34,
    },
    {
      img: avatar7,
      imgHeight: 34,
      imgWidth: 34,
    },
    {
      content: "AL",
      color: "light-secondary",
    },
  ];

  const designPlanningArr = [
    {
      title: "Due Date",
      subtitle: "12 Apr, 23",
    },
    {
      title: "Budget",
      subtitle: "$600.000",
    },
    {
      title: "Deadline",
      subtitle: "12 Jan, 24",
    },
    {
      title: "Spend",
      subtitle: "$200.000",
    },
    {
      title: " days left",
      subtitle: "110",
    },
  ];

  return (
    <Card className="card-app-design card-profile">
      <CardImg className="img-fluid" src={coverImg} top />
      <CardBody>
        <div className="profile-image-wrapper">
          <div className="profile-image">
            <Avatar img={'https://www.freepnglogos.com/uploads/dot-png/dot-background-image-design-joy-studio-design-gallery-best-28.png'} />
          </div>
        </div>
        <h3>Resturant managment</h3>
        <h6 className="text-muted">software for food managment</h6>

        <hr className="mb-2" />
        {/* <Badge color="light-primary">03 Sep, 20</Badge> */}
        {/* <CardTitle className="mt-1 mb-75">
          <Avatar
            className="me-1"
            img={profileImg}
            imgHeight="42"
            imgWidth="42"
          />
          Food managment system
        </CardTitle> */}

    <div className=" text-start">
          <div className="design-group mb-2 pt-50">
            <h6 className="section-label mb-1">Teams</h6>
            <Badge className="me-1 px-1" color="light-warning">
              Frontend
            </Badge>
            <Badge color="light-primary px-1">Backend</Badge>
          </div>
      
          <div className="design-group pt-25">
            <h6 className="section-label mb-1">Members</h6>
            {avatarArr.map((obj, index) => {
              return (
                <Avatar
                  key={index}
                  className={classnames({
                    "me-75": index !== avatarArr.length - 1,
                  })}
                  {...obj}
                />
              );
            })}
          </div>
    </div>
        <div className="demo-vertical-spacing my-1">
          <div className="d-flex justify-content-between">
            <span> Tasks: 100/200 </span>
            <span> 50% Completed</span>
          </div>
            <Progress value={50} />
        </div>
        <div className="design-planning-wrapper mb-2 py-75">
          {designPlanningArr.map((item) => (
            <div key={item.title} className="design-planning">
              <CardText className="mb-25">{item.title}</CardText>
              <h6 className="mb-0">{item.subtitle}</h6>
            </div>
          ))}
        </div>
      </CardBody>
    </Card>
  );
};

export default CardAppDesign;
