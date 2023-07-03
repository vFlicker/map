import { ModuleType } from '~/shared/types';

import { modulesAdapter } from '../../helpers';
import { ModuleState } from '../../types';

const emptyBody = {
  title: '',
  lessons: [],
  href: '',
  previewMobileAvailableSrc: '',
  previewMobileNotAvailableSrc: '',
  moduleMobileBigSrc: '',
  previewAvailableSrc: '',
  previewNotAvailableSrc: '',
  moduleBigSrc: '',
};

const data: ModuleType[] = [
  {
    id: 1,
    isLocked: true,
    data: {
      href: '',
      lessons: [],
      title: 'Описание проекта ALGORITHM',
      previewAvailableSrc:
        'https://fs.getcourse.ru/fileservice/file/download/a/600071/sc/399/h/27e0200e63e4637b375b0310d4803446.jpg',
      previewNotAvailableSrc:
        'https://fs.getcourse.ru/fileservice/file/download/a/600071/sc/293/h/b14999eda28a83cce7b13bb360dec927.jpg',
      previewMobileAvailableSrc:
        'https://fs.getcourse.ru/fileservice/file/download/a/600071/sc/241/h/3c862ab2863e2d9269afb6a0198dab5b.jpg',
      previewMobileNotAvailableSrc:
        'https://fs.getcourse.ru/fileservice/file/download/a/600071/sc/272/h/c03e7bc5c61a24218a6a29de2c71e8aa.jpg',
      moduleBigSrc:
        'https://fs.getcourse.ru/fileservice/file/download/a/600071/sc/40/h/f81c9011c005c300d74eb0fb87045689.jpg',
      moduleMobileBigSrc:
        'https://fs.getcourse.ru/fileservice/file/download/a/600071/sc/405/h/4bd4d56e89f544cbb19b37d7ab8f9dfc.jpg',
    },
  },
  {
    id: 2,
    isLocked: true,
    data: emptyBody,
  },
  {
    id: 3,
    isLocked: true,
    data: emptyBody,
  },
  {
    id: 4,
    isLocked: true,
    data: emptyBody,
  },
  {
    id: 5,
    isLocked: true,
    data: emptyBody,
  },
  {
    id: 6,
    isLocked: true,
    data: emptyBody,
  },
  {
    id: 7,
    isLocked: true,
    data: emptyBody,
  },
  {
    id: 8,
    isLocked: true,
    data: emptyBody,
  },
  {
    id: 9,
    isLocked: true,
    data: emptyBody,
  },
  {
    id: 10,
    isLocked: true,
    data: emptyBody,
  },
  {
    id: 11,
    isLocked: true,
    data: emptyBody,
  },
];

export const setEmptyDataReducer = (state: ModuleState) => {
  modulesAdapter.setMany(state, data);
  state.status = 'success';
};
