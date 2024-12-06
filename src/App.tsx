import './App.css';
import { AppProvider, DashboardLayout } from '@toolpad/core';
import { Navigation } from '@toolpad/core';

const navigation: Navigation = [
    {
        segment: 'home',
        title: 'Home',
        // icon: <HomeIcon />
    },
];

function App() {
    return (
        <AppProvider navigation={navigation}>
            <DashboardLayout children={undefined}></DashboardLayout>
        </AppProvider>
    );
}

export default App;
