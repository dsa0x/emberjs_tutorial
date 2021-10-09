import RestAdapter from '@ember-data/adapter/rest';

export default class ApplicationAdapter extends RestAdapter {
  namespace = 'api';
  buildURL(...args) {
    return `${super.buildURL(...args)}.json`;
  }
}
