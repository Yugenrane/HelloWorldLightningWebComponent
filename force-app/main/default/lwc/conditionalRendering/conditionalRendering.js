import { LightningElement} from 'lwc';

export default class ConditionalRendering extends LightningElement {
    showDetail=false;
    handlerCheckChange(event){
        console.log(event.target.checked);
        this.showDetail=event.target.checked;
    }
}