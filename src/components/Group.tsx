import { FC } from "react";

export const Group: FC = ({children}) => {
  return (
    <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', position: 'fixed', height: '100vh', width:'100vw'}}>
      {children}
    </div>
  );
}