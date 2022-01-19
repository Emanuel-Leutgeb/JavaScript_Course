function addressMaker(city, state) {
    //old style
    //const newAddress = {newCity: city, newState: state};

    //new style
    const newAddress = {city, state};

    console.log(newAddress);
}

addressMaker('Austin', 'Texas');
/*--------------------------------------------------------------------------------------------------------------------*/

//Challenge 02

/*
    const newAddress = {
            city: address.city,
            state: address.state,
            country: 'United States'
    };
*/

function newAddressMaker(address) {
    const {city, state} = address;

    const newAddress = {
        city,
        state,
        country: 'United States'
    };
    console.log(`${city}, ${state}`);
    console.log(`${newAddress.city}, ${newAddress.state}, ${newAddress.country}`);
}

newAddressMaker({city: 'Austin', state: 'Texas'});