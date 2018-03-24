import React from 'react';
import ReactDOMServer from 'react-dom/server';

import config from './config';
import axios from 'axios';
import App from "./src/components/App";


const serverRender = () =>
    axios.get(`${config.serverUrl}/api/contests`)
        .then(resp => {

            return {
                initialMarkup: ReactDOMServer.renderToString(
                    <App initialContests={resp.data.contests} />
                ),
                initialData: resp.data
            };

        });

export default serverRender;