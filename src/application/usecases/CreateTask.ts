import { Task } from '../../domain/models/Task';
import { ITaskRepository } from '../repositories/ITaskRepository';

export class CreateTask {
    constructor(private taskRepository: ITaskRepository) {};

    execute(title: string, description: string) {
        const task = new Task(title, description);
        return this.taskRepository.persist(task);
    }
}
