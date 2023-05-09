function Text({ className, color, size, textAlign, style, children }) {
  const textStyle = {
    color: color || 'black',
    fontSize: size || '16px',
    textAlign: textAlign || null,
    wordSpacing: '1px',
    fontWeight: 100,
    ...style,
  };

  return (
    <p className={className} style={textStyle}>
      {children}
    </p>
  );
}

export default Text;
