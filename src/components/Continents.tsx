//Components...
import {gql, useQuery} from "@apollo/client"
import { useState } from "react";

import ContinentDetails from "./ContinentDetails";

const GET_ALL_CONTINENTS = gql`
    query GetAllCountires {
        continents{
            code
            name
            countries {
                name
            }
        }
    }
`

interface Land {
    name: String,
    code: any
}


const Continents = () => {
    const {data} = useQuery(GET_ALL_CONTINENTS);



    const [showContinentDetails, setShowContinentDetails] = useState<boolean>(false);


    const [continentName, setContinentName] = useState<string>("")




    return (
        <div className='continents'>
            {showContinentDetails && 
                <ContinentDetails 
                    continentName={continentName}
                    setShowContinentDetails={setShowContinentDetails}
                />
            }
            {!showContinentDetails && <h1>Continents of Earth:</h1>}
            {data && !showContinentDetails &&
                data.continents.map((land: Land, i:number) => {
                    return (
                        <div 
                            className='single-continent-tab' 
                            key={i}
                            onClick={() => {
                                setShowContinentDetails(true)
                                setContinentName(land.code)
                            }}
                        >
                            {land.name}
                        </div>
                    )
                })
            }
        </div>
    );
};

export default Continents;