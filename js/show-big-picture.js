import {isEscPressed, showPopupNode, hidePopupNode} from './util.js';

const bigPictureNode = document.querySelector('.big-picture');
const commentTemplate = document.querySelector('#comment')
  .content.querySelector('.social__comment');

const commentsNode = bigPictureNode.querySelector('.social__comments');

const clearComments = () => {
  commentsNode.innerHTML = '';
};

const onEscPressed = (evt) => {
  if (isEscPressed(evt)) {
    clearComments();
    hidePopupNode(bigPictureNode);
  }
};

const setBigPictureOnCloseListeners = () => {
  document.addEventListener('keydown',
    (evt) => {
      onEscPressed(evt);
    });
  bigPictureNode.querySelector('.big-picture__cancel')
    .addEventListener('click',
      () => {
        clearComments();
        hidePopupNode(bigPictureNode);
      }, {once: true}
    );
};

const hideUnnecessaryNodes = () => {
  bigPictureNode.querySelector('.social__comment-count').classList.add('hidden');
  bigPictureNode.querySelector('.comments-loader').classList.add('hidden');
};

const fillComments = (photo) => {
  photo.comments.forEach((comment) => {
    const newCommentFromTemplate = commentTemplate.cloneNode(true);
    const commentAvatar = newCommentFromTemplate.querySelector('.social__picture');
    commentAvatar.src = comment.avatar;
    commentAvatar.alt = comment.name;
    newCommentFromTemplate.querySelector('.social__text').textContent = comment.message;
    commentsNode.append(newCommentFromTemplate);
  });
};

const showAndFillBigPicture = (photo) => {
  bigPictureNode.querySelector('.big-picture__img').children[0].src = photo.url;
  bigPictureNode.querySelector('.likes-count').textContent = photo.likes;
  bigPictureNode.querySelector('.social__caption').textContent = photo.description;
  bigPictureNode.querySelector('.comments-count').textContent = photo.comments.length;
  fillComments(photo);
  hideUnnecessaryNodes();
  setBigPictureOnCloseListeners();
  showPopupNode(bigPictureNode);
};

export {showAndFillBigPicture};
