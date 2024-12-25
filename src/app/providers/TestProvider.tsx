import { TestContext } from "./TestContext";

const aboba = 12;

export const TestProvider = ({ children }) => {
  return <TestContext.Provider value={aboba}>{children}</TestContext.Provider>;
};
