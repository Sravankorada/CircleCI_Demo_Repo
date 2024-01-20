global with sharing class accdetails {
        @AuraEnabled(cacheable=true)
        public static List<wrapclass> getAccountDetails() {
            List<account> acclist= [SELECT Id, Name, Industry, type,rating,phone FROM Account];
            List<wrapclass> wrp = new List<wrapclass>();
            for(Account Acc : acclist){
                wrapclass wr = new wrapclass();
                wr.Phone=Acc.Phone;
                wr.cclink = '/' + Acc.Id;
                wr.Name = Acc.Name;
               
                wrp.add(wr);
        } 
       
        return wrp;
        }
        public class wrapclass{

            @AuraEnabled public string cclink {get; set;}
            @AuraEnabled public string Name {get; set;}
            @AuraEnabled public string Phone {get; set;}
        }
    }
