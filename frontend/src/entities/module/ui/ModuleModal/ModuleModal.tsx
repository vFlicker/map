import { useAppSelector } from '~/shared/hooks';
import { Modal } from '~/shared/ui/Modal';

import { selectActiveModuleId } from '../../model/module';
import { Module } from '../Module';

type ModuleModalProps = {
  isOpen: boolean;
  onClose: () => void;
};

export function ModuleModal({
  isOpen,
  onClose,
}: ModuleModalProps): JSX.Element {
  const activeModuleId = useAppSelector(selectActiveModuleId);

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <Module id={activeModuleId} />
    </Modal>
  );
}
