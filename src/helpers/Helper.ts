import _ from 'lodash';

export const camelOrPascalToSentenceCase = (value: string) => _.startCase(value || '');
