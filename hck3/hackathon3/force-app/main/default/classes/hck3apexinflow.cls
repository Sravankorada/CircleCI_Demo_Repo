public with sharing class hck3apexinflow {

    @InvocableMethod(label='VisitRecords' description='Method Creates VisitRecords based on Appointment recordType and ProblemType')
    public static List<visit__c> createVisit(List<Id> Ids){
        List<appointment__c> appointmentrecordsList = [Select Id,Name,doctor__r.Name,hospital__r.Name, RecordTypeName__c,surgery_type__c,surgery_completed__c,  opt_for_maintenance__c , patient__c FROM appointment__c WHERE Id =: Ids];
        List<appointment_type_visit__mdt> cmdvalList= [Select surgeryType__c ,number_of_visits__c FROM appointment_type_visit__mdt];
        Map<String,Decimal> VisitSurgeryMap = new Map<String,Decimal>();
        for(appointment_type_visit__mdt cmd : cmdvalList){
            VisitSurgeryMap.put(cmd.surgerytype__c, cmd.number_of_visits__c);
        }
        List<appointment__c> aListToUpdate = new List<appointment__c>();
        List<visit__c> createVisitRecords = new List<visit__c>();
        for(appointment__c a : appointmentrecordsList){
            if(a.RecordTypeName__c =='Regular' && a.surgery_completed__c == true && a.opt_for_maintenance__c == true){
                a.Number_Of_Visits__c = VisitSurgeryMap.get(a.surgery_type__c);
                aListToUpdate.add(a);
                for(integer i=0 ; i<VisitSurgeryMap.get(a.surgery_type__c); i++){
                    visit__c v = new visit__c();
                    v.appointment__c = a.Id;
                    v.patient__c =a.patient__c;
                    v.doctor_Name__c  = a.doctor__r.Name; 
                    v.hospital_Name__c = a.hospital__r.Name;
                    v.Scheduled_Visits__c = VisitSurgeryMap.get(a.surgery_type__c);
                    createVisitRecords.add(v);
                }
            }
            
        }
       
    }  
}







/*public with sharing class hck3apexinflow {

    @InvocableMethod(label='VisitRecords' description='Method Creates VisitRecords based on Appointment recordType and ProblemType')
    public static List<visit__c> createVisit(List<Id> Ids){
        List<appointment__c> appointmentrecordsList = [Select Id,Name,doctor__r.Name,hospital__r.Name, RecordTypeName__c,surgery_type__c,surgery_completed__c,  opt_for_maintenance__c , patient__c FROM appointment__c WHERE Id =: Ids];
        List<appointment_type_visit__mdt> cmdvalList= [Select surgeryType__c ,number_of_visits__c FROM appointment_type_visit__mdt];
        Map<String,Decimal> VisitSurgeryMap = new Map<String,Decimal>();
        for(appointment_type_visit__mdt cmd : cmdvalList){
            VisitSurgeryMap.put(cmd.surgerytype__c, cmd.number_of_visits__c);
        }
        List<appointment__c> aListToUpdate = new List<appointment__c>();
        List<visit__c> createVisitRecords = new List<visit__c>();
        for(appointment__c a : appointmentrecordsList){
            if(a.RecordTypeName__c =='Regular' && a.surgery_completed__c == true && a.opt_for_maintenance__c == true){
                a.Number_Of_Visits__c = VisitSurgeryMap.get(a.surgery_type__c);
                aListToUpdate.add(a);
                for(integer i=0 ; i<VisitSurgeryMap.get(a.surgery_type__c); i++){
                    visit__c v = new visit__c();
                    v.appointment__c = a.Id;
                    v.patient__c =a.patient__c;
                    v.doctor_Name__c  = a.doctor__r.Name; 
                    v.hospital_Name__c = a.hospital__r.Name;
                    v.Scheduled_Visits__c = VisitSurgeryMap.get(a.surgery_type__c);
                    createVisitRecords.add(v);
                }
            }
            
        }
       
    }  
}
*/