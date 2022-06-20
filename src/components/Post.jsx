import { useState } from 'react';
import {format, formatDistanceToNow} from 'date-fns';
import {ptBR} from 'date-fns/locale';

import { Avatar } from './Avatar';
import {Comment} from './Comment';
import styles from './Post.module.css'

export function Post({author, content, publishedAt}) {

  const publishedAtFormatted = format(publishedAt, "d 'de' LLLL 'às' HH:mm'h'", {
    locale: ptBR
  });

  const publishedAtDateRelativeToNow = formatDistanceToNow(publishedAt, {
    locale: ptBR,
    addSuffix: true
    
  });

  const [comments, setComments] = useState(['Post muito bacana, heim?!']);

  const [newCommentText, setNewCommentText] = useState('');

  const isNewCommentEmppty = newCommentText.length === 0;

  function handleNewCommentChange(){
    event.target.setCustomValidity('');
    setNewCommentText(event.target.value);
  }

  function handleCreateNewComment(){

    event.preventDefault();
    setComments([...comments, newCommentText]);
    setNewCommentText('');

  }

  function deleteComment(commentToDelete){

    const commentsWithoutDeleteOne = comments.filter(comment => comment !== commentToDelete );

    setComments(commentsWithoutDeleteOne);
  }

  function handleNewCommentInvalid(){
    event.target.setCustomValidity('Esse campo é obrigatório!');
  }

  return (
    <article  className={styles.post}>
      
      <header>
        <div className={styles.author}>
          
          <Avatar src={author.avatarUrl} />
          
          <div className={styles.authorInfo}>
            <strong>{author.name}</strong>
            <span>{author.role}</span>
          </div>

        </div>

        <time title={publishedAtFormatted} dateTime={publishedAt.toISOString()}>
          {publishedAtDateRelativeToNow}
        </time>
      </header>

      <div className={styles.content}>

        {
          content.map((line, index) => {
            if(line.type === 'paragraph'){
              return <p key={index}>{line.content}</p>;
            }
            else if(line.type === 'link'){
              return <p key={index}> <a href='#'>{line.content}</a> </p>
            }
          })
        }

      </div>

      <form onSubmit={handleCreateNewComment} className={styles.commentForm}>
        <strong>Deixe seu feedback</strong>

        <textarea
          onChange={handleNewCommentChange}
          value={newCommentText}
          name="comment"
          placeholder='Deixe um comentário'
          onInvalid={handleNewCommentInvalid}
          required
        />

       <footer>
        <button type='submit' disabled={isNewCommentEmppty} >Publicar</button>
       </footer>
      </form>

      <div className={styles.commentList}>
        {
          comments.map((comment, index) => {
            return <Comment key={index} content={comment} onDeleteComment={deleteComment} />
          })
        }
      </div>
    </article>
  );
}