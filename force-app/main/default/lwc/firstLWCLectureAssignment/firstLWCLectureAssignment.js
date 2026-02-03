import { LightningElement } from 'lwc';

export default class FirstLWCLectureAssignment extends LightningElement {
    
    handleClick(event){
        this.status=event.target.value;
    }
    status;

    get isMorning(){
        return this.status=='Morning';
    }

    get isAfternoon(){
        return this.status=='Afternoon';
    }
}