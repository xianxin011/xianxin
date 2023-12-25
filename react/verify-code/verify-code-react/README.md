# verify-code-react

#### 介绍

react验证码组件（hook + ts）。


#### 安装教程
yarn
```
yarn add https://gitee.com/Ye_tianmao/verify-code-react.git
```
or  

npm
```
npm install https://gitee.com/Ye_tianmao/verify-code-react.git --save-dev
```

#### 使用说明
```javascript
import { FC, ReactElement, useState } from "react";
import VerifyCode from "verify-code-react"  

export default () : ReactElement => {
  const [verifyImgCode, setVerifyImgCode] = useState<string>()
  const onVerifyCodeChange = (code: string) : void => {
    setVerifyImgCode(code)
  }

  return (
    <>
      ...  
      <VerifyCode width={120} height={40} length={4} change={onVerifyCodeChange}/>
    </>
  )
}
```

#### 配置项

```typescript
type VerifyCodeProps = {
  width?: number; // 验证码图片宽度
  height?: number; // 验证码图片高度
  letters?: string; // 验证码字符集
  length?: number; // 验证码位数
  maxFontSize?: number; // 验证码最大字体大小
  minFontSize?: number; // 验证码最小字体大小
  change(code: string): void; // 验证码改变事件
}
```

