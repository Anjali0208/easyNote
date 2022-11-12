import React from 'react'
import "./Card.css"
import Card from 'react-bootstrap/Card';

function Cards({ src, title, price, description }) {
    return (
        <div className="card">
            <Card >
                <Card.Body>
                    <Card.Title>Card Title</Card.Title>

                    <Card.Text>
                        Some quick example text to build on the card title and make up the
                        bulk of the card's content.
                    </Card.Text>
                    <Card.Link href="#">Card Link</Card.Link>
                    <Card.Link href="#">Another Link</Card.Link>
                </Card.Body>
            </Card>
        </div>
    )
}

export default Cards