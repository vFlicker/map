import cn from 'classnames';
import { ComponentPropsWithoutRef } from 'react';

import { mapModel } from '~/entities/map';
import { ModuleId, moduleModel } from '~/entities/module';
import { useAppDispatch } from '~/shared/hooks';

import classes from './ShowModuleButton.module.css';

type ShowModuleButtonProps = ComponentPropsWithoutRef<'button'> & {
  moduleId: ModuleId;
};

export function ShowModuleButton({
  moduleId,
  className,
  ...props
}: ShowModuleButtonProps): JSX.Element {
  const dispatch = useAppDispatch();

  const handleClick = () => {
    dispatch(moduleModel.changeActiveModuleId(moduleId));
  };

  const handleMouseEnter = () => {
    dispatch(mapModel.changeActiveRegion(moduleId));
  };

  return (
    <button
      {...props}
      className={cn(className, classes.button)}
      onClick={handleClick}
      onMouseEnter={handleMouseEnter}
    >
      <span className="visually-hidden">
        Открыть всплывающее окно с модулем
      </span>
    </button>
  );
}
