import { MessageService } from "./message.service"

describe('MessageService',()=>{
    let service: MessageService

    beforeEach(()=>{
        service = new MessageService();

    })

    it('should be no messages',()=>{
        expect(service.messages.length).toBe(0);
    })

    it('should have messages',()=>{
        service.add('message 1');
        expect(service.messages.length).toBe(1);
    })
})