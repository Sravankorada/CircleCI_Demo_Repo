import { LightningElement } from 'lwc';

export default class ParentX extends LightningElement {
    vol=0;
    cname='please click on button'
    handlevolincrease(event){
        this.cname=event.detail;
        if(this.vol<100){
            this.vol=this.vol+1;
        }
    }
    handlevoldecrease(event){
        this.cname=event.detail;
        if(this.vol>0){
            this.vol=this.vol-1;
        }
    }
}
