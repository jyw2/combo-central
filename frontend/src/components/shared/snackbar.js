import { useTheme } from '@emotion/react';
import CloseIcon from '@mui/icons-material/Close';
import IconButton from '@mui/material/IconButton';
import Snackbar from '@mui/material/Snackbar';
import * as React from 'react';

export default function SimpleSnackbar(props) {
    const theme = useTheme()
    const { message, open, setOpen } = props

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }

        setOpen(false);
    };

    const action = (
        <React.Fragment>
            <IconButton
                size="small"
                aria-label="close"
                color={theme.palette.text.primary}
                onClick={handleClose}
            >
                <CloseIcon fontSize="small"  />
            </IconButton>
        </React.Fragment>
    );

    return (
        <Snackbar
            open={open}
            autoHideDuration={1000}
            onClose={handleClose}
            message={message}
            action={action}
            anchorOrigin={{ vertical: "top", horizontal: "center" }}
            ContentProps={{ style: { color: theme.palette.text.primary, backgroundColor: theme.palette.anchor.dark, border: `1px solid ${theme.palette.anchor.medium}` } }}
        />
    );
}