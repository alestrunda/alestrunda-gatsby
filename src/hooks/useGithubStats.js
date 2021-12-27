import { useEffect, useRef, useState } from "react"
import { GITHUB_API_URL } from "../constants"

export default function useGithubStats() {
  const [error, setError] = useState()
  const [loading, setLoading] = useState(true)
  const [stats, setStats] = useState({})
  const isUnmounted = useRef()

  useEffect(() => {
    fetch(`${GITHUB_API_URL}/commits`)
      .then((response) => response.json())
      .then((response) => {
        if (isUnmounted.current) return
        setStats(response)
      })
      .catch((e) => {
        setError(e)
        console.error(e)
      })
      .finally(() => {
        if (isUnmounted.current) return
        setLoading(false)
      })
    return () => {
      isUnmounted.current = true
    }
  }, [])

  return { error, loading, stats }
}
