import { Button, Card, Col, Row } from 'antd';
import React, { useState } from 'react'
import ProfileForm from './ProfileForm';
const { Meta } = Card;

export default function PhotosTap({profile, isCurrentUser}:any) {
    const [editMode, setEditMode] = useState(false);

    return (
        <Row>
            <Col span={24}>
                <Row>
                    <Col flex="1 1 200px"><h2>Photos</h2></Col>
                    <Col flex="0 1 150px">{ isCurrentUser && <Button onClick={() => setEditMode(!editMode)} type="primary" block>{editMode ? "Cancel" : "Edit"}</Button>}</Col>
                </Row>
            </Col>
            <Col span={24}>
                {editMode 
                    ?   (<ProfileForm profile={profile}/>) 
                    :   (
                            <>
                                <Card
                                    hoverable
                                    style={{ width: 240 }}
                                    cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
                                >
                                    <Meta title="Europe Street beat" description="www.instagram.com" />
                                </Card>
                            </>
                        )
                }
            </Col>
        </Row>
    )
}
