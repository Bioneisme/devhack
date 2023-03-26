import React, { useState } from "react";

import { Button, Col, Divider, Input, InputNumber, Modal, Row, Select, Space, Spin, Typography } from "antd";

import API from "../../../api/index.js";
import { selectData } from "../../CreateApplicationModule/selectData.js";
import useInput from "../../../hooks/useInput.js";

const CollapseTable = ({ service, index, servicesLength, category }) => {
  const { Title, Text } = Typography;
  const { TextArea } = Input;
  const [modalPayOpen, setModalPayOpen] = useState(false);
  const [modalCreateOpen, setModalCreateOpen] = useState(false);
  const [isFetching, setIsFetching] = useState(false);
  const description = useInput("")
  const title = service.name;
  const price = service.price;

  async function postPayData(title, category, price) {
    setIsFetching(true);
    const response = await API.post("/payments/createPayment", {
      title,
      category,
      price
    });
    window.location.href = response.data.payment;
    setIsFetching(false);
    setModalPayOpen(false);
  }

  async function postCreateData(title, category, description) {
    setIsFetching(true);
    await API.post("/applications/createApplication", {
      title,
      category,
      price: "0",
      description,
      status: "На рассмотрении"
    });
    setIsFetching(false);
    setModalCreateOpen(false);
  }

  return (
    <>
      <Row
        gutter={ [0, 12] }
        justify="space-between"
        key={ service.id }
        onClick={ () => price !== 0 ? setModalPayOpen(true) : setModalCreateOpen(true) }
        style={ { cursor: "pointer" } }
      >
        <Col span={ 24 }>
          { title }
        </Col>
        <Col span={ 12 }>
          Стоимость
        </Col>
        <Col span={ 12 }>
          { price } тенге
        </Col>
        <Col span={ 12 }>
          Срок Исполнения
        </Col>
        <Col span={ 12 }>
          { service.time_to_complete }
        </Col>
        { index !== servicesLength && <Divider /> }
      </Row>
      <Modal
        centered
        open={ modalPayOpen }
        onOk={ () => setModalPayOpen(false) }
        onCancel={ () => setModalPayOpen(false) }
      >
        <Row gutter={ [0, 24] }>
          <Col span={ 24 }>
            <Space direction="vertical">
              <Title level={ 4 }>Название сервиса</Title>
              <Text> { service.name }</Text>
            </Space>
          </Col>
          <Col span={ 24 }>
            <Space direction="vertical">
              <Title level={ 4 }>Категория</Title>
              <Text>{ category }</Text>
            </Space>
          </Col>
          <Col span={ 24 }>
            <Space direction="vertical">
              <Title level={ 4 }>Цена</Title>
              <Text>{ service.price }</Text>
            </Space>
          </Col>
          <Col span={ 24 }>
            <Space direction="vertical">
              <Button
                className="custom-button"
                type="primary"
                size="large"
                onClick={ () => postPayData(title, category, price) }
              >
                { !isFetching ? "Оплатить" : <Spin /> }
              </Button>
            </Space>
          </Col>
        </Row>
      </Modal>
      <Modal
        centered
        open={ modalCreateOpen }
        onOk={ () => setModalCreateOpen(false) }
        onCancel={ () => setModalCreateOpen(false) }
      >
        <Row gutter={ [0, 24] }>
          <Col span={ 24 }>
            <Space
              direction="vertical"
              size="middle"
            >
              <Title level={ 4 }>В чем проблема?</Title>
              <Input
                disabled={ true }
                value={ title }
              />
            </Space>
          </Col>
          <Col span={ 24 }>
            <Space
              direction="vertical"
              size="middle"
            >
              <Title level={ 4 }>В чем проблема?</Title>
              <TextArea
                rows={ 2 }
                placeholder="Проблема возникла из-за..."
                { ...description }
              />
            </Space>
          </Col>
          <Col span={ 24 }>
            <Space
              direction="vertical"
              size="middle"
            >
              <Title level={ 4 }>Категория</Title>
              <Input
                disabled={ true }
                value={ category }
              />
            </Space>
          </Col>
          <Col span={ 24 }>
            <Space
              direction="vertical"
              size="middle"
              className="flex-center"
            >
              <Button
                className="custom-button"
                type="primary"
                size="large"
                onClick={ () => postCreateData(title, category, description.value) }
              >
                { !isFetching ? "Подать заявку" : <Spin /> }
              </Button>
            </Space>
          </Col>
        </Row>
      </Modal>
    </>
  );
};

export default CollapseTable;
