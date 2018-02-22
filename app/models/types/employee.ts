const uuid = require('uuidv4');
import * as moment from 'moment';
import {MappedEntityBaseType} from './mappedEntityBaseType';

export class Employee extends MappedEntityBaseType {
    constructor(
        public id: string = uuid.empty(),
        public first_name: string = 'First',
        public last_name: string = 'Last',
        public employee_id: number = 0,
        public active: boolean = 0,
        public role: string,
        public manager: string,
        public password: string,
        public createdOn: moment.Moment = moment()) {
            super(id, createdOn);
    }
}
