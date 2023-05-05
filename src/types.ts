export enum Status {
    TODO,
    INPROGRESS,
    DONE
}

export interface Task {
    id: number;
    title: string;
    status: Status;
    createdAt: number;
    notes: string;
}

export const statusToString = (status: Status) => {
    switch (status) {
        case Status.TODO:
            return 'todo'
        case Status.INPROGRESS:
            return 'in progress'
        case Status.DONE:
            return 'done'
        default:
            return 'todo'
    }
}