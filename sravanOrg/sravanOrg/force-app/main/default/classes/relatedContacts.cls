public with sharing class  relatedContacts{
    @AuraEnabled(cacheable=TRUE)
    public static List<Contact> getContact(Id accid){
        return[SELECT id,Name,Title,Phone,Email,OwnerId FROM Contact WHERE AccountId =:accid];
    
}
}