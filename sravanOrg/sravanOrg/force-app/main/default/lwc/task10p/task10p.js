import { LightningElement } from 'lwc';

export default class Task10p extends LightningElement {
    sname;
    handleChangeEvent(event){
        this.sname=event.target.value;
    }
}