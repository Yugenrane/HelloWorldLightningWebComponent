import { LightningElement, track } from 'lwc';

export default class PublicParentMethod extends LightningElement {
    @track inputValue;

    inputChangeHandler(event) {
        this.inputValue = event.target.value;
    }

    clickHandler() {
        const childCmp = this.template.querySelector('c-public-method-child');
        childCmp.selectedValues(this.inputValue);
    }
}