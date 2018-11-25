import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { Box, Layer } from 'grommet';
import PropTypes from 'prop-types';

import { getModalIsOpenState } from '../../../modules/selectors';
import { closeModalAndClearConents } from '../../../modules/actions/modal';
import ModalContentContainer from './modal-content-container';

class CenterModal extends PureComponent {
  render() {
    const { modalIsOpen, closeModalAndClearConents } = this.props;
    console.log(modalIsOpen, 'MODAL IS OPEN');
    return (
      <Box align="start">
        {modalIsOpen && (
          <Layer
            position="center"
            full="vertical"
            modal
            onClickOutside={closeModalAndClearConents}
            onEsc={closeModalAndClearConents}
            margin="medium"
            style={{ height: '100%' }}
          >
            <ModalContentContainer
              closeModalAndClearConents={closeModalAndClearConents}
            />
          </Layer>
        )}
      </Box>
    );
  }
}

CenterModal.propTypes = {
  modalIsOpen: PropTypes.bool.isRequired,
  closeModalAndClearConents: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  modalIsOpen: getModalIsOpenState(state),
});

const mapDispatchToProps = { closeModalAndClearConents };

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CenterModal);
