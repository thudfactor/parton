import PropTypes from 'prop-types'

const InfoCell = ({ label, children }) => {
  return (
    <>
      <dt>{label}</dt>
      <dd>{children}</dd>
    </>
  )
}

InfoCell.propTypes = {
  label: PropTypes.string,
  children: PropTypes.node
}

export default InfoCell
