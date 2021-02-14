import { RoutePath } from '../interfaces';

/**
 * if your new route need container (TopBar, SideBar and Footer), put in RouterContainer
 * else, put in RouterNonContainer
 */

import { landingPageRouter } from '../views/landing-page/LandingPage.router';

// https://github.com/ReactTraining/react-router/tree/master/packages/react-router-config
export const routerContainer: RoutePath[] = [
  ...landingPageRouter,
];

export const routerNonContainer: RoutePath[] = [];
