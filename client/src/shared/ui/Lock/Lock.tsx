import cn from 'classnames';
import classes from './Lock.module.css';

type LockProps = {
  className?: string;
};

export function Lock({ className }: LockProps): JSX.Element {
  return <div className={cn(className, classes.lock)}></div>;
}
