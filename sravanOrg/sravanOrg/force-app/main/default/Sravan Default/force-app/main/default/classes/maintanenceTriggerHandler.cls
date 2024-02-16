public class maintanenceTriggerHandler {
    public static void accountmaintanance(list<maintenance__c> mlist){
        set<Id> id1 =  new set<Id>();
        set<Id> id2 = new set<Id>();
        for(maintenance__c ml : mlist){
            id1.add(ml.account__c);
            id2.add(ml.service_resources__c);
        }
        map<id,account> map1 = new map<id, account>([select id, number_of_towers__c from account where id IN : id1]);
        list<resource__c> rlist = [select id,status__c from resource__c where id IN:id2];
        for(resource__c rl : rlist){
            rl.status__c ='Performing Maintenance';
                //
                
            }
        }
    }