import React, { useEffect } from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { GrowthBook, GrowthBookProvider } from '@growthbook/growthbook-react';
import { nanoid } from 'nanoid';
import Wutever from '../components/Wutever/Wutever';

const isBrowser = typeof window !== 'undefined';

let visitor_id = isBrowser ? localStorage.getItem('visitor_id') : null;
if (!visitor_id && isBrowser) {
    visitor_id = nanoid();
    localStorage.setItem('visitor_id', visitor_id);
}

const Test = () => {
    const growthbook = new GrowthBook({
        attributes: {
            id: visitor_id
        },
        trackingCallback: (experiment, result) => {
            console.log({
                experimentId: experiment.key,
                variationId: result.variationId
            });
        }
    });

    useEffect(() => {
        // Load feature definitions from API
        fetch('https://cdn.growthbook.io/api/features/key_prod_44d484e96e728eca')
            .then((res) => res.json())
            .then((json) => {
                console.log(json);
                growthbook.setFeatures(json.features);
            });

        // TODO: replace with real targeting attributes
        // growthbook.setAttributes({
        //     id: 25,
        //     deviceId: 'foo',
        //     company: 'foo',
        //     loggedIn: true,
        //     employee: true,
        //     country: 'foo',
        //     browser: 'foo',
        //     url: 'foo'
        // });
    }, []);

    return (
        <GrowthBookProvider growthbook={growthbook}>
            <div>
                <Wutever />
                <h2>and something else</h2>
            </div>
        </GrowthBookProvider>
    );
};

export default Test;
