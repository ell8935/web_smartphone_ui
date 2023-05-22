import { BottomNavProps } from "../../../types/bottomNavTypes";
import BottomNavStyled from "./BottomNavStyled";

const BottomNav = ({ tabsOptions }: BottomNavProps) => {
  return (
    <BottomNavStyled>
      {tabsOptions?.map((v) => (
        <div className="tab" tabIndex={0} key={v.name}>
          <div>{v.icon}</div>
          <div>{v.name}</div>
        </div>
      ))}
    </BottomNavStyled>
  );
};

export default BottomNav;
