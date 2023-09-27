import React from "react";
import {useParams} from 'react-router-dom'

import PlaceList from "../components/PlaceList";

const DUMMY_PLACES = [
  {
    id: 'p1',
    title: 'Kildonan Place',
    description: 'Kildonan Place is northeast Winnipeg\s largest shopping centre with more than 100 stores and services such as Marshalls/HomeSense, H&M, Urban Planet, Cineplex Junxion, and Save-On-Foods.',
    imageUrl: 'https://lh5.googleusercontent.com/p/AF1QipN7jarylZzGUlzifcpRWNudQ5nvUGgHQoNVWoM2=w532-h240-k-no',
    address: '1555 Regent Ave W, Winnipeg, MB R2C 4J2',
    location: {
      lat: 49.8969654,
      lng: -97.0622478
    },
    creator: 'u1'

  },
  {
    id: 'p2',
    title: 'Canadian Museum for Human Rights',
    description: 'A unique venture, the museum is designed to examine the universal issue of human rights, with special focus on human rights within a Canadian context. Its goal is "to enhance the public\'s understanding of human rights, to promote respect for others and to encourage reflection and dialogue.',
    imageUrl: 'https://lh5.googleusercontent.com/p/AF1QipPQojzLhhGutpHfGXUVkWVcLCmfKx_-16V7G38M=w408-h306-k-no',
    address: '85 Israel Asper Way, Winnipeg, MB R3C 0L5',
    location: {
      lat: 49.8908016,
      lng: -97.1335258
    },
    creator: 'u1'

  },
  {
    id: 'p3',
    title: 'Manitoba Institute of Trades and Technology',
    description: 'MITT provides certificate, post-graduate, and diploma-level technical training for career-oriented post-secondary and secondary students in six clusters of specialization: skilled trades, design and manufacturing technologies, applied business, information and communication technology, health care, and human services.',
    imageUrl: 'https://mitt.ca/Content/Images/uploaded/henlow-campus-800-400.jpg?width=800',
    address: '130 Henlow Bay, Winnipeg, MB R3Y 1G4',
    location: {
      lat: 49.814922,
      lng: -97.192765
    },
    creator: 'u1'

  },

]

const UserPlaces = () => {
  // Get the userId param from the URL.
  const { userId } = useParams();

  const loadedPlaces = DUMMY_PLACES.filter(place => place.creator === userId);

  return (  
    <PlaceList items={loadedPlaces} />
  );
}
 
export default UserPlaces;