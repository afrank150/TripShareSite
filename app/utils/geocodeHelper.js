import request from 'superagent';
import { MAPBOX_API_KEY } from 'constants/config';

export function geocodeSearch(input) {
  return new Promise((resolve, reject) => {
    const url = '//api.mapbox.com/geocoding/v5/mapbox.places/'+
      input+'.json?'+MAPBOX_API_KEY;

        if(input !== '') {
          request
            .get(url)
            .end((error, response) => {
              if (error || !response.ok) {
                console.error(error);
              }
              else {
                resolve(response.body.features.map((feature) => (feature.place_name)));
              }
            });
        }
    });
}

export function geocodeRequest(input) {

}
