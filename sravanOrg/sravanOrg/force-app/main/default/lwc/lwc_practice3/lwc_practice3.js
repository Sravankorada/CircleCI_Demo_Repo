import { LightningElement,api } from 'lwc';
import Fax_Field from '@salesforce/schema/Account.Fax';
import Industry_Field from '@salesforce/schema/Account.Industry';
import Name_Field from '@salesforce/schema/Account.Name';
import Phone_Field from '@salesforce/schema/Account.Phone';
import Rating_Field from '@salesforce/schema/Account.Rating';
export default class Lwc_practice3 extends LightningElement {
    @api recordId;
    @api objectApiName;
    customfields=[Name_Field,Phone_Field,Fax_Field,Industry_Field,Rating_Field];
}