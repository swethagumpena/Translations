import { defineMessages } from 'react-intl';

export const scope = 'app.containers.HomePage';

export default defineMessages({
  header: {
    id: `${scope}.header`,
    defaultMessage: 'This is the HomePage container!',
  },
  name: {
    id: `${scope}.name`,
    defaultMessage: 'Name: {nm}',
  },
  price: {
    id: `${scope}.price`,
    defaultMessage: 'Price {pr}',
  },
  quantity: {
    id: `${scope}.quantity`,
    defaultMessage: '{count, plural, =0 {no items} one {# item} other {# items}}',
  },
});
