import { memo } from 'react'

import { Box, Drawer, List, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material'
import InboxIcon from '@mui/icons-material/Inbox'

type Props = {
  isOpenDrawer: boolean
  onClose: () => void
  onClickHome: () => void
  onClickUsers: () => void
  onClickSettings: () => void
}

export const MenuDrawer = memo((props: Props) => {
  const { isOpenDrawer, onClose, onClickHome, onClickUsers, onClickSettings } = props

  const menuItemList = [
    { text: 'TOP', navigate: onClickHome },
    { text: 'ユーザー一覧', navigate: onClickUsers },
    { text: '設定', navigate: onClickSettings },
  ]
  return (
    <Drawer anchor="right" open={isOpenDrawer} onClose={onClose}>
      <Box sx={{ width: 250 }} onClick={onClose}>
        <List>
          {menuItemList.map((item) => {
            return (
              <ListItem key={item.text} disablePadding>
                <ListItemButton onClick={item.navigate}>
                  <ListItemIcon>
                    <InboxIcon />
                  </ListItemIcon>
                  <ListItemText primary={item.text} />
                </ListItemButton>
              </ListItem>
            )
          })}
        </List>
      </Box>
    </Drawer>
  )
})
