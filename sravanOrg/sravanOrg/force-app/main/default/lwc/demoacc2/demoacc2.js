import { LightningElement , track, wire } from 'lwc';
import getAccountDetails from '@salesforce/apex/accdetails.getAccountDetails';

const columns = [
    {
        label: 'Name',
        fieldName: 'cclink',
        type: 'url',
        editable: true,
        typeAttributes: { label: { fieldName: 'Name' }, target: '_blank' }
        
    },
    {
        label: 'Phone',
        fieldName: 'Phone',
        type: 'Phone',
        editable: true,
        //typeAttributes: { label: { fieldName: 'Phone' }, target: '_blank' }
        
    }
];

export default class Demoacc2 extends LightningElement {
    columns = columns;
    @track accountData;
    @track accountName = '';
    @wire(getAccountDetails)
    wiredAccountData({data, error }) {
        
        if(data){
            
            this.accountData = data;
        } 
        else if (error){
            console.error('Error fetching account details', error);
        }
    }
    

    handleAdd() {
        // if (this.accountName.trim() === '') {
        //     console.error('Account name is required.');
        //     return;
        // }

        createAccount({ accountName: this.accountName })
            .then(result => {
                console.log('Account added successfully:', result);

                // Handle success - Example: Show a success message
                this.dispatchEvent(
                    new ShowToastEvent({
                        title: 'Success',
                        message: 'Account added successfully',
                        variant: 'success',
                    })
                );

                // You may want to reset input fields or perform additional actions here
                this.accountName = '';
            })
            .catch(error => {
                console.error('Error adding account:', error);

                // You may want to show an error message or perform additional error handling here
            });
    }
    handleRemove() {
        //console.log('hey there I am for dlt'); // Assuming deleteAccount is an Apex method to remove an account
        deleteAccount()
            .then(result => {
                        // Handle success
                console.log('Account removed successfully:', result);
            })
            .catch(error => {
                        // Handle error
                console.error('Error removing account:', error);
                    });  
                } 
            }            
