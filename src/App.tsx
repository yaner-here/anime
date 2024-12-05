import { useRef } from 'react';

import { DefaultFontStyle, Editor, Tldraw } from 'tldraw';
import 'tldraw/tldraw.css';

import './App.css';

DefaultFontStyle.setDefaultValue('mono');

function App() {
    const isMounted = useRef(false);
    const handleMount = (editor: Editor) => {
        if (isMounted.current === true) {
            return;
        }
        isMounted.current = true;
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
                inferDarkMode
            />
        </div>
    );
}

export default App;
