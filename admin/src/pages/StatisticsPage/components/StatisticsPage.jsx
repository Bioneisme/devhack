import React, { useEffect, useState } from "react";
import { PageHeader } from "../../../components/pageHeaders/pageHeaders.jsx";
import { Main } from "../../pagesStyle.js";
import { Cards } from "../../../components/cards/frame/cards-frame.jsx";
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Col, Row, Spin } from "antd";
import { API } from "../../../api/index.js";

ChartJS.register(ArcElement, Tooltip, Legend);
const StatisticsPage = () => {
  const data = {
    labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
    datasets: [
      {
        label: '# of Votes',
        data: [12, 19, 3, 5, 2, 3],
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 159, 64, 0.2)',
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)',
        ],
        borderWidth: 1,
      },
    ],
  };

  const [categoriesData, setCategoriesData] = useState({});

  useEffect(() => {
    async function getCategoriesData() {
      const response = await API.get("/services/getFilteredServices");
      const services = response.data.services;
      const data = {
        labels: Object.keys(services),
        datasets: [{
          label: ' кол-во заявок',
          data: Object.values(services).map((item) => item.length),
          backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(255, 206, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(153, 102, 255, 0.2)',
            'rgba(255, 159, 64, 0.2)',
          ],
          borderColor: [
            'rgba(255, 99, 132, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(153, 102, 255, 1)',
            'rgba(255, 159, 64, 1)',
          ],
          borderWidth: 1,
        }],
      };
      setCategoriesData(data);
    }
    getCategoriesData();

  }, []);

  if (
    Object.keys(categoriesData).length === 0
  ) {
    return <Spin />;
  }

  return (
    <>
      <PageHeader
        ghost
        title="Статистика"
      />
      <Main>
        <Cards headless>
          <div style={ { minHeight: 'calc(100vh - 300px)' } }>
            <Row>
              <Col span={ 8 }>
                <Pie width={ 500 } data={ categoriesData } />
              </Col>
              {/*<Col span={ 8 }>*/}
              {/*  <Pie width={ 500 } data={ moneyData } />*/}
              {/*</Col>*/}
            </Row>
          </div>
        </Cards>
      </Main>
    </>
  );
};

export default StatisticsPage;
