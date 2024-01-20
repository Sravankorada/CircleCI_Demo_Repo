import { LightningElement } from 'lwc';

export default class Task_11c extends LightningElement {
    num1;
    num2;
    num3;

    handleChange1(event){
        this.num1=event.target.value;
    }
    handleChange2(event){
        this.num2=event.target.value;}
    handleClick(event){
        this.num3=(parseInt(this.num1)+parseInt(this.num2));
        this.dispatchEvent(new CustomEvent('summation',{detail:this.num3}));
    }
} handleClick