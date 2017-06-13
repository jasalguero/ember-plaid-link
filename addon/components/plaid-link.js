import Ember from 'ember';

const OPTIONS = ['clientName', 'product', 'key', 'env', 'webhook', 'longtail', 'selectAccount', 'token', 'apiVersion'];
const DEFAULT_LABEL = 'Link Bank Account';
const {get} = Ember;

export default Ember.Component.extend({
  tagName: 'button',
  type: 'button',
  onSuccess: Ember.K(),
  onCancel: Ember.K(),
  attributeBindings: ['type'],
  apiVersion: 'v2',

  label: DEFAULT_LABEL,
  institution: null,
  clientName: null,
  product: null,
  key: null,
  env: null,
  webhook: null,
  selectAccount: null,
  token: null,

  _link: null,

  _open: Ember.on('click', function() {
    this._link.open(this.get('institution'));
  }),

  _setup: Ember.on('init', function() {
    const options = Ember.merge(this.getProperties(OPTIONS), {
      onSuccess: this._onSuccess.bind(this)
    });

    this._link = Plaid.create(options);
  }),

  _onSuccess: function(token, meta) {
    get(this, 'onSuccess')(token, meta);
  },

  _onCancel: function(error, meta) {
    get(this, 'onCancel')(error, meta);
  }
});
