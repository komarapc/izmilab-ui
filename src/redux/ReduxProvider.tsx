import { Provider } from "react-redux";
import { ReactNode } from "react";
import { store } from "./store";

const ReduxProvider = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <Provider store={store}>{children}</Provider>
    </>
  );
};

export default ReduxProvider;
