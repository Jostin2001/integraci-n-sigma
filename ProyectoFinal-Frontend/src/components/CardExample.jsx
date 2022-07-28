import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import NavDropdown from "react-bootstrap/NavDropdown";
import { BsFillCartPlusFill } from "react-icons/bs";
import ImgPerfil from "./ImgPerfil";

function CardExample({ portada, perfil, nombre, cargo, desc, precio, key }) {
  return (
    <div className="d-flex justify-content-around" key={key}>
      <Card style={{ width: "19rem" }} className="mb-5">
        <Card.Img
          variant="top"
          style={{
            objectFit:"cover"
          }}
          src={"http://localhost:9000/images/"+portada}
        />
        <Card.Body>
          <div className="d-flex">
            {/* //aqui va perfil */}
            <ImgPerfil fuente="https://images.unsplash.com/photo-1480455624313-e29b44bbfde1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8bWFsZSUyMHByb2ZpbGV8ZW58MHx8MHx8&w=1000&q=80" />
            <Card.Title>
              {nombre} <br />
              <span className="gr-text fs-6">{cargo}</span>
            </Card.Title>
          </div>
          <Card.Text>
            {desc}
          </Card.Text>
          <hr />
          <div className="d-flex justify-content-between">
            <BsFillCartPlusFill className="gr-text fs-3" />
            <Card.Title>
              <span className="fs-6 text-uppercase">Precio desde: </span>
              <span className="gr-text">B/. {(Math.round(Number(precio ?? 0) *100) /100).toFixed(2)}</span>
            </Card.Title>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
}

export default CardExample;
