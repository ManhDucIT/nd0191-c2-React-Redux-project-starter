import { redirect } from 'react-router-dom';
import store from '../store/index';
import { delay } from '../utils/helpers';

export const CheckAuthLoader = async () => {
    const isAuthenticated = store.getState().auth.isAuthenticated;

    if(!isAuthenticated){
        const redirectUrl = window.location.href
            .toString()
            .split(window.location.host)[1];

        let url = redirectUrl === "/" ? "/login" : `/login?redirectTo=${redirectUrl}`;
        
        await delay(500);

        return redirect(url);
    }

    return null;
}