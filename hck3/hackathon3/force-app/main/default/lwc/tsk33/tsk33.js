import { LightningElement,track} from 'lwc';

export default class Tsk33 extends LightningElement {

    @track doctors = [
        {
            id: 1,
            imageURL:
'https://t3.ftcdn.net/jpg/02/60/04/08/360_F_260040863_fYxB1SnrzgJ9AOkcT0hoe7IEFtsPiHAD.jpg',
            name: 'Doctor 1',
            details: 'Details about Doctor 1',
            recordURL:
'https://absyz-2ad-dev-ed.develop.lightning.force.com/lightning/r/Doctor__c/a025j00000ipzQWAAY/view',

        },
        {
            id: 2,
            imageURL:
'https://img.freepik.com/free-photo/portrait-asian-doctor-woman-cross-arms-standing-medical-uniform-stethoscope-smiling-camera-white-background_1258-83220.jpg',
            name: 'Doctor 2',
            details: 'Details about Doctor 2',
            recordURL:
'https://absyz-2ad-dev-ed.develop.lightning.force.com/lightning/r/Doctor__c/a025j00000j6oiQAAQ/view',


        },

    ];
}

