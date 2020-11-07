import {Container, Row, Col} from 'react-bootstrap';
import {RichText} from 'prismic-reactjs';

const BrandIcons = ({doc}) => {
    console.log('brand icons test')
    console.log(doc)
    return (
        <Container>
        <Row>
            {doc.items.map((item, index) => (
                <Col key={index} md={3} className="text-center">
                    <i className={item.icon_link + " fa-4x"} />

                    <RichText render={item.icon_title} />
                    <div className="text-left">
                    <RichText render={item.icon_content} />
                    </div>
                </Col>
            ))}
        </Row>
        </Container>
    )
}

export default BrandIcons;