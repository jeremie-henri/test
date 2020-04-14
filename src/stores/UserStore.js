import { extendObservable } from 'mobx';

/**
 * UserStore
 */

class UserStore{
    constructor() {
        extendObservable(this, {
            loading: true,
            isLoggedIn: false,
            username: '',
            black: null,
            white: null
        })
    }
}

export default new UserStore();