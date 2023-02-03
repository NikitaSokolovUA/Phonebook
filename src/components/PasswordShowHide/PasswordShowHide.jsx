import { IconSecure, InputBox, PasswordInput } from './PasswordShowHide.styled';
import { useState } from 'react';
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';

const PasswordShowHide = () => {
  const [isShowPassword, setIsShowPassword] = useState(false);

  return (
    <InputBox>
      <IconSecure onClick={() => setIsShowPassword(prevState => !prevState)}>
        {isShowPassword ? (
          <AiOutlineEye size={20} />
        ) : (
          <AiOutlineEyeInvisible size={20} />
        )}
      </IconSecure>
      <PasswordInput
        placeholder="1111"
        type={isShowPassword ? 'text' : 'password'}
      />
    </InputBox>
  );
};

export default PasswordShowHide;
