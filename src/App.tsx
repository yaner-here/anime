import { Editor, Tldraw } from 'tldraw';
import 'tldraw/tldraw.css';

import './App.css';

function App() {
    const handleMount = (editor: Editor) => {
        editor.createShape({
            type: 'text',
            x: 200,
            y: 200,
            props: {
                text: 'Hello, world!',
            },
        });
        alert('Welcome. handleMount() is called.');
    };
    return (
        <div style={{ position: 'fixed', inset: 0 }}>
            <Tldraw
                persistenceKey="main"
                onMount={handleMount}
                assetUrls={{
                    fonts: {
                        monospace: 'src/assets/fonts/CascadiaCodeNF.ttf',
                    },
                }}
            />
        </div>
    );
}

export default App;
