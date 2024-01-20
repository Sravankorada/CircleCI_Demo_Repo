import { LightningElement } from 'lwc';

export default class Task_11p extends LightningElement {
    number3;
    handleselect(event){
        this.number3=event.detail;
    }

}