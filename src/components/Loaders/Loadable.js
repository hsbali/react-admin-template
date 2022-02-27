import { Suspense } from 'react';

import LinearProgress from '@mui/material/LinearProgress';
import { styled } from '@mui/material/styles';

const LoaderWrapper = styled('div')({
    position: 'fixed',
    top: 0,
    left: 0,
    zIndex: 1301,
    width: '100%'
});

const Loader = () => (
    <LoaderWrapper>
        <LinearProgress />
    </LoaderWrapper>
);

const Loadable = (Component) => (props) =>
(
    <Suspense fallback={<Loader />}>
        <Component {...props} />
    </Suspense>
);

export default Loadable;
