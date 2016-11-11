export default function clientMiddleware(client) {
    return ({ dispatch, getState }) => {
        return next => action => {
            if (typeof action === 'function') {
                  return action(dispatch, getState);
            }
            console.log("ssssssssssssss")
            console.log(action)
            console.log("GGGGGGGGWWWWWW")
            const { promise, types, ...rest } = action; // eslint-disable-line no-redeclare
            if (!promise) {
                return next(action);
            }
            if (!!types) {
                console.log('JJJJJJJJJJJJGG  ' + types)
                const [REQUEST, SUCCESS, FAILURE] = types;
                next({...rest, type: REQUEST });
                const actionPromise = promise(client);
                actionPromise.then(
                    (result) => next({...rest, result, type: SUCCESS }),
                    (error) => next({...rest, error, type: FAILURE })
                ).catch((error) => {
                    next({...rest, error, type: FAILURE });
                });
                return actionPromise;
            } else {
                const actionPromise = promise();
                actionPromise.then(
                    (result) => next({...rest, result}),
                    (error) => next({...rest, error})
                ).catch((error) => {
                    next({...rest, error, type: FAILURE });
                });
                return actionPromise;
            }
        };
    };
}
