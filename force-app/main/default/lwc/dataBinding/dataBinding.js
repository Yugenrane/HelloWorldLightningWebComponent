import { LightningElement } from 'lwc';

export default class DataBinding extends LightningElement {
    changeHandler(event){
        console.log("Change handler called");
        console.log(event.target.value);
        this.greetingMsg=event.target.value;
    }
    greetingMsg="Good Morning";
}