trigger triggermaint on Maintenance__c ( after insert) {
    system.debug('triggered');
    newmaintanence.updmaintanence(trigger.new);
    

}