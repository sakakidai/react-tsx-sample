import { useCallback, useState } from 'react'
import axios from 'axios'

import { UserType } from 'types/user'
import { useNavigate } from 'react-router-dom'

export const useAuth = () => {
  const navigate = useNavigate()
  const [loading, setLoading] = useState(false)

  const login = useCallback(async (id: string) => {
    setLoading(true)
    try {
      const res = await axios.get<UserType>(`https://jsonplaceholder.typicode.com/users/${id}`)

      if (res.data) {
        navigate('/')
      } else {
        alert('ユーザが見つかりません')
      }
    } catch (e) {
      alert('ログインできません')
    }
    setLoading(false)
  }, [])

  return { login, loading }
}
