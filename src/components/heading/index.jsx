const Heading = ({
  className,
  level = 1,
  color = 'black',
  letterSpacing = '0px',
  children,
}) => {
  const HeadingTag = `h${level}`;
  const headingStyle = {
    color: color,
    letterSpacing: letterSpacing,
  };

  return (
    <HeadingTag className={className} style={headingStyle}>
      {children}
    </HeadingTag>
  );
};

export default Heading;
