export const EMAIL_REGEX = new RegExp(/^[^\s@]+@[^\s@]+\.[^\s@]+$/);
export const PASSWORD_REGEX = new RegExp(
  /^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$&*])[A-Za-z\d!@#$&*]{8,}$/
);

export const isEmail = (value: string): boolean => {
  return EMAIL_REGEX.test(value);
};

export const isPassword = (value: string): boolean => {
  return PASSWORD_REGEX.test(value);
};
