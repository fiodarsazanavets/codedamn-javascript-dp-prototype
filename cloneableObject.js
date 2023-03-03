class CloneableObject {

    _internalTitle; 
    _internalData;
    
    getTitle() {
        return this._internalTitle;
    }

    getData() {
        return this._internalData;
    }

    constructor(title) {
        this._internalTitle = title;
        this._internalData = Math.random();
    }
}

module.exports = CloneableObject;