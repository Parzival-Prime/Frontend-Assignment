import React from 'react'

function Grid() {
    return (
        <div style={{ display: 'grid', gridTemplateColumns: '6px 2fr', gap: '1px', position: 'absolute', top: '5.5rem', left: '11px' }}>
            <div style={{backgroundColor: '#55555f', height: '6px', width: '6px'}}></div>
            <div style={{backgroundColor: '#55555f', height: '6px', width: '6px'}}></div>
            <div style={{backgroundColor: '#55555f', height: '6px', width: '6px'}}></div>
            <div style={{backgroundColor: '#55555f', height: '6px', width: '6px'}}></div>
            <div style={{backgroundColor: '#55555f', height: '6px', width: '6px'}}></div>
            <div style={{backgroundColor: '#55555f', height: '6px', width: '6px'}}></div>
        </div>
    )
}

export default Grid
