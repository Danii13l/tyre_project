export const PrevArrow = (props: any) => {
  const { onClick, className } = props;
  const disabled = className.split(" ")[2];

  return (
    <div onClick={onClick} className="slider_arrow slider_arrow-prev">
      <svg
        width="34"
        height="34"
        viewBox="0 0 34 34"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M0 17C0 7.61116 7.61116 0 17 0V0C26.3888 0 34 7.61116 34 17V17C34 26.3888 26.3888 34 17 34V34C7.61116 34 0 26.3888 0 17V17Z"
          fill="white"
        />
        <path
          d="M20.4219 12.4062L15.8281 17L20.4219 21.5938L19.0156 23L13.0156 17L19.0156 11L20.4219 12.4062Z"
          fill={!disabled ? "#8E919C" : "#282F44"}
        />
      </svg>
    </div>
  );
};
