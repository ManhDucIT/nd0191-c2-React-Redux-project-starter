import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router';
import { render } from '@testing-library/react';
import store from "../store/index";
import Leaderboard from '../screens/LeaderboardScreen';

describe("Leaderboard", () => {
    it("Should render a snapshot for Leaderboard screen", async () => {
        const component = render(
            <MemoryRouter>
                <Provider store={store}>
                    <Leaderboard />
                </Provider>
            </MemoryRouter>
        );

        expect(component).toMatchSnapshot();
    });
});