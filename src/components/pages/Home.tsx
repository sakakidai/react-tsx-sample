import { SeachInput } from 'components/molecules/SerchInput'
import { UserCard } from 'components/organisms/user/UserCard'

const user = {
  name: 'さかき',
  email: 'sakakiddddddddddd@example.com',
  phone: '090-1111-2222',
  image: 'https://source.unsplash.com/7iSl3XkJkDM',
  website: 'https://google.com',
  company: {
    name: '株式会社サムブーク',
  },
}

export const Home = () => {
  return (
    <div>
      <SeachInput />
      <UserCard user={user} />
    </div>
  )
}
