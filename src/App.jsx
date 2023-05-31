import { useEffect } from "react"
import { useState } from "react"
import JobsBtns from "./components/JobsBtns"
import JobsCard from "./components/JobsCard"

const url = "https://course-api.com/react-tabs-project"

const App = () => {
  const [loading, isLoading] = useState(true)
  const [jobs, setJobs] = useState([])
  const [error, isError] = useState(false)
  const [indexValue, setIndexValue] = useState(0)

  const fetchJobs = async () => {
    try {
      const response = await fetch(url)
      const data = await response.json()
      setJobs(data)
      isLoading(false)
    } catch (error) {
      isError(true)
      console.log(error)
      isLoading(false)
    }
  }

  useEffect(() => {
    fetchJobs()
  }, [])

  const jobsBtns = jobs.map((job) => job.company)

  if (loading) {
    return (
      <section>
        <h1>Loading...</h1>
      </section>
    )
  }

  if (error) {
    return (
      <section>
        <h1>There was an error.</h1>
      </section>
    )
  }

  return (
    <main>
      <section className="jobs-container">
        <header className="jobs-header">
          <h1 className="title">Jobs portfolio</h1>
          <div className="underline"></div>
        </header>
        <div className="jobs-content">
          <JobsBtns
            jobsBtns={jobsBtns}
            setIndexValue={setIndexValue}
            indexValue={indexValue}
          />
          <JobsCard job={jobs[indexValue]} />
        </div>
      </section>
    </main>
  )
}
export default App
