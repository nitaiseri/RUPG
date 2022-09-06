const NUM_OF_FRIENDS = 7;

class RandomUser{
    firstName: string; 
    lastName: string; 
    pictureUrl: string; 
    city: string; 
    state: string; 
    friends: object[]; //////////////////////

    constructor(){        
        this.firstName = ""; 
        this.lastName = ""; 
        this.pictureUrl = ""; 
        this.city = ""; 
        this.state = ""; 
        this.friends = []; 
    }

    async getNewUser(){
        let newDataUser = await $.get("https://randomuser.me/api/");
        newDataUser = newDataUser.results[0];
        this.firstName = newDataUser.name.first;
        this.lastName = newDataUser.name.last;
        this.pictureUrl = newDataUser.picture.medium;
        this.city = newDataUser.location.city;
        this.state = newDataUser.location.state;
        this.friends = await this.getFriends()
    }

    async getFriends(){
        const friends = [];
        for (let i = 0; i < NUM_OF_FRIENDS; i++)
            friends.push(this.getOneFriend());
        return await Promise.all(friends);
    }

    async getOneFriend(){
        let newDataUser = await $.get("https://randomuser.me/api/");
        newDataUser = newDataUser.results[0];
        return {firstName: newDataUser.name.first,
                lastName: newDataUser.name.last}
    }


}

