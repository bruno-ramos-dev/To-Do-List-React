import './App.css'
import { Plus } from 'react-feather'
import styles from './styles/pages/home.module.css'
import { Task } from './components/Task'

function App() {

  return (
    <div className='App'>
      <section className={styles.container}>
        <header className={styles.header}><h1>Minhas Tarefas</h1>
          <button type='button' className={styles.addTaskButton}>
            Adicionar uma nova tarefa 
            <Plus />
          </button>
        </header>

        <div className={styles.tasks}>

        <Task />

        </div>

      </section>

    </div>
  )
}

export default App