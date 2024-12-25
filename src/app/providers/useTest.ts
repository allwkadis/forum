import { useContext } from "react";
import { TestContext } from "./TestContext";

export const useTest = () => {
  const aboba = useContext(TestContext);

  return { aboba };
};
