function Card(props) {
  const { className, children } = props;

  return (
    <div className={`"rounded-xl p-5 shadow-lg ${className}`}>{children}</div>
  );
}

export default Card;
