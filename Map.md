# Карата

список модулей
https://test.alg777.com/bus/modules

доступность модулей по uid
https://test.alg777.com/bus/modules/{uid}

модуль пройден
[post запрос с полями uid и moduleID]
https://test.alg777.com/bus/module-complete

311888195 - 0 пройдено, должен только первый отображаться
285607106 - 5 пройдено
297381262 - 8 пройдено

## Фронтенд

## Бекенд

### Створили юзера

1. POST: `my-api/user?userId=10000001&userName=Vlad&userAvatar=link&moduleId=20000001&moduleName=module1&lessons={30000001: 'Словарь арбитражника', 30000002: 'Что такое АС', 30000003: 'Еще урок'}`;

userId=10000001
&
userName=Vlad
&
userAvatar=link
&
moduleId=20000001
&
moduleName=module1
&
lessons={30000001: 'Словарь арбитражника', 30000002: 'Что такое АС', 30000003: 'Еще урок'}

```
{
  userId: '10000001',
  userName: 'Vlad',
  userAvatar: 'link',
  moduleId: 20000001,
  moduleName: 'module1',
  lessons: {
    30000001: 'Lessons 1 title 1',
    30000002: 'Lessons 1 title 2',
    30000003: 'Lessons 1 title 3',
  }
```

### Користувач відкрив карту

1. GET: запит на `my-api/users/id`
2. Отримуємо дані про відкриті модулі

### Користувач пройшов модулі

1. Викликаємо веб-хук для оновлення модулів у користувача
2. Робимо POST запит на `my-api/users/id` з оновленими даними про модуль

### БД

<!-- users:

- id — унікальний ідентифікатор користувача
- name — ім'я користувача
- modules — таблиця

modules:

- id — унікальний ідентифікатор модуля
- name — назва модуля
- lessons — JSON-об'єкт, який містить інформацію про всі уроки в модулі -->

У мене має бути таке API:

```ts
type UUID = string;

interface User {
  id: UUID;
  name: string;
  avatar: string;
}

interface Lesson {
  id: UUID;
  name: string;
}

interface Module {
  id: UUID;
  name: string;
  lessons: Lesson[];
}

const userData = {
  userId: "10000001",
  userName: "Vlad",
  userAvatar: "link",
  moduleId: "20000001",
  moduleName: "module1",
  lessons: {
    30000001: "Lessons 1 title 1",
    30000002: "Lessons 1 title 2",
    30000003: "Lessons 1 title 3",
  },
};
createUser(userData);

const userId = "10000001";
getModules(userId); // return Module[]

const userId = "10000001";
const modulesData = [
  {
    id: "20000001",
    name: "module1",
    lessons: {
      30000001: "Lessons 1 title 1",
      30000002: "Lessons 1 title 2",
      30000003: "Lessons 1 title 3",
    },
  },
  {
    id: "20000002",
    name: "module2",
    lessons: {
      30000001: "Lessons 2 title 1",
    },
  },
];
updateModules(userId, modulesData);
```

1. Коли людина зареєструється у курсі, спрацює веб-хук, який викличе мій ендпоінт createUser.
2. Коли людина відкриє мапу, відбудеться запит на мій сервер за ендпоінтом getModules.
3. З мапи люди може перейти до уроку, виконати його. Після виконання уроку спрацює веб-хук, який викличе мій ендпоінт updateModules.
