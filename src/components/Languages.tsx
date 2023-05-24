//React...
import {useState} from 'react';

//Components...
import {gql, useLazyQuery} from "@apollo/client"
import PopUpLanguageIndex from './PopUpLanguageIndex';


const QUERY_ALL_LANGUAGES = gql`
    query ($code: ID!) {
        language(code: $code) {
            code
            name
        }
    }
`


const Languages = () => {
    const [tempInput, setTempInput] = useState("")

    const [input, setInput] = useState("");
    const [noResult, setNoResult] = useState(false)

  
    const [getLanguages, { data }] = useLazyQuery(QUERY_ALL_LANGUAGES, {
        variables: {code: input}
    });


    const handleSubmit = () => {
        if(!tempInput) return;
        setInput(tempInput)
        getLanguages()
        
        if(!data.language){ 
            setNoResult(true)
        }
        else { 
            setNoResult(false)
        }
    }
    
    const [showIndex, setShowIndex] = useState(false)


    return (
        <div className='nav-blocks-wrap'>
            <button onClick={() => setShowIndex(prev => !prev)} className='show-index'>?</button>
            {showIndex && <PopUpLanguageIndex/>}
            {!showIndex && 
            <>
                <h1>Contains languages of earth...</h1>
                <div className='search-input'>
                    <input onChange={(e) => setTempInput(e.target.value)} placeholder='Search by code'/>
                    <button onClick={handleSubmit}>Go</button>
                </div>
            </>
            }
            {data?.language && !showIndex &&
                <div className='language-result'>
                    <a 
                        href={`https://en.wikipedia.org/wiki/${data?.language?.name}_Wikipedia`} 
                        target='_blank'
                    >
                        {data?.language?.name}
                    </a>
                </div>
            }
            {noResult && !data?.language &&
                <div>No results...</div>
            }
        </div>
    );
};

export default Languages;