import React, {useEffect, useState} from 'react';
import moment from 'moment';

import {Col, Row, Tabs, Dropdown, Button} from "antd";
import {API} from "../../../api/index.js";
import InputGroup from "../../../components/inputGroup/inputGroup.jsx";
import {useInput} from "../../../hooks/useInput.js";

const Children = ({item}) => {
    const status = useInput(item.status);
    const executor = useInput(item.executor);
    const data = [
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

    const saveStatus = (value) => {
        // setStatus(value);
        // API.post('/referrals/update', {
        //     id: item.id,
        //     status: status.value
        // })
    }
    return <>
        <h3>
            {item.id}. {item.title}
        </h3>
        <h4>
            Стоимость: {item.price} тенге
        </h4>
        <div>
            Описание: {item.description ? item.description : 'Не указано'}
        </div>
        <div style={{
            display: 'flex',
            alignItems: 'center'
        }}>
            Статус заявки:
            <Dropdown menu={{items: data}} placement="bottom" arrow>
                <Button>{status.value}</Button>
            </Dropdown>
        </div>
        <div style={{
            display: 'flex',
            alignItems: 'center'
        }}>
            Испольнитель:
            <InputGroup inputObj={executor} type='input' saveValue={saveStatus} width={14}/>
        </div>
        <div>
            Дата исполнения: {item.data ? moment(item.date).format('DD.MM.YYYY HH:mm') : 'Не указана'}
        </div>
        <div>
            Дата создания заявки: {moment(item.createdAt).format('DD.MM.YYYY HH:mm')}
        </div>
    </>;
}


const ApplicationModule = () => {
    const [mode, setMode] = useState('top');
    const [items, setItems] = useState([]);
    const [unpaidItems, setUnpaidItems] = useState([]);

    useEffect(() => {
        async function fetchData() {
            try {
                API.get('applications/getApplications').then(res => {
                    console.log(res);
                    setItems(res.data.applications);
                    setUnpaidItems(res.data.applications.filter(item => item.status === 'Не оплачено'));
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
        <Col span={24}>
            <h2>Новые заявки</h2>
            <Row gutter={[36, 24]}>
                <div>
                    <Tabs
                        defaultActiveKey="1"
                        tabPosition={mode}
                        style={{height: 255, width: "1100px"}}
                        items={unpaidItems.map((item, i) => {
                            const id = String(i + 1);
                            return {
                                label: `${item.id}. ${item.title}`,
                                key: id,
                                children: <Children item={item}/>
                            };
                        })}
                    />
                </div>
            </Row>
        </Col>
    );
};

export default ApplicationModule;
