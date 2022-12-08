import React from 'react';
import { useGrowthBook } from '@growthbook/growthbook-react';

const Wutever = () => {
    const growthbook = useGrowthBook();

    console.log(growthbook)

    const { template } = growthbook.getFeatureValue('h1-title', 'fallback value1');

    return <div>{template}  </div>;
};

export default Wutever;
