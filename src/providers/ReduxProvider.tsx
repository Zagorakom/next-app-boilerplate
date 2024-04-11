'use client';

import { Provider } from 'react-redux';
// import { persistStore } from 'redux-persist'; // disabled for SSR
// import { PersistGate } from 'redux-persist/integration/react'; // disabled for SSR
import store from '@store/index';

// const persistor = persistStore(store); // disabled for SSR

export const ReduxProvider = (props: React.PropsWithChildren) => {
    return (
        <Provider store={store}>
            {/* <PersistGate
                loading={null}
                persistor={persistor}
            > */} {/* disabled for SSR */}
                {props.children}
            {/* </PersistGate> */} {/* disabled for SSR */}
		</Provider>
    );
}

// export const ReduxProvider = ({
// 	children,
// }: {
// 	children: React.ReactNode;
// }) => {
//     return (
//         <Provider store={store}>
//             <PersistGate
//                 loading={null}
//                 persistor={persistor}
//             >
//                 {children}
//             </PersistGate>
// 		</Provider>
//     );
// }
