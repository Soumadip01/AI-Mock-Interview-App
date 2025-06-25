import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <Link to={"/"}>
      <img
        src="/assets/svg/logo.svg"
        alt=""
        className="min-h-10 min-w-10 object-contain"
      />
    </Link>
  );
};

export default Logo;
