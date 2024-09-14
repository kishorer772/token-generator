export const formFields = [
  {
    label: 'Blue Prefix',
    name: 'blue.prefix',
    validations: {
      required: 'Blue Token Prefix Required',
    },
  },
  {
    label: 'Blue Token Length',
    name: 'blue.length',
    validations: {
      required: 'Blue Token Length Required',
      pattern: {
        value: /^[0-9]+$/,
        message: 'Blue Token Length should be a number',
      },
    },
  },
  {
    label: 'Blue Token Per Row',
    name: 'blue.perRow',
    validations: {
      required: 'Blue Token Per Row Required',
      pattern: {
        value: /^[0-9]+$/,
        message: 'Blue Token Length should be a number',
      },
    },
  },
  {
    label: 'Red Prefix',
    name: 'red.prefix',
    validations: {
      required: 'Red Token Prefix Required',
    },
  },
  {
    label: 'Red Token Length',
    name: 'red.length',
    validations: {
      required: 'Red Token Length Required',
      pattern: {
        value: /^[0-9]+$/,
        message: 'Blue Token Length should be a number',
      },
    },
  },
  {
    label: 'Red Token Per Row',
    name: 'red.perRow',
    validations: {
      required: 'Red Token Per Row Required',
      pattern: {
        value: /^[0-9]+$/,
        message: 'Blue Token Length should be a number',
      },
    },
  },
];
