import * as React from 'react';

interface GenericFCProps { //Generic Function Component Props
    /**
     * @description route for API request
     */
    route: string,

    /**
     * @description id for API request
     */
    providerId: number,

    /**
     * @description token for API request
     */
    token: string,

    /**
     * @description text color
     */
    color: string,
}

declare const GenericFunctionComponent: React.FC<GenericFCProps> = (props) => { };

export default GenericFunctionComponent;