const MenuIcon = ({ size = "md", extraClass = "" }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-8 w-8 sm:h-6 sm:w-6"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M4 6h16M4 12h8m-8 6h16"
    />
  </svg>
);

export default MenuIcon;
