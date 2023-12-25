# rc-codebox

基于 React Hooks 的移动端手机验证码组件

## 安装

```
npm install rc-codebox -S
```

## 使用

```
import React, { useState } from 'react';
import { CodeBox } from 'rc-codebox';

export default () => {
  const [code, setCode] = useState('');
  const onChange = (code) => {
    setCode(code);
  };

  return (
    <div>
      <h3>现在输入的code是：{code}</h3>
      <CodeBox onChange={onChange}></CodeBox>
    </div>
  );
};
```
