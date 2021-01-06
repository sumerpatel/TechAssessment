import { getActiveRoute } from './getActiveRoutes';

/**
 * This function will be called on every route change in app and will trigger the page load event
 * with currentScreen name and pageData if available in route params.
 * @param { store } store - current store object
 * @param { context } context - context object
 */
export function getOnNavigationStateChange({ store, context }) {
  return {
    onNavigationStateChange: (prevState, currentState, action) => {
      const currentScreen = getActiveRoute(currentState);
      const prevScreen = getActiveRoute(prevState);
      if (prevScreen.routeName !== currentScreen.routeName) {
      }
    },
  };
}
