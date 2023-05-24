//React...
import { useState } from "react";

//Components...
import {useQuery, gql} from "@apollo/client"
import CountryDetails from "./CountryDetails";



const QUERY_ALL_COUNTRIES = gql`
    query GetAllCountries {
        countries {
            code
            name
            native
            phone
        }
    }
`

//Typescript...
interface Country {
    code: string,
    name: string,
    native: string,
    phone: string,
}


const Countries = () => {
    const {data} = useQuery(QUERY_ALL_COUNTRIES);
    

    const [currCode, setCurrCode] = useState<string>("")
    const [showData, setShowData] = useState<boolean>(true)
    const [showCountryDetails, setShowCountryDetails] = useState<boolean>(false);

    return (
        <div className="nav-blocks-wrap">  
            {!showCountryDetails &&<h2>Countries List:</h2>}
            {showCountryDetails && 
                <CountryDetails 
                    currCode={currCode} 
                    setShowCountryDetails={setShowCountryDetails}
                    setShowData={setShowData}
                />
            }
            {data && showData &&
                data.countries.map((country: Country, i: number) => {
                    return (
                        <div 
                            key={i} 
                            onClick={() => {
                                setCurrCode(country.code) 
                                setShowCountryDetails(true) 
                                setShowData(false)   
                            }}
                            className="single-country-tab"
                        >
                            {country.name}
                        </div>
                    )
                })  
            }
        </div>
    );
};

export default Countries;