public class outofbatch implements database.Batchable<sObject>{
    public database.querylocator start(database.BatchableContext bc){
      return database.getQueryLocator('select Out_of_Office_End_Date__c,Out_of_Office_Start_Date__c from resource__c');  
    }
    public void execute(database.BatchableContext bc, List<resource__c> scope){
        for(resource__c r:scope){
            if(r.Out_of_Office_Start_Date__c ==system.today())
            	{r.status__c='Out of Office';}
            else if(r.Out_of_Office_End_Date__c ==system.today())
            	{r.status__c='Available for Work';} 
        }
        update scope;
        }
        
        public void finish(database.BatchableContext bc) {}
    }