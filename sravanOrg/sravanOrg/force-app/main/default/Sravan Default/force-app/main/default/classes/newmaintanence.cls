public class newmaintanence {
    public static void updmaintanence(list<Maintenance__c> mlist){
        system.debug('triggerHndlerclle');
        Set<Id> aids = new Set<Id>();
        Set<Id> rids = new Set<Id>();
        for(maintenance__c m: mlist){
            if(m.account__c!=null){
                aids.add(m.Account__c);
            }
            if(m.service_resources__c!=null){
                rids.add(m.service_resources__c);
            }
        }
        Map<Id,Resource__c> rMap=new Map<Id,Resource__c>([Select id,Location__latitude__s,Location__longitude__s from Resource__c Where Id in:rids]);
        Map<Id,account> amap=new map<Id,account>([select id,Number_of_Towers__c from account where Id in:aids]);
        list<maintenance_plan__c> mali = new list<maintenance_plan__c>();
        for(maintenance__c m : mlist){
            for(integer i=0 ; i<Integer.valueOf(amap.get(m.account__c).Number_of_Towers__c);i++){
                maintenance_plan__c ma = new maintenance_plan__c();
                ma.maintenance__c = m.Id;
                ma.resource__c =m.service_resources__c;
                Double lat1 = m.Location__latitude__s;
                Double lon1 = m.Location__longitude__s;
                Double lat2 = rmap.get(m.service_resources__c).Location__latitude__s;
                Double lon2 = rmap.get(m.service_resources__c).Location__longitude__s;
                Location Loc1 = Location.newInstance(lat1, lon1);
                Location Loc2 = Location.newInstance(lat2, lon2);
                Double distance = Location.getDistance(Loc1, Loc2, 'km');
                if(distance<100){
                    ma.service_Charges__c=(distance*1)+250;
                }
                else if(distance>=100 && distance<200){
                    ma.service_Charges__c=(100*1)+((distance-100)*2.5)+250;
                }
                else{
                    ma.service_Charges__c=(100*1)+((distance-100)*2.5)+350;
                    ma.Approval_required__c=True;
                }	
              mali.add(ma) ; 
            }insert mali;
            
                //Retrieve the resources that need to be updated
                //Map<Id,Resource_c>resToUpd=new Map<Id,Resourcec>([Select id,Statusc from Resource_c Where Id in:rIds]);
                //for(Maintenance_Plan__c MP:MPList){
                //if(MP.Resource__c!=NULL){
                //Resource_c res=resToUpd.get(MP.Resource_c);
                //if(MP.Status__c=='Completed'){
                // res.Status__c='Available For Work';
                //}
            }
            //}
            // update resToUpd.Values();
            
        }
        
    
		public static void M2(List<Maintenance_Plan__c> MPList){
                set<Id>rIds=new set<Id>();
                //add resource Ids to the set
                for(Maintenance_Plan__c MP:MPList){
                    rIds.add(MP.Resource__c);
                }
}

}