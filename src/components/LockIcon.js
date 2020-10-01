import React from 'react';
import { BsLockFill, BsFillUnlockFill } from 'react-icons/bs';
import PropTypes from 'prop-types';

const LockIcon = ({ isOpened }) => {
  const Lock = isOpened ? BsFillUnlockFill : BsLockFill;
  return <Lock size="40" />;
};

LockIcon.propTypes = {
  isOpened: PropTypes.bool.isRequired,
};

export default LockIcon;
