const npsRootUrl = 'https://developer.nps.gov/api/v1/';
const npsApiKey = 'AvrC614SiERYcGihHMcufgAu8yxa1IhxRJGCthwY';

const getParks = function(state, activity) {
    let endpoint = '';
    if (state) {
        endpoint += `stateCode=${state}&`;
    }
    
    let parkUrl = `${npsRootUrl}parks?${endpoint}api_key=${npsApiKey}`;

    fetch(parkUrl)
        .then(response => {
            if (response.ok) {
                return response.json()
                    .then(data => {
                        let parks = [... data.data];
                        console.log(parks)
                        parks.filter(park => {
                            for (let i = 0; i < park.activities.length; i++) {
                                console.log(park.activities[i]);
                                if (park.activities[i].name === "Astronomy") {
                                    return true;
                                }
                            }
                            return false;
                        });
                        console.log(parks);
                    });
            }
        })
}

getParks('TX', 'Craft Demonstrations');