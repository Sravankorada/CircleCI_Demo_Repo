import { LightningElement ,api} from 'lwc';
import{FlowNavigationNextEvent} from 'lightning/flowSupport';
import{ShowToastEvent} from 'lightning/platformShowToastEvent';

export default class AccountRecordUpdateInFlow extends LightningElement {
    @api availableActions=[];
    @api accountRecordId;
    @api objectapiname='Account';
    fields=['Name','Type','Industry'];
    handleSuccess(event){
        const evt=new ShowToastEvent({
            title:"record update",
            variant:"success",
            message:"account record is updated successfully"
        });
        this.dispatchEvent(evt);
        this.handleGoNext();
    }
    handleGoNext(){
        if (this.availableActions.find(action => action='NEXT')){
            const navigationNextEvent= new  FlowNavigationNextEvent();
            this.dispatchEvent(navigationNextEvent);

        }
    }


}