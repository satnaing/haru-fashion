const LeftArrow = ({ size = "md", extraClass = "" }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className={`${size === "sm" ? "h-5 w-5" : "h-6 w-6"} ${extraClass}`}
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M15 19l-7-7 7-7"
    />
  </svg>
);

export default LeftArrow;
