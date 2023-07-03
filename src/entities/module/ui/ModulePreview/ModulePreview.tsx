import cn from 'classnames';
import { useAppSelector } from '~/shared/hooks';

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
  const module = useAppSelector((state) => selectModuleById(state, id));

  if (!module || !module.data) return null;

  const { title, previewMobileAvailableSrc } = module.data;

  const classNames = cn(className, classes.content, {
    [classes.disabled]: disabled,
  });

  const styles = { backgroundImage: `url(${previewMobileAvailableSrc})` };

  return (
    <div className={classNames} style={styles}>
      <ModuleToken className={classes.token} id={id} size="small" />
      <h2 className={classes.title}>{title}</h2>
      <button className={classes.button} disabled={disabled} onClick={onOpen}>
        Открыть
      </button>
    </div>
  );
}
