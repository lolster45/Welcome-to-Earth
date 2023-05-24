//React...
import React from 'react';

//Components...
import {useQuery, gql} from "@apollo/client"

const GET_COUNTRY_DETAILS = gql`
    query ($code: ID!) {
        country(code: $code) {
            code
            name
            capital
            currency
            languages {
                name
            }
        }
    }
`

interface LanguagesForCountry {
    name: string
}

interface CountryDetailsProps {
    currCode: string,
    setShowCountryDetails: React.Dispatch<React.SetStateAction<boolean>>,
    setShowData: React.Dispatch<React.SetStateAction<boolean>>;
}

const CountryDetails: React.FC<CountryDetailsProps> = ({currCode, setShowCountryDetails, setShowData}) => {

    //Another way to set up what I have above in typescript...
        //const CountryDetails = ({currCode}: {currCode: string}, {setShowCountryDetails}) => {

    const {data} = useQuery(GET_COUNTRY_DETAILS, {
        variables: {code: currCode}
    });


    return (
        <div className='single-country-wrap'>
            <button onClick={() => {
                setShowData(true)
                setShowCountryDetails(false)
                }}
                className='back-btn'
            >
                ←
            </button>
            <h1>Details:</h1>
            <label>
                Name:
                <span>{data?.country?.name}</span>
            </label>
            <label>
                Currency:
                <span>{data?.country?.currency}</span>
            </label>
            <label>
                Capital:
                <span>{data?.country?.capital}</span>
            </label>
            <label>
                Languages:
                {
                    data?.country?.languages.map((single: LanguagesForCountry) => {
                        return (
                            <span>{single.name}</span>
                        )
                    })
                }
            </label>
        </div>
    );
};

export default CountryDetails;