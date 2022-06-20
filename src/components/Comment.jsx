import { useState } from 'react';
import {Avatar} from './Avatar'
import { ThumbsUp, Trash } from 'phosphor-react';
import styles from './Comment.module.css';

export function Comment({content, onDeleteComment}){

  const [likeCount, setLikeCount] = useState(0);

  function handleDeleteComment(){

    onDeleteComment(content);
  }

  function handleLikeComment(){
    setLikeCount(state => {
      return state + 1
    });
  }

  return (
    <div className={styles.comment}>
      
      <Avatar hasBorder={false} src="https://github.com/talesvaladares.png" />

      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong> Tales Eduardo </strong>
              <time title='16 de junho às 11:26h' dateTime="2022-05-11 11:26">
                Cerca 1h atrás
              </time>
            </div>

            <button onClick={handleDeleteComment}  title='Deletar comentário' >
              <Trash size={24}/>
            </button>
          </header>

          <p>
            {content}
          </p>
        </div>

        <footer>
          <button onClick={handleLikeComment}>
            <ThumbsUp/>
            Aplaudir <span>{likeCount}</span>
          </button>
        </footer>
      </div>


    </div>  
  )
}