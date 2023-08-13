import React, { useContext } from "react";
import NavigationContext from "../context/Navigation";

const useNavigations = () => {
  return useContext(NavigationContext);
};

export default useNavigations;
