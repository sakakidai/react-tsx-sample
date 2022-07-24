import { useState, useCallback } from 'react'
import axios from 'axios'

import { UserType } from 'types/user'

export const useAllUsers = () => {
  const [loading, setLoading] = useState(false)
  const [users, setUsers] = useState<Array<UserType>>([])

  const getUsers = useCallback(async () => {
    setLoading(true)
    try {
      const res = await axios.get<Array<UserType>>('https://jsonplaceholder.typicode.com/users')
      setUsers(res.data)
    } catch (e) {
      console.log(e)
    }
    setLoading(false)
  }, [])

  return { getUsers, users, loading }
}
