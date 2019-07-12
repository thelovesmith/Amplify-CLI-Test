import React from 'react';
import Layout from '../components/layout';
import { withAuthenticator } from 'aws-amplify-react';

const Dashboard = props => (
<Layout {...props} title="Gatsby Dashboard" isDashboard>
    <h1>Liked Posts</h1>
</Layout>
)

export default withAuthenticator(Dashboard, true); 
