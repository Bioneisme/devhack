import React from "react";
import { useAppDispatch } from "../../../../hooks/useAppDispatch.js";
import useInput from "../../../../hooks/useInput.js";
import { userRegister } from "../../../../redux/index.js";
import { Link } from "react-router-dom";
import { Button, Form, Input, Space, Typography } from "antd";

const UserRegisterForm = () => {
  const dispatch = useAppDispatch();
  const { Item } = Form;
  const { Title, Text } = Typography;

  // input fields for registration
  const phone = useInput("87086308161");
  const password = useInput("password");
  const name = useInput("Zaur");

  function handleSubmit() {
    dispatch(userRegister(
      phone.value,
      password.value,
      name.value
    ));
  }

  return (
    <Form onFinish={ handleSubmit } style={ { textAlign: "center" } }>
      <Item>
        <Title>Регистрация в систему</Title>
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
        <Input
          type="text"
          placeholder="Введите имя"
          { ...name }
        />
      </Item>
      <Item>
        У вас уже есть аккаунт? <Text strong><Link to={ "/userLogin" }>Войдите в систему</Link></Text>
      </Item>
      <Item>
        <Space>
          <Button
            type="primary"
            htmlType="submit"
            size="large"
            className="custom-button"
          >
            Создать аккаунт
          </Button>
        </Space>
      </Item>
    </Form>
  );
};

export default UserRegisterForm;
