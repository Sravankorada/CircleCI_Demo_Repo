import { LightningElement, wire, api, track } from 'lwc';
import { NavigationMixin } from 'lightning/navigation';
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
        
    },
    {
        type: "button", label: 'Add', initialWidth: 100, typeAttributes: {
            label: 'Add',
            name: 'Add',
            title: 'Add',
            disabled: false,
            value: 'Add',
            iconPosition: 'left',
            iconName:'utility:add',
            variant:'Brand'
    }},
    {
        type: "button", label: 'Remove', initialWidth: 100, typeAttributes: {
            label: 'Remove',
            name: 'Remove',
            title: 'Remove',
            disabled: false,
            value: 'Remove',
            iconPosition: 'left',
            iconName:'utility:delete',
            variant:'Destructive' 
    }}
    
    
    /*{ label: 'Industry', fieldName: 'Industry', type: 'text' },
    { label: 'type', fieldName: 'Type', type: 'text' },
    { label: 'rating', fieldName: 'Rating', type: 'text' },
    { label: 'phone', fieldName: 'Phone', type: 'phone' }*/
];


export default class  Demoacc extends LightningElement {
    columns = columns;
    @track accountData;

    @wire(getAccountDetails)
    wiredAccountData({data, error }) {
        
        if(data){
            // data = JSON.parse(JSON.stringify(data));
            // data.forEach(res => {
            //     res.ccLink = '/' + res.Id;
            // });
            this.accountData = data;
        }
            
            


       // data = JSON.parse(JSON.stringify(data));
    //    let temp;
    //     if (data) {
    //         // console.log(data);
    //         temp = data.map(account => {
    //             account.accLink = "/"+account.Id;
    //            //account.Name = `/${account.Id}`;
    //         });
    //         this.accountData = temp;
        else if (error){
            console.error('Error fetching account details', error);
        }
     }

     /*handleRowAction( event ) {
 
        const actionName = event.detail.action.name;
        const row = event.detail.row;

        let newData = [...this.accountData];

        let ind = this.accountData.findIndex((item)=> row.cclink === item.cclink);

        switch ( actionName ) {
            case 'Add':
                newData.splice(ind+1, 0, {});
               console.log(JSON.stringify(this.accountData));
               console.log(row);
               
               break;
            case 'Remove':
                    newData.splice(ind  , 1); // Remove one element at the specified index
                    console.log('Remove');
                    break;
              
        }*/
        //this.accountData = newData;
        
        
    }
    
    
