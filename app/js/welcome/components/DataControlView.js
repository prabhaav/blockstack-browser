import PropTypes from 'prop-types'
import React from 'react'

const DataControlView = (props) =>
  (
  <div>
    <h3 className="modal-heading m-t-15 p-b-10">
      On Blockstack you’ll find apps that give you control over your data
    </h3>
    <img
      role="presentation"
      src="/images/icon-a-security.svg"
      className="m-b-15 m-t-15 welcome-modal-icon"
    />
    <div className="m-t-25">
      <button className="btn btn-primary btn-block m-b-20" onClick={props.showNextView}>
        Continue
      </button>
    </div>
  </div>
 )

DataControlView.propTypes = {
  showNextView: PropTypes.func.isRequired
}

export default DataControlView
