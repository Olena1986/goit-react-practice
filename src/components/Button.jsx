const Button = ({ text, clickHander }) => {
  return <button onClick={clickHander}>{text}</button>;
};

export default Button;
