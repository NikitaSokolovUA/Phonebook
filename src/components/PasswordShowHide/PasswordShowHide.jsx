import { IconSecure, InputBox, PasswordInput } from './PasswordShowHide.styled';
import { useState } from 'react';
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';

const PasswordShowHide = ({ field }) => {
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
      <PasswordInput {...field} type={isShowPassword ? 'text' : 'password'} />
    </InputBox>
  );
};

export default PasswordShowHide;
