
class RandomIpsum{
    ipsum: string;

    constructor(){
        this.ipsum = "";
    }

    async getNewIpsum(){
        let newIpsum = await $.get("https://baconipsum.com/api/?type=meat-and-filler");
        this.ipsum = newIpsum.ipsum;
    }
}