import cn from 'classnames';
import { ComponentPropsWithRef, forwardRef } from 'react';

import { mapModel } from '~/entities/map';
import { modalModel } from '~/entities/modal';
import { moduleModel } from '~/entities/module';
import { useAppDispatch } from '~/shared/hooks';

import classes from './ShowModuleButton.module.css';

type ShowModuleButtonProps = ComponentPropsWithRef<'button'> & {
  moduleId: ModuleId;
};

export const ShowModuleButton = forwardRef<
  HTMLButtonElement,
  ShowModuleButtonProps
>(function ShowModuleButton({ moduleId, className, ...props }, ref) {
  const dispatch = useAppDispatch();

  const handleClick = () => {
    dispatch(moduleModel.changeActiveModuleId(moduleId));
    dispatch(modalModel.open());
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
      ref={ref}
    >
      <span className="visually-hidden">
        Открыть всплывающее окно с модулем
      </span>
    </button>
  );
});
