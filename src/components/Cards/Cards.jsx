import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import "./Cards.scss";
import ewc_image from "../../assets/EWC-Web-Game-Hero-Banners.jpg";
function Cards() {
  return (
    <div>
      <div className='card-heading'>ALl Games</div>
       <Row xs={1} md={4} className="g-4">
      {Array.from({ length: 8 }).map((_, idx) => (
        <Col key={idx} className='cardrow'>
          <Card className="h-100 shadow rounded">
            <img
                     src={ewc_image}
                     alt="Logo"
                     height="120"
                     className="d-inline-block align-top"
                   />
            <Card.Body>
              <Card.Title>Card title</Card.Title>
              <Card.Text>
                This is a longer card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
    </div>
  )
}

export default Cards
