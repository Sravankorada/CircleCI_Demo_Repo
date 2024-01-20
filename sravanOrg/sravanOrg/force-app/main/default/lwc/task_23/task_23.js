import { LightningElement } from 'lwc';

export default class Task_23 extends LightningElement {
    cname;
    bln=false;
    handleChange(event){
        this.cname =event.target.value;
    }
    handleCheckbox(event){
        this.bln=event.target.checked;
    }
}