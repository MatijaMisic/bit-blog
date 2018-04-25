class Address {
    constructor(city, geo, street, suit, zipcode) {
        this.city = city;
        this.lat = geo.lat;
        this.lng = geo.lng;
        this.street = street;
        this.suit = suit;
        this.zipcode = zipcode;
    }
}

export { Address };