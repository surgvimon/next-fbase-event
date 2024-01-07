'use client'
import { Card, Col, Row, Tabs } from 'antd'
import React from 'react'
import AboutTap from './AboutTap';
import AccountForm from './AccountForm';

export default function ProfileContent({profile, isCurrentUser}:any) {
  const tabItems = [
    {label:'About User',key:'1',children: <AboutTap profile={profile} isCurrentUser={isCurrentUser}/>},
    {label:'Password',key:'2',children:<AccountForm/>},
    {label:'Photos',key:'3',children:'Content Photos'},
    {label:'Followers',key:'4',children:'Content Followers'},
    {label:'Following',key:'5',children:'Content Following'}
  ];

  return (
    <>
    <Card size="small" style={{marginTop:'0.3rem'}}>
        <Row>
            <Col span={24}>
            <Tabs
              tabPosition={'right'}
              items={tabItems}
            />
            </Col>
            
        </Row>
    </Card>
</>

  )
}
