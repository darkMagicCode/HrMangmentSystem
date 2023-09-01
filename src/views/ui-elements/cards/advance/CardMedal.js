// ** Reactstrap Imports
import { Card, CardBody, CardText, Button } from 'reactstrap'

// ** Images
import medal from '@src/assets/images/illustration/badge.svg'

const CardMedal = () => {
  return (
    <Card className='card-congratulations-medal'>
      <CardBody>
        <h5>Congratulations 🎉 Dot!</h5>
        <CardText className=''>
        <h3 className=''>
          You have finished HR System
        </h3>
          </CardText>
        <h3 className='mb-75 mt-2 pt-50'>
        <h3 className=''>
         Spend
        </h3>
          <a href='/' onClick={e => e.preventDefault()}>
            $2000k
          </a>
        </h3>
        {/* <Button color='primary'>View Sales</Button> */}
        <img className='congratulation-medal' src={medal} alt='Medal Pic' />
      </CardBody>
    </Card>
  )
}

export default CardMedal
