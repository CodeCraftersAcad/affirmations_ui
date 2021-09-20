import PropTypes from 'prop-types'
import {Helmet} from "react-helmet";
import {Container} from "react-bootstrap";
import Navbar from "./Navbar";
import Footer from "./Footer";


const Layout = ({title, description, keywords, children}) => {
    return (
        <>
         <Helmet>
             <title>{title}</title>
             <meta name={'description'} content={description}/>
             <meta name={'keyword'} content={keywords}/>
         </Helmet>
            <Navbar/>
            <Container>
                {children}
            </Container>
            <Footer/>
        </>
    );
};

Layout.defaultProps = {
    title: 'CCA Affirmations',
    description: 'Get affirmations on your terms',
    keywords: 'affirmations, quotes, positivity, mood changing'
}

Layout.prototype ={
    title: PropTypes.string,
    description: PropTypes.string,
    keywords: PropTypes.string
}

export default Layout;