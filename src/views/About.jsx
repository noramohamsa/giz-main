import Card from "react-bootstrap/Card";
import axios from "axios";
import {useState, useEffect} from "react";
import {Container, Row, Col} from "react-bootstrap";
const About = () => {
    const baseURL = "https://fakestoreapi.com/products";

    const [products, setProduct] = useState([]);

    useEffect(() => {
        axios.get(baseURL).then((response) => {
            setProduct(response.data);
        });
    }, []);

    return (
        <div>
            <Container>
                <Row>
                    {products.map((product) => (
                        <Col sm={4} key={product.id}>
                            <Card style={{width: "18rem"}}>
                                <Card.Img variant="top" src={product.image} />
                                <Card.Body>
                                    <Card.Title>{product.category}</Card.Title>
                                    <Card.Text>{product.description}</Card.Text>
                                    <div>{product.price}</div>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}
                </Row>
            </Container>
        </div>
    );
};

export default About;
