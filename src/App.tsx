import './App.css';
import { AppProvider, DashboardLayout } from '@toolpad/core';
import { Navigation } from '@toolpad/core';
import { Box, Typography } from '@mui/material';
import { useDemoRouter } from '@toolpad/core/internal';
import { Home, Settings } from '@mui/icons-material';

const navigation: Navigation = [
    {
        segment: 'home',
        title: 'Home',
        icon: <Home />,
    },
    {
        segment: 'setting',
        title: 'Setting',
        icon: <Settings />,
    },
];

function App() {
    const router = useDemoRouter('/home');
    return (
        <AppProvider
            navigation={navigation}
            branding={{
                logo: <img src="https://mui.com/static/logo.png" />,
                title: 'Panel',
            }}
            router={router}
        >
            <DashboardLayout>
                <Box>
                    <Typography>{router.pathname}</Typography>
                </Box>
            </DashboardLayout>
        </AppProvider>
    );
}

export default App;
