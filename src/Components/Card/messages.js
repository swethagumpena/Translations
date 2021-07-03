import { defineMessages } from 'react-intl';

export const scope = 'app.component.Card';

export default defineMessages({
  name: {
    id: `${scope}.name`,
    defaultMessage: 'Product: {nm}',
  },
  price: {
    id: `${scope}.price`,
    defaultMessage: 'Unit price: ',
  },
  quantity: {
    id: `${scope}.quantity`,
    defaultMessage: '{count, plural, =0 {no items} one {# item} other {# items}}',
  },
});
