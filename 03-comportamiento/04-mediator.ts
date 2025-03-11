/**
 * ! Patrón mediator
 * Es un patrón de diseño de comportamiento que ayuda a reducir
 * las dependencias desordenadas entre objetos.
 * Este patrón limita la comunicación directa entre ellos,
 * haciendo que solo interactúen a través de un objeto mediador.
 *
 * * Es útil reducir la complejidad de las relaciones entre objetos
 *
 * https://refactoring.guru/es/design-patterns/mediator
 */
class ChatRoom{
    private users: User[] = [];
    public title: string;

    constructor(title: string){
        this.title = title
    }

    addUser(user: User){
        this.users.push(user)
    }

    sendMessage(message: string, sender: User): void{

        const usersToSend = this.users.filter(user => user !== sender);

        for(const user of usersToSend){
            user.receiveMessage(sender, message);
        } 
    }
}

class User{
    private username: string;
    private chatRoom: ChatRoom;

    constructor(username: string, chatRoom: ChatRoom){
        this.username = username;
        this.chatRoom = chatRoom;

        chatRoom.addUser(this);
    }

    sendMessage(message: string):void{
        console.log(`${this.username} envía: ${message}`);

        this.chatRoom.sendMessage(message, this);
    }

    receiveMessage(sender: User, message: string):void{
        console.log(`${this.username} recibe de ${sender.username}: ${message}`)
    }
}
    
function main(){
    const chatRoom = new ChatRoom('Sala de chat');

    const user1 = new User('User1', chatRoom);
    const user2 = new User('User2', chatRoom);
    const user3 = new User('User3', chatRoom);

    user1.sendMessage('Hola a todos');
}

main();