import {Header} from './components/Header';
import { Sidebar } from './components/Sidebar';
import {Post} from './components/Post';

import './global.css';
import styles from './App.module.css';

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: "https://github.com/talesvaladares.png",
      nome: "Tales Eduardo",
      role: 'Web Developer'
    },
    content: [

      {
        type: 'paragraph',
        content:  'Fala Galera', 
      },
      {
        type: 'paragraph',
        content:  'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀',
   
      },
      {
        type: 'link',
        content: 'jane.design/doctorcare', 
      },
      {
        type: 'paragraph',
        content:  'Fala Galera', 
      }
              
    ],
    publishedAt: new Date()
  },

  {
    id: 2,
    author: {
      avatarUrl: "https://github.com/maykbrito.png",
      name: "Mayk Brito",
      role: 'Educator'
    },
    content: [

      {
        type: 'paragraph',
        content:  'Fala Galera', 
      },
      {
        type: 'paragraph',
        content:  'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀',
   
      },
      {
        type: 'link',
        content: 'jane.design/doctorcare', 
      },
      {
        type: 'paragraph',
        content:  'Fala Galera', 
      }
              
    ],
    publishedAt: new Date('2002-06-16 20:00:00')
  },
]

function App() {

  return (
    
    <div>
      <Header/>

      <div className={styles.wrapper}>
        <Sidebar/>
        <main>
          {
            posts.map((post) => (
              <Post 
                key={post.id}
                author={post.author}
                content={post.content}
                publishedAt={post.publishedAt}
              />
            ))
          }
        </main>
      </div>

    </div>
  )
}

export default App
