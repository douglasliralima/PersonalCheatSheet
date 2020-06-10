import React from 'react'

import {Row, Col, Select} from 'antd';

const { Option } = Select;

export default function Filter({setCountryA, setCountryB, setDataType, Countries}){
    return (
        <Row>
        <Col span={12}  style={{ marginTop : 20, left : 20 }} >
            <Select defaultValue="Brazil" style={{ width: 220 }} onChange={setCountryA}>
                {Countries.map((value) => (<Option value={value}>{value}</Option>))}
            </Select>
        </Col>
        <Col span={12}  style={{ marginTop : 20, left : 20 }}>
            <Select defaultValue="China" style={{ width: 220 }} onChange={setCountryB}>
                {Countries.map((value) => (<Option value={value}>{value}</Option>))}
            </Select>
        </Col>
        <Col span={12}  style={{ marginTop : 20, left : 20 }}>
            <Select defaultValue="confirmed" style={{ width: 220 }} onChange={setDataType}>
                <Option value="confirmed">Confirmações</Option>
                <Option value="recovered">Recuperações</Option>
                <Option value="deaths">Mortes</Option>
            </Select>
        </Col>
        </Row>
        
    );
}