public with sharing class ContactstobeSearched{
    @AuraEnabled(cacheable=true)
    public static List<Contact> searchContact(string cname){
        String name='%'+cname+'%';
        list<Contact> clist=new list<Contact>();
        if(string.isEmpty(name)){
            return clist;
        }
        clist=[SELECT id,Name,Phone,Email FROM Contact WHERE name LIKE :name];
        return clist;
    
}
}