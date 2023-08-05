import Modal from 'react-modal'
import { X } from 'react-feather'
import styles from './styles.module.css'

export function CreateTaskModal({ isOpen, onRequestClose }) {
    return (
        <Modal 
            isOpen={isOpen} 
            onRequestClose={onRequestClose} 
            overlayClassName='react-modal-overlay' 
            className={styles.container}
        >
            <button 
                type='button' 
                onClick={() => onRequestClose()} 
                className={styles.closeButton}
            >
                <X size={16}/>
            </button>
            <h1>Adicionar Tarefa</h1>

            <form onSubmit={handleCreateNewTask}>
                <label htmlFor='task'>Título da Tarefa</label>
                <input type='text' name='task' placeholder='Digite aqui sua tarefa' value={newTask} />
                <button type='submit' className={styles.button}>Adicionar</button>
            </form>
        </Modal>
    )
} 