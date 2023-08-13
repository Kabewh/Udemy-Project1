import classNames from "classnames";
import useNavigations from "../hooks/useNavigations";

const Link = ({ to, children, className, activeClassName }) => {
  const { navigate, currentPath } = useNavigations();

  const classes = classNames(
    "text-blue-500",
    className,
    currentPath === to && activeClassName
  );

  const handleClick = (event) => {
    if (event.metaKey || event.ctrlKey) {
      return;
    }
    event.preventDefault();
    navigate(to);
  };
  return (
    <a className={classes} href={to} onClick={handleClick}>
      {children}
    </a>
  );
};

export default Link;
