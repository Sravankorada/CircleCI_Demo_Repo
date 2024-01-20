import { LightningElement } from 'lwc';

export default class Recordpicker extends LightningElement {

    selectedRecordId = '';

    matchingInfo = {
        primaryField: { fieldPath: "Name" },
        additionalFields: [{ fieldPath: "Title" }],
    };
    displayInfo = {
        additionalFields: ["Title"],
    };

    filter = {
        criteria: [
            {
                fieldPath: "Account.Name",
                operator: "like",
                value: "e%",
            },
        ],
    };
    handleChange(event) {
        this.selectedRecordId = event.detail.recordId;
        console.log("🚀 ~ this.selectedRecordId:", this.selectedRecordId);
    }
}