import { LightningElement } from 'lwc';

export default class lwc_Prac2 extends LightningElement {
    fnum;
    snum;
    tnum;
    handleChange1(event){
        this.fnum=event.target.value;}
    handleChange2(event){
        this.snum=event.target.value; }   
    handleChange3(event){
        this.tnum=event.target.value; } 
    handleCalculate(event){
        const a=parseInt(this.fnum);
        const b=parseInt(this.snum);
        const c=parseInt(this.tnum);
        if(a>b && a>c){
            console.log('the greater number is'+a);
        }
        else if(b>a && b>c){
            console.log('the greater number is'+b);
        }
        else{
            console.log('the greater number is'+c);
        }
    }
        //cal=Math.max(a,b,c);
        //console.log('the greater number is '+cal); }    
    handleClear(event){
        this.fnum='';
        this.snum='';
        this.tnum='';}    
}