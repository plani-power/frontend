export const DEFAULT_URL = 'http://localhost:3000';

const _plans = '/plans';
const DEFAULT_TITLE = '플래니';

type TRoute = {
    value: string,
    url: string,
    name: string
} & object | null
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

export const getPageTitle = (path : string, object : object = ROUTES) => {

    let pageTitle = DEFAULT_TITLE;
    Object.entries(object).forEach(([key, value])=>{
        console.log({key, value})
        console.log(value.url === path)
        if(value.url === undefined) {
            console.log({value})
        }
        if(value.url === path) {
            pageTitle = value.name === 'HOME' ? DEFAULT_TITLE : value.name;
            return value.name ?? DEFAULT_TITLE;
        } else if(value.url?.includes(path) && Object.keys(value).length > 3) {
            getPageTitle(path, value);
        }
    })
    return pageTitle;
}
