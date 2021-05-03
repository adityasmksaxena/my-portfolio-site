import React, { lazy, Suspense } from "react";

const withLazySuspense = promise => {
  const Component = lazy(promise);
  return ({ showLoader = false, fallbackMessage = "", ...restProps } = {}) => {
    const fallback = showLoader ? fallbackMessage : null;
    return (
      <Suspense fallback={fallback}>
        <Component {...restProps} />
      </Suspense>
    );
  };
};

export default withLazySuspense;
