import { useState } from 'react';
import { Menu } from 'components/responsive-menu';

const { MenuItem } = Menu;

export const Navigation = (): JSX.Element => {
  const [isOpened, setIsOpened] = useState<boolean>(false);

  return (
    <Menu isOpened={isOpened} setIsOpened={setIsOpened}>
      <MenuItem
        title={'primarysite'}
        isActive={true}
        subMenu={
          <>
            <MenuItem title={'site2'} onClick={() => {}} isActive={true} />
            <MenuItem title={'site3'} onClick={() => {}} isActive={false} />
          </>
        }
      />
    </Menu>
  );
};
