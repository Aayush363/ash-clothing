import React from 'react';
import Spinner from '../spinner/spinner.component';
const WithSpinner = WrappedComponent =>
    ({ isLoading, ...otherProps }) => {
        return isLoading ? (
            <Spinner />
        ) : (
            <WrappedComponent {...otherProps} />
        )

        // return Spinner;
    }

export default WithSpinner;
