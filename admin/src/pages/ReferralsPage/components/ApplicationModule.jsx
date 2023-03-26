import React, {useEffect, useState} from 'react';
import moment from 'moment';

import {Col, Row, Tabs, Dropdown, Button} from "antd";
import {API} from "../../../api/index.js";
import InputGroup from "../../../components/inputGroup/inputGroup.jsx";
import {useInput} from "../../../hooks/useInput.js";

const Children = ({item, dataList}) => {
    const status = useInput(item.status);
    const executor = useInput(item.executor);
    const description = useInput(item.description);
    const price = useInput(item.price);
    const date = useInput(item.data ? moment(item.date).format('YYYY-DD-MM HH:mm') : null);

    const saveData = () => {
        API.patch('applications/updateApplication/' + item.id, {
            executor: executor.value,
            description: description.value,
            price: price.value,
            date: date.value
        }).then(res => {
        }).catch(e => {
            console.log(e)
        });
    }

    const changeStatus = ({key}) => {
        const value = dataList.find(item => item.key === key).label.props.children;
        API.patch('applications/updateApplication/' + item.id, {
            status: value
        }).then(res => {
            status.setValue(value);
        }).catch(e => {
            console.log(e)
        });
    }
    return <>
        <div style={{
            padding: '10px 20px',
            background: '#fff',
            borderRadius: '5px',
            boxShadow: '0 0 10px rgba(0,0,0,0.1)',
            marginBottom: '20px',
            justifyContent: 'center',
            display: 'flex',
            alignItems: 'center'
        }}>
            <Row gutter={[]}>
                <Col xl={4} md={8} xs={12}>
                    <p>Стоимость</p>
                    <InputGroup inputObj={price} type='input' saveValue={saveData} width={14}/>
                </Col>
                <Col xl={4} md={8} xs={12}>
                    <p>Описание</p>
                    <InputGroup inputObj={description} type='input' saveValue={saveData} width={14}/>
                </Col>
                <Col xl={4} md={8} xs={12}>
                    <p>Статус заявки</p>
                    <Dropdown menu={{items: dataList, onClick: changeStatus}} placement="bottom" arrow>
                        <Button onClick={e => e.preventDefault()}>{status.value}</Button>
                    </Dropdown>
                </Col>
                <Col xl={4} md={8} xs={12}>
                    <p>Исполнитель</p>
                    <InputGroup inputObj={executor} type='input' saveValue={saveData} width={14}/>
                </Col>
                <Col xl={4} md={8} xs={12}>
                    <p>Дата выполнения</p>
                    <InputGroup inputObj={date} type='input' saveValue={saveData} width={14}/>
                </Col>
            </Row>
        </div>
    </>;
}

const allStatuses = [
    {
        key: '1',
        label: (
            <div>
                Не оплачено
            </div>
        ),
    },
    {
        key: '2',
        label: (
            <div>
                На рассмотрении
            </div>
        ),
    },
    {
        key: '3',
        label: (
            <div>
                В работе
            </div>
        ),
    },
    {
        key: '4',
        label: (
            <div>
                Выполнено
            </div>
        ),
    },
    {
        key: '5',
        label: (
            <div>
                Не выполнено
            </div>
        ),
    },
];


const ApplicationModule = () => {
    const [mode, setMode] = useState('top');
    const [items, setItems] = useState([]);
    const [unpaidItems, setUnpaidItems] = useState([]);
    const [activeItems, setActiveItems] = useState([]);
    const [finishedItems, setFinishedItems] = useState([]);

    useEffect(() => {
        async function fetchData() {
            try {
                API.get('applications/getApplications').then(res => {
                    setUnpaidItems(res.data.applications.filter(item => item.status === 'Не оплачено'));
                    setActiveItems(res.data.applications.filter(item => item.status === 'На рассмотрении' || item.status === 'В работе'));
                    setFinishedItems(res.data.applications.filter(item => item.status === 'Выполнено' || item.status === 'Не выполнено'));
                }).catch(e => {
                    console.log(e);
                });
            } catch (e) {
                console.log(e);
            }
        }

        fetchData();
    }, []);

    return (
        <>
            <Col span={24}>
                <h2>Новые заявки</h2>
                <Row gutter={[36, 24]}>
                    <div>
                        <Tabs
                            defaultActiveKey="1"
                            tabPosition={mode}
                            style={{height: 120, width: "1100px"}}
                            items={unpaidItems.map((item, i) => {
                                const id = String(i + 1);
                                return {
                                    label: `${item.id}. ${item.title}`,
                                    key: id,
                                    children: <Children item={item} dataList={allStatuses}/>
                                };
                            })}
                        />
                    </div>
                </Row>
            </Col>
            <Col span={24} style={{marginTop: 50}}>
                <h2>Активные заявки</h2>
                <Row gutter={[36, 24]}>
                    <div>
                        <Tabs
                            defaultActiveKey="1"
                            tabPosition={mode}
                            style={{height: 120, width: "1100px"}}
                            items={activeItems.map((item, i) => {
                                const id = String(i + 1);
                                return {
                                    label: `${item.id}. ${item.title}`,
                                    key: id,
                                    children: <Children item={item} dataList={allStatuses}/>
                                };
                            })}
                        />
                    </div>
                </Row>
            </Col>
            <Col span={24} style={{marginTop: 50}}>
                <h2>История заявок</h2>
                <Row gutter={[36, 24]}>
                    <div>
                        <Tabs
                            defaultActiveKey="1"
                            tabPosition={mode}
                            style={{height: 120, width: "1100px"}}
                            items={finishedItems.map((item, i) => {
                                const id = String(i + 1);
                                return {
                                    label: `${item.id}. ${item.title}`,
                                    key: id,
                                    children: <Children item={item} dataList={allStatuses}/>
                                };
                            })}
                        />
                    </div>
                </Row>
            </Col>
        </>
    );
};

export default ApplicationModule;
