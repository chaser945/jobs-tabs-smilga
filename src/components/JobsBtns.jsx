const JobsBtns = ({ jobsBtns, setIndexValue, indexValue }) => {
  return (
    <div className="job-btn-container">
      {jobsBtns.map((jobBtn, index) => {
        return (
          <button
            className={`job-btn ${index === indexValue && "is-active"} `}
            onClick={() => setIndexValue(index)}
            key={index}
          >
            {jobBtn}
          </button>
        )
      })}
    </div>
  )
}
export default JobsBtns
