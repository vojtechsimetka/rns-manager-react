import {
  REQUEST_START_AUCTION, RECEIVE_START_AUCTION, ERROR_START_AUCTION
 } from './types';

export const requestStartAuction = () => ({
  type: REQUEST_START_AUCTION,
});

export const receiveStartAuction = response => ({
  type: RECEIVE_START_AUCTION,
  response
});

export const errorStartAuction = error => ({
  type: ERROR_START_AUCTION,
  error
});