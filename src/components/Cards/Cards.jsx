import { useState } from "react";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Form from "react-bootstrap/Form";
import "./Cards.scss";
import ewc_image from "../../assets/EWC-Web-Game-Hero-Banners.jpg";
import { Link } from "react-router-dom";

function Cards() {

  const gamesData = [
    { id: 1, title: "Counter Strike 2", status: "Live", type: "FPS" },
    { id: 2, title: "Valorant", status: "Upcoming", type: "FPS" },
    { id: 3, title: "League of Legends", status: "Live", type: "MOBA" },
    { id: 4, title: "Dota 2", status: "Completed", type: "MOBA" },
    { id: 5, title: "Counter Strike 2", status: "Live", type: "FPS" },
    { id: 6, title: "Valorant", status: "Upcoming", type: "FPS" },
    { id: 7, title: "League of Legends", status: "Live", type: "MOBA" },
    { id: 8, title: "Dota 2", status: "Completed", type: "MOBA" },
  ];

  const [titleFilter, setTitleFilter] = useState("All");
  const [statusFilter, setStatusFilter] = useState("All");
  const [typeFilter, setTypeFilter] = useState("All");

  const filteredGames = gamesData.filter((game) => {
    return (
      (titleFilter === "All" || game.title === titleFilter) &&
      (statusFilter === "All" || game.status === statusFilter) &&
      (typeFilter === "All" || game.type === typeFilter)
    );
  });

  return (
    <div className="all-games-show">
      <div className="container">
        <div className="d-flex justify-content-between align-center">
          <div className="card-heading">ALL Games</div>

          {/* 🔥 Dropdown Filters */}
          <div className="d-flex gap-3 mb-4">

            <Form.Select className="bg-light text-dark" onChange={(e) => setTitleFilter(e.target.value)}>
              <option value="All">All Titles</option>
              <option value="Counter Strike 2">Counter Strike 2</option>
              <option value="Valorant">Valorant</option>
              <option value="League of Legends">League of Legends</option>
              <option value="Dota 2">Dota 2</option>
            </Form.Select>

            <Form.Select className="bg-light text-dark" onChange={(e) => setStatusFilter(e.target.value)}>
              <option value="All">All Status</option>
              <option value="Live">Live</option>
              <option value="Upcoming">Upcoming</option>
              <option value="Completed">Completed</option>
            </Form.Select>

            <Form.Select className="bg-light text-dark" onChange={(e) => setTypeFilter(e.target.value)}>
              <option value="All">All Types</option>
              <option value="FPS">FPS</option>
              <option value="MOBA">MOBA</option>
            </Form.Select>

          </div>
        </div>
       <Row xs={1} md={4} className="card-game-row g-4 mt-4">
          {filteredGames.map((game) => (
            <Col key={game.id}>
              <Card className="card-game-box rounded-4 border-0">
                <img
                  src={ewc_image}
                  alt="Game"
                  height="180"
                />

                <Card.Body className="d-flex flex-column">
                  <Card.Title>{game.title}</Card.Title>

                  <Card.Text>
                    Status: {game.status} <br />
                    Type: {game.type}
                  </Card.Text>

                  <div className="mt-auto d-flex flex-column gap-2 text-center">
                        <Link to="/login" className="primary-button py-2 px-4 bg-black">
                          Play Head To Head
                        </Link>
                        <Link to="/login" className="primary-button py-2 px-4 bg-light btn-outline-secondary text-black">
                            Play PICK
                        </Link>
                  </div>
                </Card.Body>

              </Card>
            </Col>
          ))}
       </Row>

      </div>
    </div>
  );
}

export default Cards;