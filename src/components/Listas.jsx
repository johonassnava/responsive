import React from "react";
import {List, ListItem, ListItemIcon, ListItemText, Divider, } from '@mui/material';
import AgricultureIcon from '@mui/icons-material/Agriculture';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import AnchorIcon from '@mui/icons-material/Anchor';

const Listas = () => {
    return(
        <div>
            <List component='nav'>
                <ListItem button>
                    <ListItemIcon>
                        <AgricultureIcon />
                    </ListItemIcon>
                    <ListItemText primary='Mi primer elemento' />
                </ListItem>

                <ListItem button>
                    <ListItemIcon>
                        <AddShoppingCartIcon />
                    </ListItemIcon>
                    <ListItemText primary='Mi segundo elemento' />
                </ListItem>

                <ListItem button>
                    <ListItemIcon>
                        <AnchorIcon />
                    </ListItemIcon>
                    <ListItemText primary='Mi tercer elemento' />
                </ListItem>

                <Divider />

            </List>
        </div>
    )
}

export default Listas