"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const NUM_OF_FRIENDS = 7;
class RandomUser {
    constructor() {
        this.firstName = "";
        this.lastName = "";
        this.pictureUrl = "";
        this.city = "";
        this.state = "";
        this.friends = new Array(NUM_OF_FRIENDS);
    }
    getNewUser() {
        return __awaiter(this, void 0, void 0, function* () {
            let newDataUser = yield $.get(`https://randomuser.me/api/`);
            newDataUser = newDataUser.results[0];
            this.firstName = newDataUser.name.first;
            this.lastName = newDataUser.name.last;
            this.pictureUrl = newDataUser.picture.medium;
            this.city = newDataUser.location.city;
            this.state = newDataUser.location.state;
            this.friends = yield this.getFriends();
        });
    }
    getFriends() {
        return __awaiter(this, void 0, void 0, function* () {
            let newFriendsData = yield $.get(`https://randomuser.me/api/?results=${NUM_OF_FRIENDS}`);
            return newFriendsData.results.map((f) => ({ firstName: f.name.first, lastName: f.name.last }));
        });
    }
    copy(savedUser) {
        this.firstName = savedUser.firstName;
        this.lastName = savedUser.lastName;
        this.pictureUrl = savedUser.pictureUrl;
        this.city = savedUser.city;
        this.state = savedUser.state;
        this.friends = savedUser.friends;
    }
}
