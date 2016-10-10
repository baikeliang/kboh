export default function clientMiddleware(client) {
    return ({ dispatch, getState }) => {
        return next => action => {
            console.log('JJJJJJJJJJJJGG  ' + action.type)
            const { promise, types, ...rest } = action; // eslint-disable-line no-redeclare
            if (!promise) {
                return next(action);
            }
            console.log(types)
            if (!!types) {
                console.log('JJJJJJJJJJJJTT')
                const [REQUEST, SUCCESS, FAILURE] = types;
                next({...rest, type: REQUEST });
                console.log('JJJJJJJJJJJJTTRRRRR')
                console.log(client)
                const actionPromise = promise(client);
                actionPromise.then(
                    (result) => next({...rest, result, type: SUCCESS }),
                    (error) => next({...rest, error, type: FAILURE })
                ).catch((error) => {
                    console.error('MIDDLEWARE ERROR:', error);
                    next({...rest, error, type: FAILURE });
                });
                return actionPromise;
            } else {
                console.log('JJJJJJJJJJJJTT2')
                const actionPromise = promise();
                actionPromise.then(
                    (result) => next({...rest, result}),
                    (error) => next({...rest, error})
                ).catch((error) => {
                    console.error('MIDDLEWARE ERROR:', error);
                    next({...rest, error, type: FAILURE });
                });
                return actionPromise;
            }
        };
    };
}
