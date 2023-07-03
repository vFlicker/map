import cn from 'classnames';
import { useAppSelector, useIsMobile } from '~/shared/hooks';

import { selectModuleById } from '../../model/module';
import { ModuleToken } from '../ModuleToken';
import classes from './ModulePreview.module.css';

type ModulePreviewProps = {
  id: ModuleId;
  className?: string;
  disabled?: boolean;
  onOpen: () => void;
};

export function ModulePreview({
  id,
  className = '',
  disabled = false,
  onOpen,
}: ModulePreviewProps): JSX.Element | null {
  const isMobile = useIsMobile();

  const module = useAppSelector((state) => selectModuleById(state, id));

  if (!module || !module.data) return null;

  const { title, previewAvailableSrc, previewMobileAvailableSrc } = module.data;

  const classNames = cn(className, classes.content, {
    [classes.disabled]: disabled,
  });

  const styles = {
    backgroundImage: `url(${
      isMobile ? previewMobileAvailableSrc : previewAvailableSrc
    })`,
  };

  const handleClick = () => {
    if (!disabled) onOpen();
  };

  return (
    // eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-static-element-interactions
    <div className={classNames} style={styles} onClick={handleClick}>
      <ModuleToken className={classes.token} id={id} size="small" />
      <h2 className={classes.title}>{title}</h2>
      <button
        className={classes.button}
        disabled={disabled}
        onClick={handleClick}
      >
        Открыть
      </button>
    </div>
  );
}
