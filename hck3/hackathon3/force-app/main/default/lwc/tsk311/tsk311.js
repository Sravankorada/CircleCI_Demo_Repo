import { LightningElement,api } from 'lwc';
import email__c from '@salesforce/schema/patient__c.email__c';
import Name from '@salesforce/schema/patient__c.Name';
import external_id__c from '@salesforce/schema/patient__c.external_id__c';
export default class Tsk311 extends LightningElement {
    //@api recordId;
    @api objectApiName;
    connectedCallback(){
        console.log();
    }
    customfields=[Name,email__c,external_id__c];
}