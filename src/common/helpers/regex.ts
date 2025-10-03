export const EMAIL_REGEX = new RegExp(/^.*[\d\w]+.*$/);
export const PASSWORD_REGEX = new RegExp(/^.*[\d\w]+.*$/);
// email: /^[^\s@]+@[^\s@]+\.[^\s@]+$/
// password: /^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$&*])[A-Za-z\d!@#$&*]{8,}$/
export const isLogin = (value: string): boolean => {
  return EMAIL_REGEX.test(value);
};

export const isPassword = (value: string): boolean => {
  return PASSWORD_REGEX.test(value);
};
