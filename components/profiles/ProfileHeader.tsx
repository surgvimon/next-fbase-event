'use client'
import { Avatar, Button, Card, Col, Row } from 'antd'
import React from 'react'

export default function ProfileHeader({profile, isCurrentUser}:any) {
    return (
        <>
            <Card size="small">
                <Row>
                    <Col flex="1 1 200px">
                        <Row align="middle" gutter={8}>
                            <Col><Avatar size={128} src="../../user.png" /></Col>
                            <Col><h1>{profile?.displayName}</h1></Col>
                        </Row>                   
                    </Col>
                    <Col flex="0 1 300px">
                        <Row>
                            <Col span={24}>
                                <Row gutter={8}>
                                    <Col span={12} style={{textAlign:'center'}} >
                                        <h1 style={{marginBottom:'0', fontSize: '32px', fontWeight: '800'}}>158</h1>
                                        <span style={{fontSize: '13px', fontWeight: '600',textTransform: 'uppercase'}}>followers</span>
                                    </Col>
                                    <Col span={12} style={{textAlign:'center'}}>
                                        <h1 style={{marginBottom:'0', fontSize: '32px', fontWeight: '800'}}>158</h1>
                                        <span style={{fontSize: '13px', fontWeight: '600',textTransform: 'uppercase'}}>following</span>
                                    </Col>
                                </Row>
                                {!isCurrentUser &&
                                    <Button style={{marginTop:'1rem'}} type="primary" block>Following</Button>   
                                }  
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Card>
        </>
    )
}
