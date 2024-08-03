import Cookies from 'js-cookie';

export class GetData {
    static GetEmailInjectorCookie() {
        return Cookies.get('emInjector');
    }

    static GetPasswordInjectorCookie() {
        return Cookies.get('psInjector');
    }

    static GetInjectorCookie() {
        return Cookies.get('injector');
    }
}

export class SetData { 
    static setInjectorCookie(value: string) { 
        Cookies.set('injector', value);
    }

    static SetPasswordInjectorCookie(value: string) { 
        Cookies.set('psInjector', value);
    }

    static SetEmailInjectorCookie(value: string) { 
        Cookies.set('emInjector', value);
    }
}