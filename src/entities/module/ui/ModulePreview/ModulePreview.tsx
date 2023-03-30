import { useAppSelector } from '~/shared/hooks';

import { selectModuleById } from '../../model/module';
import { ModuleToken } from '../ModuleToken';
import classes from './ModulePreview.module.css';

type ModulePreviewProps = {
  id: ModuleId;
  onOpen: () => void;
};

export function ModulePreview({
  id,
  onOpen,
}: ModulePreviewProps): JSX.Element | null {
  const module = useAppSelector((state) => selectModuleById(state, id));

  if (!module || !module.data) return null;

  const { title } = module.data;

  return (
    <div data-content className={classes.content}>
      <ModuleToken className={classes.token} id={id} size="small" />
      <h2 className={classes.title}>{title}</h2>
      <button className={classes.button} onClick={onOpen}>
        Открыть
      </button>
    </div>
  );
}
