function Button({name, click, className}) {
  return (
    <button onClick={click} className={className}>
      {name}
    </button>
  )
}

export default Button;