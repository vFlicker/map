import { useAppSelector } from '~/shared/hooks';
import { ModuleTitle } from '~/shared/ui/ModuleTitle';

import { selectModuleById } from '../../model/module';
import classes from './Module.module.css';

type ModuleProps = {
  id: ModuleId;
};

export function Module({ id }: ModuleProps): JSX.Element | null {
  const module = useAppSelector((state) => selectModuleById(state, id));

  if (!module || !module.data) return null;

  const { goals, href, title } = module.data;

  const goalList = goals.map((goal) => (
    <li key={goal} className={classes.item}>
      {goal}
    </li>
  ));

  return (
    <div id="modal-content" className={classes.body}>
      <header className={classes.header}>
        <ModuleTitle className={classes.moduleTitle} size="big" id={id} />
        <h2 className={classes.title}>{title}</h2>
      </header>
      <div>
        <ul className={classes.list}>{goalList}</ul>
        <a className={classes.button} href={href}>
          Перейти в модуль
        </a>
      </div>
    </div>
  );
}
