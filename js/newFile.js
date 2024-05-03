return {
    id: '',
    url: `'photos/${getRandomArrayElement(1, 25)}'`.jpg,
    description: DESCRIPTIONS[getRandomArrayElement],
    likes: `${getRandomArrayElement(1, 6)}`,
    comments: '',
    avatar: `'img/avatar-${getRandomArrayElement(1, 6)}.svg'`,
    message: MESSAGES[getRandomArrayElement],
    name: NAMES[getRandomArrayElement],
};
