import React, { useState } from 'react';

const EventPractice = () => {
  /*
  onChange에서의 e는 SyntheticEvent로써 네이티브 이벤트(이건 또 뭐지)와는 달리 이벤트가 끝나면 이벤트가 초기화되므로 정보를 참조할 수 없습니다.
  */
  const [form, setForm] = useState({
    message: '',
    username: '',
  });
  const { message, username } = form;

  const onClick = (e) => {
    alert(`${message} : ${username}`);
    setForm({
      message: '',
      username: '',
    });
  };

  const onChange = (e) => {
    const nextForm = {
      ...form,
      [e.target.name]: e.target.value,
    };

    setForm(nextForm);
  };

  const onKeyPress = (e) => {
    if (e.key === 'Enter') onClick();
  };

  return (
    <div>
      <h1>이벤트 연습</h1>
      <input
        type="text"
        name="message"
        placeholder="anything"
        value={message}
        onChange={onChange}
      />
      <input
        type="text"
        name="username"
        placeholder="username"
        value={username}
        onChange={onChange}
        onKeyPress={onKeyPress}
      />
      <button onClick={onClick}>확인</button>
      <h2>{message}</h2>
    </div>
  );
};

export default EventPractice;
