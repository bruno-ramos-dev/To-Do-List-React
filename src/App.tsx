import { useState } from 'react'
import './App.css'
import { Plus } from 'react-feather'
import styles from './styles/pages/home.module.css'
import { Task } from './components/Task'
import { CreateTaskModal } from './components/CreateTaskModal'
import Modal from 'react-modal'
import { ITasksProps } from './components/Task/types'

Modal.setAppElement('#root')

function App() {

  const [tasks, setTasks] = useState<ITasksProps []>(() => {
    const taskFromLocalStorage = localStorage.getItem('tasks')
    if (!taskFromLocalStorage) {
      return []
    }
    return JSON.parse(taskFromLocalStorage)
  })
  const [isCreateTaskModalOpen, setIsCreateTaskModalOpen] = useState(false)

  function handleRequestCloseCreateTaskModal() {
    setIsCreateTaskModalOpen(false)
  }

  return (
    <div className='App'>
      <section className={styles.container}>
        <header className={styles.header}><h1>Minhas Tarefas</h1>
          <button 
            type='button' 
            className={styles.addTaskButton}
            onClick={() => setIsCreateTaskModalOpen(true)}
          >
            Adicionar uma nova tarefa 
            <Plus />
          </button>
        </header>

        <div className={styles.tasks}>

        <Task />

        </div>

      </section>

      <CreateTaskModal 
        isOpen={isCreateTaskModalOpen} 
        onRequestClose={handleRequestCloseCreateTaskModal} 
      />

    </div>
  )
}

export default App
