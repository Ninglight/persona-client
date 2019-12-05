import React from 'react'
import { Row, Col } from 'antd'
import Fade from 'react-reveal/Fade'
import { Heading, Container, FormContact } from 'components'

const Contact = () => {

    return (
        <Container>
            <Fade delay={700}>
                <Row name="contact" type="flex" justify="center" style={{ textAlign: 'center', padding: '80px 0' }}>
                    <Col span={20} sm={14}>
                        <Heading tag="h2">Contact me</Heading>
                        <p>If you have a project, a opportunity to me or just talk about something, please feel free to contact me.</p>
                    </Col>
                    <Col span={24} lg={16}>
                        <FormContact />
                    </Col>
                </Row>
            </Fade>
        </Container>
    )

} 

export default Contact