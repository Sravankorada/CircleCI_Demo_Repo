import { LightningElement ,track,api,wire} from 'lwc';
/*import FirstName from '@salesforce/schema/Contact.FirstName';
import LastName from '@salesforce/schema/Contact.LastName';
import Email from '@salesforce/schema/Contact.Email';
import OwnerId from '@salesforce/schema/Contact.OwnerId';
import Title from '@salesforce/schema/Contact.Title';
import Phone from '@salesforce/schema/Contact.Phone';*/
import getContact from '@salesforce/apex/relatedContacts.getContact';

export default class Task_4 extends LightningElement {
    @track contacts;
    @track errormsg;
    @api recordId;

    columns =[
        {label:'Name' ,fieldName: 'Name'},
        //{label:'Title' ,fieldName: 'Text', type:'text'},
        //{label:'Phone' ,fieldName: 'Phone', type:'phone'},
        //{label:'Email' ,fieldName: 'Email', type:'email'},
        ];

    @wire(getContact,{accid: '$recordId'})
    wiredcontactrecord({data,error}){
        if(data){
            this.contacts = data;
            this.errormsg = undefined;
        }
        else if(error){
            this.contacts=undefined;
            this.errormsg=error;
        }
    }
}