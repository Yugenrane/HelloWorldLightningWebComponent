import { LightningElement, track, api } from 'lwc';

export default class PublicMethodChild extends LightningElement {
    @track value=[];
    options = [
        { label: 'Red', value: 'Red' },
        { label: 'Orange', value: 'Orange' },
        { label: 'Yellow', value: 'Yellow' },
        { label: 'Green', value: 'Green' },
        { label: 'Blue', value: 'Blue' },
        { label: 'Indigo', value: 'Indigo' },
        { label: 'Violet', value: 'Violet' },
    ];

    @api selectedValues(checkboxValue) {
        alert('checkboxValue : ' + checkboxValue);
        this.value = [checkboxValue];
    }

}