document.addEventListener('DOMContentLoaded', function() {

    const dynamicText = document.getElementById('dynamic-text');
    const changeTextBtn = document.getElementById('change-text-btn');
    

    const textOptions = [
        "This text will change when you click the button below.",
        "JavaScript makes web pages interactive!",
        "DOM manipulation is powerful.",
        "You can dynamically update content on the page.",
        "No page refresh needed for these changes!"
    ];
    
    let currentTextIndex = 0;
    
    changeTextBtn.addEventListener('click', function() {
   
        currentTextIndex = (currentTextIndex + 1) % textOptions.length;
        
        
        dynamicText.textContent = textOptions[currentTextIndex];
    });

    const lightThemeBtn = document.getElementById('light-theme-btn');
    const darkThemeBtn = document.getElementById('dark-theme-btn');
    const colorfulThemeBtn = document.getElementById('colorful-theme-btn');
    const body = document.body;
    
    lightThemeBtn.addEventListener('click', function() {
        body.style.backgroundColor = '#ffffff';
        body.style.color = '#333333';
        updateBoxStyles('#f9f9f9', '#333333', '#4CAF50');
    });
    
    darkThemeBtn.addEventListener('click', function() {
        body.style.backgroundColor = '#333333';
        body.style.color = '#ffffff';
        updateBoxStyles('#444444', '#ffffff', '#66bb6a');
    });
    
    colorfulThemeBtn.addEventListener('click', function() {
        body.style.backgroundColor = '#f0f8ff';
        body.style.color = '#333333';
        updateBoxStyles('#e6f7ff', '#333333', '#ff7043');
    });
    
    function updateBoxStyles(bgColor, textColor, accentColor) {
        const contentBoxes = document.querySelectorAll('.content-box');
        contentBoxes.forEach(box => {
            box.style.backgroundColor = bgColor;
            box.style.color = textColor;
            box.style.borderColor = accentColor;
        });
        
        const buttons = document.querySelectorAll('button');
        buttons.forEach(button => {
            button.style.backgroundColor = accentColor;
        });
    }
    
    const dynamicList = document.getElementById('dynamic-list');
    const addItemBtn = document.getElementById('add-item-btn');
    const removeItemBtn = document.getElementById('remove-item-btn');
    
    let itemCount = 0;
    
    addItemBtn.addEventListener('click', function() {
 
        const newItem = document.createElement('li');
        itemCount++;
        newItem.textContent = `Dynamic Item ${itemCount}`;
        newItem.className = 'dynamic-element';
        
  
        dynamicList.appendChild(newItem);
    });
    
    removeItemBtn.addEventListener('click', function() {
        const items = dynamicList.querySelectorAll('li');
        if (items.length > 0) {
            const lastItem = items[items.length - 1];
            
      
            dynamicList.removeChild(lastItem);
        }
    });
    
    for (let i = 1; i <= 3; i++) {
        const initialItem = document.createElement('li');
        itemCount = i;
        initialItem.textContent = `Dynamic Item ${i}`;
        initialItem.className = 'dynamic-element';
        dynamicList.appendChild(initialItem);
    }
});