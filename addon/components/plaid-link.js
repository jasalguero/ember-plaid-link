/* global Plaid */

import Component from "@ember/component";

const OPTIONS = [
  "clientName",
  "env",
  "key",
  "product",
  "webhook",
  "token",
  "countryCodes",
  "language",
  "linkCustomizationName",
  "isWebView",
  "paymentToken",
  "oauthNonce",
  "oauthStateId",
  "oauthRedirectUri",
];
const DEFAULT_LABEL = "Link Bank Account";

export default Component.extend({
  tagName: "button",
  type: "button",

  // Plaid event callbacks
  onSuccess() {},
  onOpen() {},
  onLoad() {},
  onExit() {},
  onError() {},
  onEvent() {},

  // Link Parameters to pass into component via config file
  // Complete documentation: https://plaid.com/docs/api/#parameter-reference
  clientName: null,
  env: null,
  key: null,
  product: null,
  webhook: null,
  token: null,

  attributeBindings: ["type"],
  apiVersion: "v2",

  label: DEFAULT_LABEL,
  institution: null,
  selectAccount: null,

  _link: null,

  init() {
    this._super(arguments);

    const options = Object.assign(this.getProperties(OPTIONS), {
      onLoad: this._onLoad.bind(this),
      onSuccess: this._onSuccess.bind(this),
      onExit: this._onExit.bind(this),
      onOpen: this._onOpen.bind(this),
      onEvent: this._onEvent.bind(this),
      onError: this._onError.bind(this),
    });

    this._link = Plaid.create(options);
  },

  click() {
    this._link.open(this.get("institution"));
  },

  _onSuccess(token, meta) {
    this.onSuccess(token, meta);
  },

  _onCancel(error, meta) {
    this.onCancel(error, meta);
  },

  _onLoad(error, meta) {
    this.onLoad(error, meta);
  },

  _onExit(error, meta) {
    this.onExit(error, meta);
  },

  _onOpen(error, meta) {
    this.onOpen(error, meta);
  },

  _onEvent(error, meta) {
    this.onEvent(error, meta);
  },

  _onError(error, meta) {
    this.onError(error, meta);
  },
});
