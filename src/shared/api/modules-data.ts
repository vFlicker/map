import { ModuleType } from '~/shared/types/module';
import {
  moduleBigImagesSrc,
  moduleImagesSrc,
  previewImagesSrc,
} from '../assets';

export const modulesData: ModuleType[] = [
  {
    id: '1',
    isLocked: false,
    data: {
      title: 'Введение в арбитражные ситуации',
      goals: [
        'Словарь арбитражника',
        'Что такое АС?',
        'Типы проставления АС. Преимущества, недостатки, особенности',
        'Правила спорта',
      ],
      href: 'https://www.google.com/',
      previewSrc: previewImagesSrc[0],
      moduleSrc: moduleImagesSrc[0],
      moduleBigSrc: moduleBigImagesSrc[0],
    },
  },
  {
    id: '2',
    isLocked: false,
    data: {
      title: 'Some title text',
      goals: [
        'Lorem ipsum',
        'Lorem ipsum dolor sit amet',
        'Lorem ipsum 1',
        'Lorem ipsum dolor sit amet 1',
      ],
      href: 'https://www.google.com/',
      previewSrc: previewImagesSrc[1],
      moduleSrc: moduleImagesSrc[1],
      moduleBigSrc: moduleBigImagesSrc[0],
    },
  },
  {
    id: '3',
    isLocked: false,
    data: {
      title: 'Введение в арбитражные ситуации',
      goals: [
        'Словарь арбитражника',
        'Что такое АС?',
        'Типы проставления АС. Преимущества, недостатки, особенности',
        'Правила спорта',
      ],
      href: 'https://www.google.com/',
      previewSrc: previewImagesSrc[2],
      moduleSrc: moduleImagesSrc[2],
      moduleBigSrc: moduleBigImagesSrc[0],
    },
  },
  {
    id: '4',
    isLocked: true,
    data: undefined,
  },
  {
    id: '5',
    isLocked: true,
    data: undefined,
  },
  {
    id: '6',
    isLocked: true,
    data: undefined,
  },
  {
    id: '7',
    isLocked: true,
    data: undefined,
  },
  {
    id: '8',
    isLocked: true,
    data: undefined,
  },
  {
    id: '9',
    isLocked: true,
    data: undefined,
  },
  {
    id: '10',
    isLocked: true,
    data: undefined,
  },
  {
    id: '11',
    isLocked: true,
    data: undefined,
  },
];
