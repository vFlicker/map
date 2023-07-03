import cn from 'classnames';
import { useAppSelector } from '~/shared/hooks';

import { selectModuleById } from '../../model/module';
import { ModuleToken } from '../ModuleToken';
import classes from './ModulePreview.module.css';

type ModulePreviewProps = {
  id: ModuleId;
  disabled?: boolean;
  onOpen: () => void;
};

export function ModulePreview({
  id,
  disabled = false,
  onOpen,
}: ModulePreviewProps): JSX.Element | null {
  const module = useAppSelector((state) => selectModuleById(state, id));

  if (!module || !module.data) return null;

  const { title, previewMobileAvailableSrc } = module.data;

  const className = cn(classes.content, {
    [classes.disabled]: disabled,
  });

  const styles = { backgroundImage: `url(${previewMobileAvailableSrc})` };

  return (
    <div className={className} style={styles}>
      <ModuleToken className={classes.token} id={id} size="small" />
      <h2 className={classes.title}>{title}</h2>
      <button className={classes.button} disabled={disabled} onClick={onOpen}>
        Открыть
      </button>
    </div>
  );
}
