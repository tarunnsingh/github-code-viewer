import React, { useEffect, useState } from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import { dark } from 'react-syntax-highlighter/dist/esm/styles/prism';
import {CopyToClipboard} from 'react-copy-to-clipboard';

export default (props) => {
    const [language, setLanguage] = useState("cpp");
    const [code, setCode] = useState(null);
    const [codeStyle, setCodeStyle] = useState(dark);
    const [codeStyleName, setCodeStyleName] = useState('Light');
    const [showLineNos, setShowLineNos] = useState(false);
    const [showLineNosName, setShowLineNosName] = useState('Show');
    const [copied, setCopied] = useState(false);

    const switchStyle = function(){
        setCodeStyle(codeStyle === dark ? docco : dark); 
        setCodeStyleName(codeStyleName === 'Light' ? 'Dark' : 'Light');
    }

    const switchLineNoVisibility = function() {
        setShowLineNos(!showLineNos);
        setShowLineNosName(showLineNosName === 'Show' ? 'Hide' : 'Show');
    }

    useEffect(()=>{
        setCode(props.code); 
    }, [props.code])

    return(
        <div>
            <button onClick={switchStyle}>{codeStyleName} Theme</button>
            <button onClick={switchLineNoVisibility}>{showLineNosName} Line Numbers</button>
            <CopyToClipboard text={code} onCopy={() => setCopied(true)}>
            <button>COPY Code</button>
            </CopyToClipboard>
            {code ? 
        <SyntaxHighlighter language={language} style={codeStyle} showLineNumbers={showLineNos}>
            {code}
        </SyntaxHighlighter> : null }
        </div>
    )

}