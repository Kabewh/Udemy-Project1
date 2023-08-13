import useNavigations from "../hooks/useNavigations";

const Route = (path, children) => {
  const { currentPath } = useNavigations;

  if (path === currentPath) {
    return children;
  }
  return null;
};

export default Route;
