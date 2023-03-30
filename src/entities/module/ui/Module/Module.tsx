import { useAppSelector } from '~/shared/hooks';

import { selectModuleById } from '../../model/module';
import { ModuleToken } from '../ModuleToken';
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
    <div className={classes.body} data-modal-content>
      <header className={classes.header}>
        <ModuleToken className={classes.token} id={id} size="big" />
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
