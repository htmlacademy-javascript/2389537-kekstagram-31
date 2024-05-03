const createUsers = () => ({
    id: generateId(),
    url: `photos/${generateUrl()}.jpg`,
    description: getRandomElement(DESCRIPTIONS),
    likes: getRandomInteger(15, 200),
    comments: Array.from({ length: getRandomInteger(0, 30) }, createComment)
}
);
