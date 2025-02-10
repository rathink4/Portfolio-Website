import './label.scss'

const Label = ({labelName}) => {
  return (
    <div className='label'>
        <h3>{labelName}</h3>
    </div>
  )
}

export default Label