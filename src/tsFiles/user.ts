const NUM_OF_FRIENDS = 7;
type Friend = {firstName:string, lastName:string}

class RandomUser{
    firstName: string; 
    lastName: string; 
    pictureUrl: string; 
    city: string; 
    state: string; 
    friends: Friend[];

    constructor(){        
        this.firstName = ""; 
        this.lastName = ""; 
        this.pictureUrl = ""; 
        this.city = ""; 
        this.state = ""; 
        this.friends = new Array<Friend>(NUM_OF_FRIENDS); 
    }

    async getNewUser(){
        let newDataUser = await $.get(`https://randomuser.me/api/`);
        newDataUser = newDataUser.results[0];
        this.firstName = newDataUser.name.first;
        this.lastName = newDataUser.name.last;
        this.pictureUrl = newDataUser.picture.medium;
        this.city = newDataUser.location.city;
        this.state = newDataUser.location.state;
        this.friends = await this.getFriends()
    }

    async getFriends(){
        let newFriendsData = await $.get(`https://randomuser.me/api/?results=${NUM_OF_FRIENDS}`);
        return newFriendsData.results.map((f: { name: { first: any; last: any; }; }) => 
                                            ({ firstName: f.name.first, lastName: f.name.last }));        
    }

    copy(savedUser: RandomUser){
        this.firstName = savedUser.firstName; 
        this.lastName = savedUser.lastName; 
        this.pictureUrl = savedUser.pictureUrl; 
        this.city = savedUser.city; 
        this.state = savedUser.state; 
        this.friends = savedUser.friends; 
    }

}

