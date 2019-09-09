import React from 'react'
const altWithClass = (WrappedComponent, classes) => {
    return props => (
        <div className={classes}>
            <WrappedComponent {...props} />
            {/* All the properties of the wrapped components will be received in the props of this function */}
        </div>
    )
}

export default altWithClass