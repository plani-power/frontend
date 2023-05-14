export const DEFAULT_URL = 'http://localhost:3000';

const _plans = '/plans'
export const ROUTES = {
    main: {
        value: 'main',
        url: '/',
        name: 'Home',
    },
    // login: {
    // value: 'Login',
    // url: '/auth/login',
    // name: '로그인'
    // },
    // signUp: {
    // value: 'SignUp',
    // url: '/auth/signup',
    // name: '회원가입'
    // },
    plans: {
        value: 'Plans',
        url: _plans,
        name: '플랜',
        create: {
            url: `${_plans}/create`,
            name: '플랜 생성하기'
        }
    },

}