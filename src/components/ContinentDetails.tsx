import { gql, useQuery } from '@apollo/client';
import React from 'react';


const QUERY_CONTINENT_DETAILS = gql`
    query ($code: ID!) {
        continent(code: $code) {
            name
            countries {
                name
            }
        }
    }
`

interface Continent {
    continentName: string
    setShowContinentDetails: React.Dispatch<React.SetStateAction<boolean>>;
}


interface Countries {
    name: string
}

const ContinentDetails: React.FC<Continent> = ({continentName, setShowContinentDetails}) => {




    const {data} = useQuery(QUERY_CONTINENT_DETAILS, {
        variables: {code: continentName}
    })


    return (
        <div className='continent-details-wrap'>
            <button onClick={() => {
                setShowContinentDetails(false)
                }}
                className='continent-back-btn'
            >
                ←
            </button>
            <h2>Details:</h2>
            <label>
                Name:
                <div>{data?.continent?.name}</div>
            </label>
            <label>
                Countries:
                {
                    data?.continent?.countries?.map((x: Countries) => {
                        return (
                            <div>{x?.name}</div>
                        )
                    })
                }
                <div></div>
            </label>
        </div>
    );
};

export default ContinentDetails;