import React, {Fragment} from 'react'
import Header from '../components/Header'
import Characters from '../components/Characters'

const  app= () => {
    return ( 
        <Fragment>
            <Header />
            <Characters />
        </Fragment>
     );
}
 
export default app;