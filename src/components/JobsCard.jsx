import { BsChevronDoubleRight } from "react-icons/bs"

const JobsCard = ({ job }) => {
  const { id, title, dates, duties, company } = job
  return (
    <article>
      <header className="job-header">
        {" "}
        <h2 className="job-title">{title}</h2>
        <span className="job-tag">{company}</span>
        <p className="job-date">{dates}</p>
      </header>
      <div className="job-info">
        {duties.map((duty, index) => {
          return (
            <div className="job-info-card" key={index}>
              <span>
                {" "}
                <BsChevronDoubleRight className="icon-chevron" />
              </span>

              <p className="job-duty">{duty}</p>
            </div>
          )
        })}
      </div>
    </article>
  )
}
export default JobsCard
