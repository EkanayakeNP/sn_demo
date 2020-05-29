import React, { useState, useEffect, useRef } from 'react';
import Card from './Card';

const Search = React.memo(props => {
    const { onloadIngredients } = props;
    const [enteredFilter, setEnteredFilter] = useState('');
    const inputRef = useRef();

    useEffect(() => {
        setTimeout(() => {
            if (enteredFilter === inputRef.current.value) {
                const query = enteredFilter.length === 0 ? '' :
                    `?orderBy="title"&equalTo="${enteredFilter}"`;

                fetch('https://sn-demo-90d45.firebaseio.com/ingerdients.json' + query)
                    .then(response => response.json()

                    ).then(responseData => {
                        const loadedIngredients = [];
                        for (const key in responseData) {
                            loadedIngredients.push({
                                id: key,
                                title: responseData[key].title,
                                amount: responseData[key].amount
                            })

                        }
                        onloadIngredients(loadedIngredients);

                    });
            }
        },500)

    }, [enteredFilter, onloadIngredients,inputRef]);

    return (
        <section>
            <Card>
                <div></div>
                <div>
                    <label>Filter By Title</label>
                    <input type='text'
                        ref={inputRef}
                        value={enteredFilter}
                        onChange={event => setEnteredFilter(event.target.value)}
                    />
                </div>
            </Card>
        </section>
    )
});

export default Search;

