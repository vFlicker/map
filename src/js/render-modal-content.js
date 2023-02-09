const data = {
  1: {
    id: 1,
    title: 'Введение в арбитражные ситуации',
    goals: [
      'Словарь арбитражника',
      'Что такое АС?',
      'Типы проставления АС. Преимущества, недостатки, особенности',
      'Правила спорта',
    ],
    href: '#',
  },
  2: {
    id: 2,
    title: 'Some title text',
    goals: [
      'Lorem ipsum',
      'Lorem ipsum dolor sit amet',
      'Lorem ipsum',
      'Lorem ipsum dolor sit amet',
    ],
    href: '#',
  },
};

const renderGoals = (goals) => {
  return goals
    .map((goal) => `<li class="modal-main__item">${goal}</li>`)
    .join('');
};

export const renderModalContent = (moduleId) => {
  const modalContentElement = document.querySelector('#modal-content');
  const { id, title, goals, href } = data[moduleId];

  modalContentElement.innerHTML = `
    <header class="modal-header">
    <div class="modal-header__module">
      <span>Модуль ${id}</span>
    </div>
    <h2 class="modal-header__title">${title}</h2>
  </header>
  <div class="modal-main">
    <ul class="modal-main__list">
      ${renderGoals(goals)}
    </ul>
    <a class="button" href=${href}>Перейти в модуль</a>
  </div>`;
};
