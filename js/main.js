const NAMES = [
  'Семен',
  'Иван',
  'Михаил',
  'Игорь',
  'Татьяна',
  'Екатерина',
  'Ольга',
  'Анастасия'];

const MESSAGES = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'
];

const DESCRIPTIONS = [
  'Отлично',
  'Здорово',
  'Супер',
  'Классно',
  'Не очень',
  'Так себе',
  'Средненько',
];

const SIMILAR_USERS_COUNT = 25;

// Создает id
const createId = (id) => function () {
  return ++id;
};

// Генерируем id для переменных
const generateId = createId(0);
const generateUrl = createId(0);


// Создаем генератор случайных целых чисел
const getRandomInteger = (a, b) => {
  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
};

//  Создаем генератор случайных элементов
const getRandomElement = (elements) => elements[getRandomInteger(0, elements.length - 1)];

const createComment = () => ({
  id: getRandomInteger(1, 200),
  avatar: `'img/avatar-${getRandomInteger(1, 6)}.svg'`,
  message: getRandomElement(MESSAGES),
  name: getRandomElement(NAMES)
});


const createUsers = () => ({
  id: generateId(),
  url: `'photos/${generateUrl()}.jpg'`,
  description: getRandomElement(DESCRIPTIONS),
  likes: getRandomInteger(15, 200),
  comments: Array.from({ length: getRandomInteger(0, 30) }, createComment)
});

const similarUser = Array.from({ length: SIMILAR_USERS_COUNT }, createUsers);


console.log(createUsers());
