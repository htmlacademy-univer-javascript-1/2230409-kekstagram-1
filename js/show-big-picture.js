const bigPictureNode = document.querySelector('.big-picture');
const commentTemplate = document.querySelector('#comment')
  .content.querySelector('.social__comment');

const closeBigPicture = () => {
  document.body.classList.remove('modal-open');
  bigPictureNode.classList.add('hidden');
};

const setOnBigPictureCloseListeners = () => {
  document.addEventListener('keydown', (evt) => {
    if (evt.key === 'Escape') {
      closeBigPicture();
    }
  });
  bigPictureNode.querySelector('.big-picture__cancel')
    .addEventListener('click', () => {
      closeBigPicture();
    });
};

const hideUnnecessaryNodes = () => {
  bigPictureNode.querySelector('.social__comment-count').classList.add('hidden');
  bigPictureNode.querySelector('.comments-loader').classList.add('hidden');
};

const fillComments = (photo) => {
  const commentsNode = bigPictureNode.querySelector('.social__comments');
  photo.comments.forEach((comment) => {
    const newCommentFromTemplate = commentTemplate.cloneNode(true);
    const commentAvatar = newCommentFromTemplate.querySelector('.social__picture');
    commentAvatar.src = comment.avatar;
    commentAvatar.alt = comment.name;
    newCommentFromTemplate.querySelector('.social__text').textContent = comment.message;
    commentsNode.append(newCommentFromTemplate);
  });
};

const showBigPicture = () => {
  document.body.classList.add('modal-open');
  bigPictureNode.classList.remove('hidden');
};

const fillBigPicture = (photo) => {
  bigPictureNode.querySelector('.big-picture__img').children[0].src = photo.url;
  bigPictureNode.querySelector('.likes-count').textContent = photo.likes;
  bigPictureNode.querySelector('.social__caption').textContent = photo.description;
  bigPictureNode.querySelector('.comments-count').textContent = photo.comments.length;
  fillComments(photo);
  hideUnnecessaryNodes();
  setOnBigPictureCloseListeners();
  showBigPicture();
};

export {fillBigPicture};
