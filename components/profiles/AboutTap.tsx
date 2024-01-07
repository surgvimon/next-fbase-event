import { Button, Col, Row } from 'antd';
import React, { useState } from 'react'
import ProfileForm from './ProfileForm';

export default function AboutTap({profile, isCurrentUser}:any) {
    const [editMode, setEditMode] = useState(false);
    const date = profile?.createdAt 
    ? profile?.createdAt.toLocaleDateString('th-TH', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        weekday: 'short',
        }) 
    : null;
  return (
    <Row>
        <Col span={24}>
            <Row>
                <Col flex="1 1 200px"><h2>About : {profile?.displayName }</h2></Col>
                <Col flex="0 1 150px">{ isCurrentUser && <Button onClick={() => setEditMode(!editMode)} type="primary" block>{editMode ? "Cancel" : "Edit"}</Button>}</Col>
            </Row>
        </Col>
        <Col span={24}>
            {editMode 
                ?   (<ProfileForm profile={profile}/>) 
                :   (
                        <>
                        <strong>Member since : {date }</strong>
                        </>
                    )
            }
        </Col>
    </Row>
  )
}
