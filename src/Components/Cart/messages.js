import { defineMessages } from 'react-intl';

export const scope = 'app.components.Cart';

export default defineMessages({
  header: {
    id: `${scope}.header`,
    defaultMessage: 'This is the Cart component!',
  },
  quantity: {
    id: `${scope}.quantity`,
    defaultMessage: 'Cart: {count, plural, =0 {# items} one {# item} other {# items}}',
  },
});
