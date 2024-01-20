public with sharing class contactslwc {
    @AuraEnabled(cacheable=TRUE)    
    public static List<Contact> getContact(string conName){
            return[SELECT id,Name,Title,Phone,Email,OwnerId FROM Contact WHERE name LIKE:('%'+conName+'%')];

    }
}

