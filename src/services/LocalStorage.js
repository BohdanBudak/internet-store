export default class LocalStorage {

    static getCardsFromLocalStorage(dataName){
        const arrayData = localStorage.getItem(dataName);

        return JSON.parse(arrayData);
    }

    static setData(dataName, data) {
        const stringData = JSON.stringify(data);

        localStorage.setItem(dataName, stringData);
    }

    static postCardToLocalStorage(dataName, data) {
        let arrayData = LocalStorage.getCardsFromLocalStorage(dataName);
        if (arrayData === null) {
            arrayData = [];
        }
        arrayData.push(data);

        this.setData(dataName, arrayData);
    }

    static deleteCardFromLocalStorage(dataName, article) {
        const arrayCards = LocalStorage.getCardsFromLocalStorage(dataName);
        let updateCards = arrayCards
            .filter(element => element.article !== article);

        this.setData(dataName, updateCards);
    }

    static clearLocalStorage(dataName) {
        let updateCards = [];
        this.setData(dataName, updateCards);
    }
}