import { LightningElement } from 'lwc';

export default class Lwc_Practice1 extends LightningElement {
    cname;
    employee=false;
    handleChange(event){
      this.cname=event.target.value;
    }
    handleCheckbox(event){
        this.employee=event.target.checked;
    }
}