import React from "react";
import { Link } from "react-router-dom";

import { Button, Form, Input, Space, Typography } from "antd";

import useInput from "../../../../hooks/useInput.js";
import { useAppDispatch } from "../../../../hooks/useAppDispatch.js";
import { userLogin } from "../../../../redux/index.js";

const UserLoginForm = () => {
  const dispatch = useAppDispatch();
  const { Item } = Form;
  const { Title, Text } = Typography;

  // input fields for login
  const phone = useInput("");
  const password = useInput("");

  function handleSubmit() {
    dispatch(userLogin(
      phone.value,
      password.value
    ));
  }

  return (
    <Form
      onFinish={ handleSubmit }
      style={ { textAlign: "center" } }
    >
      <Item>
        <Title>Вход в систему</Title>
      </Item>
      <Item>
        <Input
          type="text"
          placeholder="Введите номер телефона"
          { ...phone }
        />
      </Item>
      <Item>
        <Input
          type="password"
          placeholder="Введите пароль"
          { ...password }
        />
      </Item>
      <Item>
        У вас нет аккаунта? <Text strong><Link to={ "/userRegister" }>Зарегистрируйтесь здесь</Link></Text>
      </Item>
      <Item>
        <Space>
          <Button
            type="primary"
            htmlType="submit"
            size="large"
            className="custom-button"
          >
            Войти в аккаунт
          </Button>
        </Space>
      </Item>
    </Form>
  );
};

export default UserLoginForm;
