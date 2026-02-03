import { LightningElement, track } from 'lwc';

export default class AssignmentLecture36 extends LightningElement {
    @track studentDetail = {
        name: '',
        age: '',
        rollNumber: ''
    };

    @track studentResult = {};

    handleChange(event) {
        if (event.target.dataset.field === 'name')
            this.studentDetail.name = event.target.value;
        if (event.target.dataset.field === 'age')
            this.studentDetail.age = event.target.value;
        if (event.target.dataset.field === 'rollNumber')
            this.studentDetail.rollNumber = event.target.value;
    }

    // handleNameChange(event){
    //     this.studentDetail.name = event.target.value;
    // }
    // handleAgeChange(event){
    //     this.studentDetail.age = event.target.value;
    // }
    // handleRollNumberChange(event){
    //     this.studentDetail.rollNumber = event.target.value;
    // }

    handleSubmit() {
        alert('Student Details: ' + JSON.stringify(this.studentDetail));
        this.studentResult=this.studentDetail;
        alert('Student Result: ' + JSON.stringify(this.studentResult));
    }
}