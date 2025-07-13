        function changeColor() {
            const root = document.documentElement;
            const colors = ['#4caf50', '#00bcd4', '#ff6347', '#8e44ad', '#f39c12'];
            const current = getComputedStyle(root).getPropertyValue('--accent').trim();
            const next = colors[(colors.indexOf(current) + 1) % colors.length];
            root.style.setProperty('--accent', next);
        }