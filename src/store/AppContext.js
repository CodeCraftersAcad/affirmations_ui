import React from 'react';

const AppContext = React.createContext({
    jwt: "",
    setJwt: function(){ },
    user: {},
    setUser: () => { },
})

export default AppContext;