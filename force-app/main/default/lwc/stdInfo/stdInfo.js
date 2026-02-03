import { LightningElement, api } from 'lwc';

export default class StudentsInfo extends LightningElement {
    @api studentInfo;

    tileHandleClick() {
        this.dispatchEvent(new CustomEvent('studentselect', { detail:this.studentInfo }));
    }
}


