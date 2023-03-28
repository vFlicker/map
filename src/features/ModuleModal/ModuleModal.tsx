import { Module, moduleModel } from '~/entities/module';
import { useAppDispatch, useAppSelector } from '~/shared/hooks';
import { Modal } from '~/shared/ui/Modal';

export function ModuleModal(): JSX.Element {
  const dispatch = useAppDispatch();

  const activeModuleId = useAppSelector(moduleModel.selectActiveModuleId);

  const handleCloseModule = () => {
    dispatch(moduleModel.changeActiveModuleId(''));
  };

  const isModalOpen = Boolean(activeModuleId);

  return (
    <Modal isOpen={isModalOpen} onClose={handleCloseModule}>
      <Module id={activeModuleId} />
    </Modal>
  );
}
