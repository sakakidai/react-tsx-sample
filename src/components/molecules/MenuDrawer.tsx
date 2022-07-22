import { memo } from 'react'
import { Box, Drawer, List, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material'
import InboxIcon from '@mui/icons-material/Inbox'

type Props = {
  onClose: () => void
  isOpenDrawer: boolean
}

export const MenuDrawer = memo((props: Props) => {
  const { isOpenDrawer, onClose } = props
  return (
    <Drawer anchor="right" open={isOpenDrawer} onClose={onClose}>
      <Box sx={{ width: 250 }} onClick={onClose}>
        <List>
          {['TOP', 'ユーザー一覧', '設定'].map((text) => {
            return (
              <ListItem key={text} disablePadding>
                <ListItemButton>
                  <ListItemIcon>
                    <InboxIcon />
                  </ListItemIcon>
                  <ListItemText primary={text} />
                </ListItemButton>
              </ListItem>
            )
          })}
        </List>
      </Box>
    </Drawer>
  )
})
