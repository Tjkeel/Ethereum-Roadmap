import { createContext } from "react";
import { DevPath } from "~/lib/types";

export const PathContext = createContext<DevPath|null>(null);

export const Path = ({ name, children }: React.PropsWithChildren<{
  name: DevPath,
}>) => {
  return <PathContext.Provider value={name}>
    { children }
  </PathContext.Provider>;
}
