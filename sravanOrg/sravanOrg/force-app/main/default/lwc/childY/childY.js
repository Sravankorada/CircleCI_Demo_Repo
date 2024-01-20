import { LightningElement } from 'lwc';

export default class ParentX extends LightningElement {
    handleincrease(event){
        this.dispatchEvent(new CustomEvent('increase',{detail:'volume increase'}));
    }
    handledecrease(event){
        this.dispatchEvent(new CustomEvent('decrease',{detail:'volume decrease'}));
    }
}