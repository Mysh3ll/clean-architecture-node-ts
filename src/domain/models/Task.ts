import moment from 'moment-timezone'

export class Task {
    private _id: number;
    private _title: string;
    private _description: string;
    private _createdAt: moment.Moment;
    private _updatedAt: moment.Moment;

    constructor(title: string = null, description: string = null) {
        this._title = title;
        this._description = description;
    }

    get id(): number {
        return this._id;
    }

    set id(id: number) {
        this._id = id;
    }

    get title(): string {
        return this._title;
    }

    set title(title: string) {
        this._title = title;
    }


}
