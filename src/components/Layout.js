import React from 'react'
import PropTypes from 'prop-types';

const Layout = ({children, className=""}) => {
  return (
    <div className={`${className} dark:bg-dark w-full h-full inline-block z-0 bg-light p-32`}> 
            {children}
    </div>
    
  )
}

Layout.PropTypes = {
  children: PropTypes.string,
  className: PropTypes.string
}

export default Layout