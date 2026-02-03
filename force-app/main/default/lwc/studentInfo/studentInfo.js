import { LightningElement, track } from 'lwc';

export default class StudentInfo extends LightningElement {
    @track selectedStudentInfo={};
    @track studentInfoParent = [
        { name: 'Yugen', age: '27', rollNumber: '101' },
        { name: 'Rahul', age: '28', rollNumber: '102' },
        { name: 'Ankit', age: '29', rollNumber: '103' },
        { name: 'Prashant', age: '30', rollNumber: '104' },
        { name: 'Shubham', age: '27', rollNumber: '105' }
    ];

    handleStudentSelect(event){
        console.log(JSON.stringify(event.detail));
        alert('handleStudentSelect called...'+JSON.stringify(event.detail));
        this.selectedStudentInfo = event.detail
        
    }


}

