import cn from 'classnames';
import { ComponentPropsWithoutRef } from 'react';

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
    dispatch(moduleModel.changeHoveredModuleId(moduleId));
  };

  const handleMouseLeave = () => {
    dispatch(moduleModel.changeHoveredModuleId(''));
  };

  return (
    <button
      {...props}
      className={cn(className, classes.button)}
      onClick={handleClick}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <span className="visually-hidden">
        Открыть всплывающее окно с модулем
      </span>
    </button>
  );
}
