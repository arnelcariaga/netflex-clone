import Head from "next/head"
import Header from "./Header"
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"

export default function Layout({ children, title }) {
    return <>
        <Head>
            <title>{title}</title>
            <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
        </Head>

        <Container className="overflow-hidden gx-0" fluid>
            <Row>
                <Col>
                    <Header />
                </Col>
            </Row>

            <Row>
                <Col>
                    {children}
                </Col>
            </Row>

            <Row>
                <Col>
                    <span>Footer</span>
                </Col>
            </Row>
        </Container>

    </>
}