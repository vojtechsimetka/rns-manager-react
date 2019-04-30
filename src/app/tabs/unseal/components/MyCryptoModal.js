import React from 'react';
import { Modal } from 'react-bootstrap';
import { keccak256 as sha3 } from 'js-sha3';

export const MyCryptoModal = props => {
  const { showMyCrypto, changeShowMyCrypto, name, value, salt } = props;

  return (
    <Modal size='lg' show={showMyCrypto} onHide={changeShowMyCrypto}>
      <Modal.Header closeButton>
        <h3>Unseal bid for <code>{name}</code> on MyCrypto</h3>
      </Modal.Header>
      <Modal.Body>
        <ol>
          <li>Go to My Crypto contract interaction on your <a target='_blank' href='https://mycrypto.com/contracts/interact' className='modal-link' rel='noopener noreferrer'>browser</a> or native app.</li>
          <li>Select <b>RSK MainNet</b> network on the top right selector.</li>
          <li>Select <b>RNS Registrar</b> contract on <i>Existing Contract</i> selector.</li>
          <li>Access!</li>
          <li>On <i>Read / Write Contract</i> select <b>unsealBid</b></li>
          <li>
              <div>
                Copy and paste this hash on <i>_hash bytes32</i>
              </div>
              <code>0x{sha3(props.name.split('.')[0])}</code>
          </li>
          <li>
              <div>
                Copy and paste this hash on <i>_value uint256</i>
              </div>
              <code>{value * 10**18}</code>
          </li>
          <li>
              <div>
                Copy and paste this hash on <i>_salt bytes32</i>
              </div>
              <code>{salt}</code>
          </li>
          <li>Choose your checkout method.</li>
          <li>Check the gas according to <a href='https://stats.rsk.co/' target='_blank' rel='noopener noreferrer'>RSK stats</a>.</li>
          <li>Write!</li>
        </ol>
      </Modal.Body>
    </Modal>
  );
};
