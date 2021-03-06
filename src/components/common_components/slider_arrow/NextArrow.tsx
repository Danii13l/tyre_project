import Image from "next/image";

export const NextArrow = (props: any) => {
  const { onClick, className } = props;

  const disabled = className.split(" ")[2];

  return (
    <div onClick={onClick} className="slider_arrow slider_arrow-next">
      <svg
        width="34"
        height="34"
        viewBox="0 0 34 34"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M34 17C34 7.61116 26.3888 0 17 0V0C7.61116 0 0 7.61116 0 17V17C0 26.3888 7.61116 34 17 34V34C26.3888 34 34 26.3888 34 17V17Z"
          fill="white"
        />
        <path
          d="M13.5781 12.4062L18.1719 17L13.5781 21.5938L14.9844 23L20.9844 17L14.9844 11L13.5781 12.4062Z"
          fill={!disabled ? "#8E919C" : "#282F44"}
        />
      </svg>
    </div>
  );
};
