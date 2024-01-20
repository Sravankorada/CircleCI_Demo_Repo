import { LightningElement ,wire,track,api} from 'lwc';
import searchContact from '@salesforce/apex/ContactstobeSearched.searchContact'
export default class Task_9 extends LightningElement {
        //@track contacts;
        @track clist;
        @track errormsg;
        @api name;
        
        handleChange(event){
            this.name=event.target.value;
        }
        columns =[
            {label:'Name' ,fieldName: 'Name'},
            {label:'Phone' ,fieldName: 'Phone', type:'phone'},
            {label:'Email' ,fieldName: 'Email', type:'email'},];
    
            @wire(searchContact,{cname: '$name'})
            clist;
            handleChange(event){
                this.name=event.target.value;
            } 
        //     wiredcontactrecord({data,error}){
        //     if(data){
        //         this.cont = data;
        //         this.errormsg = undefined;
        //     }
        //     else if(error){
        //         this.clist=undefined;
        //         this.errormsg=error;
        //     }
        // }
        
    }