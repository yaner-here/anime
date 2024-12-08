import './App.css';
import { AppProvider, DashboardLayout } from '@toolpad/core';
import { Navigation } from '@toolpad/core';
import { Box, Typography } from '@mui/material';
import { useDemoRouter } from '@toolpad/core/internal';
import { Home, Settings } from '@mui/icons-material';
import { useTranslation } from 'react-i18next';

function App() {
    const { t } = useTranslation();
    const navigation: Navigation = [
        {
            segment: 'home',
            title: t('Home'),
            icon: <Home />,
        },
        {
            segment: 'setting',
            title: t('Setting'),
            icon: <Settings />,
        },
    ];
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
                    <Typography>
                        {t('Setting')} {router.pathname}
                    </Typography>
                </Box>
            </DashboardLayout>
        </AppProvider>
    );
}

export default App;
