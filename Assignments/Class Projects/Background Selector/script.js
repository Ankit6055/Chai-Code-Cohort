const colorPicker = document.getElementById('colorPicker');
const colorInput = document.getElementById('colorInput');
const createButton = document.getElementById('create-button');
const mainWindow = document.getElementById('mainWindow');

// Sync color inputs
colorPicker.addEventListener('input', (e) => {
    colorInput.value = e.target.value;
});

colorInput.addEventListener('input', (e) => {
    colorPicker.value = e.target.value;
});

createButton.addEventListener('click', createColorNode);

function createColorNode() {
    const color = colorInput.value || '#FFFFFF';
    
    const colorNode = document.createElement('div');
    colorNode.className = 'color-node';
    colorNode.innerHTML = `
        <span class="node-label">${color.toUpperCase()}</span>
    `;
    
    // Set dynamic colors
    colorNode.style.borderColor = color;
    colorNode.style.color = color;
    colorNode.style.boxShadow = `0 0 20px ${color}40`;
    
    // Add hover effect
    colorNode.addEventListener('mouseover', () => {
        colorNode.style.transform = 'translateY(-5px) scale(1.05)';
    });
    
    colorNode.addEventListener('mouseout', () => {
        colorNode.style.transform = 'translateY(0) scale(1)';
    });

    // Set background change action
    colorNode.addEventListener('click', () => {
        document.body.style.backgroundColor = color;
        document.body.style.transition = 'background 1s cubic-bezier(0.4, 0, 0.2, 1)';
        
        // Add temporary glow effect
        colorNode.style.boxShadow = `0 0 40px ${color}80`;
        setTimeout(() => {
            colorNode.style.boxShadow = `0 0 20px ${color}40`;
        }, 500);
    });

    mainWindow.prepend(colorNode);
    
    // Clear inputs
    colorInput.value = '';
    colorPicker.value = '#000000';
}

// Add keyboard shortcut
document.addEventListener('keypress', (e) => {
    if (e.code === 'Enter') createColorNode();
});