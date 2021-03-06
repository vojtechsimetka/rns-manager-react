import { SHOW_AUTH_MODAL, CLOSE_AUTH_MODAL, RECEIVE_HAS_METAMASK, REQUEST_ENABLE, RECEIVE_ENABLE, REQUEST_LOGIN, RECEIVE_LOGIN, ERROR_LOGIN, ERROR_ENABLE, LOG_OUT } from './types';

export const showModal = name => ({
  type: SHOW_AUTH_MODAL,
  name
});

export const closeModal = () => ({
  type: CLOSE_AUTH_MODAL
});

export const receiveHasMetamask = value => ({
  type: RECEIVE_HAS_METAMASK,
  value
});

export const requestEnable = () => ({
  type: REQUEST_ENABLE
});

export const receiveEnable = (address, network) => ({
  type: RECEIVE_ENABLE,
  address,
  network
});

export const errorEnable = message => ({
  type: ERROR_ENABLE,
  message
});

export const requestLogin = () => ({
  type: REQUEST_LOGIN
});

export const receiveLogin = (name, isOwner) => ({
  type: RECEIVE_LOGIN,
  name,
  isOwner
});

export const errorLogin = message => ({
  type: ERROR_LOGIN,
  message
});

export const logOut = () => ({
  type: LOG_OUT
});
