import React, { lazy, Suspense } from "react";
import PropTypes from 'prop-types';

const withLazySuspense = promise => {
  const Component = lazy(promise);
  const WithLazySuspense = ({ showLoader = false, fallbackMessage = "", ...restProps } = {}) => {
    const fallback = showLoader ? fallbackMessage : null;
    return (
      <Suspense fallback={fallback}>
        <Component {...restProps} />
      </Suspense>
    );
  };

  WithLazySuspense.propTypes = {
    showLoader: PropTypes.bool,
    fallbackMessage: PropTypes.string,
  }

  WithLazySuspense.displayName = `WithSubscription${Component.displayName ||

  return WithLazySuspense;
};

export default withLazySuspense;
