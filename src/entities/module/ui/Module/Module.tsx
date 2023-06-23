import { useAppSelector, useIsMobile } from '~/shared/hooks';

import { selectModuleById } from '../../model/module';
import { ModuleToken } from '../ModuleToken';
import classes from './Module.module.css';

type ModuleProps = {
  id: ModuleId;
};

export function Module({ id }: ModuleProps): JSX.Element | null {
  const isMobile = useIsMobile();

  const module = useAppSelector((state) => selectModuleById(state, id));

  if (!module || !module.data) return null;

  const { lessons, href, title, moduleMobileBigSrc, moduleBigSrc } =
    module.data;

  const lessonList = lessons.map((lesson) => (
    <li key={lesson} className={classes.item}>
      {lesson}
    </li>
  ));

  const styles = {
    backgroundImage: `url(${isMobile ? moduleMobileBigSrc : moduleBigSrc})`,
  };

  return (
    <div className={classes.body} style={styles} data-modal-content>
      <header className={classes.header}>
        <ModuleToken className={classes.token} id={id} size="big" />
        <h2 className={classes.title}>{title}</h2>
      </header>
      <div>
        <ul className={classes.list}>{lessonList}</ul>
        <a className={classes.button} href={href}>
          Перейти в модуль
        </a>
      </div>
    </div>
  );
}
