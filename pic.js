        const images = [
            'images/1.png',
            'images/2.png'
        ];
        
        let currentIndex = 0;
        
        function changeBackground() {
            document.body.style.backgroundImage = `url('${images[currentIndex]}')`;
            currentIndex = (currentIndex + 1) % images.length;
        }
        
        // 初期設定
        changeBackground();
        
        // 6秒ごとに切り替え
        setInterval(changeBackground, 6000);
