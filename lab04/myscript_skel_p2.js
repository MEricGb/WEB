const iconMoon = document.querySelector('.night');
const iconSun = document.querySelector('.day');

const body = document.body;

/**
 * Initial states of the icons
 */
iconMoon.style.display = 'block';
iconSun.style.display = 'none';

const btnMode = document.querySelector('.btn');
btnMode.addEventListener('click', () => {
    /**
     * TODO - Add/Remove the 'active' class depending on
     *        the Day/Night Mode
     * 
     *   -> the 'active' class is used to change the background
     *      when switching to Day Mode (see body.active in .css)
     * 
     * ++ - try using only one command
     */
    btnMode.addEventListener('click', () => {
        // Add/Remove the 'active' class on the body
        body.classList.toggle('active');
      
        // You can use the same 'active' class to conditionally apply styles in your CSS
      });

    /**
     * TODO - Create a function to change the text
     *        and call it (e.g. from 'Night Mode' to 'Day Mode')
     * 
     *   - you can pass any parameters to the function
     */
    const modeTextElement = document.querySelector('.day');

    function changeModeText(currentMode) {
      modeTextElement.textContent = currentMode + ' Mode';
    }
    
    changeModeText('Night');
    
    btnMode.addEventListener('click', () => {
      body.classList.toggle('active');
      const currentMode = body.classList.contains('active') ? 'Night' : 'Day';
      changeModeText(currentMode);
    });

    /**
     * TODO - Create a function to switch the icon
     * 
     * > Hint - which attribute can you change?
     */
    function switchIcon() {
        iconMoon.style.display = body.classList.contains('active') ? 'none' : 'block';
        iconSun.style.display = body.classList.contains('active') ? 'block' : 'none';
      }
      switchIcon();
      btnMode.addEventListener('click', () => {
        body.classList.toggle('active');
        switchIcon();
      });

});